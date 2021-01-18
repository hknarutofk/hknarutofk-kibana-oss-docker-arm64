"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildNodeParams = buildNodeParams;
exports.toElasticsearchQuery = toElasticsearchQuery;

var _node_types = require("../node_types");

var ast = _interopRequireWildcard(require("../ast"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
function buildNodeParams(fieldName, points) {
  const fieldNameArg = _node_types.nodeTypes.literal.buildNode(fieldName);

  const args = points.map(point => {
    const latLon = `${point.lat}, ${point.lon}`;
    return _node_types.nodeTypes.literal.buildNode(latLon);
  });
  return {
    arguments: [fieldNameArg, ...args]
  };
}

function toElasticsearchQuery(node, indexPattern, config = {}, context = {}) {
  var _indexPattern$fields;

  const [fieldNameArg, ...points] = node.arguments;
  const fullFieldNameArg = { ...fieldNameArg,
    value: (context === null || context === void 0 ? void 0 : context.nested) ? `${context.nested.path}.${fieldNameArg.value}` : fieldNameArg.value
  };

  const fieldName = _node_types.nodeTypes.literal.toElasticsearchQuery(fullFieldNameArg);

  const fieldList = (_indexPattern$fields = indexPattern === null || indexPattern === void 0 ? void 0 : indexPattern.fields) !== null && _indexPattern$fields !== void 0 ? _indexPattern$fields : [];
  const field = fieldList.find(fld => fld.name === fieldName);
  const queryParams = {
    points: points.map(point => {
      return ast.toElasticsearchQuery(point, indexPattern, config, context);
    })
  };

  if (field === null || field === void 0 ? void 0 : field.scripted) {
    throw new Error(`Geo polygon query does not support scripted fields`);
  }

  return {
    geo_polygon: {
      [fieldName]: queryParams,
      ignore_unmapped: true
    }
  };
}