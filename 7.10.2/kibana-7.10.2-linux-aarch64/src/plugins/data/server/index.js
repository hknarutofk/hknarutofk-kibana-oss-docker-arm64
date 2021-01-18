"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plugin = plugin;
Object.defineProperty(exports, "Plugin", {
  enumerable: true,
  get: function () {
    return _plugin.DataServerPlugin;
  }
});
Object.defineProperty(exports, "PluginSetup", {
  enumerable: true,
  get: function () {
    return _plugin.DataPluginSetup;
  }
});
Object.defineProperty(exports, "PluginStart", {
  enumerable: true,
  get: function () {
    return _plugin.DataPluginStart;
  }
});
Object.defineProperty(exports, "EsQueryConfig", {
  enumerable: true,
  get: function () {
    return _common.EsQueryConfig;
  }
});
Object.defineProperty(exports, "KueryNode", {
  enumerable: true,
  get: function () {
    return _common.KueryNode;
  }
});
Object.defineProperty(exports, "IFieldFormatsRegistry", {
  enumerable: true,
  get: function () {
    return _common.IFieldFormatsRegistry;
  }
});
Object.defineProperty(exports, "FieldFormatsGetConfigFn", {
  enumerable: true,
  get: function () {
    return _common.FieldFormatsGetConfigFn;
  }
});
Object.defineProperty(exports, "FieldFormatConfig", {
  enumerable: true,
  get: function () {
    return _common.FieldFormatConfig;
  }
});
Object.defineProperty(exports, "IFieldType", {
  enumerable: true,
  get: function () {
    return _common.IFieldType;
  }
});
Object.defineProperty(exports, "IFieldSubType", {
  enumerable: true,
  get: function () {
    return _common.IFieldSubType;
  }
});
Object.defineProperty(exports, "ES_FIELD_TYPES", {
  enumerable: true,
  get: function () {
    return _common.ES_FIELD_TYPES;
  }
});
Object.defineProperty(exports, "KBN_FIELD_TYPES", {
  enumerable: true,
  get: function () {
    return _common.KBN_FIELD_TYPES;
  }
});
Object.defineProperty(exports, "IndexPatternAttributes", {
  enumerable: true,
  get: function () {
    return _common.IndexPatternAttributes;
  }
});
Object.defineProperty(exports, "UI_SETTINGS", {
  enumerable: true,
  get: function () {
    return _common.UI_SETTINGS;
  }
});
Object.defineProperty(exports, "IndexPattern", {
  enumerable: true,
  get: function () {
    return _common.IndexPattern;
  }
});
Object.defineProperty(exports, "AggGroupLabels", {
  enumerable: true,
  get: function () {
    return _common.AggGroupLabels;
  }
});
Object.defineProperty(exports, "AggGroupName", {
  enumerable: true,
  get: function () {
    return _common.AggGroupName;
  }
});
Object.defineProperty(exports, "AggGroupNames", {
  enumerable: true,
  get: function () {
    return _common.AggGroupNames;
  }
});
Object.defineProperty(exports, "AggParam", {
  enumerable: true,
  get: function () {
    return _common.AggParam;
  }
});
Object.defineProperty(exports, "AggParamOption", {
  enumerable: true,
  get: function () {
    return _common.AggParamOption;
  }
});
Object.defineProperty(exports, "AggParamType", {
  enumerable: true,
  get: function () {
    return _common.AggParamType;
  }
});
Object.defineProperty(exports, "AggConfigOptions", {
  enumerable: true,
  get: function () {
    return _common.AggConfigOptions;
  }
});
Object.defineProperty(exports, "BUCKET_TYPES", {
  enumerable: true,
  get: function () {
    return _common.BUCKET_TYPES;
  }
});
Object.defineProperty(exports, "EsaggsExpressionFunctionDefinition", {
  enumerable: true,
  get: function () {
    return _common.EsaggsExpressionFunctionDefinition;
  }
});
Object.defineProperty(exports, "IAggConfig", {
  enumerable: true,
  get: function () {
    return _common.IAggConfig;
  }
});
Object.defineProperty(exports, "IAggConfigs", {
  enumerable: true,
  get: function () {
    return _common.IAggConfigs;
  }
});
Object.defineProperty(exports, "IAggType", {
  enumerable: true,
  get: function () {
    return _common.IAggType;
  }
});
Object.defineProperty(exports, "IFieldParamType", {
  enumerable: true,
  get: function () {
    return _common.IFieldParamType;
  }
});
Object.defineProperty(exports, "IMetricAggType", {
  enumerable: true,
  get: function () {
    return _common.IMetricAggType;
  }
});
Object.defineProperty(exports, "METRIC_TYPES", {
  enumerable: true,
  get: function () {
    return _common.METRIC_TYPES;
  }
});
Object.defineProperty(exports, "OptionedParamType", {
  enumerable: true,
  get: function () {
    return _common.OptionedParamType;
  }
});
Object.defineProperty(exports, "OptionedValueProp", {
  enumerable: true,
  get: function () {
    return _common.OptionedValueProp;
  }
});
Object.defineProperty(exports, "ParsedInterval", {
  enumerable: true,
  get: function () {
    return _common.ParsedInterval;
  }
});
Object.defineProperty(exports, "ISearchOptions", {
  enumerable: true,
  get: function () {
    return _common.ISearchOptions;
  }
});
Object.defineProperty(exports, "IEsSearchRequest", {
  enumerable: true,
  get: function () {
    return _common.IEsSearchRequest;
  }
});
Object.defineProperty(exports, "IEsSearchResponse", {
  enumerable: true,
  get: function () {
    return _common.IEsSearchResponse;
  }
});
Object.defineProperty(exports, "ES_SEARCH_STRATEGY", {
  enumerable: true,
  get: function () {
    return _common.ES_SEARCH_STRATEGY;
  }
});
Object.defineProperty(exports, "TabbedAggColumn", {
  enumerable: true,
  get: function () {
    return _common.TabbedAggColumn;
  }
});
Object.defineProperty(exports, "TabbedAggRow", {
  enumerable: true,
  get: function () {
    return _common.TabbedAggRow;
  }
});
Object.defineProperty(exports, "TabbedTable", {
  enumerable: true,
  get: function () {
    return _common.TabbedTable;
  }
});
Object.defineProperty(exports, "castEsToKbnFieldTypeName", {
  enumerable: true,
  get: function () {
    return _common.castEsToKbnFieldTypeName;
  }
});
Object.defineProperty(exports, "Filter", {
  enumerable: true,
  get: function () {
    return _common.Filter;
  }
});
Object.defineProperty(exports, "getTime", {
  enumerable: true,
  get: function () {
    return _common.getTime;
  }
});
Object.defineProperty(exports, "Query", {
  enumerable: true,
  get: function () {
    return _common.Query;
  }
});
Object.defineProperty(exports, "RefreshInterval", {
  enumerable: true,
  get: function () {
    return _common.RefreshInterval;
  }
});
Object.defineProperty(exports, "TimeRange", {
  enumerable: true,
  get: function () {
    return _common.TimeRange;
  }
});
Object.defineProperty(exports, "parseInterval", {
  enumerable: true,
  get: function () {
    return _common.parseInterval;
  }
});
Object.defineProperty(exports, "IndexPatternsFetcher", {
  enumerable: true,
  get: function () {
    return _index_patterns.IndexPatternsFetcher;
  }
});
Object.defineProperty(exports, "IndexPatternFieldDescriptor", {
  enumerable: true,
  get: function () {
    return _index_patterns.FieldDescriptor;
  }
});
Object.defineProperty(exports, "shouldReadFieldFromDocValues", {
  enumerable: true,
  get: function () {
    return _index_patterns.shouldReadFieldFromDocValues;
  }
});
Object.defineProperty(exports, "FieldDescriptor", {
  enumerable: true,
  get: function () {
    return _index_patterns.FieldDescriptor;
  }
});
Object.defineProperty(exports, "ISearchStrategy", {
  enumerable: true,
  get: function () {
    return _search.ISearchStrategy;
  }
});
Object.defineProperty(exports, "ISearchSetup", {
  enumerable: true,
  get: function () {
    return _search.ISearchSetup;
  }
});
Object.defineProperty(exports, "ISearchStart", {
  enumerable: true,
  get: function () {
    return _search.ISearchStart;
  }
});
Object.defineProperty(exports, "toSnakeCase", {
  enumerable: true,
  get: function () {
    return _search.toSnakeCase;
  }
});
Object.defineProperty(exports, "getAsyncOptions", {
  enumerable: true,
  get: function () {
    return _search.getAsyncOptions;
  }
});
Object.defineProperty(exports, "getDefaultSearchParams", {
  enumerable: true,
  get: function () {
    return _search.getDefaultSearchParams;
  }
});
Object.defineProperty(exports, "getShardTimeout", {
  enumerable: true,
  get: function () {
    return _search.getShardTimeout;
  }
});
Object.defineProperty(exports, "getTotalLoaded", {
  enumerable: true,
  get: function () {
    return _search.getTotalLoaded;
  }
});
Object.defineProperty(exports, "shimHitsTotal", {
  enumerable: true,
  get: function () {
    return _search.shimHitsTotal;
  }
});
Object.defineProperty(exports, "usageProvider", {
  enumerable: true,
  get: function () {
    return _search.usageProvider;
  }
});
Object.defineProperty(exports, "shimAbortSignal", {
  enumerable: true,
  get: function () {
    return _search.shimAbortSignal;
  }
});
Object.defineProperty(exports, "SearchUsage", {
  enumerable: true,
  get: function () {
    return _search.SearchUsage;
  }
});
exports.config = exports.search = exports.indexPatterns = exports.fieldFormats = exports.esQuery = exports.esKuery = exports.esFilters = void 0;

