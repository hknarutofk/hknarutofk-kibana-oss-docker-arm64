"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMetricsFn = void 0;

var _lodash = require("lodash");

var _i18n = require("@kbn/i18n");

var _persisted_state = require("ui/persisted_state");

var _chrome = _interopRequireDefault(require("ui/chrome"));

var _request_handler = require("./request_handler");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var name = 'tsvb';

var createMetricsFn = function createMetricsFn() {
  return {
    name: name,
    type: 'render',
    context: {
      types: ['kibana_context', 'null']
    },
    help: _i18n.i18n.translate('tsvb.function.help', {
      defaultMessage: 'TSVB visualization'
    }),
    args: {
      params: {
        types: ['string'],
        default: '"{}"',
        help: ''
      },
      uiState: {
        types: ['string'],
        default: '"{}"',
        help: ''
      }
    },
    fn: function () {
      var _fn = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(context, args) {
        var uiSettings, metricsRequestHandler, params, uiStateParams, uiState, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                uiSettings = _chrome.default.getUiSettingsClient();
                metricsRequestHandler = (0, _request_handler.createMetricsRequestHandler)(uiSettings);
                params = JSON.parse(args.params);
                uiStateParams = JSON.parse(args.uiState);
                uiState = new _persisted_state.PersistedState(uiStateParams);
                _context.next = 7;
                return metricsRequestHandler({
                  timeRange: (0, _lodash.get)(context, 'timeRange', null),
                  query: (0, _lodash.get)(context, 'query', null),
                  filters: (0, _lodash.get)(context, 'filters', null),
                  visParams: params,
                  uiState: uiState
                });

              case 7:
                response = _context.sent;
                response.visType = 'metrics';
                return _context.abrupt("return", {
                  type: 'render',
                  as: 'visualization',
                  value: {
                    uiState: uiState,
                    visType: 'metrics',
                    visConfig: params,
                    visData: response
                  }
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fn(_x, _x2) {
        return _fn.apply(this, arguments);
      }

      return fn;
    }()
  };
};

exports.createMetricsFn = createMetricsFn;