"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.esaggs = void 0;

var _lodash = require("lodash");

var _i18n = require("@kbn/i18n");

var _courier = require("ui/vis/request_handlers/courier");

var _agg_configs = require("ui/vis/agg_configs.js");

var _utilities = require("ui/visualize/loader/pipeline_helpers/utilities");

var _chrome = _interopRequireDefault(require("ui/chrome"));

var _search_source = require("ui/courier/search_source");

var _query_filter = require("ui/filter_manager/query_filter");

var _public = require("../../../data/public");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var courierRequestHandlerProvider = _courier.CourierRequestHandlerProvider;
var courierRequestHandler = courierRequestHandlerProvider().handler;
var name = 'esaggs';

var esaggs = function esaggs() {
  return {
    name: name,
    type: 'kibana_datatable',
    context: {
      types: ['kibana_context', 'null']
    },
    help: _i18n.i18n.translate('interpreter.functions.esaggs.help', {
      defaultMessage: 'Run AggConfig aggregation'
    }),
    args: {
      index: {
        types: ['string', 'null'],
        default: null,
        help: ''
      },
      metricsAtAllLevels: {
        types: ['boolean'],
        default: false,
        help: ''
      },
      partialRows: {
        types: ['boolean'],
        default: false,
        help: ''
      },
      includeFormatHints: {
        types: ['boolean'],
        default: false,
        help: ''
      },
      aggConfigs: {
        types: ['string'],
        default: '""',
        help: ''
      }
    },
    fn: function () {
      var _fn = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(context, args, _ref) {
        var inspectorAdapters, abortSignal, $injector, Private, indexPatterns, SearchSource, queryFilter, aggConfigsState, indexPattern, aggs, searchSource, response, table;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                inspectorAdapters = _ref.inspectorAdapters, abortSignal = _ref.abortSignal;
                _context.next = 3;
                return _chrome.default.dangerouslyGetActiveInjector();

              case 3:
                $injector = _context.sent;
                Private = $injector.get('Private');
                indexPatterns = Private(_public.IndexPatternsProvider);
                SearchSource = Private(_search_source.SearchSourceProvider);
                queryFilter = Private(_query_filter.FilterBarQueryFilterProvider);
                aggConfigsState = JSON.parse(args.aggConfigs);
                _context.next = 11;
                return indexPatterns.get(args.index);

              case 11:
                indexPattern = _context.sent;
                aggs = new _agg_configs.AggConfigs(indexPattern, aggConfigsState); // we should move searchSource creation inside courier request handler

                searchSource = new SearchSource();
                searchSource.setField('index', indexPattern);
                searchSource.setField('size', 0);
                _context.next = 18;
                return courierRequestHandler({
                  searchSource: searchSource,
                  aggs: aggs,
                  timeRange: (0, _lodash.get)(context, 'timeRange', undefined),
                  query: (0, _lodash.get)(context, 'query', undefined),
                  filters: (0, _lodash.get)(context, 'filters', undefined),
                  forceFetch: true,
                  metricsAtAllLevels: args.metricsAtAllLevels,
                  partialRows: args.partialRows,
                  inspectorAdapters: inspectorAdapters,
                  queryFilter: queryFilter,
                  abortSignal: abortSignal
                });

              case 18:
                response = _context.sent;
                table = {
                  type: 'kibana_datatable',
                  rows: response.rows,
                  columns: response.columns.map(function (column) {
                    var cleanedColumn = {
                      id: column.id,
                      name: column.name
                    };

                    if (args.includeFormatHints) {
                      cleanedColumn.formatHint = (0, _utilities.createFormat)(column.aggConfig);
                    }

                    return cleanedColumn;
                  })
                };
                return _context.abrupt("return", table);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fn(_x, _x2, _x3) {
        return _fn.apply(this, arguments);
      }

      return fn;
    }()
  };
};

exports.esaggs = esaggs;