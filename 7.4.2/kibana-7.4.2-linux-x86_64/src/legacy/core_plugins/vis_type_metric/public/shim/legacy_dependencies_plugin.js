"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegacyDependenciesPlugin = void 0;

var _metric_vis_legacy_module = require("./metric_vis_legacy_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LegacyDependenciesPlugin =
/*#__PURE__*/
function () {
  function LegacyDependenciesPlugin() {
    _classCallCheck(this, LegacyDependenciesPlugin);
  }

  _createClass(LegacyDependenciesPlugin, [{
    key: "setup",
    value: function setup() {
      // Init kibana/metric_vis AngularJS module.
      (0, _metric_vis_legacy_module.initMetricVisLegacyModule)();
    }
  }, {
    key: "start",
    value: function start(core) {// nothing to do here yet
    }
  }]);

  return LegacyDependenciesPlugin;
}();

exports.LegacyDependenciesPlugin = LegacyDependenciesPlugin;