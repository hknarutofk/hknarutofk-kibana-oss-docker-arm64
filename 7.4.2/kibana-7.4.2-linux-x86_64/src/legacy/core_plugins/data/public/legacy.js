"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = void 0;

var _new_platform = require("ui/new_platform");

var _registries = require("plugins/interpreter/registries");

var _interpreter = require("plugins/interpreter/interpreter");

var _legacy_dependencies_plugin = require("./shim/legacy_dependencies_plugin");

var _ = require(".");

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

/**
 * New Platform Shim
 *
 * In this file, we import any legacy dependencies we have, and shim them into
 * our plugin by manually constructing the values that the new platform will
 * eventually be passing to the `setup` method of our plugin definition.
 *
 * The idea is that our `plugin.ts` can stay "pure" and not contain any legacy
 * world code. Then when it comes time to migrate to the new platform, we can
 * simply delete this shim file.
 *
 * We are also calling `setup` here and exporting our public contract so that
 * other legacy plugins are able to import from '../core_plugins/data/legacy'
 * and receive the response value of the `setup` contract, mimicking the
 * data that will eventually be injected by the new platform.
 */
// @ts-ignore
// @ts-ignore
var dataPlugin = (0, _.plugin)();
var legacyPlugin = new _legacy_dependencies_plugin.LegacyDependenciesPlugin();
var setup = dataPlugin.setup(_new_platform.npSetup.core, {
  __LEGACY: legacyPlugin.setup(),
  interpreter: {
    renderersRegistry: _registries.renderersRegistry,
    getInterpreter: _interpreter.getInterpreter
  }
});
exports.setup = setup;