"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitByEverything = splitByEverything;

var _lodash = _interopRequireDefault(require("lodash"));

var _esQuery = require("@kbn/es-query");

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
function splitByEverything(req, panel, esQueryConfig, indexPattern) {
  return next => doc => {
    panel.series.filter(c => !(c.aggregate_by && c.aggregate_function)).forEach(column => {
      if (column.filter) {
        _lodash.default.set(doc, `aggs.pivot.aggs.${column.id}.filter`, (0, _esQuery.buildEsQuery)(indexPattern, [column.filter], [], esQueryConfig));
      } else {
        _lodash.default.set(doc, `aggs.pivot.aggs.${column.id}.filter.match_all`, {});
      }
    });
    return next(doc);
  };
}