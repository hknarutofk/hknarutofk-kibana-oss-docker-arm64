"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbeddablePublicPlugin = void 0;

var _api = require("./api");

var _bootstrap = require("./bootstrap");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EmbeddablePublicPlugin =
/*#__PURE__*/
function () {
  function EmbeddablePublicPlugin(initializerContext) {
    _classCallCheck(this, EmbeddablePublicPlugin);

    _defineProperty(this, "triggers", new Map());

    _defineProperty(this, "actions", new Map());

    _defineProperty(this, "embeddableFactories", new Map());

    _defineProperty(this, "api", void 0);
  }

  _createClass(EmbeddablePublicPlugin, [{
    key: "setup",
    value: function setup(core) {
      var _createApi = (0, _api.createApi)({
        actions: this.actions,
        embeddableFactories: this.embeddableFactories,
        triggers: this.triggers
      });

      this.api = _createApi.api;
      (0, _bootstrap.bootstrap)(this.api);
      var _this$api = this.api,
          registerTrigger = _this$api.registerTrigger,
          registerAction = _this$api.registerAction,
          registerEmbeddableFactory = _this$api.registerEmbeddableFactory,
          attachAction = _this$api.attachAction;
      return {
        registerTrigger: registerTrigger,
        registerAction: registerAction,
        registerEmbeddableFactory: registerEmbeddableFactory,
        attachAction: attachAction
      };
    }
  }, {
    key: "start",
    value: function start(core) {
      return this.api;
    }
  }, {
    key: "stop",
    value: function stop() {}
  }]);

  return EmbeddablePublicPlugin;
}();

exports.EmbeddablePublicPlugin = EmbeddablePublicPlugin;