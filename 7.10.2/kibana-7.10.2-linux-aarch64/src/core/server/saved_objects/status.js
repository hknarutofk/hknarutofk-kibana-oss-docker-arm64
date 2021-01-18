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
const calculateStatus$ = (rawMigratorStatus$, elasticsearchStatus$) => {
  const migratorStatus$ = rawMigratorStatus$.pipe((0, _operators.map)(migrationStatus => {
    if (migrationStatus.status === 'waiting') {
      return {
        level: _status.ServiceStatusLevels.unavailable,
        summary: `SavedObjects service is waiting to start migrations`
      };
    } else if (migrationStatus.status === 'running') {
      return {
        level: _status.ServiceStatusLevels.unavailable,
        summary: `SavedObjects service is running migrations`
      };
    }

    const statusCounts = {
      migrated: 0,
      skipped: 0
    };

    if (migrationStatus.result) {
      migrationStatus.result.forEach(({
        status
      }) => {
        var _statusCounts$status;

        statusCounts[status] = ((_statusCounts$status = statusCounts[status]) !== null && _statusCounts$status !== void 0 ? _statusCounts$status : 0) + 1;
      });
    }

    return {
      level: _status.ServiceStatusLevels.available,
      summary: `SavedObjects service has completed migrations and is available`,
      meta: {
        migratedIndices: statusCounts
      }
    };
  }), (0, _operators.startWith)({
    level: _status.ServiceStatusLevels.unavailable,
    summary: `SavedObjects service is waiting to start migrations`
  }));
  return (0, _rxjs.combineLatest)([elasticsearchStatus$, migratorStatus$]).pipe((0, _operators.map)(([esStatus, migratorStatus]) => {
    if (esStatus.level >= _status.ServiceStatusLevels.unavailable) {
      return {
        level: _status.ServiceStatusLevels.unavailable,
        summary: `SavedObjects service is not available without a healthy Elasticearch connection`
      };
    } else if (migratorStatus.level === _status.ServiceStatusLevels.unavailable) {
      return migratorStatus;
    } else if (esStatus.level === _status.ServiceStatusLevels.degraded) {
      return {
        level: esStatus.level,
        summary: `SavedObjects service is degraded due to Elasticsearch: [${esStatus.summary}]`
      };
    } else {
      return migratorStatus;
    }
  }));
};

exports.calculateStatus$ = calculateStatus$;