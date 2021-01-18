"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plugin = plugin;
Object.defineProperty(exports, "VisTypeTimeseriesSetup", {
  enumerable: true,
  get: function () {
    return _plugin.VisTypeTimeseriesSetup;
  }
});
Object.defineProperty(exports, "ValidationTelemetryServiceSetup", {
  enumerable: true,
  get: function () {
    return _validation_telemetry.ValidationTelemetryServiceSetup;
  }
});
Object.defineProperty(exports, "AbstractSearchStrategy", {
  enumerable: true,
  get: function () {
    return _abstract_search_strategy.AbstractSearchStrategy;
  }
});
Object.defineProperty(exports, "ReqFacade", {
  enumerable: true,
  get: function () {
    return _abstract_search_strategy.ReqFacade;
  }
});
Object.defineProperty(exports, "DefaultSearchCapabilities", {
  enumerable: true,
  get: function () {
    return _default_search_capabilities.DefaultSearchCapabilities;
  }
});
exports.config = void 0;

var _config = require("./config");

var _plugin = require("./plugin");

var _validation_telemetry = require("./validation_telemetry");

var _abstract_search_strategy = require("./lib/search_strategies/strategies/abstract_search_strategy");

var _default_search_capabilities = require("./lib/search_strategies/default_search_capabilities");

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
  deprecations: ({
    unused,
    renameFromRoot
  }) => [// In Kibana v7.8 plugin id was renamed from 'metrics' to 'vis_type_timeseries':
  renameFromRoot('metrics.enabled', 'vis_type_timeseries.enabled', true), renameFromRoot('metrics.chartResolution', 'vis_type_timeseries.chartResolution', true), renameFromRoot('metrics.minimumBucketSize', 'vis_type_timeseries.minimumBucketSize', true), // Unused properties which should be removed after releasing Kibana v8.0:
  unused('chartResolution'), unused('minimumBucketSize')],
  schema: _config.config
};
exports.config = config;

function plugin(initializerContext) {
  return new _plugin.VisTypeTimeseriesPlugin(initializerContext);
}