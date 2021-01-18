"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "UsageCollectionSetup", {
  enumerable: true,
  get: function () {
    return _plugin.UsageCollectionSetup;
  }
});
Object.defineProperty(exports, "AllowedSchemaTypes", {
  enumerable: true,
  get: function () {
    return _collector.AllowedSchemaTypes;
  }
});
Object.defineProperty(exports, "MakeSchemaFrom", {
  enumerable: true,
  get: function () {
    return _collector.MakeSchemaFrom;
  }
});
Object.defineProperty(exports, "SchemaField", {
  enumerable: true,
  get: function () {
    return _collector.SchemaField;
  }
});
Object.defineProperty(exports, "CollectorOptions", {
  enumerable: true,
  get: function () {
    return _collector.CollectorOptions;
  }
});
Object.defineProperty(exports, "Collector", {
  enumerable: true,
  get: function () {
    return _collector.Collector;
  }
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function () {
    return _config.config;
  }
});
exports.plugin = void 0;

var _plugin = require("./plugin");

var _collector = require("./collector");

var _config = require("./config");

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
const plugin = initializerContext => new _plugin.UsageCollectionPlugin(initializerContext);

exports.plugin = plugin;