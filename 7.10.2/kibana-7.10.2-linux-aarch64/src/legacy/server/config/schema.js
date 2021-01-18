"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _os = _interopRequireDefault(require("os"));

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
const HANDLED_IN_NEW_PLATFORM = _joi.default.any().description('This key is handled in the new platform ONLY');

var _default = () => _joi.default.object({
  elastic: _joi.default.object({
    apm: HANDLED_IN_NEW_PLATFORM
  }).default(),
  pkg: _joi.default.object({
    version: _joi.default.string().default(_joi.default.ref('$version')),
    branch: _joi.default.string().default(_joi.default.ref('$branch')),
    buildNum: _joi.default.number().default(_joi.default.ref('$buildNum')),
    buildSha: _joi.default.string().default(_joi.default.ref('$buildSha'))
  }).default(),
  env: _joi.default.object({
    name: _joi.default.string().default(_joi.default.ref('$env')),
    dev: _joi.default.boolean().default(_joi.default.ref('$dev')),
    prod: _joi.default.boolean().default(_joi.default.ref('$prod'))
  }).default(),
  dev: HANDLED_IN_NEW_PLATFORM,
  pid: HANDLED_IN_NEW_PLATFORM,
  csp: HANDLED_IN_NEW_PLATFORM,
  server: _joi.default.object({
    name: _joi.default.string().default(_os.default.hostname()),
    // keep them for BWC, remove when not used in Legacy.
    // validation should be in sync with one in New platform.
    // https://github.com/elastic/kibana/blob/master/src/core/server/http/http_config.ts
    basePath: _joi.default.string().default('').allow('').regex(/(^$|^\/.*[^\/]$)/, `start with a slash, don't end with one`),
    host: _joi.default.string().hostname().default('localhost'),
    port: _joi.default.number().default(5601),
    rewriteBasePath: _joi.default.boolean().when('basePath', {
      is: '',
      then: _joi.default.default(false).valid(false),
      otherwise: _joi.default.default(false)
    }),
    autoListen: HANDLED_IN_NEW_PLATFORM,
    cors: HANDLED_IN_NEW_PLATFORM,
    customResponseHeaders: HANDLED_IN_NEW_PLATFORM,
    keepaliveTimeout: HANDLED_IN_NEW_PLATFORM,
    maxPayloadBytes: HANDLED_IN_NEW_PLATFORM,
    socketTimeout: HANDLED_IN_NEW_PLATFORM,
    ssl: HANDLED_IN_NEW_PLATFORM,
    compression: HANDLED_IN_NEW_PLATFORM,
    uuid: HANDLED_IN_NEW_PLATFORM,
    xsrf: HANDLED_IN_NEW_PLATFORM
  }).default(),
  uiSettings: HANDLED_IN_NEW_PLATFORM,
  logging: _joi.default.object().keys({
    appenders: HANDLED_IN_NEW_PLATFORM,
    loggers: HANDLED_IN_NEW_PLATFORM,
    root: HANDLED_IN_NEW_PLATFORM,
    silent: _joi.default.boolean().default(false),
    quiet: _joi.default.boolean().when('silent', {
      is: true,
      then: _joi.default.default(true).valid(true),
      otherwise: _joi.default.default(false)
    }),
    verbose: _joi.default.boolean().when('quiet', {
      is: true,
      then: _joi.default.valid(false).default(false),
      otherwise: _joi.default.default(false)
    }),
    events: _joi.default.any().default({}),
    dest: _joi.default.string().default('stdout'),
    filter: _joi.default.any().default({}),
    json: _joi.default.boolean().when('dest', {
      is: 'stdout',
      then: _joi.default.default(!process.stdout.isTTY),
      otherwise: _joi.default.default(true)
    }),
    timezone: _joi.default.string().allow(false).default('UTC'),
    rotate: _joi.default.object().keys({
      enabled: _joi.default.boolean().default(false),
      everyBytes: _joi.default.number() // > 1MB
      .greater(1048576) // < 1GB
      .less(1073741825) // 10MB
      .default(10485760),
      keepFiles: _joi.default.number().greater(2).less(1024).default(7),
      pollingInterval: _joi.default.number().greater(5000).less(3600000).default(10000),
      usePolling: _joi.default.boolean().default(false)
    }).default()
  }).default(),
  ops: _joi.default.object({
    interval: _joi.default.number().default(5000),
    cGroupOverrides: HANDLED_IN_NEW_PLATFORM
  }).default(),
  // still used by the legacy i18n mixin
  plugins: _joi.default.object({
    paths: _joi.default.array().items(_joi.default.string()).default([]),
    scanDirs: _joi.default.array().items(_joi.default.string()).default([]),
    initialize: _joi.default.boolean().default(true)
  }).default(),
  path: HANDLED_IN_NEW_PLATFORM,
  stats: HANDLED_IN_NEW_PLATFORM,
  status: HANDLED_IN_NEW_PLATFORM,
  map: HANDLED_IN_NEW_PLATFORM,
  i18n: _joi.default.object({
    locale: _joi.default.string().default('en')
  }).default(),
  // temporarily moved here from the (now deleted) kibana legacy plugin
  kibana: _joi.default.object({
    enabled: _joi.default.boolean().default(true),
    index: _joi.default.string().default('.kibana'),
    autocompleteTerminateAfter: _joi.default.number().integer().min(1).default(100000),
    // TODO Also allow units here like in elasticsearch config once this is moved to the new platform
    autocompleteTimeout: _joi.default.number().integer().min(1).default(1000)
  }).default(),
  savedObjects: HANDLED_IN_NEW_PLATFORM
}).default();

exports.default = _default;
module.exports = exports.default;