"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateIndexPattern = validateIndexPattern;
exports.isFilterable = isFilterable;
exports.getFromSavedObject = getFromSavedObject;
exports.getRoutes = getRoutes;
exports.mockIndexPattern = exports.mockFields = exports.INDEX_PATTERN_ILLEGAL_CHARACTERS = exports.INDEX_PATTERN_ILLEGAL_CHARACTERS_VISIBLE = exports.CONTAINS_SPACES = exports.ILLEGAL_CHARACTERS = void 0;

var _lodash = require("lodash");

var _kbn_field_types = require("../../../../utils/kbn_field_types");

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
// @ts-ignore
// @ts-ignore
var ILLEGAL_CHARACTERS = 'ILLEGAL_CHARACTERS';
exports.ILLEGAL_CHARACTERS = ILLEGAL_CHARACTERS;
var CONTAINS_SPACES = 'CONTAINS_SPACES';
exports.CONTAINS_SPACES = CONTAINS_SPACES;
var INDEX_PATTERN_ILLEGAL_CHARACTERS_VISIBLE = ['\\', '/', '?', '"', '<', '>', '|'];
exports.INDEX_PATTERN_ILLEGAL_CHARACTERS_VISIBLE = INDEX_PATTERN_ILLEGAL_CHARACTERS_VISIBLE;
var INDEX_PATTERN_ILLEGAL_CHARACTERS = INDEX_PATTERN_ILLEGAL_CHARACTERS_VISIBLE.concat(' ');
exports.INDEX_PATTERN_ILLEGAL_CHARACTERS = INDEX_PATTERN_ILLEGAL_CHARACTERS;

function findIllegalCharacters(indexPattern) {
  var illegalCharacters = INDEX_PATTERN_ILLEGAL_CHARACTERS_VISIBLE.reduce(function (chars, char) {
    if (indexPattern.includes(char)) {
      chars.push(char);
    }

    return chars;
  }, []);
  return illegalCharacters;
}

function indexPatternContainsSpaces(indexPattern) {
  return indexPattern.includes(' ');
}

function validateIndexPattern(indexPattern) {
  var errors = {};
  var illegalCharacters = findIllegalCharacters(indexPattern);

  if (illegalCharacters.length) {
    errors[ILLEGAL_CHARACTERS] = illegalCharacters;
  }

  if (indexPatternContainsSpaces(indexPattern)) {
    errors[CONTAINS_SPACES] = true;
  }

  return errors;
}

var filterableTypes = _kbn_field_types.KBN_FIELD_TYPES.filter(function (type) {
  return type.filterable;
}).map(function (type) {
  return type.name;
});

function isFilterable(field) {
  return field.name === '_id' || field.scripted || field.searchable && filterableTypes.includes(field.type);
}

function getFromSavedObject(savedObject) {
  if ((0, _lodash.get)(savedObject, 'attributes.fields') === undefined) {
    return;
  }

  return {
    id: savedObject.id,
    fields: JSON.parse(savedObject.attributes.fields),
    title: savedObject.attributes.title
  };
}

function getRoutes() {
  return {
    edit: '/management/kibana/index_patterns/{{id}}',
    addField: '/management/kibana/index_patterns/{{id}}/create-field',
    indexedFields: '/management/kibana/index_patterns/{{id}}?_a=(tab:indexedFields)',
    scriptedFields: '/management/kibana/index_patterns/{{id}}?_a=(tab:scriptedFields)',
    sourceFilters: '/management/kibana/index_patterns/{{id}}?_a=(tab:sourceFilters)'
  };
}

var mockFields = [{
  name: 'machine.os',
  esTypes: ['text'],
  type: 'string',
  aggregatable: false,
  searchable: false,
  filterable: true
}, {
  name: 'machine.os.raw',
  type: 'string',
  esTypes: ['keyword'],
  aggregatable: true,
  searchable: true,
  filterable: true
}, {
  name: 'not.filterable',
  type: 'string',
  esTypes: ['text'],
  aggregatable: true,
  searchable: false,
  filterable: false
}, {
  name: 'bytes',
  type: 'number',
  esTypes: ['long'],
  aggregatable: true,
  searchable: true,
  filterable: true
}, {
  name: '@timestamp',
  type: 'date',
  esTypes: ['date'],
  aggregatable: true,
  searchable: true,
  filterable: true
}, {
  name: 'clientip',
  type: 'ip',
  esTypes: ['ip'],
  aggregatable: true,
  searchable: true,
  filterable: true
}, {
  name: 'bool.field',
  type: 'boolean',
  esTypes: ['boolean'],
  aggregatable: true,
  searchable: true,
  filterable: true
}];
exports.mockFields = mockFields;
var mockIndexPattern = {
  id: 'logstash-*',
  fields: mockFields,
  title: 'logstash-*',
  timeFieldName: '@timestamp'
};
exports.mockIndexPattern = mockIndexPattern;