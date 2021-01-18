"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTableAggs = exports.getFormat = exports.createFormat = void 0;

var _i18n = require("@kbn/i18n");

var _lodash = require("lodash");

var _field_format = require("../../../../field_formats/field_format");

var _get_columns = require("../../../agg_response/tabify/_get_columns");

var _chrome = _interopRequireDefault(require("../../../chrome"));

var _field_formats = require("../../../registry/field_formats");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isTermsFieldFormat(serializedFieldFormat) {
  return serializedFieldFormat.id === 'terms';
}

var config = _chrome.default.getUiSettingsClient();

var getConfig = function getConfig() {
  return config.get.apply(config, arguments);
};

var getDefaultFieldFormat = function getDefaultFieldFormat() {
  return {
    convert: _lodash.identity
  };
};

var getFieldFormat = function getFieldFormat(id) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var Format = _field_formats.fieldFormats.byId[id];

  if (Format) {
    return new Format(params, getConfig);
  } else {
    return getDefaultFieldFormat();
  }
};

var createFormat = function createFormat(agg) {
  var format = agg.params.field ? agg.params.field.format.toJSON() : {};
  var formats = {
    date_range: function date_range() {
      return {
        id: 'string'
      };
    },
    percentile_ranks: function percentile_ranks() {
      return {
        id: 'percent'
      };
    },
    count: function count() {
      return {
        id: 'number'
      };
    },
    cardinality: function cardinality() {
      return {
        id: 'number'
      };
    },
    date_histogram: function date_histogram() {
      return {
        id: 'date',
        params: {
          pattern: agg.buckets.getScaledDateFormat()
        }
      };
    },
    terms: function terms() {
      return {
        id: 'terms',
        params: _objectSpread({
          id: format.id,
          otherBucketLabel: agg.params.otherBucketLabel,
          missingBucketLabel: agg.params.missingBucketLabel
        }, format.params)
      };
    },
    range: function range() {
      return {
        id: 'range',
        params: _objectSpread({
          id: format.id
        }, format.params)
      };
    }
  };
  return formats[agg.type.name] ? formats[agg.type.name]() : format;
};

exports.createFormat = createFormat;

var getFormat = function getFormat() {
  var mapping = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!mapping) {
    return getDefaultFieldFormat();
  }

  var id = mapping.id;

  if (id === 'range') {
    var RangeFormat = _field_format.FieldFormat.from(function (range) {
      var format = getFieldFormat(id, mapping.params);
      return _i18n.i18n.translate('common.ui.aggTypes.buckets.ranges.rangesFormatMessage', {
        defaultMessage: '{from} to {to}',
        values: {
          from: format.convert(range.gte),
          to: format.convert(range.lt)
        }
      });
    });

    return new RangeFormat();
  } else if (isTermsFieldFormat(mapping) && mapping.params) {
    var params = mapping.params;
    return {
      getConverterFor: function getConverterFor(type) {
        var format = getFieldFormat(params.id, mapping.params);
        return function (val) {
          if (val === '__other__') {
            return params.otherBucketLabel;
          }

          if (val === '__missing__') {
            return params.missingBucketLabel;
          }

          var parsedUrl = {
            origin: window.location.origin,
            pathname: window.location.pathname,
            basePath: _chrome.default.getBasePath()
          };
          return format.convert(val, undefined, undefined, parsedUrl);
        };
      },
      convert: function convert(val, type) {
        var format = getFieldFormat(params.id, mapping.params);

        if (val === '__other__') {
          return params.otherBucketLabel;
        }

        if (val === '__missing__') {
          return params.missingBucketLabel;
        }

        var parsedUrl = {
          origin: window.location.origin,
          pathname: window.location.pathname,
          basePath: _chrome.default.getBasePath()
        };
        return format.convert(val, type, undefined, parsedUrl);
      }
    };
  } else {
    return getFieldFormat(id, mapping.params);
  }
};

exports.getFormat = getFormat;

var getTableAggs = function getTableAggs(vis) {
  if (!vis.aggs || !vis.aggs.getResponseAggs) {
    return [];
  }

  var columns = (0, _get_columns.tabifyGetColumns)(vis.aggs.getResponseAggs(), !vis.isHierarchical());
  return columns.map(function (c) {
    return c.aggConfig;
  });
};

exports.getTableAggs = getTableAggs;