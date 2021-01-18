"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHeaderSectionItemButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _badge_notification = require("../../badge/notification_badge/badge_notification");

var _icon = require("../../icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiHeaderSectionItemButton = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      className = _ref.className,
      notification = _ref.notification,
      _ref$notificationColo = _ref.notificationColor,
      notificationColor = _ref$notificationColo === void 0 ? 'accent' : _ref$notificationColo,
      rest = _objectWithoutProperties(_ref, ["onClick", "children", "className", "notification", "notificationColor"]);

  var classes = (0, _classnames.default)('euiHeaderSectionItem__button', className);
  var notificationBadge;

  if (notification) {
    if (notification === true) {
      notificationBadge = /*#__PURE__*/_react.default.createElement(_icon.EuiIcon, {
        className: "euiHeaderSectionItemButton__notification euiHeaderSectionItemButton__notification--dot",
        color: notificationColor,
        type: "dot",
        size: "l"
      });
    } else {
      notificationBadge = /*#__PURE__*/_react.default.createElement(_badge_notification.EuiNotificationBadge, {
        className: "euiHeaderSectionItemButton__notification euiHeaderSectionItemButton__notification--badge",
        color: notificationColor
      }, notification);
    }
  }

  return /*#__PURE__*/_react.default.createElement("button", _extends({
    className: classes,
    ref: ref,
    onClick: onClick,
    type: "button"
  }, rest), children, notificationBadge);
});

exports.EuiHeaderSectionItemButton = EuiHeaderSectionItemButton;
EuiHeaderSectionItemButton.displayName = 'EuiHeaderSectionItemButton';