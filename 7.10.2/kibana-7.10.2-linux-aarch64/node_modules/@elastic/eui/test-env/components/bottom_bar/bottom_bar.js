"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiBottomBar = exports.paddingSizeToClassNameMap = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _accessibility = require("../accessibility");

var _i18n = require("../i18n");

var _portal = require("../portal");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Exported for testing
var paddingSizeToClassNameMap = {
  none: null,
  s: 'euiBottomBar--paddingSmall',
  m: 'euiBottomBar--paddingMedium',
  l: 'euiBottomBar--paddingLarge'
};
exports.paddingSizeToClassNameMap = paddingSizeToClassNameMap;

var EuiBottomBar = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiBottomBar, _Component);

  var _super = _createSuper(EuiBottomBar);

  function EuiBottomBar() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiBottomBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "bar", null);
    return _this;
  }

  (0, _createClass2.default)(EuiBottomBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var height = this.bar ? this.bar.clientHeight : -1;
      document.body.style.paddingBottom = "".concat(height, "px");

      if (this.props.bodyClassName) {
        document.body.classList.add(this.props.bodyClassName);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.style.paddingBottom = '';

      if (this.props.bodyClassName) {
        document.body.classList.remove(this.props.bodyClassName);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          _this$props$paddingSi = _this$props.paddingSize,
          paddingSize = _this$props$paddingSi === void 0 ? 'm' : _this$props$paddingSi,
          bodyClassName = _this$props.bodyClassName,
          landmarkHeading = _this$props.landmarkHeading,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "paddingSize", "bodyClassName", "landmarkHeading"]);
      var classes = (0, _classnames.default)('euiBottomBar', paddingSizeToClassNameMap[paddingSize], className);
      return /*#__PURE__*/_react.default.createElement(_portal.EuiPortal, null, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiBottomBar.screenReaderHeading",
        default: "Page level controls"
      }, function (screenReaderHeading) {
        return (
          /*#__PURE__*/
          // Though it would be better to use aria-labelledby than aria-label and not repeat the same string twice
          // A bug in voiceover won't list some landmarks in the rotor without an aria-label
          _react.default.createElement("section", (0, _extends2.default)({
            "aria-label": landmarkHeading ? landmarkHeading : screenReaderHeading,
            className: classes,
            ref: function ref(node) {
              _this2.bar = node;
            }
          }, rest), /*#__PURE__*/_react.default.createElement(_accessibility.EuiScreenReaderOnly, null, /*#__PURE__*/_react.default.createElement("h2", null, landmarkHeading ? landmarkHeading : screenReaderHeading)), children)
        );
      }), /*#__PURE__*/_react.default.createElement(_accessibility.EuiScreenReaderOnly, null, /*#__PURE__*/_react.default.createElement("p", {
        "aria-live": "assertive"
      }, landmarkHeading ? /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiBottomBar.customScreenReaderAnnouncement",
        default: "There is a new region landmark called {landmarkHeading} with page level controls at the end of the document.",
        values: {
          landmarkHeading: landmarkHeading
        }
      }) : /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiBottomBar.screenReaderAnnouncement",
        default: "There is a new region landmark with page level controls at the end of the document."
      }))));
    }
  }]);
  return EuiBottomBar;
}(_react.Component);

exports.EuiBottomBar = EuiBottomBar;
EuiBottomBar.propTypes = {
  /**
     * Optional class applied to the body class
     */
  bodyClassName: _propTypes.default.string,

  /**
     * Padding applied to the bar
     */
  paddingSize: _propTypes.default.oneOf(["none", "s", "m", "l"]),

  /**
     * Customize the screen reader heading that helps users find this control. Default is "Page level controls".
     */
  landmarkHeading: _propTypes.default.string,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};