"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiBottomBar = exports.paddingSizeToClassNameMap = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _accessibility = require("../accessibility");

var _i18n = require("../i18n");

var _portal = require("../portal");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Exported for testing
var paddingSizeToClassNameMap = {
  none: null,
  s: 'euiBottomBar--paddingSmall',
  m: 'euiBottomBar--paddingMedium',
  l: 'euiBottomBar--paddingLarge'
};
exports.paddingSizeToClassNameMap = paddingSizeToClassNameMap;

var EuiBottomBar = /*#__PURE__*/function (_Component) {
  _inherits(EuiBottomBar, _Component);

  var _super = _createSuper(EuiBottomBar);

  function EuiBottomBar() {
    var _this;

    _classCallCheck(this, EuiBottomBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "bar", null);

    return _this;
  }

  _createClass(EuiBottomBar, [{
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
          rest = _objectWithoutProperties(_this$props, ["children", "className", "paddingSize", "bodyClassName", "landmarkHeading"]);

      var classes = (0, _classnames.default)('euiBottomBar', paddingSizeToClassNameMap[paddingSize], className);
      return /*#__PURE__*/_react.default.createElement(_portal.EuiPortal, null, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiBottomBar.screenReaderHeading",
        default: "Page level controls"
      }, function (screenReaderHeading) {
        return (
          /*#__PURE__*/
          // Though it would be better to use aria-labelledby than aria-label and not repeat the same string twice
          // A bug in voiceover won't list some landmarks in the rotor without an aria-label
          _react.default.createElement("section", _extends({
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