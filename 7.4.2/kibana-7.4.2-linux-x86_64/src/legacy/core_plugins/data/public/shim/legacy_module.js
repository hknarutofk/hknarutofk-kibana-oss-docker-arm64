"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initLegacyModule = void 0;

var _lodash = require("lodash");

var _i18n = require("ui/i18n");

var _modules = require("ui/modules");

var _new_platform = require("ui/new_platform");

var _filter = require("../filter");

var _apply_filter_directive = _interopRequireDefault(require("./apply_filter_directive.html"));

var _map_and_flatten_filters = require("../filter/filter_manager/lib/map_and_flatten_filters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/** @internal */
var initLegacyModule = (0, _lodash.once)(function () {
  _modules.uiModules.get('app/kibana', ['react']).directive('filterBar', function () {
    return {
      restrict: 'E',
      template: '',
      compile: function compile(elem) {
        var child = document.createElement('filter-bar-helper'); // Copy attributes to the child directive

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = elem[0].attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var attr = _step.value;
            child.setAttribute(attr.name, attr.value);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        child.setAttribute('ui-settings', 'uiSettings'); // Append helper directive

        elem.append(child);

        var linkFn = function linkFn($scope) {
          $scope.uiSettings = _new_platform.npSetup.core.uiSettings;
        };

        return linkFn;
      }
    };
  }).directive('filterBarHelper', function (reactDirective) {
    return reactDirective((0, _i18n.wrapInI18nContext)(_filter.FilterBar), [['uiSettings', {
      watchDepth: 'reference'
    }], ['onFiltersUpdated', {
      watchDepth: 'reference'
    }], ['indexPatterns', {
      watchDepth: 'collection'
    }], ['filters', {
      watchDepth: 'collection'
    }], ['className', {
      watchDepth: 'reference'
    }]]);
  }).directive('applyFiltersPopoverComponent', function (reactDirective) {
    return reactDirective((0, _i18n.wrapInI18nContext)(_filter.ApplyFiltersPopover));
  }).directive('applyFiltersPopover', function (indexPatterns) {
    return {
      template: _apply_filter_directive.default,
      restrict: 'E',
      scope: {
        filters: '=',
        onCancel: '=',
        onSubmit: '='
      },
      link: function link($scope) {
        $scope.state = {}; // Each time the new filters change we want to rebuild (not just re-render) the "apply filters"
        // popover, because it has to reset its state whenever the new filters change. Setting a `key`
        // property on the component accomplishes this due to how React handles the `key` property.

        $scope.$watch('filters',
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(filters) {
            var mappedFilters;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return (0, _map_and_flatten_filters.mapAndFlattenFilters)(indexPatterns, filters);

                  case 2:
                    mappedFilters = _context.sent;
                    $scope.state = {
                      filters: mappedFilters,
                      key: Date.now()
                    };

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    };
  });
});
exports.initLegacyModule = initLegacyModule;