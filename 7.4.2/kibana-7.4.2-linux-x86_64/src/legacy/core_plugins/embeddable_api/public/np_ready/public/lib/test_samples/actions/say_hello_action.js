"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasFullNameOutput = hasFullNameOutput;
exports.SayHelloAction = exports.SAY_HELLO_ACTION = void 0;

var _actions = require("../../actions");

var _errors = require("../../errors");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SAY_HELLO_ACTION = 'SAY_HELLO_ACTION';
exports.SAY_HELLO_ACTION = SAY_HELLO_ACTION;

function hasFullNameOutput(embeddable) {
  return embeddable.getOutput().fullName !== undefined;
}

var SayHelloAction =
/*#__PURE__*/
function (_Action) {
  _inherits(SayHelloAction, _Action);

  // Taking in a function, instead of always directly interacting with the dom,
  // can make testing the execute part of the action easier.
  function SayHelloAction(sayHello) {
    var _this;

    _classCallCheck(this, SayHelloAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SayHelloAction).call(this, SAY_HELLO_ACTION));

    _defineProperty(_assertThisInitialized(_this), "type", SAY_HELLO_ACTION);

    _defineProperty(_assertThisInitialized(_this), "sayHello", void 0);

    _this.sayHello = sayHello;
    return _this;
  }

  _createClass(SayHelloAction, [{
    key: "getDisplayName",
    value: function getDisplayName() {
      return 'Say hello';
    } // Can use typescript generics to get compiler time warnings for immediate feedback if
    // the context is not compatible.

  }, {
    key: "isCompatible",
    value: function () {
      var _isCompatible = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(context) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", hasFullNameOutput(context.embeddable));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function isCompatible(_x) {
        return _isCompatible.apply(this, arguments);
      }

      return isCompatible;
    }()
  }, {
    key: "execute",
    value: function () {
      var _execute = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(context) {
        var greeting;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.isCompatible(context);

              case 2:
                if (_context2.sent) {
                  _context2.next = 4;
                  break;
                }

                throw new _errors.IncompatibleActionError();

              case 4:
                greeting = "Hello, ".concat(context.embeddable.getOutput().fullName);

                if (context.triggerContext && context.triggerContext.message) {
                  this.sayHello("".concat(greeting, ".  ").concat(context.triggerContext.message));
                } else {
                  this.sayHello(greeting);
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function execute(_x2) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }]);

  return SayHelloAction;
}(_actions.Action);

exports.SayHelloAction = SayHelloAction;