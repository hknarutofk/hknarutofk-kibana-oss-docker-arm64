"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plugin = plugin;
Object.defineProperty(exports, "VisTypeVegaPluginStart", {
  enumerable: true,
  get: function () {
    return _types.VisTypeVegaPluginStart;
  }
});
Object.defineProperty(exports, "VisTypeVegaPluginSetup", {
  enumerable: true,
  get: function () {
    return _types.VisTypeVegaPluginSetup;
  }
});
exports.config = void 0;

var _config = require("../config");

var _plugin = require("./plugin");

var _types = require("./types");

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
const config = {
  exposeToBrowser: {
    enableExternalUrls: true
  },
  schema: _config.configSchema,
  deprecations: ({
    renameFromRoot
  }) => [renameFromRoot('vega.enableExternalUrls', 'vis_type_vega.enableExternalUrls'), renameFromRoot('vega.enabled', 'vis_type_vega.enabled')]
};
exports.config = config;

function plugin(initializerContext) {
  return new _plugin.VisTypeVegaPlugin(initializerContext);
}