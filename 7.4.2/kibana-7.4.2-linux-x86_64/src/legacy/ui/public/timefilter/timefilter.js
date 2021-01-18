"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerTimefilterWithGlobalState = exports.timefilter = exports.Timefilter = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _rxjs = require("rxjs");

var _moment = _interopRequireDefault(require("moment"));

var _subscribe_with_scope = require("ui/utils/subscribe_with_scope");

var _chrome = _interopRequireDefault(require("ui/chrome"));

var _time_history = require("./time_history");

var _diff_time_picker_vals = require("./lib/diff_time_picker_vals");

var _routes = _interopRequireDefault(require("../routes"));

var _parse_querystring = require("./lib/parse_querystring");

var _get_time = require("./get_time");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Timefilter = // Fired when isTimeRangeSelectorEnabled \ isAutoRefreshSelectorEnabled are toggled
// Fired when a user changes the timerange
// Fired when a user changes the the autorefresh settings
// Used when search poll triggers an auto refresh
function Timefilter(uiSettings) {
  var _this = this;

  _classCallCheck(this, Timefilter);

  _defineProperty(this, "enabledUpdated$", new _rxjs.BehaviorSubject(false));

  _defineProperty(this, "timeUpdate$", new _rxjs.Subject());

  _defineProperty(this, "refreshIntervalUpdate$", new _rxjs.Subject());

  _defineProperty(this, "autoRefreshFetch$", new _rxjs.Subject());

  _defineProperty(this, "fetch$", new _rxjs.Subject());

  _defineProperty(this, "_time", void 0);

  _defineProperty(this, "_refreshInterval", void 0);

  _defineProperty(this, "isTimeRangeSelectorEnabled", false);

  _defineProperty(this, "isAutoRefreshSelectorEnabled", false);

  _defineProperty(this, "getEnabledUpdated$", function () {
    return _this.enabledUpdated$.asObservable();
  });

  _defineProperty(this, "getTimeUpdate$", function () {
    return _this.timeUpdate$.asObservable();
  });

  _defineProperty(this, "getRefreshIntervalUpdate$", function () {
    return _this.refreshIntervalUpdate$.asObservable();
  });

  _defineProperty(this, "getAutoRefreshFetch$", function () {
    return _this.autoRefreshFetch$.asObservable();
  });

  _defineProperty(this, "getFetch$", function () {
    return _this.fetch$.asObservable();
  });

  _defineProperty(this, "getTime", function () {
    var _this$_time = _this._time,
        from = _this$_time.from,
        to = _this$_time.to;
    return _objectSpread({}, _this._time, {
      from: _moment.default.isMoment(from) ? from.toISOString() : from,
      to: _moment.default.isMoment(to) ? to.toISOString() : to
    });
  });

  _defineProperty(this, "setTime", function (time) {
    // Object.assign used for partially composed updates
    var newTime = Object.assign(_this.getTime(), time);

    if ((0, _diff_time_picker_vals.areTimeRangesDifferent)(_this.getTime(), newTime)) {
      _this._time = {
        from: newTime.from,
        to: newTime.to
      };

      _time_history.timeHistory.add(_this._time);

      _this.timeUpdate$.next();

      _this.fetch$.next();
    }
  });

  _defineProperty(this, "getRefreshInterval", function () {
    return _lodash.default.clone(_this._refreshInterval);
  });

  _defineProperty(this, "setRefreshInterval", function (refreshInterval) {
    var prevRefreshInterval = _this.getRefreshInterval();

    var newRefreshInterval = _objectSpread({}, prevRefreshInterval, {}, refreshInterval); // If the refresh interval is <= 0 handle that as a paused refresh


    if (newRefreshInterval.value <= 0) {
      newRefreshInterval.value = 0;
      newRefreshInterval.pause = true;
    }

    _this._refreshInterval = {
      value: newRefreshInterval.value,
      pause: newRefreshInterval.pause
    }; // Only send out an event if we already had a previous refresh interval (not for the initial set)
    // and the old and new refresh interval are actually different.

    if (prevRefreshInterval && (0, _diff_time_picker_vals.areRefreshIntervalsDifferent)(prevRefreshInterval, newRefreshInterval)) {
      _this.refreshIntervalUpdate$.next();

      if (!newRefreshInterval.pause && newRefreshInterval.value !== 0) {
        _this.fetch$.next();
      }
    }
  });

  _defineProperty(this, "toggleRefresh", function () {
    _this.setRefreshInterval({
      pause: !_this._refreshInterval.pause,
      value: _this._refreshInterval.value
    });
  });

  _defineProperty(this, "createFilter", function (indexPattern, timeRange) {
    return (0, _get_time.getTime)(indexPattern, timeRange ? timeRange : _this._time, _this.getForceNow());
  });

  _defineProperty(this, "getBounds", function () {
    return _this.calculateBounds(_this._time);
  });

  _defineProperty(this, "getForceNow", function () {
    var forceNow = (0, _parse_querystring.parseQueryString)().forceNow;

    if (!forceNow) {
      return;
    }

    var ticks = Date.parse(forceNow);

    if (isNaN(ticks)) {
      throw new Error("forceNow query parameter, ".concat(forceNow, ", can't be parsed by Date.parse"));
    }

    return new Date(ticks);
  });

  _defineProperty(this, "calculateBounds", function (timeRange) {
    return (0, _get_time.calculateBounds)(timeRange, {
      forceNow: _this.getForceNow()
    });
  });

  _defineProperty(this, "getActiveBounds", function () {
    if (_this.isTimeRangeSelectorEnabled) {
      return _this.getBounds();
    }
  });

  _defineProperty(this, "enableTimeRangeSelector", function () {
    _this.isTimeRangeSelectorEnabled = true;

    _this.enabledUpdated$.next(true);
  });

  _defineProperty(this, "disableTimeRangeSelector", function () {
    _this.isTimeRangeSelectorEnabled = false;

    _this.enabledUpdated$.next(false);
  });

  _defineProperty(this, "enableAutoRefreshSelector", function () {
    _this.isAutoRefreshSelectorEnabled = true;

    _this.enabledUpdated$.next(true);
  });

  _defineProperty(this, "disableAutoRefreshSelector", function () {
    _this.isAutoRefreshSelectorEnabled = false;

    _this.enabledUpdated$.next(false);
  });

  _defineProperty(this, "notifyShouldFetch", function () {
    _this.autoRefreshFetch$.next();
  });

  this._time = uiSettings.get('timepicker:timeDefaults');
  this.setRefreshInterval(uiSettings.get('timepicker:refreshIntervalDefaults'));
};

