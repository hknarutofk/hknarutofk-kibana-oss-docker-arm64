"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldNameIcon = FieldNameIcon;

var _react = _interopRequireDefault(require("react"));

var _i18n = require("@kbn/i18n");

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
function FieldNameIcon(_ref) {
  var type = _ref.type;

  switch (type) {
    case 'boolean':
      return _react.default.createElement("span", {
        "aria-label": _i18n.i18n.translate('common.ui.directives.fieldNameIcons.booleanAriaLabel', {
          defaultMessage: 'Boolean field'
        }),
        className: "dscField__icon kuiIcon fa-adjust"
      });

    case 'conflict':
      return _react.default.createElement("span", {
        "aria-label": _i18n.i18n.translate('common.ui.directives.fieldNameIcons.conflictFieldAriaLabel', {
          defaultMessage: 'Conflicting field'
        }),
        className: "dscField__icon kuiIcon fa-warning"
      });

    case 'date':
      return _react.default.createElement("span", {
        "aria-label": _i18n.i18n.translate('common.ui.directives.fieldNameIcons.dateFieldAriaLabel', {
          defaultMessage: 'Date field'
        }),
        className: "dscField__icon kuiIcon fa-clock-o"
      });

    case 'geo_point':
      return _react.default.createElement("span", {
        "aria-label": _i18n.i18n.translate('common.ui.directives.fieldNameIcons.geoPointFieldAriaLabel', {
          defaultMessage: 'Geo Point'
        }),
        className: "dscField__icon kuiIcon fa-globe"
      });

    case 'geo_shape':
      return _react.default.createElement("span", {
        "aria-label": _i18n.i18n.translate('common.ui.directives.fieldNameIcons.geoShapeFieldAriaLabel', {
          defaultMessage: 'Geo Shape'
        }),
        className: "dscField__icon kuiIcon fa-globe"
      });

    case 'ip':
      return _react.default.createElement("span", {
        "aria-label": _i18n.i18n.translate('common.ui.directives.fieldNameIcons.ipAddressFieldAriaLabel', {
          defaultMessage: 'IP address field'
        }),
        className: "dscField__icon kuiIcon fa-laptop"
      });

    case 'murmur3':
      return _react.default.createElement("span", {
        "aria-label": _i18n.i18n.translate('common.ui.directives.fieldNameIcons.murmur3FieldAriaLabel', {
          defaultMessage: 'Murmur3 field'
        }),
        className: "dscField__icon"
      }, _react.default.createElement("strong", {
        "aria-hidden": "true"
      }, "h"));

    case 'number':
      return _react.default.createElement("span", {
        "aria-label": _i18n.i18n.translate('common.ui.directives.fieldNameIcons.numberFieldAriaLabel', {
          defaultMessage: 'Number field'
        }),
        className: "dscField__icon"
      }, _react.default.createElement("strong", {
        "aria-hidden": "true"
      }, "#"));

    case 'source':
      // Note that this type is currently not provided, type for _source is undefined
      return _react.default.createElement("span", {
        "aria-label": _i18n.i18n.translate('common.ui.directives.fieldNameIcons.sourceFieldAriaLabel', {
          defaultMessage: 'Source field'
        }),
        className: "dscField__icon kuiIcon fa-file-text-o"
      });

    case 'string':
      return _react.default.createElement("span", {
        "aria-label": _i18n.i18n.translate('common.ui.directives.fieldNameIcons.stringFieldAriaLabel', {
          defaultMessage: 'String field'
        }),
        className: "dscField__icon"
      }, _react.default.createElement("strong", {
        "aria-hidden": "true"
      }, "t"));

    default:
      return _react.default.createElement("span", {
        "aria-label": _i18n.i18n.translate('common.ui.directives.fieldNameIcons.unknownFieldAriaLabel', {
          defaultMessage: 'Unknown field'
        }),
        className: "dscField__icon"
      }, _react.default.createElement("strong", {
        "aria-hidden": "true"
      }, "?"));
  }
}