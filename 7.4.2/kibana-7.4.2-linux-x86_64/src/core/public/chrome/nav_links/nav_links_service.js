"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavLinksService = void 0;

var _lodash = require("lodash");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _nav_link = require("./nav_link");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NavLinksService =
/*#__PURE__*/
function () {
  function NavLinksService() {
    _classCallCheck(this, NavLinksService);

    _defineProperty(this, "stop$", new _rxjs.ReplaySubject(1));
  }

  _createClass(NavLinksService, [{
    key: "start",
    value: function start(_ref) {
      var _this = this;

      var application = _ref.application,
          http = _ref.http;
      var legacyAppLinks = application.availableLegacyApps.map(function (app) {
        return [app.id, new _nav_link.NavLinkWrapper(_objectSpread({}, app, {
          legacy: true,
          baseUrl: relativeToAbsolute(http.basePath.prepend(app.appUrl))
        }))];
      });
      var navLinks$ = new _rxjs.BehaviorSubject(new Map(legacyAppLinks));
      var forceAppSwitcherNavigation$ = new _rxjs.BehaviorSubject(false);
      return {
        getNavLinks$: function getNavLinks$() {
          return navLinks$.pipe((0, _operators.map)(sortNavLinks), (0, _operators.takeUntil)(_this.stop$));
        },
        get: function get(id) {
          var link = navLinks$.value.get(id);
          return link && link.properties;
        },
        getAll: function getAll() {
          return sortNavLinks(navLinks$.value);
        },
        has: function has(id) {
          return navLinks$.value.has(id);
        },
        showOnly: function showOnly(id) {
          if (!this.has(id)) {
            return;
          }

          navLinks$.next(new Map(_toConsumableArray(navLinks$.value.entries()).filter(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 1),
                linkId = _ref3[0];

            return linkId === id;
          })));
        },
        update: function update(id, values) {
          if (!this.has(id)) {
            return;
          }

          navLinks$.next(new Map(_toConsumableArray(navLinks$.value.entries()).map(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
                linkId = _ref5[0],
                link = _ref5[1];

            return [linkId, link.id === id ? link.update(values) : link];
          })));
          return this.get(id);
        },
        enableForcedAppSwitcherNavigation: function enableForcedAppSwitcherNavigation() {
          forceAppSwitcherNavigation$.next(true);
        },
        getForceAppSwitcherNavigation$: function getForceAppSwitcherNavigation$() {
          return forceAppSwitcherNavigation$.asObservable();
        }
      };
    }
  }, {
    key: "stop",
    value: function stop() {
      this.stop$.next();
    }
  }]);

  return NavLinksService;
}();

exports.NavLinksService = NavLinksService;

function sortNavLinks(navLinks) {
  return (0, _lodash.sortBy)(_toConsumableArray(navLinks.values()).map(function (link) {
    return link.properties;
  }), 'order');
}

function relativeToAbsolute(url) {
  // convert all link urls to absolute urls
  var a = document.createElement('a');
  a.setAttribute('href', url);
  return a.href;
}