"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variableSet = void 0;

var _i18n = require("@kbn/i18n");

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
const variableSet = {
  name: 'var_set',
  help: _i18n.i18n.translate('expressions.functions.varset.help', {
    defaultMessage: 'Updates the Kibana global context.'
  }),
  args: {
    name: {
      types: ['string'],
      aliases: ['_'],
      required: true,
      help: _i18n.i18n.translate('expressions.functions.varset.name.help', {
        defaultMessage: 'Specify the name of the variable.'
      })
    },
    value: {
      aliases: ['val'],
      help: _i18n.i18n.translate('expressions.functions.varset.val.help', {
        defaultMessage: 'Specify the value for the variable. When unspecified, the input context is used.'
      })
    }
  },

  fn(input, args, context) {
    const variables = context.variables;
    variables[args.name] = args.value === undefined ? input : args.value;
    return input;
  }

};
exports.variableSet = variableSet;