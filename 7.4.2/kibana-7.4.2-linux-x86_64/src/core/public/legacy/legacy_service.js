"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegacyPlatformService = void 0;

var _angular = _interopRequireDefault(require("angular"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The LegacyPlatformService is responsible for initializing
 * the legacy platform by injecting parts of the new platform
 * services into the legacy platform modules, like ui/modules,
 * and then bootstrapping the ui/chrome or ui/test_harness to
 * setup either the app or browser tests.
 */
var LegacyPlatformService =
/*#__PURE__*/
function () {
  function LegacyPlatformService(params) {
    _classCallCheck(this, LegacyPlatformService);

    this.params = params;

    _defineProperty(this, "bootstrapModule", void 0);

    _defineProperty(this, "targetDomElement", void 0);
  }

  _createClass(LegacyPlatformService, [{
    key: "setup",
    value: function setup(_ref) {
      var core = _ref.core,
          plugins = _ref.plugins;

      // Inject parts of the new platform into parts of the legacy platform
      // so that legacy APIs/modules can mimic their new platform counterparts
      require('ui/new_platform').__setup__(core, plugins);

      core.injectedMetadata.getLegacyMetadata().nav.forEach(function (navLink) {
        return core.application.registerLegacyApp({
          id: navLink.id,
          order: navLink.order,
          title: navLink.title,
          euiIconType: navLink.euiIconType,
          icon: navLink.icon,
          appUrl: navLink.url,
          subUrlBase: navLink.subUrlBase,
          linkToLastSubUrl: navLink.linkToLastSubUrl
        });
      });
    }
  }, {
    key: "start",
    value: function start(_ref2) {
      var core = _ref2.core,
          targetDomElement = _ref2.targetDomElement,
          plugins = _ref2.plugins;

      // Inject parts of the new platform into parts of the legacy platform
      // so that legacy APIs/modules can mimic their new platform counterparts
      require('ui/new_platform').__start__(core, plugins); // Load the bootstrap module before loading the legacy platform files so that
      // the bootstrap module can modify the environment a bit first


      this.bootstrapModule = this.loadBootstrapModule(); // require the files that will tie into the legacy platform

      this.params.requireLegacyFiles();

      if (!this.bootstrapModule) {
        throw new Error('Bootstrap module must be loaded before `start`');
      }

      this.targetDomElement = targetDomElement;
      this.bootstrapModule.bootstrap(this.targetDomElement);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.targetDomElement) {
        return;
      }

      var angularRoot = _angular.default.element(this.targetDomElement);

      var injector$ = angularRoot.injector(); // if we haven't gotten to the point of bootstrapping
      // angular, injector$ won't be defined

      if (!injector$) {
        return;
      } // destroy the root angular scope


      injector$.get('$rootScope').$destroy(); // clear the inner html of the root angular element

      this.targetDomElement.textContent = '';
    }
  }, {
    key: "loadBootstrapModule",
    value: function loadBootstrapModule() {
      if (this.params.useLegacyTestHarness) {
        // wrapped in NODE_ENV check so the `ui/test_harness` module
        // is not included in the distributable
        if (process.env.IS_KIBANA_DISTRIBUTABLE !== 'true') {
          return require('ui/test_harness');
        }

        throw new Error('tests bundle is not available in the distributable');
      }

      return require('ui/chrome');
    }
  }]);

  return LegacyPlatformService;
}();

exports.LegacyPlatformService = LegacyPlatformService;