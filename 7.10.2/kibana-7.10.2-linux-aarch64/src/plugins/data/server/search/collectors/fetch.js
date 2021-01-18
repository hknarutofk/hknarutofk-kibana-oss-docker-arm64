"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchProvider = fetchProvider;

var _operators = require("rxjs/operators");

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
function fetchProvider(config$) {
  return async callCluster => {
    const config = await config$.pipe((0, _operators.first)()).toPromise();
    const response = await callCluster('search', {
      index: config.kibana.index,
      body: {
        query: {
          term: {
            type: {
              value: 'search-telemetry'
            }
          }
        }
      },
      ignore: [404]
    });
    return response.hits.hits.length ? response.hits.hits[0]._source['search-telemetry'] : {
      successCount: 0,
      errorCount: 0,
      averageDuration: null
    };
  };
}