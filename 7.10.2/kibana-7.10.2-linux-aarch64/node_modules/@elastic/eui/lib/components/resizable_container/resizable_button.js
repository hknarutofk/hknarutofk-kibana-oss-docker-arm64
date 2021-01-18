"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.euiResizableButtonWithControls = euiResizableButtonWithControls;
exports.EuiResizableButton = exports.SIZES = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _i18n = require("../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var sizeToClassNameMap = {
  s: 'euiResizableButton--sizeSmall',
  m: 'euiResizableButton--sizeMedium',
  l: 'euiResizableButton--sizeLarge',
  xl: 'euiResizableButton--sizeExtraLarge'
};
var SIZES = Object.keys(sizeToClassNameMap);
exports.SIZES = SIZES;

var EuiResizableButton = function EuiResizableButton(_ref) {
  var isHorizontal = _ref.isHorizontal,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      registryRef = _ref.registryRef,
      rest = _objectWithoutProperties(_ref, ["isHorizontal", "className", "size", "registryRef"]);

  var classes = (0, _classnames.default)('euiResizableButton', size ? sizeToClassNameMap[size] : null, {
    'euiResizableButton--vertical': !isHorizontal,
    'euiResizableButton--horizontal': isHorizontal
  }, className);
  var previousRef = (0, _react.useRef)();
  var onRef = (0, _react.useCallback)(function (ref) {
    if (ref) {
      previousRef.current = ref;
      registryRef.current.registerResizerRef(ref);
    } else {
      if (previousRef.current != null) {
        registryRef.current.deregisterResizerRef(previousRef.current);
        previousRef.current = undefined;
      }
    }
  }, [registryRef]);

  var setFocus = function setFocus(e) {
    return e.currentTarget.focus();
  };

  return /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    tokens: ['euiResizableButton.horizontalResizerAriaLabel', 'euiResizableButton.verticalResizerAriaLabel'],
    defaults: ['Press left or right to adjust panels size', 'Press up or down to adjust panels size']
  }, function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        horizontalResizerAriaLabel = _ref3[0],
        verticalResizerAriaLabel = _ref3[1];

    return /*#__PURE__*/_react.default.createElement("button", _extends({
      ref: onRef,
      "aria-label": isHorizontal ? horizontalResizerAriaLabel : verticalResizerAriaLabel,
      className: classes,
      "data-test-subj": "splitPanelResizer",
      type: "button",
      onClick: setFocus
    }, rest));
  });
};

exports.EuiResizableButton = EuiResizableButton;
EuiResizableButton.propTypes = {
  /**
     * The size of the Resizer (the space between panels)
     */
  size: _propTypes.default.oneOf(["s", "m", "l", "xl"]),
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};

function euiResizableButtonWithControls(controls) {
  return function (props) {
    return /*#__PURE__*/_react.default.createElement(EuiResizableButton, _extends({}, controls, props));
  };
}