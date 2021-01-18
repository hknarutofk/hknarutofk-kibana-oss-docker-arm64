"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.euiResizableButtonWithControls = euiResizableButtonWithControls;
exports.EuiResizableButton = exports.SIZES = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _i18n = require("../i18n");

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
      rest = (0, _objectWithoutProperties2.default)(_ref, ["isHorizontal", "className", "size", "registryRef"]);
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
    var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
        horizontalResizerAriaLabel = _ref3[0],
        verticalResizerAriaLabel = _ref3[1];

    return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
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
    return /*#__PURE__*/_react.default.createElement(EuiResizableButton, (0, _extends2.default)({}, controls, props));
  };
}