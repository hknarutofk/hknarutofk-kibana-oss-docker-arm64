"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccessibilitySettings = void 0;

var _configSchema = require("@kbn/config-schema");

var _i18n = require("@kbn/i18n");

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
const getAccessibilitySettings = () => {
  return {
    'accessibility:disableAnimations': {
      name: _i18n.i18n.translate('core.ui_settings.params.disableAnimationsTitle', {
        defaultMessage: 'Disable Animations'
      }),
      value: false,
      description: _i18n.i18n.translate('core.ui_settings.params.disableAnimationsText', {
        defaultMessage: 'Turn off all unnecessary animations in the Kibana UI. Refresh the page to apply the changes.'
      }),
      category: ['accessibility'],
      requiresPageReload: true,
      schema: _configSchema.schema.boolean()
    }
  };
};

exports.getAccessibilitySettings = getAccessibilitySettings;