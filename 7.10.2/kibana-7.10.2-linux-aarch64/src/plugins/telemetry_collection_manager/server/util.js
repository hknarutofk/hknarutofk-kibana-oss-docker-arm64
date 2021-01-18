"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isClusterOptedIn = void 0;

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
const isClusterOptedIn = clusterUsage => {
  var _clusterUsage$stack_s, _clusterUsage$stack_s2, _clusterUsage$stack_s3, _clusterUsage$stack_s4;

  return (clusterUsage === null || clusterUsage === void 0 ? void 0 : (_clusterUsage$stack_s = clusterUsage.stack_stats) === null || _clusterUsage$stack_s === void 0 ? void 0 : (_clusterUsage$stack_s2 = _clusterUsage$stack_s.kibana) === null || _clusterUsage$stack_s2 === void 0 ? void 0 : (_clusterUsage$stack_s3 = _clusterUsage$stack_s2.plugins) === null || _clusterUsage$stack_s3 === void 0 ? void 0 : (_clusterUsage$stack_s4 = _clusterUsage$stack_s3.telemetry) === null || _clusterUsage$stack_s4 === void 0 ? void 0 : _clusterUsage$stack_s4.opt_in_status) === true;
};

exports.isClusterOptedIn = isClusterOptedIn;