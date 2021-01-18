"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartsServerPlugin = void 0;

var _i18n = require("@kbn/i18n");

var _configSchema = require("@kbn/config-schema");

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
class ChartsServerPlugin {
  setup(core) {
    core.uiSettings.register({
      [_common.COLOR_MAPPING_SETTING]: {
        name: _i18n.i18n.translate('charts.advancedSettings.visualization.colorMappingTitle', {
          defaultMessage: 'Color mapping'
        }),
        value: JSON.stringify({
          Count: '#00A69B'
        }),
        type: 'json',
        description: _i18n.i18n.translate('charts.advancedSettings.visualization.colorMappingText', {
          defaultMessage: 'Maps values to specified colors within visualizations'
        }),
        category: ['visualization'],
        schema: _configSchema.schema.string()
      }
    });
    return {};
  }

  start() {
    return {};
  }

  stop() {}

}

exports.ChartsServerPlugin = ChartsServerPlugin;