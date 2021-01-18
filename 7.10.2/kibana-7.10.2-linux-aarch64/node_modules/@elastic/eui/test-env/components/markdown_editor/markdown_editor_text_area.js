"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiMarkdownEditorTextArea = exports.RESIZE = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
var resizeToClassNameMap = {
  vertical: 'euiTextArea--resizeVertical',
  horizontal: 'euiTextArea--resizeHorizontal',
  both: 'euiTextArea--resizeBoth',
  none: 'euiTextArea--resizeNone'
};
var RESIZE = Object.keys(resizeToClassNameMap);
exports.RESIZE = RESIZE;
var EuiMarkdownEditorTextArea = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      compressed = _ref.compressed,
      id = _ref.id,
      isInvalid = _ref.isInvalid,
      name = _ref.name,
      placeholder = _ref.placeholder,
      rows = _ref.rows,
      height = _ref.height,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "compressed", "id", "isInvalid", "name", "placeholder", "rows", "height"]);
  var markdownFooterHeight = 34;
  return /*#__PURE__*/_react.default.createElement("textarea", (0, _extends2.default)({
    ref: ref,
    style: {
      height: "calc(".concat(height - markdownFooterHeight, "px")
    },
    className: "euiMarkdownEditorTextArea"
  }, rest, {
    rows: 6,
    name: name,
    id: id,
    placeholder: placeholder
  }), children);
});
exports.EuiMarkdownEditorTextArea = EuiMarkdownEditorTextArea;
EuiMarkdownEditorTextArea.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  isInvalid: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  compressed: _propTypes.default.bool,

  /**
       * Which direction, if at all, should the textarea resize
       */
  resize: _propTypes.default.oneOf(["vertical", "horizontal", "both", "none"]),
  height: _propTypes.default.number.isRequired
};
EuiMarkdownEditorTextArea.displayName = 'EuiMarkdownEditorTextArea';