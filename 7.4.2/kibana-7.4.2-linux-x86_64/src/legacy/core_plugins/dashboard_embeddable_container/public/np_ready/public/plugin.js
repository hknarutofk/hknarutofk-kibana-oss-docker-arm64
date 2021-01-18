"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardEmbeddableContainerPublicPlugin = void 0;

var _embeddable_api = require("./lib/embeddable_api");

var _lib = require("./lib");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DashboardEmbeddableContainerPublicPlugin =
/*#__PURE__*/
function () {
  function DashboardEmbeddableContainerPublicPlugin(initializerContext) {
    _classCallCheck(this, DashboardEmbeddableContainerPublicPlugin);
  }

  _createClass(DashboardEmbeddableContainerPublicPlugin, [{
    key: "setup",
    value: function setup(core, _ref) {
      var embeddable = _ref.embeddable;
      var expandPanelAction = new _lib.ExpandPanelAction();
      embeddable.registerAction(expandPanelAction);
      embeddable.attachAction(_embeddable_api.CONTEXT_MENU_TRIGGER, expandPanelAction.id);
    }
  }, {
    key: "start",
    value: function start(core, plugins) {
      var application = core.application,
          notifications = core.notifications,
          overlays = core.overlays;
      var embeddable = plugins.embeddable,
          inspector = plugins.inspector,
          __LEGACY = plugins.__LEGACY;
      var factory = new _lib.DashboardContainerFactory({
        application: application,
        notifications: notifications,
        overlays: overlays,
        embeddable: embeddable,
        inspector: inspector,
        SavedObjectFinder: __LEGACY.SavedObjectFinder,
        ExitFullScreenButton: __LEGACY.ExitFullScreenButton
      });
      embeddable.registerEmbeddableFactory(factory.type, factory);
    }
  }, {
    key: "stop",
    value: function stop() {}
  }]);

  return DashboardEmbeddableContainerPublicPlugin;
}();

exports.DashboardEmbeddableContainerPublicPlugin = DashboardEmbeddableContainerPublicPlugin;