"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INDEXES_SEPARATOR = exports.MAX_BUCKETS_SETTING = void 0;

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
const MAX_BUCKETS_SETTING = 'metrics:max_buckets';
exports.MAX_BUCKETS_SETTING = MAX_BUCKETS_SETTING;
const INDEXES_SEPARATOR = ',';
exports.INDEXES_SEPARATOR = INDEXES_SEPARATOR;