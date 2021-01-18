"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoutes = void 0;

var _es_config = require("./api/console/es_config");

var _proxy = require("./api/console/proxy");

var _spec_definitions = require("./api/console/spec_definitions");

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
const registerRoutes = dependencies => {
  (0, _es_config.registerEsConfigRoute)(dependencies);
  (0, _proxy.registerProxyRoute)(dependencies);
  (0, _spec_definitions.registerSpecDefinitionsRoute)(dependencies);
};

exports.registerRoutes = registerRoutes;