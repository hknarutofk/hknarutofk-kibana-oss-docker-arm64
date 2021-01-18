"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnalyticsReporter = createAnalyticsReporter;
exports.createUiStatsReporter = exports.getTelemetryReporter = exports.setTelemetryReporter = void 0;

var _analytics = require("@kbn/analytics");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var telemetryReporter;

var setTelemetryReporter = function setTelemetryReporter(aTelemetryReporter) {
  telemetryReporter = aTelemetryReporter;
};

exports.setTelemetryReporter = setTelemetryReporter;

var getTelemetryReporter = function getTelemetryReporter() {
  return telemetryReporter;
};

exports.getTelemetryReporter = getTelemetryReporter;

var createUiStatsReporter = function createUiStatsReporter(appName) {
  return function (type, eventNames, count) {
    if (telemetryReporter) {
      return telemetryReporter.reportUiStats(appName, type, eventNames, count);
    }
  };
};

exports.createUiStatsReporter = createUiStatsReporter;

function createAnalyticsReporter(config) {
  var localStorage = config.localStorage,
      basePath = config.basePath,
      $http = config.$http,
      debug = config.debug;
  return (0, _analytics.createReporter)({
    debug: debug,
    storage: localStorage,
    http: function () {
      var _http = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(report) {
        var url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(basePath, "/api/telemetry/report");
                _context.next = 3;
                return $http.post(url, {
                  report: report
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function http(_x) {
        return _http.apply(this, arguments);
      }

      return http;
    }()
  });
}