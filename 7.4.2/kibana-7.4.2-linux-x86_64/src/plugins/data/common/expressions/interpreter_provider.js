"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpreterProvider = interpreterProvider;
Object.defineProperty(exports, "createError", {
  enumerable: true,
  get: function () {
    return _create_error.createError;
  }
});

var _lodash = require("lodash");

var _common = require("@kbn/interpreter/common");

var _create_error = require("./create_error");

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-ignore
function interpreterProvider(config) {
  const {
    functions,
    types
  } = config;
  const handlers = { ...config.handlers,
    types
  };
  const cast = (0, _common.castProvider)(types);
  return interpret;

  async function interpret(node, context = null) {
    switch ((0, _common.getType)(node)) {
      case 'expression':
        return invokeChain(node.chain, context);

      case 'string':
      case 'number':
      case 'null':
      case 'boolean':
        return node;

      default:
        throw new Error(`Unknown AST object: ${JSON.stringify(node)}`);
    }
  }

  async function invokeChain(chainArr, context) {
    if (!chainArr.length) return Promise.resolve(context); // if execution was aborted return error

    if (handlers.abortSignal && handlers.abortSignal.aborted) {
      return (0, _create_error.createError)({
        message: 'The expression was aborted.',
        name: 'AbortError'
      });
    }

    const chain = (0, _lodash.clone)(chainArr);
    const link = chain.shift(); // Every thing in the chain will always be a function right?

    const {
      function: fnName,
      arguments: fnArgs
    } = link;
    const fnDef = (0, _common.getByAlias)(functions, fnName);

    if (!fnDef) {
      return (0, _create_error.createError)({
        message: `Function ${fnName} could not be found.`
      });
    }

    try {
      // Resolve arguments before passing to function
      // resolveArgs returns an object because the arguments themselves might
      // actually have a 'then' function which would be treated as a promise
      const {
        resolvedArgs
      } = await resolveArgs(fnDef, context, fnArgs);
      const newContext = await invokeFunction(fnDef, context, resolvedArgs); // if something failed, just return the failure

      if ((0, _common.getType)(newContext) === 'error') return newContext; // Continue re-invoking chain until it's empty

      return invokeChain(chain, newContext);
    } catch (e) {
      // Everything that throws from a function will hit this
      // The interpreter should *never* fail. It should always return a `{type: error}` on failure
      e.message = `[${fnName}] > ${e.message}`;
      return (0, _create_error.createError)(e);
    }
  }

  async function invokeFunction(fnDef, context, args) {
    // Check function input.
    const acceptableContext = cast(context, fnDef.context.types);
    const fnOutput = await fnDef.fn(acceptableContext, args, handlers); // Validate that the function returned the type it said it would.
    // This isn't really required, but it keeps function developers honest.

    const returnType = (0, _common.getType)(fnOutput);
    const expectedType = fnDef.type;

    if (expectedType && returnType !== expectedType) {
      throw new Error(`Function '${fnDef.name}' should return '${expectedType}',` + ` actually returned '${returnType}'`);
    } // Validate the function output against the type definition's validate function


    const type = handlers.types[fnDef.type];

    if (type && type.validate) {
      try {
        type.validate(fnOutput);
      } catch (e) {
        throw new Error(`Output of '${fnDef.name}' is not a valid type '${fnDef.type}': ${e}`);
      }
    }

    return fnOutput;
  } // Processes the multi-valued AST argument values into arguments that can be passed to the function


  async function resolveArgs(fnDef, context, argAsts) {
    const argDefs = fnDef.args; // Use the non-alias name from the argument definition

    const dealiasedArgAsts = (0, _lodash.reduce)(argAsts, (acc, argAst, argName) => {
      const argDef = (0, _common.getByAlias)(argDefs, argName); // TODO: Implement a system to allow for undeclared arguments

      if (!argDef) {
        throw new Error(`Unknown argument '${argName}' passed to function '${fnDef.name}'`);
      }

      acc[argDef.name] = (acc[argDef.name] || []).concat(argAst);
      return acc;
    }, {}); // Check for missing required arguments

    (0, _lodash.each)(argDefs, argDef => {
      const {
        aliases,
        default: argDefault,
        name: argName,
        required
      } = argDef;

      if (typeof argDefault === 'undefined' && required && typeof dealiasedArgAsts[argName] === 'undefined') {
        if (aliases.length === 0) {
          throw new Error(`${fnDef.name} requires an argument`);
        } else {
          const errorArg = argName === '_' ? aliases[0] : argName; // use an alias if _ is the missing arg

          throw new Error(`${fnDef.name} requires an "${errorArg}" argument`);
        }
      }
    }); // Fill in default values from argument definition

    const argAstsWithDefaults = (0, _lodash.reduce)(argDefs, (acc, argDef, argName) => {
      if (typeof acc[argName] === 'undefined' && typeof argDef.default !== 'undefined') {
        acc[argName] = [(0, _common.fromExpression)(argDef.default, 'argument')];
      }

      return acc;
    }, dealiasedArgAsts); // Create the functions to resolve the argument ASTs into values
    // These are what are passed to the actual functions if you opt out of resolving

    const resolveArgFns = (0, _lodash.mapValues)(argAstsWithDefaults, (asts, argName) => {
      return asts.map(item => {
        return async (ctx = context) => {
          const newContext = await interpret(item, ctx); // This is why when any sub-expression errors, the entire thing errors

          if ((0, _common.getType)(newContext) === 'error') throw newContext.error;
          return cast(newContext, argDefs[argName].types);
        };
      });
    });
    const argNames = (0, _lodash.keys)(resolveArgFns); // Actually resolve unless the argument definition says not to

    const resolvedArgValues = await Promise.all(argNames.map(argName => {
      const interpretFns = resolveArgFns[argName];
      if (!argDefs[argName].resolve) return interpretFns;
      return Promise.all(interpretFns.map(fn => fn()));
    }));
    const resolvedMultiArgs = (0, _lodash.zipObject)(argNames, resolvedArgValues); // Just return the last unless the argument definition allows multiple

    const resolvedArgs = (0, _lodash.mapValues)(resolvedMultiArgs, (argValues, argName) => {
      if (argDefs[argName].multi) return argValues;
      return (0, _lodash.last)(argValues);
    }); // Return an object here because the arguments themselves might actually have a 'then'
    // function which would be treated as a promise

    return {
      resolvedArgs
    };
  }
}