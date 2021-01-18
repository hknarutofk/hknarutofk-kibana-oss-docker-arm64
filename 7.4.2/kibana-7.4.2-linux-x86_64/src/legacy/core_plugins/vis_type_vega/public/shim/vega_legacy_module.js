"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initVegaLegacyModule = void 0;

require("ngreact");

require("brace/mode/hjson");

require("brace/ext/searchbox");

require("ui/accessibility/kbn_ui_ace_keyboard_mode");

require("ui/vis/map/service_settings");

var _lodash = require("lodash");

var _modules = require("ui/modules");

var _i18n = require("ui/i18n");

var _vega_editor_controller = require("../vega_editor_controller");

var _vega_help_menu = require("../help_menus/vega_help_menu");

var _vega_action_menu = require("../help_menus/vega_action_menu");

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
// @ts-ignore
// @ts-ignore
// @ts-ignore

/** @internal */
var initVegaLegacyModule = (0, _lodash.once)(function () {
  _modules.uiModules.get('kibana/vega', ['react']).controller('VegaEditorController', _vega_editor_controller.VegaEditorController).directive('vegaActionsMenu', function (reactDirective) {
    return reactDirective((0, _i18n.wrapInI18nContext)(_vega_action_menu.VegaActionsMenu));
  }).directive('vegaHelpMenu', function (reactDirective) {
    return reactDirective((0, _i18n.wrapInI18nContext)(_vega_help_menu.VegaHelpMenu));
  });
});
exports.initVegaLegacyModule = initVegaLegacyModule;