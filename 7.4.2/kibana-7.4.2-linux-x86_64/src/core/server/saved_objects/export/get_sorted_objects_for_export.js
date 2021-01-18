"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSortedObjectsForExport = getSortedObjectsForExport;

var _boom = _interopRequireDefault(require("boom"));

var _streams = require("../../../../legacy/utils/streams");

var _inject_nested_depdendencies = require("./inject_nested_depdendencies");

var _sort_objects = require("./sort_objects");

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
async function fetchObjectsToExport({
  objects,
  types,
  exportSizeLimit,
  savedObjectsClient,
  namespace
}) {
  if (objects && objects.length > 0) {
    if (objects.length > exportSizeLimit) {
      throw _boom.default.badRequest(`Can't export more than ${exportSizeLimit} objects`);
    }

    const bulkGetResult = await savedObjectsClient.bulkGet(objects, {
      namespace
    });
    const erroredObjects = bulkGetResult.saved_objects.filter(obj => !!obj.error);

    if (erroredObjects.length) {
      const err = _boom.default.badRequest();

      err.output.payload.attributes = {
        objects: erroredObjects
      };
      throw err;
    }

    return bulkGetResult.saved_objects;
  } else if (types && types.length > 0) {
    const findResponse = await savedObjectsClient.find({
      type: types,
      sortField: '_id',
      sortOrder: 'asc',
      perPage: exportSizeLimit,
      namespace
    });

    if (findResponse.total > exportSizeLimit) {
      throw _boom.default.badRequest(`Can't export more than ${exportSizeLimit} objects`);
    }

    return findResponse.saved_objects;
  } else {
    throw _boom.default.badRequest('Either `type` or `objects` are required.');
  }
}

async function getSortedObjectsForExport({
  types,
  objects,
  savedObjectsClient,
  exportSizeLimit,
  includeReferencesDeep = false,
  namespace
}) {
  const objectsToExport = await fetchObjectsToExport({
    types,
    objects,
    savedObjectsClient,
    exportSizeLimit,
    namespace
  });
  const exportedObjects = (0, _sort_objects.sortObjects)(includeReferencesDeep ? await (0, _inject_nested_depdendencies.injectNestedDependencies)(objectsToExport, savedObjectsClient, namespace) : objectsToExport);
  return (0, _streams.createListStream)(exportedObjects);
}