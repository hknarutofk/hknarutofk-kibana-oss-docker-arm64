"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HelloWorldAction = exports.HELLO_WORLD_ACTION_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _eui = require("@elastic/eui");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HELLO_WORLD_ACTION_ID = 'HELLO_WORLD_ACTION_ID';
exports.HELLO_WORLD_ACTION_ID = HELLO_WORLD_ACTION_ID;

var HelloWorldAction =
/*#__PURE__*/
function (_Action) {
  _inherits(HelloWorldAction, _Action);

  function HelloWorldAction(overlays) {
    var _this;

    _classCallCheck(this, HelloWorldAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HelloWorldAction).call(this, HELLO_WORLD_ACTION_ID));
    _this.overlays = overlays;

    _defineProperty(_assertThisInitialized(_this), "type", HELLO_WORLD_ACTION_ID);

    return _this;
  }

  _createClass(HelloWorldAction, [{
    key: "getDisplayName",
    value: function getDisplayName() {
      return 'Hello World Action!';
    }
  }, {
    key: "execute",
    value: function execute() {
      var flyoutSession = this.overlays.openFlyout(_react.default.createElement(_eui.EuiFlyout, {
        ownFocus: true,
        onClose: function onClose() {
          return flyoutSession && flyoutSession.close();
        }
      }, "Hello World, I am a hello world action!"), {
        'data-test-subj': 'helloWorldAction'
      });
    }
  }]);

  return HelloWorldAction;
}(_.Action);

exports.HelloWorldAction = HelloWorldAction;