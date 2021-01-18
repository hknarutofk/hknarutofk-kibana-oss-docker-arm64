"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFocusTrap = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFocusOn = require("react-focus-on");

var _outside_click_detector = require("../outside_click_detector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var OutsideEventDetector = function OutsideEventDetector(_ref) {
  var children = _ref.children,
      handleEvent = _ref.handleEvent,
      rest = _objectWithoutProperties(_ref, ["children", "handleEvent"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    onMouseDown: handleEvent,
    onTouchStart: handleEvent
  }, rest), children);
};
/**
 * A DOM node, a selector string (which will be passed to
 * `document.querySelector()` to find the DOM node), or a function that
 * returns a DOM node.
 */


OutsideEventDetector.propTypes = {
  handleEvent: _propTypes.default.any.isRequired
};

var EuiFocusTrap = /*#__PURE__*/function (_Component) {
  _inherits(EuiFocusTrap, _Component);

  var _super = _createSuper(EuiFocusTrap);

  function EuiFocusTrap() {
    var _this;

    _classCallCheck(this, EuiFocusTrap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasBeenDisabledByClick: false
    });

    _defineProperty(_assertThisInitialized(_this), "lastInterceptedEvent", null);

    _defineProperty(_assertThisInitialized(_this), "preventFocusExit", false);

    _defineProperty(_assertThisInitialized(_this), "setInitialFocus", function (initialFocus) {
      var node = initialFocus instanceof HTMLElement ? initialFocus : null;

      if (typeof initialFocus === 'string') {
        node = document.querySelector(initialFocus);
      } else if (typeof initialFocus === 'function') {
        node = initialFocus();
      }

      if (!node) return; // `data-autofocus` is part of the 'react-focus-on' API

      node.setAttribute('data-autofocus', 'true');
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDisabled", function () {
      var shouldDisable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !_this.state.hasBeenDisabledByClick;

      _this.setState({
        hasBeenDisabledByClick: shouldDisable
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleExitPrevented", function () {
      var shouldPrevent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !_this.preventFocusExit;
      _this.preventFocusExit = shouldPrevent;
    });

    _defineProperty(_assertThisInitialized(_this), "handleOutsideClick", function (event) {
      _this.toggleExitPrevented(false);

      if (_this.preventFocusExit && _this.lastInterceptedEvent && event.target === _this.lastInterceptedEvent.target) {
        return;
      }

      _this.toggleDisabled(true);

      if (_this.props.onClickOutside) {
        _this.props.onClickOutside(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBubbledEvent", function (e) {
      _this.lastInterceptedEvent = e.nativeEvent;

      _this.toggleExitPrevented(true);
    });

    return _this;
  }

  _createClass(EuiFocusTrap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setInitialFocus(this.props.initialFocus);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.disabled === true && this.props.disabled === false) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          hasBeenDisabledByClick: false
        });
      }
    } // Programmatically sets focus on a nested DOM node; optional

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$clickOuts = _this$props.clickOutsideDisables,
          clickOutsideDisables = _this$props$clickOuts === void 0 ? false : _this$props$clickOuts,
          _this$props$disabled = _this$props.disabled,
          disabled = _this$props$disabled === void 0 ? false : _this$props$disabled,
          _this$props$returnFoc = _this$props.returnFocus,
          returnFocus = _this$props$returnFoc === void 0 ? true : _this$props$returnFoc,
          _this$props$noIsolati = _this$props.noIsolation,
          noIsolation = _this$props$noIsolati === void 0 ? true : _this$props$noIsolati,
          _this$props$scrollLoc = _this$props.scrollLock,
          scrollLock = _this$props$scrollLoc === void 0 ? false : _this$props$scrollLoc,
          onClickOutside = _this$props.onClickOutside,
          rest = _objectWithoutProperties(_this$props, ["children", "clickOutsideDisables", "disabled", "returnFocus", "noIsolation", "scrollLock", "onClickOutside"]);

      var isDisabled = disabled || this.state.hasBeenDisabledByClick;

      var focusOnProps = _objectSpread({
        returnFocus: returnFocus,
        noIsolation: noIsolation,
        scrollLock: scrollLock,
        enabled: !isDisabled
      }, rest);

      return clickOutsideDisables ? /*#__PURE__*/_react.default.createElement(_outside_click_detector.EuiOutsideClickDetector, {
        isDisabled: isDisabled,
        onOutsideClick: this.handleOutsideClick
      }, /*#__PURE__*/_react.default.createElement(OutsideEventDetector, {
        handleEvent: this.handleBubbledEvent
      }, /*#__PURE__*/_react.default.createElement(_reactFocusOn.FocusOn, focusOnProps, children))) : /*#__PURE__*/_react.default.createElement(_reactFocusOn.FocusOn, focusOnProps, children);
    }
  }]);

  return EuiFocusTrap;
}(_react.Component);

exports.EuiFocusTrap = EuiFocusTrap;
EuiFocusTrap.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * Clicking outside the trap area will disable the trap
     */
  clickOutsideDisables: _propTypes.default.bool,

  /**
     * Reference to element that will get focus when the trap is initiated
     */
  initialFocus: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.string.isRequired, _propTypes.default.func.isRequired]),
  style: _propTypes.default.any,
  disabled: _propTypes.default.bool
};