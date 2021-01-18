"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateStatus$ = void 0;

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _status = require("../status");

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
const calculateStatus$ = esNodesCompatibility$ => (0, _rxjs.merge)((0, _rxjs.of)({
  level: _status.ServiceStatusLevels.unavailable,
  summary: `Waiting for Elasticsearch`,
  meta: {
    warningNodes: [],
    incompatibleNodes: []
  }
}), esNodesCompatibility$.pipe((0, _operators.map)(({
  isCompatible,
  message,
  incompatibleNodes,
  warningNodes
}) => {
  if (!isCompatible) {
    return {
      level: _status.ServiceStatusLevels.critical,
      summary: // Message should always be present, but this is a safe fallback
      message !== null && message !== void 0 ? message : `Some Elasticsearch nodes are not compatible with this version of Kibana`,
      meta: {
        warningNodes,
        incompatibleNodes
      }
    };
  } else if (warningNodes.length > 0) {
    return {
      level: _status.ServiceStatusLevels.available,
      summary: // Message should always be present, but this is a safe fallback
      message !== null && message !== void 0 ? message : `Some Elasticsearch nodes are running different versions than this version of Kibana`,
      meta: {
        warningNodes,
        incompatibleNodes
      }
    };
  }

  return {
    level: _status.ServiceStatusLevels.available,
    summary: `Elasticsearch is available`,
    meta: {
      warningNodes: [],
      incompatibleNodes: []
    }
  };
})));

exports.calculateStatus$ = calculateStatus$;