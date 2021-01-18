"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRunFn = void 0;

var _common = require("@kbn/interpreter/common");

var _adapters = require("ui/inspector/adapters");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createRunFn = function createRunFn(renderersRegistry, interpreterPromise) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(expressionOrAst, _ref) {
        var element, context, getInitialContext, interpreter, ast, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                element = _ref.element, context = _ref.context, getInitialContext = _ref.getInitialContext;
                _context.next = 3;
                return interpreterPromise;

              case 3:
                interpreter = _context.sent;
                ast = typeof expressionOrAst === 'string' ? (0, _common.fromExpression)(expressionOrAst) : expressionOrAst;
                _context.next = 7;
                return interpreter.interpretAst(ast, context || {
                  type: 'null'
                }, {
                  getInitialContext: getInitialContext || function () {
                    return {};
                  },
                  inspectorAdapters: {
                    // TODO connect real adapters
                    requests: new _adapters.RequestAdapter(),
                    data: new _adapters.DataAdapter()
                  }
                });

              case 7:
                response = _context.sent;

                if (!(response.type === 'error')) {
                  _context.next = 10;
                  break;
                }

                throw response;

              case 10:
                if (!element) {
                  _context.next = 16;
                  break;
                }

                if (!(response.type === 'render' && response.as && renderersRegistry.get(response.as) !== null)) {
                  _context.next = 15;
                  break;
                }

                renderersRegistry.get(response.as).render(element, response.value, {
                  onDestroy: function onDestroy(fn) {// TODO implement
                  },
                  done: function done() {// TODO implement
                  }
                });
                _context.next = 16;
                break;

              case 15:
                throw response;

              case 16:
                return _context.abrupt("return", response);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.createRunFn = createRunFn;