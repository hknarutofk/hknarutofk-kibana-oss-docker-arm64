"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findObjectByTitle = findObjectByTitle;

var _lodash = require("lodash");

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

/**
 * Returns an object matching a given title
 *
 * @param savedObjectsClient {SavedObjectsClientContract}
 * @param type {string}
 * @param title {string}
 * @returns {Promise<SimpleSavedObject|undefined>}
 */
function findObjectByTitle(savedObjectsClient, type, title) {
  if (!title) {
    return Promise.resolve();
  } // Elastic search will return the most relevant results first, which means exact matches should come
  // first, and so we shouldn't need to request everything. Using 10 just to be on the safe side.


  return savedObjectsClient.find({
    type: type,
    perPage: 10,
    search: "\"".concat(title, "\""),
    searchFields: ['title'],
    fields: ['title']
  }).then(function (response) {
    var match = (0, _lodash.find)(response.savedObjects, function (obj) {
      return obj.get('title').toLowerCase() === title.toLowerCase();
    });
    return match;
  });
}