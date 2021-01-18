"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiStepNumber = exports.STATUS = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = require("../icon");

var _i18n = require("../i18n");

var _common = require("../common");

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
var statusToClassNameMap = {
  complete: 'euiStepNumber--complete',
  incomplete: 'euiStepNumber--incomplete',
  warning: 'euiStepNumber--warning',
  danger: 'euiStepNumber--danger',
  disabled: 'euiStepNumber--disabled'
};
var STATUS = (0, _common.keysOf)(statusToClassNameMap);
exports.STATUS = STATUS;

var EuiStepNumber = function EuiStepNumber(_ref) {
  var className = _ref.className,
      status = _ref.status,
      number = _ref.number,
      isHollow = _ref.isHollow,
      titleSize = _ref.titleSize,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "status", "number", "isHollow", "titleSize"]);
  var classes = (0, _classnames.default)('euiStepNumber', status ? statusToClassNameMap[status] : undefined, {
    'euiStepNumber-isHollow': isHollow
  }, className);
  var iconSize = titleSize === 'xs' ? 's' : 'm';
  var numberOrIcon;

  if (status === 'complete') {
    numberOrIcon = /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
      token: "euiStepNumber.isComplete",
      default: "complete"
    }, function (isComplete) {
      return /*#__PURE__*/_react.default.createElement(_icon.EuiIcon, {
        type: "check",
        className: "euiStepNumber__icon",
        size: iconSize,
        "aria-label": isComplete
      });
    });
  } else if (status === 'warning') {
    numberOrIcon = /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
      token: "euiStepNumber.hasWarnings",
      default: "has warnings"
    }, function (hasWarnings) {
      return /*#__PURE__*/_react.default.createElement(_icon.EuiIcon, {
        type: "alert",
        className: "euiStepNumber__icon",
        size: iconSize,
        "aria-label": hasWarnings
      });
    });
  } else if (status === 'danger') {
    numberOrIcon = /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
      token: "euiStepNumber.hasErrors",
      default: "has errors"
    }, function (hasErrors) {
      return /*#__PURE__*/_react.default.createElement(_icon.EuiIcon, {
        type: "cross",
        className: "euiStepNumber__icon",
        size: iconSize,
        "aria-label": hasErrors
      });
    });
  } else if (!isHollow) {
    numberOrIcon = number;
  }

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: classes
  }, rest), numberOrIcon);
};

exports.EuiStepNumber = EuiStepNumber;
EuiStepNumber.propTypes = {
  /**
     * May replace the number provided in props.number with alternate styling
     */
  status: _propTypes.default.oneOf(["complete", "incomplete", "warning", "danger", "disabled"]),
  number: _propTypes.default.number,

  /**
     * Uses a border and removes the step number
     */
  isHollow: _propTypes.default.bool,

  /**
     * Title sizing equivalent to EuiTitle, but only `m`, `s` and `xs`. Defaults to `s`
     */
  titleSize: _propTypes.default.any,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};