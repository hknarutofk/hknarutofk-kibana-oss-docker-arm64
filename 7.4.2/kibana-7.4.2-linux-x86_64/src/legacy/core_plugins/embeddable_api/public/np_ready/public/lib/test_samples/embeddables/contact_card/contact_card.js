"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactCardEmbeddableComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _eui = require("@elastic/eui");

var Rx = _interopRequireWildcard(require("rxjs"));

var _contact_card_embeddable = require("./contact_card_embeddable");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var ContactCardEmbeddableComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContactCardEmbeddableComponent, _React$Component);

  function ContactCardEmbeddableComponent(props) {
    var _this;

    _classCallCheck(this, ContactCardEmbeddableComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContactCardEmbeddableComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "subscription", void 0);

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "emitContactTrigger", function () {
      _this.props.execTrigger(_contact_card_embeddable.CONTACT_USER_TRIGGER, {
        embeddable: _this.props.embeddable,
        triggerContext: {}
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCardFooterContent", function () {
      return _react.default.createElement(_eui.EuiFlexGroup, {
        justifyContent: "flexEnd"
      }, _react.default.createElement(_eui.EuiFlexItem, {
        grow: false
      }, _react.default.createElement(_eui.EuiFormRow, {
        label: ""
      }, _react.default.createElement(_eui.EuiButton, {
        onClick: _this.emitContactTrigger
      }, "Contact ".concat(_this.state.firstName)))));
    });

    _this.state = {
      fullName: _this.props.embeddable.getOutput().fullName,
      firstName: _this.props.embeddable.getInput().firstName
    };
    return _this;
  }

  _createClass(ContactCardEmbeddableComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.mounted = true;
      this.subscription = Rx.merge(this.props.embeddable.getOutput$(), this.props.embeddable.getInput$()).subscribe(function () {
        if (_this2.mounted) {
          _this2.setState({
            fullName: _this2.props.embeddable.getOutput().fullName,
            firstName: _this2.props.embeddable.getInput().firstName
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }

      this.mounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_eui.EuiCard, {
        textAlign: "left",
        title: this.state.fullName,
        footer: this.getCardFooterContent()
      });
    }
  }]);

  return ContactCardEmbeddableComponent;
}(_react.default.Component);

exports.ContactCardEmbeddableComponent = ContactCardEmbeddableComponent;