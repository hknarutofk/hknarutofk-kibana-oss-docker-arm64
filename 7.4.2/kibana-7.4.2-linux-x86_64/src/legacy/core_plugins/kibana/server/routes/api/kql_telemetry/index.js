"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerKqlTelemetryApi = registerKqlTelemetryApi;

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
function registerKqlTelemetryApi(server) {
  server.route({
    path: '/api/kibana/kql_opt_in_telemetry',
    method: 'POST',
    config: {
      validate: {
        payload: _joi.default.object({
          opt_in: _joi.default.bool().required()
        })
      },
      tags: ['api']
    },
    handler: async function (request) {
      const {
        savedObjects: {
          getSavedObjectsRepository
        }
      } = server;
      const {
        callWithInternalUser
      } = server.plugins.elasticsearch.getCluster('admin');
      const internalRepository = getSavedObjectsRepository(callWithInternalUser);
      const {
        payload: {
          opt_in: optIn
        }
      } = request;
      const counterName = optIn ? 'optInCount' : 'optOutCount';

      try {
        await internalRepository.incrementCounter('kql-telemetry', 'kql-telemetry', counterName);
      } catch (error) {
        return new _boom.default('Something went wrong', {
          statusCode: error.status,
          data: {
            success: false
          }
        });
      }

      return {
        success: true
      };
    }
  });
}