var _config = require("../config");

var _plugin = require("./plugin");

var _common = require("../common");

var _field_formats = require("../common/field_formats");

var _index_patterns = require("./index_patterns");

var _search = require("./search");

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

/*
 * Filter helper namespace:
 */
const esFilters = {
  buildQueryFilter: _common.buildQueryFilter,
  buildCustomFilter: _common.buildCustomFilter,
  buildEmptyFilter: _common.buildEmptyFilter,
  buildExistsFilter: _common.buildExistsFilter,
  buildFilter: _common.buildFilter,
  buildPhraseFilter: _common.buildPhraseFilter,
  buildPhrasesFilter: _common.buildPhrasesFilter,
  buildRangeFilter: _common.buildRangeFilter,
  isFilterDisabled: _common.isFilterDisabled
};
/*
 * esQuery and esKuery:
 */

exports.esFilters = esFilters;
const esKuery = {
  nodeTypes: _common.nodeTypes,
  fromKueryExpression: _common.fromKueryExpression,
  toElasticsearchQuery: _common.toElasticsearchQuery
};
exports.esKuery = esKuery;
const esQuery = {
  buildQueryFromFilters: _common.buildQueryFromFilters,
  getEsQueryConfig: _common.getEsQueryConfig,
  buildEsQuery: _common.buildEsQuery
};
exports.esQuery = esQuery;
const fieldFormats = {
  FieldFormatsRegistry: _field_formats.FieldFormatsRegistry,
  FieldFormat: _field_formats.FieldFormat,
  BoolFormat: _field_formats.BoolFormat,
  BytesFormat: _field_formats.BytesFormat,
  ColorFormat: _field_formats.ColorFormat,
  DurationFormat: _field_formats.DurationFormat,
  IpFormat: _field_formats.IpFormat,
  NumberFormat: _field_formats.NumberFormat,
  PercentFormat: _field_formats.PercentFormat,
  RelativeDateFormat: _field_formats.RelativeDateFormat,
  SourceFormat: _field_formats.SourceFormat,
  StaticLookupFormat: _field_formats.StaticLookupFormat,
  UrlFormat: _field_formats.UrlFormat,
  StringFormat: _field_formats.StringFormat,
  TruncateFormat: _field_formats.TruncateFormat
};
exports.fieldFormats = fieldFormats;
const indexPatterns = {
  isFilterable: _common.isFilterable,
  isNestedField: _common.isNestedField
};
exports.indexPatterns = indexPatterns;
// Search namespace
const search = {
  aggs: {
    CidrMask: _common.CidrMask,
    dateHistogramInterval: _common.dateHistogramInterval,
    intervalOptions: _common.intervalOptions,
    InvalidEsCalendarIntervalError: _common.InvalidEsCalendarIntervalError,
    InvalidEsIntervalFormatError: _common.InvalidEsIntervalFormatError,
    Ipv4Address: _common.Ipv4Address,
    isNumberType: _common.isNumberType,
    isStringType: _common.isStringType,
    isType: _common.isType,
    isValidEsInterval: _common.isValidEsInterval,
    isValidInterval: _common.isValidInterval,
    parentPipelineType: _common.parentPipelineType,
    parseEsInterval: _common.parseEsInterval,
    parseInterval: _common.parseInterval,
    propFilter: _common.propFilter,
    siblingPipelineType: _common.siblingPipelineType,
    termsAggFilter: _common.termsAggFilter,
    toAbsoluteDates: _common.toAbsoluteDates
  },
  getRequestInspectorStats: _common.getRequestInspectorStats,
  getResponseInspectorStats: _common.getResponseInspectorStats,
  tabifyAggResponse: _common.tabifyAggResponse,
  tabifyGetColumns: _common.tabifyGetColumns
};
/**
 * Types to be shared externally
 * @public
 */

exports.search = search;

/**
 * Static code to be shared externally
 * @public
 */
function plugin(initializerContext) {
  return new _plugin.DataServerPlugin(initializerContext);
}

const config = {
  exposeToBrowser: {
    autocomplete: true,
    search: true
  },
  schema: _config.configSchema
};
exports.config = config;