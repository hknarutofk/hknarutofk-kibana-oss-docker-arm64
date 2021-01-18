"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimHitsTotal = shimHitsTotal;

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
 * Temporary workaround until https://github.com/elastic/kibana/issues/26356 is addressed.
 * Since we are setting `track_total_hits` in the request, `hits.total` will be an object
 * containing the `value`.
 *
 * @internal
 */
function shimHitsTotal(response) {
  var _value, _response$hits, _response$hits$total, _response$hits2;

  const total = (_value = (_response$hits = response.hits) === null || _response$hits === void 0 ? void 0 : (_response$hits$total = _response$hits.total) === null || _response$hits$total === void 0 ? void 0 : _response$hits$total.value) !== null && _value !== void 0 ? _value : (_response$hits2 = response.hits) === null || _response$hits2 === void 0 ? void 0 : _response$hits2.total;
  const hits = { ...response.hits,
    total
  };
  return { ...response,
    hits
  };
}