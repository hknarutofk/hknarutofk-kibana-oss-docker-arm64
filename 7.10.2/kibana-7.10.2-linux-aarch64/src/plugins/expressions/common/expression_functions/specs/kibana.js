"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kibana = void 0;

var _i18n = require("@kbn/i18n");

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
const toArray = query => !query ? [] : Array.isArray(query) ? query : [query];

const kibana = {
  name: 'kibana',
  type: 'kibana_context',
  inputTypes: ['kibana_context', 'null'],
  help: _i18n.i18n.translate('expressions.functions.kibana.help', {
    defaultMessage: 'Gets kibana global context'
  }),
  args: {},

  fn(input, _, {
    search = {}
  }) {
    const output = { // TODO: This spread is left here for legacy reasons, possibly Lens uses it.
      // TODO: But it shouldn't be need.
      ...input,
      type: 'kibana_context',
      query: [...toArray(search.query), ...toArray((input || {}).query)],
      filters: [...(search.filters || []), ...((input || {}).filters || [])],
      timeRange: search.timeRange || (input ? input.timeRange : undefined)
    };
    return output;
  }

};
exports.kibana = kibana;