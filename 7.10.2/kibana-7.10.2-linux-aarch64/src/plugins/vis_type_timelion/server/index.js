"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PluginSetupContract", {
  enumerable: true,
  get: function () {
    return _plugin.PluginSetupContract;
  }
});
exports.plugin = exports.config = void 0;

var _config = require("../config");

var _plugin = require("./plugin");

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
  schema: _config.configSchema,
  exposeToBrowser: {
    ui: true
  },
  deprecations: ({
    renameFromRoot
  }) => [renameFromRoot('timelion_vis.enabled', 'vis_type_timelion.enabled'), renameFromRoot('timelion.enabled', 'vis_type_timelion.enabled'), renameFromRoot('timelion.graphiteUrls', 'vis_type_timelion.graphiteUrls'), renameFromRoot('timelion.ui.enabled', 'vis_type_timelion.ui.enabled', true)]
};
exports.config = config;

const plugin = initializerContext => new _plugin.Plugin(initializerContext);

exports.plugin = plugin;