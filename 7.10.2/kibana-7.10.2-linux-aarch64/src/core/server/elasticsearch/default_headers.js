"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_HEADERS = void 0;

var _std = require("@kbn/std");

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
const DEFAULT_HEADERS = (0, _std.deepFreeze)({
  // Elasticsearch uses this to identify when a request is coming from Kibana, to allow Kibana to
  // access system indices using the standard ES APIs without logging a warning. After migrating to
  // use the new system index APIs, this header can be removed.
  'x-elastic-product-origin': 'kibana'
});
exports.DEFAULT_HEADERS = DEFAULT_HEADERS;