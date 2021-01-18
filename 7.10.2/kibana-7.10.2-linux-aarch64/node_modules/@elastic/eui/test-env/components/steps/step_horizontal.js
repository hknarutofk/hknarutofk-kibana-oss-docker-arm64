"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiStepHorizontal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _i18n = require("../i18n");

var _accessibility = require("../accessibility");

var _step_number = require("./step_number");

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
var EuiStepHorizontal = function EuiStepHorizontal(_ref) {
  var className = _ref.className,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      title = _ref.title,
      isSelected = _ref.isSelected,
      isComplete = _ref.isComplete,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      status = _ref.status,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "step", "title", "isSelected", "isComplete", "onClick", "disabled", "status"]);
  var classes = (0, _classnames.default)('euiStepHorizontal', className, {
    'euiStepHorizontal-isSelected': isSelected,
    'euiStepHorizontal-isComplete': isComplete,
    'euiStepHorizontal-isIncomplete': !isSelected && !isComplete,
    'euiStepHorizontal-isDisabled': disabled
  });

  if (disabled) {
    status = 'disabled';
  } else if (isComplete) {
    status = 'complete';
  } else if (isSelected) {
    status = status;
  } else if (!status) {
    status = 'incomplete';
  }

  var onStepClick = function onStepClick(event) {
    if (disabled) return;
    onClick(event);
  };

  return /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiStepHorizontal.buttonTitle",
    default: function _default(_ref2) {
      var step = _ref2.step,
          title = _ref2.title,
          disabled = _ref2.disabled,
          isComplete = _ref2.isComplete;
      var titleAppendix = '';

      if (disabled) {
        titleAppendix = ' is disabled';
      } else if (isComplete) {
        titleAppendix = ' is complete';
      }

      return "Step ".concat(step, ": ").concat(title).concat(titleAppendix);
    },
    values: {
      step: step,
      title: title,
      disabled: disabled,
      isComplete: isComplete
    }
  }, function (buttonTitle) {
    return /*#__PURE__*/_react.default.createElement(_accessibility.EuiKeyboardAccessible, null, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
      role: "tab",
      "aria-selected": !!isSelected,
      "aria-disabled": !!disabled,
      className: classes,
      onClick: onStepClick,
      tabIndex: disabled ? -1 : 0,
      title: buttonTitle
    }, rest), /*#__PURE__*/_react.default.createElement(_accessibility.EuiScreenReaderOnly, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
      token: "euiStepHorizontal.step",
      default: "Step"
    }))), /*#__PURE__*/_react.default.createElement(_step_number.EuiStepNumber, {
      className: "euiStepHorizontal__number",
      status: status,
      number: step
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "euiStepHorizontal__title"
    }, title)));
  });
};

exports.EuiStepHorizontal = EuiStepHorizontal;
EuiStepHorizontal.propTypes = {
  /**
     * Is the current step
     */
  isSelected: _propTypes.default.bool,

  /**
     * Is a previous step that has been completed
     */
  isComplete: _propTypes.default.bool,
  onClick: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool,

  /**
     * The number of the step in the list of steps
     */
  step: _propTypes.default.number,
  title: _propTypes.default.string,

  /**
     * May replace the number provided in props.step with alternate styling.
     * The `isSelected`, `isComplete`, and `disabled` props will override these.
     */
  status: _propTypes.default.oneOf(["complete", "incomplete", "warning", "danger", "disabled"]),
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};