"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CONTAINS_SPACES", {
  enumerable: true,
  get: function get() {
    return _public.CONTAINS_SPACES;
  }
});
Object.defineProperty(exports, "getFromSavedObject", {
  enumerable: true,
  get: function get() {
    return _public.getFromSavedObject;
  }
});
Object.defineProperty(exports, "getRoutes", {
  enumerable: true,
  get: function get() {
    return _public.getRoutes;
  }
});
Object.defineProperty(exports, "isFilterable", {
  enumerable: true,
  get: function get() {
    return _public.isFilterable;
  }
});
Object.defineProperty(exports, "IndexPatternsProvider", {
  enumerable: true,
  get: function get() {
    return _public.IndexPatternsProvider;
  }
});
Object.defineProperty(exports, "validateIndexPattern", {
  enumerable: true,
  get: function get() {
    return _public.validateIndexPattern;
  }
});
Object.defineProperty(exports, "ILLEGAL_CHARACTERS", {
  enumerable: true,
  get: function get() {
    return _public.ILLEGAL_CHARACTERS;
  }
});
Object.defineProperty(exports, "INDEX_PATTERN_ILLEGAL_CHARACTERS", {
  enumerable: true,
  get: function get() {
    return _public.INDEX_PATTERN_ILLEGAL_CHARACTERS;
  }
});
Object.defineProperty(exports, "INDEX_PATTERN_ILLEGAL_CHARACTERS_VISIBLE", {
  enumerable: true,
  get: function get() {
    return _public.INDEX_PATTERN_ILLEGAL_CHARACTERS_VISIBLE;
  }
});
Object.defineProperty(exports, "IndexPatternAlreadyExists", {
  enumerable: true,
  get: function get() {
    return _public.IndexPatternAlreadyExists;
  }
});
Object.defineProperty(exports, "IndexPatternMissingIndices", {
  enumerable: true,
  get: function get() {
    return _public.IndexPatternMissingIndices;
  }
});
Object.defineProperty(exports, "NoDefaultIndexPattern", {
  enumerable: true,
  get: function get() {
    return _public.NoDefaultIndexPattern;
  }
});
Object.defineProperty(exports, "NoDefinedIndexPatterns", {
  enumerable: true,
  get: function get() {
    return _public.NoDefinedIndexPatterns;
  }
});
Object.defineProperty(exports, "mockFields", {
  enumerable: true,
  get: function get() {
    return _public.mockFields;
  }
});
Object.defineProperty(exports, "mockIndexPattern", {
  enumerable: true,
  get: function get() {
    return _public.mockIndexPattern;
  }
});
Object.defineProperty(exports, "Field", {
  enumerable: true,
  get: function get() {
    return _public.Field;
  }
});
Object.defineProperty(exports, "FieldType", {
  enumerable: true,
  get: function get() {
    return _public.FieldType;
  }
});
Object.defineProperty(exports, "IndexPattern", {
  enumerable: true,
  get: function get() {
    return _public.IndexPattern;
  }
});
Object.defineProperty(exports, "IndexPatterns", {
  enumerable: true,
  get: function get() {
    return _public.IndexPatterns;
  }
});
Object.defineProperty(exports, "StaticIndexPattern", {
  enumerable: true,
  get: function get() {
    return _public.StaticIndexPattern;
  }
});
exports.IndexPatternSelect = exports.formatHitProvider = exports.flattenHitWrapper = exports.FieldList = void 0;

var _legacy = require("../../../core_plugins/data/public/legacy");

var _public = require("../../../core_plugins/data/public");

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
 * Nothing to see here!
 *
 * Index Patterns have moved to the data plugin, and are being re-exported
 * from ui/index_patterns for backwards compatibility.
 */
var _data$indexPatterns = _legacy.setup.indexPatterns,
    FieldList = _data$indexPatterns.FieldList,
    flattenHitWrapper = _data$indexPatterns.flattenHitWrapper,
    formatHitProvider = _data$indexPatterns.formatHitProvider,
    IndexPatternSelect = _data$indexPatterns.IndexPatternSelect; // static code

exports.IndexPatternSelect = IndexPatternSelect;
exports.formatHitProvider = formatHitProvider;
exports.flattenHitWrapper = flattenHitWrapper;
exports.FieldList = FieldList;