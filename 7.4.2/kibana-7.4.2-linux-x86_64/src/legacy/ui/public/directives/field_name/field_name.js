"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldName = FieldName;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _shorten_dotted_string = require("../../../../core_plugins/kibana/common/utils/shorten_dotted_string");

var _field_name_icon = require("./field_name_icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
// @ts-ignore
function FieldName(_ref) {
  var field = _ref.field,
      fieldName = _ref.fieldName,
      fieldType = _ref.fieldType,
      useShortDots = _ref.useShortDots;
  var type = field ? String(field.type) : String(fieldType);
  var name = field ? String(field.name) : String(fieldName);
  var displayName = useShortDots ? (0, _shorten_dotted_string.shortenDottedString)(name) : name;
  var className = (0, _classnames.default)({
    'dscField--noResults': field ? !field.rowCount && !field.scripted : false,
    // this is currently not styled, should display an icon
    scripted: field ? field.scripted : false
  });
  return _react.default.createElement("span", {
    className: className,
    title: name
  }, _react.default.createElement(_field_name_icon.FieldNameIcon, {
    type: type
  }), _react.default.createElement("span", {
    className: "dscFieldName"
  }, displayName));
}