"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateRetries = void 0;

var _get_non_unique_entries = require("./get_non_unique_entries");

var _ = require("..");

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
const validateRetries = retries => {
  const nonUniqueRetryObjects = (0, _get_non_unique_entries.getNonUniqueEntries)(retries);

  if (nonUniqueRetryObjects.length > 0) {
    throw _.SavedObjectsErrorHelpers.createBadRequestError(`Non-unique retry objects: [${nonUniqueRetryObjects.join()}]`);
  }

  const destinationEntries = retries.filter(retry => retry.destinationId !== undefined).map(({
    type,
    destinationId
  }) => ({
    type,
    id: destinationId
  }));
  const nonUniqueRetryDestinations = (0, _get_non_unique_entries.getNonUniqueEntries)(destinationEntries);

  if (nonUniqueRetryDestinations.length > 0) {
    throw _.SavedObjectsErrorHelpers.createBadRequestError(`Non-unique retry destinations: [${nonUniqueRetryDestinations.join()}]`);
  }
};

exports.validateRetries = validateRetries;