"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visDataRoutes = void 0;

var _get_vis_data = require("../lib/get_vis_data");

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
const visDataRoutes = server => {
  server.route({
    path: '/api/metrics/vis/data',
    method: 'POST',
    handler: async req => {
      try {
        return await (0, _get_vis_data.getVisData)(req);
      } catch (err) {
        if (err.isBoom && err.status === 401) {
          return err;
        }

        throw _boom.default.boomify(err, {
          statusCode: 500
        });
      }
    }
  });
};

exports.visDataRoutes = visDataRoutes;