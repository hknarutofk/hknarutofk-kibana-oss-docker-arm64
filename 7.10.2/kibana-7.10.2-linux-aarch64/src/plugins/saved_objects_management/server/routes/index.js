"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoutes = registerRoutes;

var _find = require("./find");

var _get = require("./get");

var _scroll_count = require("./scroll_count");

var _scroll_export = require("./scroll_export");

var _relationships = require("./relationships");

var _get_allowed_types = require("./get_allowed_types");

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
function registerRoutes({
  http,
  managementServicePromise
}) {
  const router = http.createRouter();
  (0, _find.registerFindRoute)(router, managementServicePromise);
  (0, _get.registerGetRoute)(router, managementServicePromise);
  (0, _scroll_count.registerScrollForCountRoute)(router);
  (0, _scroll_export.registerScrollForExportRoute)(router);
  (0, _relationships.registerRelationshipsRoute)(router, managementServicePromise);
  (0, _get_allowed_types.registerGetAllowedTypesRoute)(router);
}