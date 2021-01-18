"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterManager = void 0;

var _esQuery = require("@kbn/es-query");

var _lodash = _interopRequireDefault(require("lodash"));

var _rxjs = require("rxjs");

var _compare_filters = require("./lib/compare_filters");

var _map_and_flatten_filters = require("./lib/map_and_flatten_filters");

var _uniq_filters = require("./lib/uniq_filters");

var _extract_time_filter = require("./lib/extract_time_filter");

var _change_time_filter = require("./lib/change_time_filter");

var _only_disabled = require("./lib/only_disabled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FilterManager =
/*#__PURE__*/
function () {
  function FilterManager(indexPatterns, uiSettings) {
    _classCallCheck(this, FilterManager);

    _defineProperty(this, "indexPatterns", void 0);

    _defineProperty(this, "filters", []);

    _defineProperty(this, "updated$", new _rxjs.Subject());

    _defineProperty(this, "fetch$", new _rxjs.Subject());

    _defineProperty(this, "uiSettings", void 0);

    this.indexPatterns = indexPatterns;
    this.uiSettings = uiSettings;
  }

  _createClass(FilterManager, [{
    key: "mergeIncomingFilters",
    value: function mergeIncomingFilters(partitionedFilters) {
      var globalFilters = partitionedFilters.globalFilters;
      var appFilters = partitionedFilters.appFilters; // existing globalFilters should be mutated by appFilters

      _lodash.default.each(appFilters, function (filter, i) {
        var match = _lodash.default.find(globalFilters, function (globalFilter) {
          return (0, _compare_filters.compareFilters)(globalFilter, filter);
        }); // no match, do nothing


        if (!match) return; // matching filter in globalState, update global and remove from appState

        _lodash.default.assign(match.meta, filter.meta);

        appFilters.splice(i, 1);
      });

      return FilterManager.mergeFilters(appFilters, globalFilters);
    }
  }, {
    key: "handleStateUpdate",
    value: function handleStateUpdate(newFilters) {
      // global filters should always be first
      newFilters.sort(function (_ref, _ref2) {
        var a = _ref.$state;
        var b = _ref2.$state;
        return a.store === _esQuery.FilterStateStore.GLOBAL_STATE && b.store !== _esQuery.FilterStateStore.GLOBAL_STATE ? -1 : 1;
      });
      var filtersUpdated = !_lodash.default.isEqual(this.filters, newFilters);
      var updatedOnlyDisabledFilters = (0, _only_disabled.onlyDisabledFiltersChanged)(newFilters, this.filters);
      this.filters = newFilters;

      if (filtersUpdated) {
        this.updated$.next();

        if (!updatedOnlyDisabledFilters) {
          this.fetch$.next();
        }
      }
    }
    /* Getters */

  }, {
    key: "getFilters",
    value: function getFilters() {
      return _lodash.default.cloneDeep(this.filters);
    }
  }, {
    key: "getAppFilters",
    value: function getAppFilters() {
      var _this$getPartitionedF = this.getPartitionedFilters(),
          appFilters = _this$getPartitionedF.appFilters;

      return appFilters;
    }
  }, {
    key: "getGlobalFilters",
    value: function getGlobalFilters() {
      var _this$getPartitionedF2 = this.getPartitionedFilters(),
          globalFilters = _this$getPartitionedF2.globalFilters;

      return globalFilters;
    }
  }, {
    key: "getPartitionedFilters",
    value: function getPartitionedFilters() {
      return FilterManager.partitionFilters(this.getFilters());
    }
  }, {
    key: "getUpdates$",
    value: function getUpdates$() {
      return this.updated$.asObservable();
    }
  }, {
    key: "getFetches$",
    value: function getFetches$() {
      return this.fetch$.asObservable();
    }
    /* Setters */

  }, {
    key: "addFilters",
    value: function () {
      var _addFilters = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(filters, pinFilterStatus) {
        var _currentFilters$appFi, _currentFilters$globa;

        var store, mappedFilters, newPartitionedFilters, currentFilters, newFilters;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!Array.isArray(filters)) {
                  filters = [filters];
                }

                if (!(filters.length === 0)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                if (pinFilterStatus === undefined) {
                  pinFilterStatus = this.uiSettings.get('filters:pinnedByDefault');
                } // Set the store of all filters. For now.
                // In the future, all filters should come in with filter state store already set.


                store = pinFilterStatus ? _esQuery.FilterStateStore.GLOBAL_STATE : _esQuery.FilterStateStore.APP_STATE;
                FilterManager.setFiltersStore(filters, store);
                _context.next = 8;
                return (0, _map_and_flatten_filters.mapAndFlattenFilters)(this.indexPatterns, filters);

              case 8:
                mappedFilters = _context.sent;
                // This is where we add new filters to the correct place (app \ global)
                newPartitionedFilters = FilterManager.partitionFilters(mappedFilters);
                currentFilters = this.getPartitionedFilters();

                (_currentFilters$appFi = currentFilters.appFilters).push.apply(_currentFilters$appFi, _toConsumableArray(newPartitionedFilters.appFilters));

                (_currentFilters$globa = currentFilters.globalFilters).push.apply(_currentFilters$globa, _toConsumableArray(newPartitionedFilters.globalFilters));

                newFilters = this.mergeIncomingFilters(currentFilters);
                this.handleStateUpdate(newFilters);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addFilters(_x, _x2) {
        return _addFilters.apply(this, arguments);
      }

      return addFilters;
    }()
  }, {
    key: "setFilters",
    value: function () {
      var _setFilters = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(newFilters) {
        var mappedFilters, newPartitionedFilters, mergedFilters;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _map_and_flatten_filters.mapAndFlattenFilters)(this.indexPatterns, newFilters);

              case 2:
                mappedFilters = _context2.sent;
                newPartitionedFilters = FilterManager.partitionFilters(mappedFilters);
                mergedFilters = this.mergeIncomingFilters(newPartitionedFilters);
                this.handleStateUpdate(mergedFilters);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setFilters(_x3) {
        return _setFilters.apply(this, arguments);
      }

      return setFilters;
    }()
  }, {
    key: "removeFilter",
    value: function removeFilter(filter) {
      var filterIndex = _lodash.default.findIndex(this.filters, function (item) {
        return _lodash.default.isEqual(item.meta, filter.meta) && _lodash.default.isEqual(item.query, filter.query);
      });

      if (filterIndex >= 0) {
        var newFilters = _lodash.default.cloneDeep(this.filters);

        newFilters.splice(filterIndex, 1);
        this.handleStateUpdate(newFilters);
      }
    }
  }, {
    key: "removeAll",
    value: function () {
      var _removeAll = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.setFilters([]);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function removeAll() {
        return _removeAll.apply(this, arguments);
      }

      return removeAll;
    }()
  }, {
    key: "addFiltersAndChangeTimeFilter",
    value: function () {
      var _addFiltersAndChangeTimeFilter = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(filters) {
        var timeFilter;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _extract_time_filter.extractTimeFilter)(this.indexPatterns, filters);

              case 2:
                timeFilter = _context4.sent;
                if (timeFilter) (0, _change_time_filter.changeTimeFilter)(timeFilter);
                return _context4.abrupt("return", this.addFilters(filters.filter(function (filter) {
                  return filter !== timeFilter;
                })));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function addFiltersAndChangeTimeFilter(_x4) {
        return _addFiltersAndChangeTimeFilter.apply(this, arguments);
      }

      return addFiltersAndChangeTimeFilter;
    }()
  }], [{
    key: "mergeFilters",
    value: function mergeFilters(appFilters, globalFilters) {
      return (0, _uniq_filters.uniqFilters)(appFilters.reverse().concat(globalFilters.reverse())).reverse();
    }
  }, {
    key: "partitionFilters",
    value: function partitionFilters(filters) {
      var _$partition = _lodash.default.partition(filters, _esQuery.isFilterPinned),
          _$partition2 = _slicedToArray(_$partition, 2),
          globalFilters = _$partition2[0],
          appFilters = _$partition2[1];

      return {
        globalFilters: globalFilters,
        appFilters: appFilters
      };
    }
  }, {
    key: "setFiltersStore",
    value: function setFiltersStore(filters, store) {
      _lodash.default.map(filters, function (filter) {
        // Override status only for filters that didn't have state in the first place.
        if (filter.$state === undefined) {
          filter.$state = {
            store: store
          };
        }
      });
    }
  }]);

  return FilterManager;
}();

exports.FilterManager = FilterManager;