"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHeaderSectionItemButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _badge_notification = require("../../badge/notification_badge/badge_notification");

var _icon = require("../../icon");

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var EuiHeaderSectionItemButton = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      className = _ref.className,
      notification = _ref.notification,
      _ref$notificationColo = _ref.notificationColor,
      notificationColor = _ref$notificationColo === void 0 ? 'accent' : _ref$notificationColo,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["onClick", "children", "className", "notification", "notificationColor"]);
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

  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    className: classes,
    ref: ref,
    onClick: onClick,
    type: "button"
  }, rest), children, notificationBadge);
});

exports.EuiHeaderSectionItemButton = EuiHeaderSectionItemButton;
EuiHeaderSectionItemButton.displayName = 'EuiHeaderSectionItemButton';