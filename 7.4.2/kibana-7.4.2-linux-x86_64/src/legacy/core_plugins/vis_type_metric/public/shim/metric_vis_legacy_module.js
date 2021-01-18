"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initMetricVisLegacyModule = void 0;

var _lodash = require("lodash");

var _modules = require("ui/modules");

require("ui/directives/inequality");

var _metric_vis_params = require("../components/metric_vis_params");

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

/** @internal */
var initMetricVisLegacyModule = (0, _lodash.once)(function () {
  _modules.uiModules.get('kibana/metric_vis', ['kibana']).directive('metricVisParams', _metric_vis_params.MetricVisParams);
});
exports.initMetricVisLegacyModule = initMetricVisLegacyModule;