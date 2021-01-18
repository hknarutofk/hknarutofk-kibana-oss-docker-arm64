"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeInterpreter = initializeInterpreter;

var _common = require("../../common");

var _create_handlers = require("./create_handlers");

var _batched_fetch = require("./batched_fetch");

var _consts = require("./consts");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function initializeInterpreter(_x) {
  return _initializeInterpreter.apply(this, arguments);
}

function _initializeInterpreter() {
  _initializeInterpreter = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(config) {
    var http, ajaxStream, typesRegistry, functionsRegistry, serverFunctionList, types, _serializeProvider, serialize, batch, interpretAst;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            http = config.http, ajaxStream = config.ajaxStream, typesRegistry = config.typesRegistry, functionsRegistry = config.functionsRegistry;
            _context2.next = 3;
            return http.get(_consts.FUNCTIONS_URL);

          case 3:
            serverFunctionList = _context2.sent;
            types = typesRegistry.toJS();
            _serializeProvider = (0, _common.serializeProvider)(types), serialize = _serializeProvider.serialize;
            batch = (0, _batched_fetch.batchedFetch)({
              ajaxStream: ajaxStream,
              serialize: serialize
            }); // For every sever-side function, register a client-side
            // function that matches its definition, but which simply
            // calls the server-side function endpoint.

            Object.keys(serverFunctionList).forEach(function (functionName) {
              functionsRegistry.register(function () {
                return _objectSpread({}, serverFunctionList[functionName], {
                  fn: function fn(context, args) {
                    return batch({
                      functionName: functionName,
                      args: args,
                      context: context
                    });
                  }
                });
              });
            });

            interpretAst =
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(ast, context, handlers) {
                var interpretFn;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0, _common.interpreterProvider)({
                          types: typesRegistry.toJS(),
                          handlers: _objectSpread({}, handlers, {}, (0, _create_handlers.createHandlers)()),
                          functions: functionsRegistry.toJS()
                        });

                      case 2:
                        interpretFn = _context.sent;
                        return _context.abrupt("return", interpretFn(ast, context));

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function interpretAst(_x2, _x3, _x4) {
                return _ref.apply(this, arguments);
              };
            }();

            return _context2.abrupt("return", {
              interpretAst: interpretAst
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _initializeInterpreter.apply(this, arguments);
}