"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerFindRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _lib = require("../lib");

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
const registerFindRoute = (router, managementServicePromise) => {
  router.get({
    path: '/api/kibana/management/saved_objects/_find',
    validate: {
      query: _configSchema.schema.object({
        perPage: _configSchema.schema.number({
          min: 0,
          defaultValue: 20
        }),
        page: _configSchema.schema.number({
          min: 0,
          defaultValue: 1
        }),
        type: _configSchema.schema.oneOf([_configSchema.schema.string(), _configSchema.schema.arrayOf(_configSchema.schema.string())]),
        search: _configSchema.schema.maybe(_configSchema.schema.string()),
        defaultSearchOperator: _configSchema.schema.oneOf([_configSchema.schema.literal('OR'), _configSchema.schema.literal('AND')], {
          defaultValue: 'OR'
        }),
        sortField: _configSchema.schema.maybe(_configSchema.schema.string()),
        hasReference: _configSchema.schema.maybe(_configSchema.schema.object({
          type: _configSchema.schema.string(),
          id: _configSchema.schema.string()
        })),
        fields: _configSchema.schema.oneOf([_configSchema.schema.string(), _configSchema.schema.arrayOf(_configSchema.schema.string())], {
          defaultValue: []
        })
      })
    }
  }, router.handleLegacyErrors(async (context, req, res) => {
    const managementService = await managementServicePromise;
    const {
      client
    } = context.core.savedObjects;
    const searchTypes = Array.isArray(req.query.type) ? req.query.type : [req.query.type];
    const includedFields = Array.isArray(req.query.fields) ? req.query.fields : [req.query.fields];
    const importAndExportableTypes = searchTypes.filter(type => managementService.isImportAndExportable(type));
    const searchFields = new Set();
    importAndExportableTypes.forEach(type => {
      const searchField = managementService.getDefaultSearchField(type);

      if (searchField) {
        searchFields.add(searchField);
      }
    });
    const findResponse = await client.find({ ...req.query,
      fields: undefined,
      searchFields: [...searchFields]
    });
    const enhancedSavedObjects = findResponse.saved_objects.map(so => (0, _lib.injectMetaAttributes)(so, managementService)).map(obj => {
      const result = { ...obj,
        attributes: {}
      };

      for (const field of includedFields) {
        result.attributes[field] = obj.attributes[field];
      }

      return result;
    });
    return res.ok({
      body: { ...findResponse,
        saved_objects: enhancedSavedObjects
      }
    });
  }));
};

exports.registerFindRoute = registerFindRoute;