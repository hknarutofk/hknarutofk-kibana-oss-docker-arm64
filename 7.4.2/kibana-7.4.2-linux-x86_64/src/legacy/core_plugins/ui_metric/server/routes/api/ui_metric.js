"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeReport = storeReport;
exports.registerUiMetricRoute = registerUiMetricRoute;

var _joi = _interopRequireDefault(require("joi"));

var _boom = _interopRequireDefault(require("boom"));

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
async function storeReport(server, report) {
  const {
    getSavedObjectsRepository
  } = server.savedObjects;
  const {
    callWithInternalUser
  } = server.plugins.elasticsearch.getCluster('admin');
  const internalRepository = getSavedObjectsRepository(callWithInternalUser);
  const metricKeys = Object.keys(report.uiStatsMetrics);
  return Promise.all(metricKeys.map(async key => {
    const metric = report.uiStatsMetrics[key];
    const {
      appName,
      eventName
    } = metric;
    const savedObjectId = `${appName}:${eventName}`;
    return internalRepository.incrementCounter('ui-metric', savedObjectId, 'count');
  }));
}

function registerUiMetricRoute(server) {
  server.route({
    method: 'POST',
    path: '/api/telemetry/report',
    options: {
      validate: {
        payload: _joi.default.object({
          report: _joi.default.object({
            uiStatsMetrics: _joi.default.object().pattern(/.*/, _joi.default.object({
              key: _joi.default.string().required(),
              type: _joi.default.string().required(),
              appName: _joi.default.string().required(),
              eventName: _joi.default.string().required(),
              stats: _joi.default.object({
                min: _joi.default.number(),
                sum: _joi.default.number(),
                max: _joi.default.number(),
                avg: _joi.default.number()
              }).allow(null)
            })).allow(null)
          })
        })
      }
    },
    handler: async (req, h) => {
      const {
        report
      } = req.payload;

      try {
        await storeReport(server, report);
        return {};
      } catch (error) {
        return new _boom.default('Something went wrong', {
          statusCode: error.status
        });
      }
    }
  });
}