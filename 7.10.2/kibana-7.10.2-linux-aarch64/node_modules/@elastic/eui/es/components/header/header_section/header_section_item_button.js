function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import React from 'react';
import classNames from 'classnames';
import { EuiNotificationBadge } from '../../badge/notification_badge/badge_notification';
import { EuiIcon } from '../../icon';
export var EuiHeaderSectionItemButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      className = _ref.className,
      notification = _ref.notification,
      _ref$notificationColo = _ref.notificationColor,
      notificationColor = _ref$notificationColo === void 0 ? 'accent' : _ref$notificationColo,
      rest = _objectWithoutProperties(_ref, ["onClick", "children", "className", "notification", "notificationColor"]);

  var classes = classNames('euiHeaderSectionItem__button', className);
  var notificationBadge;

  if (notification) {
    if (notification === true) {
      notificationBadge = /*#__PURE__*/React.createElement(EuiIcon, {
        className: "euiHeaderSectionItemButton__notification euiHeaderSectionItemButton__notification--dot",
        color: notificationColor,
        type: "dot",
        size: "l"
      });
    } else {
      notificationBadge = /*#__PURE__*/React.createElement(EuiNotificationBadge, {
        className: "euiHeaderSectionItemButton__notification euiHeaderSectionItemButton__notification--badge",
        color: notificationColor
      }, notification);
    }
  }

  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    ref: ref,
    onClick: onClick,
    type: "button"
  }, rest), children, notificationBadge);
});
EuiHeaderSectionItemButton.displayName = 'EuiHeaderSectionItemButton';