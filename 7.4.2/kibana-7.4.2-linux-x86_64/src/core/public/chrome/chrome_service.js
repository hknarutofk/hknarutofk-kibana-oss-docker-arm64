"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ChromeRecentlyAccessed", {
  enumerable: true,
  get: function get() {
    return _recently_accessed.ChromeRecentlyAccessed;
  }
});
Object.defineProperty(exports, "ChromeNavControls", {
  enumerable: true,
  get: function get() {
    return _nav_controls.ChromeNavControls;
  }
});
exports.ChromeService = void 0;

var _react = _interopRequireDefault(require("react"));

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var Url = _interopRequireWildcard(require("url"));

var _i18n = require("@kbn/i18n");

var _nav_links = require("./nav_links");

var _recently_accessed = require("./recently_accessed");

var _nav_controls = require("./nav_controls");

var _ui = require("./ui");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var IS_COLLAPSED_KEY = 'core.chrome.isCollapsed';

function isEmbedParamInHash() {
  var _Url$parse = Url.parse(String(window.location.hash).slice(1), true),
      query = _Url$parse.query;

  return Boolean(query.embed);
}
/** @public */


/** @internal */
var ChromeService =
/*#__PURE__*/
function () {
  function ChromeService(_ref) {
    var browserSupportsCsp = _ref.browserSupportsCsp;

    _classCallCheck(this, ChromeService);

    _defineProperty(this, "stop$", new _rxjs.ReplaySubject(1));

    _defineProperty(this, "browserSupportsCsp", void 0);

    _defineProperty(this, "navControls", new _nav_controls.NavControlsService());

    _defineProperty(this, "navLinks", new _nav_links.NavLinksService());

    _defineProperty(this, "recentlyAccessed", new _recently_accessed.RecentlyAccessedService());

    this.browserSupportsCsp = browserSupportsCsp;
  }

  _createClass(ChromeService, [{
    key: "start",
    value: function () {
      var _start = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref2) {
        var _this = this;

        var application, docLinks, http, injectedMetadata, notifications, FORCE_HIDDEN, appTitle$, brand$, isVisible$, isCollapsed$, applicationClasses$, helpExtension$, breadcrumbs$, badge$, navControls, navLinks, recentlyAccessed;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                application = _ref2.application, docLinks = _ref2.docLinks, http = _ref2.http, injectedMetadata = _ref2.injectedMetadata, notifications = _ref2.notifications;
                FORCE_HIDDEN = isEmbedParamInHash();
                appTitle$ = new _rxjs.BehaviorSubject('Kibana');
                brand$ = new _rxjs.BehaviorSubject({});
                isVisible$ = new _rxjs.BehaviorSubject(true);
                isCollapsed$ = new _rxjs.BehaviorSubject(!!localStorage.getItem(IS_COLLAPSED_KEY));
                applicationClasses$ = new _rxjs.BehaviorSubject(new Set());
                helpExtension$ = new _rxjs.BehaviorSubject(undefined);
                breadcrumbs$ = new _rxjs.BehaviorSubject([]);
                badge$ = new _rxjs.BehaviorSubject(undefined);
                navControls = this.navControls.start();
                navLinks = this.navLinks.start({
                  application: application,
                  http: http
                });
                _context.next = 14;
                return this.recentlyAccessed.start({
                  http: http
                });

              case 14:
                recentlyAccessed = _context.sent;

                if (!this.browserSupportsCsp && injectedMetadata.getCspConfig().warnLegacyBrowsers) {
                  notifications.toasts.addWarning(_i18n.i18n.translate('core.chrome.legacyBrowserWarning', {
                    defaultMessage: 'Your browser does not meet the security requirements for Kibana.'
                  }));
                }

                return _context.abrupt("return", {
                  navControls: navControls,
                  navLinks: navLinks,
                  recentlyAccessed: recentlyAccessed,
                  getComponent: function getComponent() {
                    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.LoadingIndicator, {
                      loadingCount$: http.getLoadingCount$()
                    }), _react.default.createElement(_ui.HeaderWrapper, {
                      appTitle$: appTitle$.pipe((0, _operators.takeUntil)(_this.stop$)),
                      badge$: badge$.pipe((0, _operators.takeUntil)(_this.stop$)),
                      basePath: http.basePath,
                      breadcrumbs$: breadcrumbs$.pipe((0, _operators.takeUntil)(_this.stop$)),
                      kibanaDocLink: docLinks.links.kibana,
                      forceAppSwitcherNavigation$: navLinks.getForceAppSwitcherNavigation$(),
                      helpExtension$: helpExtension$.pipe((0, _operators.takeUntil)(_this.stop$)),
                      homeHref: http.basePath.prepend('/app/kibana#/home'),
                      isVisible$: isVisible$.pipe((0, _operators.map)(function (visibility) {
                        return FORCE_HIDDEN ? false : visibility;
                      }), (0, _operators.takeUntil)(_this.stop$)),
                      kibanaVersion: injectedMetadata.getKibanaVersion(),
                      navLinks$: navLinks.getNavLinks$(),
                      recentlyAccessed$: recentlyAccessed.get$(),
                      navControlsLeft$: navControls.getLeft$(),
                      navControlsRight$: navControls.getRight$()
                    }));
                  },
                  setAppTitle: function setAppTitle(appTitle) {
                    return appTitle$.next(appTitle);
                  },
                  getBrand$: function getBrand$() {
                    return brand$.pipe((0, _operators.takeUntil)(_this.stop$));
                  },
                  setBrand: function setBrand(brand) {
                    brand$.next(Object.freeze({
                      logo: brand.logo,
                      smallLogo: brand.smallLogo
                    }));
                  },
                  getIsVisible$: function getIsVisible$() {
                    return isVisible$.pipe((0, _operators.map)(function (visibility) {
                      return FORCE_HIDDEN ? false : visibility;
                    }), (0, _operators.takeUntil)(_this.stop$));
                  },
                  setIsVisible: function setIsVisible(visibility) {
                    isVisible$.next(visibility);
                  },
                  getIsCollapsed$: function getIsCollapsed$() {
                    return isCollapsed$.pipe((0, _operators.takeUntil)(_this.stop$));
                  },
                  setIsCollapsed: function setIsCollapsed(isCollapsed) {
                    isCollapsed$.next(isCollapsed);

                    if (isCollapsed) {
                      localStorage.setItem(IS_COLLAPSED_KEY, 'true');
                    } else {
                      localStorage.removeItem(IS_COLLAPSED_KEY);
                    }
                  },
                  getApplicationClasses$: function getApplicationClasses$() {
                    return applicationClasses$.pipe((0, _operators.map)(function (set) {
                      return _toConsumableArray(set);
                    }), (0, _operators.takeUntil)(_this.stop$));
                  },
                  addApplicationClass: function addApplicationClass(className) {
                    var update = new Set(_toConsumableArray(applicationClasses$.getValue()));
                    update.add(className);
                    applicationClasses$.next(update);
                  },
                  removeApplicationClass: function removeApplicationClass(className) {
                    var update = new Set(_toConsumableArray(applicationClasses$.getValue()));
                    update.delete(className);
                    applicationClasses$.next(update);
                  },
                  getBadge$: function getBadge$() {
                    return badge$.pipe((0, _operators.takeUntil)(_this.stop$));
                  },
                  setBadge: function setBadge(badge) {
                    badge$.next(badge);
                  },
                  getBreadcrumbs$: function getBreadcrumbs$() {
                    return breadcrumbs$.pipe((0, _operators.takeUntil)(_this.stop$));
                  },
                  setBreadcrumbs: function setBreadcrumbs(newBreadcrumbs) {
                    breadcrumbs$.next(newBreadcrumbs);
                  },
                  getHelpExtension$: function getHelpExtension$() {
                    return helpExtension$.pipe((0, _operators.takeUntil)(_this.stop$));
                  },
                  setHelpExtension: function setHelpExtension(helpExtension) {
                    helpExtension$.next(helpExtension);
                  }
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function start(_x) {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      this.navLinks.stop();
      this.stop$.next();
    }
  }]);

  return ChromeService;
}();
/**
 * ChromeStart allows plugins to customize the global chrome header UI and
 * enrich the UX with additional information about the current location of the
 * browser.
 *
 * @remarks
 * While ChromeStart exposes many APIs, they should be used sparingly and the
 * developer should understand how they affect other plugins and applications.
 *
 * @example
 * How to add a recently accessed item to the sidebar:
 * ```ts
 * core.chrome.recentlyAccessed.add('/app/map/1234', 'Map 1234', '1234');
 * ```
 *
 * @example
 * How to set the help dropdown extension:
 * ```tsx
 * core.chrome.setHelpExtension(elem => {
 *   ReactDOM.render(<MyHelpComponent />, elem);
 *   return () => ReactDOM.unmountComponentAtNode(elem);
 * });
 * ```
 *
 * @public
 */


exports.ChromeService = ChromeService;