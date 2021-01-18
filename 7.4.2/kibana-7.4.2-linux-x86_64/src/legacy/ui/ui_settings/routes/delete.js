"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRoute = void 0;

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
async function handleRequest(request) {
  const {
    key
  } = request.params;
  const uiSettings = request.getUiSettingsService();
  await uiSettings.remove(key);
  return {
    settings: await uiSettings.getUserProvided()
  };
}

const deleteRoute = {
  path: '/api/kibana/settings/{key}',
  method: 'DELETE',
  handler: async (request, h) => {
    return h.response((await handleRequest(request)));
  }
};
exports.deleteRoute = deleteRoute;