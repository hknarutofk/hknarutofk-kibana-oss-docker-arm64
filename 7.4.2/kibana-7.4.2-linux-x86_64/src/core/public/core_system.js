"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoreSystem = void 0;

require("./core.css");

var _chrome = require("./chrome");

var _fatal_errors = require("./fatal_errors");

var _http = require("./http");

var _i18n = require("./i18n");

var _injected_metadata = require("./injected_metadata");

var _legacy = require("./legacy");

var _notifications = require("./notifications");

var _overlays = require("./overlays");

var _plugins = require("./plugins");

var _ui_settings = require("./ui_settings");

var _application = require("./application");

var _utils = require("../utils/");

var _doc_links = require("./doc_links");

var _rendering = require("./rendering");

var _saved_objects_service = require("./saved_objects/saved_objects_service");

var _context3 = require("./context");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The CoreSystem is the root of the new platform, and setups all parts
 * of Kibana in the UI, including the LegacyPlatform which is managed
 * by the LegacyPlatformService. As we migrate more things to the new
 * platform the CoreSystem will get many more Services.
 *
 * @internal
 */
var CoreSystem =
/*#__PURE__*/
function () {
  function CoreSystem(params) {
    var _this = this;

    _classCallCheck(this, CoreSystem);

    _defineProperty(this, "fatalErrors", void 0);

    _defineProperty(this, "injectedMetadata", void 0);

    _defineProperty(this, "legacyPlatform", void 0);

    _defineProperty(this, "notifications", void 0);

    _defineProperty(this, "http", void 0);

    _defineProperty(this, "savedObjects", void 0);

    _defineProperty(this, "uiSettings", void 0);

    _defineProperty(this, "chrome", void 0);

    _defineProperty(this, "i18n", void 0);

    _defineProperty(this, "overlay", void 0);

    _defineProperty(this, "plugins", void 0);

    _defineProperty(this, "application", void 0);

    _defineProperty(this, "docLinks", void 0);

    _defineProperty(this, "rendering", void 0);

    _defineProperty(this, "context", void 0);

    _defineProperty(this, "rootDomElement", void 0);

    _defineProperty(this, "fatalErrorsSetup", null);

    var rootDomElement = params.rootDomElement,
        browserSupportsCsp = params.browserSupportsCsp,
        injectedMetadata = params.injectedMetadata,
        requireLegacyFiles = params.requireLegacyFiles,
        useLegacyTestHarness = params.useLegacyTestHarness;
    this.rootDomElement = rootDomElement;
    this.i18n = new _i18n.I18nService();
    this.injectedMetadata = new _injected_metadata.InjectedMetadataService({
      injectedMetadata: injectedMetadata
    });
    this.fatalErrors = new _fatal_errors.FatalErrorsService(rootDomElement, function () {
      // Stop Core before rendering any fatal errors into the DOM
      _this.stop();
    });
    this.notifications = new _notifications.NotificationsService();
    this.http = new _http.HttpService();
    this.savedObjects = new _saved_objects_service.SavedObjectsService();
    this.uiSettings = new _ui_settings.UiSettingsService();
    this.overlay = new _overlays.OverlayService();
    this.application = new _application.ApplicationService();
    this.chrome = new _chrome.ChromeService({
      browserSupportsCsp: browserSupportsCsp
    });
    this.docLinks = new _doc_links.DocLinksService();
    this.rendering = new _rendering.RenderingService();
    var core = {
      coreId: Symbol('core')
    };
    this.context = new _context3.ContextService(core);
    this.plugins = new _plugins.PluginsService(core, injectedMetadata.uiPlugins);
    this.legacyPlatform = new _legacy.LegacyPlatformService({
      requireLegacyFiles: requireLegacyFiles,
      useLegacyTestHarness: useLegacyTestHarness
    });
  }

  _createClass(CoreSystem, [{
    key: "setup",
    value: function () {
      var _setup = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var injectedMetadata, http, uiSettings, notifications, application, pluginDependencies, context, core, plugins;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                // Setup FatalErrorsService and it's dependencies first so that we're
                // able to render any errors.
                injectedMetadata = this.injectedMetadata.setup();
                this.fatalErrorsSetup = this.fatalErrors.setup({
                  injectedMetadata: injectedMetadata,
                  i18n: this.i18n.getContext()
                });
                http = this.http.setup({
                  injectedMetadata: injectedMetadata,
                  fatalErrors: this.fatalErrorsSetup
                });
                uiSettings = this.uiSettings.setup({
                  http: http,
                  injectedMetadata: injectedMetadata
                });
                notifications = this.notifications.setup({
                  uiSettings: uiSettings
                });
                application = this.application.setup();
                pluginDependencies = this.plugins.getOpaqueIds();
                context = this.context.setup({
                  pluginDependencies: pluginDependencies
                });
                core = {
                  application: application,
                  context: context,
                  fatalErrors: this.fatalErrorsSetup,
                  http: http,
                  injectedMetadata: injectedMetadata,
                  notifications: notifications,
                  uiSettings: uiSettings
                }; // Services that do not expose contracts at setup

                _context.next = 12;
                return this.plugins.setup(core);

              case 12:
                plugins = _context.sent;
                _context.next = 15;
                return this.legacyPlatform.setup({
                  core: core,
                  plugins: (0, _utils.mapToObject)(plugins.contracts)
                });

              case 15:
                return _context.abrupt("return", {
                  fatalErrors: this.fatalErrorsSetup
                });

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](0);

                if (this.fatalErrorsSetup) {
                  this.fatalErrorsSetup.add(_context.t0);
                } else {
                  // If the FatalErrorsService has not yet been setup, log error to console
                  // eslint-disable-next-line no-console
                  console.log(_context.t0);
                }

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 18]]);
      }));

      function setup() {
        return _setup.apply(this, arguments);
      }

      return setup;
    }()
  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var injectedMetadata, uiSettings, docLinks, http, savedObjects, i18n, application, coreUiTargetDomElement, notificationsTargetDomElement, overlayTargetDomElement, overlays, notifications, chrome, core, plugins, rendering;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.injectedMetadata.start();

              case 3:
                injectedMetadata = _context2.sent;
                _context2.next = 6;
                return this.uiSettings.start();

              case 6:
                uiSettings = _context2.sent;
                _context2.next = 9;
                return this.docLinks.start({
                  injectedMetadata: injectedMetadata
                });

              case 9:
                docLinks = _context2.sent;
                _context2.next = 12;
                return this.http.start({
                  injectedMetadata: injectedMetadata,
                  fatalErrors: this.fatalErrorsSetup
                });

              case 12:
                http = _context2.sent;
                _context2.next = 15;
                return this.savedObjects.start({
                  http: http
                });

              case 15:
                savedObjects = _context2.sent;
                _context2.next = 18;
                return this.i18n.start();

              case 18:
                i18n = _context2.sent;
                _context2.next = 21;
                return this.application.start({
                  injectedMetadata: injectedMetadata
                });

              case 21:
                application = _context2.sent;
                coreUiTargetDomElement = document.createElement('div');
                coreUiTargetDomElement.id = 'kibana-body';
                notificationsTargetDomElement = document.createElement('div');
                overlayTargetDomElement = document.createElement('div'); // ensure the rootDomElement is empty

                this.rootDomElement.textContent = '';
                this.rootDomElement.classList.add('coreSystemRootDomElement');
                this.rootDomElement.appendChild(coreUiTargetDomElement);
                this.rootDomElement.appendChild(notificationsTargetDomElement);
                this.rootDomElement.appendChild(overlayTargetDomElement);
                overlays = this.overlay.start({
                  i18n: i18n,
                  targetDomElement: overlayTargetDomElement,
                  uiSettings: uiSettings
                });
                _context2.next = 34;
                return this.notifications.start({
                  i18n: i18n,
                  overlays: overlays,
                  targetDomElement: notificationsTargetDomElement
                });

              case 34:
                notifications = _context2.sent;
                _context2.next = 37;
                return this.chrome.start({
                  application: application,
                  docLinks: docLinks,
                  http: http,
                  injectedMetadata: injectedMetadata,
                  notifications: notifications
                });

              case 37:
                chrome = _context2.sent;
                core = {
                  application: application,
                  chrome: chrome,
                  docLinks: docLinks,
                  http: http,
                  savedObjects: savedObjects,
                  i18n: i18n,
                  injectedMetadata: injectedMetadata,
                  notifications: notifications,
                  overlays: overlays,
                  uiSettings: uiSettings
                };
                _context2.next = 41;
                return this.plugins.start(core);

              case 41:
                plugins = _context2.sent;
                rendering = this.rendering.start({
                  chrome: chrome,
                  targetDomElement: coreUiTargetDomElement
                });
                _context2.next = 45;
                return this.legacyPlatform.start({
                  core: core,
                  plugins: (0, _utils.mapToObject)(plugins.contracts),
                  targetDomElement: rendering.legacyTargetDomElement
                });

              case 45:
                _context2.next = 50;
                break;

              case 47:
                _context2.prev = 47;
                _context2.t0 = _context2["catch"](0);

                if (this.fatalErrorsSetup) {
                  this.fatalErrorsSetup.add(_context2.t0);
                } else {
                  // If the FatalErrorsService has not yet been setup, log error to console
                  // eslint-disable-next-line no-console
                  console.error(_context2.t0);
                }

              case 50:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 47]]);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      this.legacyPlatform.stop();
      this.plugins.stop();
      this.notifications.stop();
      this.http.stop();
      this.uiSettings.stop();
      this.chrome.stop();
      this.i18n.stop();
      this.rootDomElement.textContent = '';
    }
  }]);

  return CoreSystem;
}();

exports.CoreSystem = CoreSystem;