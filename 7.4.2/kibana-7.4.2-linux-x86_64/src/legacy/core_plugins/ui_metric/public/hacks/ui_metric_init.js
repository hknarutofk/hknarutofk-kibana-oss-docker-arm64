"use strict";

var _modules = require("ui/modules");

var _chrome = _interopRequireDefault(require("ui/chrome"));

var _telemetry_analytics = require("../services/telemetry_analytics");

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
function telemetryInit($injector) {
  var localStorage = $injector.get('localStorage');

  var debug = _chrome.default.getInjected('debugUiMetric');

  var $http = $injector.get('$http');

  var basePath = _chrome.default.getBasePath();

  var uiReporter = (0, _telemetry_analytics.createAnalyticsReporter)({
    localStorage: localStorage,
    $http: $http,
    basePath: basePath,
    debug: debug
  });
  (0, _telemetry_analytics.setTelemetryReporter)(uiReporter);
}

_modules.uiModules.get('kibana').run(telemetryInit);