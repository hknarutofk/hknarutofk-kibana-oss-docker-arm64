"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiPageContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _panel = require("../../panel/panel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var verticalPositionToClassNameMap = {
  center: 'euiPageContent--verticalCenter'
};
var horizontalPositionToClassNameMap = {
  center: 'euiPageContent--horizontalCenter'
};

var EuiPageContent = function EuiPageContent(_ref) {
  var verticalPosition = _ref.verticalPosition,
      horizontalPosition = _ref.horizontalPosition,
      _ref$panelPaddingSize = _ref.panelPaddingSize,
      panelPaddingSize = _ref$panelPaddingSize === void 0 ? 'l' : _ref$panelPaddingSize,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["verticalPosition", "horizontalPosition", "panelPaddingSize", "children", "className"]);

  var classes = (0, _classnames.default)('euiPageContent', verticalPosition ? verticalPositionToClassNameMap[verticalPosition] : null, horizontalPosition ? horizontalPositionToClassNameMap[horizontalPosition] : null, className);
  return /*#__PURE__*/_react.default.createElement(_panel.EuiPanel, _extends({
    className: classes,
    paddingSize: panelPaddingSize
  }, rest), children);
};

exports.EuiPageContent = EuiPageContent;
EuiPageContent.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * If active, adds a deeper shadow to the panel
     */

  /**
     * If active, adds a deeper shadow to the panel
     */
  hasShadow: _propTypes.default.bool,

  /**
     * Padding applied to the panel
     */

  /**
     * Padding applied to the panel
     */
  paddingSize: _propTypes.default.oneOf(["none", "s", "m", "l"]),

  /**
     * When true the panel will grow to match `EuiFlexItem`
     */

  /**
     * When true the panel will grow to match `EuiFlexItem`
     */
  grow: _propTypes.default.bool,
  panelRef: _propTypes.default.any,

  /**
     * Add a badge to the panel to label it as "Beta" or other non-GA state
     */

  /**
     * Add a badge to the panel to label it as "Beta" or other non-GA state
     */
  betaBadgeLabel: _propTypes.default.string,

  /**
     * Add a description to the beta badge (will appear in a tooltip)
     */

  /**
     * Add a description to the beta badge (will appear in a tooltip)
     */
  betaBadgeTooltipContent: _propTypes.default.node,

  /**
     * Optional title will be supplied as tooltip title or title attribute otherwise the label will be used
     */

  /**
     * Optional title will be supplied as tooltip title or title attribute otherwise the label will be used
     */
  betaBadgeTitle: _propTypes.default.string,
  panelPaddingSize: _propTypes.default.oneOf(["none", "s", "m", "l"]),
  verticalPosition: _propTypes.default.oneOf(["center"]),
  horizontalPosition: _propTypes.default.oneOf(["center"])
};