exports.Timefilter = Timefilter;
var timefilter = new Timefilter(_chrome.default.getUiSettingsClient()); // TODO
// remove everything underneath once globalState is no longer an angular service
// and listener can be registered without angular.

exports.timefilter = timefilter;

function convertISO8601(stringTime) {
  var obj = (0, _moment.default)(stringTime, 'YYYY-MM-DDTHH:mm:ss.SSSZ', true);
  return obj.isValid() ? obj.toISOString() : stringTime;
} // Currently some parts of Kibana (index patterns, timefilter) rely on addSetupWork in the uiRouter
// and require it to be executed to properly function.
// This function is exposed for applications that do not use uiRoutes like APM
// Kibana issue https://github.com/elastic/kibana/issues/19110 tracks the removal of this dependency on uiRouter


var registerTimefilterWithGlobalState = _lodash.default.once(function (globalState, $rootScope) {
  var uiSettings = _chrome.default.getUiSettingsClient();

  var timeDefaults = uiSettings.get('timepicker:timeDefaults');
  var refreshIntervalDefaults = uiSettings.get('timepicker:refreshIntervalDefaults');
  timefilter.setTime(_lodash.default.defaults(globalState.time || {}, timeDefaults));
  timefilter.setRefreshInterval(_lodash.default.defaults(globalState.refreshInterval || {}, refreshIntervalDefaults));
  globalState.on('fetch_with_changes', function () {
    // clone and default to {} in one
    var newTime = _lodash.default.defaults({}, globalState.time, timeDefaults);

    var newRefreshInterval = _lodash.default.defaults({}, globalState.refreshInterval, refreshIntervalDefaults);

    if (newTime) {
      if (newTime.to) newTime.to = convertISO8601(newTime.to);
      if (newTime.from) newTime.from = convertISO8601(newTime.from);
    }

    timefilter.setTime(newTime);
    timefilter.setRefreshInterval(newRefreshInterval);
  });

  var updateGlobalStateWithTime = function updateGlobalStateWithTime() {
    globalState.time = timefilter.getTime();
    globalState.refreshInterval = timefilter.getRefreshInterval();
    globalState.save();
  };

  (0, _subscribe_with_scope.subscribeWithScope)($rootScope, timefilter.getRefreshIntervalUpdate$(), {
    next: updateGlobalStateWithTime
  });
  (0, _subscribe_with_scope.subscribeWithScope)($rootScope, timefilter.getTimeUpdate$(), {
    next: updateGlobalStateWithTime
  });
});

exports.registerTimefilterWithGlobalState = registerTimefilterWithGlobalState;

_routes.default.addSetupWork(function (globalState, $rootScope) {
  return registerTimefilterWithGlobalState(globalState, $rootScope);
});