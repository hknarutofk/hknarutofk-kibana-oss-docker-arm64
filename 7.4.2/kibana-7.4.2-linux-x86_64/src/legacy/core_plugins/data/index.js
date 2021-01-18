"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataPlugin;

var _path = require("path");

var _mappings = require("./mappings");

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
// eslint-disable-next-line import/no-default-export
function DataPlugin(kibana) {
  const config = {
    id: 'data',
    require: ['elasticsearch'],
    publicDir: (0, _path.resolve)(__dirname, 'public'),
    config: Joi => {
      return Joi.object({
        enabled: Joi.boolean().default(true)
      }).default();
    },
    init: server => ({}),
    uiExports: {
      injectDefaultVars: () => ({}),
      styleSheetPaths: (0, _path.resolve)(__dirname, 'public/index.scss'),
      mappings: _mappings.mappings,
      savedObjectsManagement: {
        query: {
          icon: 'search',
          defaultSearchField: 'title',
          isImportableAndExportable: true,

          getTitle(obj) {
            return obj.attributes.title;
          },

          getInAppUrl(obj) {
            return {
              path: `/app/kibana#/discover?_a=(savedQuery:'${encodeURIComponent(obj.id)}')`,
              uiCapabilitiesPath: 'discover.show'
            };
          }

        }
      }
    }
  };
  return new kibana.Plugin(config);
}

module.exports = exports.default;