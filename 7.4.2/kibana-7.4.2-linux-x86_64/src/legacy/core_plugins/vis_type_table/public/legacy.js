"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.setup = void 0;

var _new_platform = require("ui/new_platform");

var _ = require(".");

var _public = require("../../visualizations/public");

var _shim = require("./shim");

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
var plugins = {
  visualizations: _public.visualizations,
  data: _new_platform.npSetup.plugins.data,
  // Temporary solution
  // It will be removed when all dependent services are migrated to the new platform.
  __LEGACY: new _shim.LegacyDependenciesPlugin()
};
var pluginInstance = (0, _.plugin)({});
var setup = pluginInstance.setup(_new_platform.npSetup.core, plugins);
exports.setup = setup;
var start = pluginInstance.start(_new_platform.npStart.core);
exports.start = start;