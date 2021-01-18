"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendMessageAction = exports.SEND_MESSAGE_ACTION = void 0;

var _react = _interopRequireDefault(require("react"));

var _eui = require("@elastic/eui");

var _ = require("../..");

var _get_message_modal = require("./get_message_modal");

var _say_hello_action = require("./say_hello_action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var SEND_MESSAGE_ACTION = 'SEND_MESSAGE_ACTION';
exports.SEND_MESSAGE_ACTION = SEND_MESSAGE_ACTION;

var SendMessageAction =
/*#__PURE__*/
function (_Action) {
  _inherits(SendMessageAction, _Action);

  function SendMessageAction(overlays) {
    var _this;

    _classCallCheck(this, SendMessageAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SendMessageAction).call(this, SEND_MESSAGE_ACTION));
    _this.overlays = overlays;

    _defineProperty(_assertThisInitialized(_this), "type", SEND_MESSAGE_ACTION);

    return _this;
  }

  _createClass(SendMessageAction, [{
    key: "getDisplayName",
    value: function getDisplayName() {
      return 'Send message';
    }
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
                return _context.abrupt("return", (0, _say_hello_action.hasFullNameOutput)(context.embeddable));

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
    key: "sendMessage",
    value: function () {
      var _sendMessage = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(context, message) {
        var greeting, content;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                greeting = "Hello, ".concat(context.embeddable.getOutput().fullName);
                content = message ? "".concat(greeting, ". ").concat(message) : greeting;
                this.overlays.openFlyout(_react.default.createElement(_eui.EuiFlyoutBody, null, content));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function sendMessage(_x2, _x3) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "execute",
    value: function () {
      var _execute = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(context) {
        var _this2 = this;

        var modal;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.isCompatible(context);

              case 2:
                if (_context3.sent) {
                  _context3.next = 4;
                  break;
                }

                throw new _.IncompatibleActionError();

              case 4:
                modal = this.overlays.openModal(_react.default.createElement(_get_message_modal.GetMessageModal, {
                  onCancel: function onCancel() {
                    return modal.close();
                  },
                  onDone: function onDone(message) {
                    modal.close();

                    _this2.sendMessage(context, message);
                  }
                }));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function execute(_x4) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }]);

  return SendMessageAction;
}(_.Action);

exports.SendMessageAction = SendMessageAction;