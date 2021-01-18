"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateHistogram = dateHistogram;

var _lodash = _interopRequireDefault(require("lodash"));

var _server = require("../../../../../../data/server");

var _get_bucket_size = require("../../helpers/get_bucket_size");

var _get_timerange = require("../../helpers/get_timerange");

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
function dateHistogram(req, panel, annotation, esQueryConfig, indexPatternObject, capabilities) {
  return next => doc => {
    const timeField = annotation.time_field;
    const {
      bucketSize,
      intervalString
    } = (0, _get_bucket_size.getBucketSize)(req, 'auto', capabilities);
    const {
      from,
      to
    } = (0, _get_timerange.getTimerange)(req);
    const timezone = capabilities.searchTimezone;

    _lodash.default.set(doc, `aggs.${annotation.id}.date_histogram`, {
      field: timeField,
      min_doc_count: 0,
      time_zone: timezone,
      extended_bounds: {
        min: from.valueOf(),
        max: to.valueOf() - bucketSize * 1000
      },
      ...(0, _server.dateHistogramInterval)(intervalString)
    });

    return next(doc);
  };
}