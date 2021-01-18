"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricsServerPlugin = void 0;

var _fields = require("./routes/fields");

var _vis = require("./routes/vis");

var _search_strategies_register = require("./lib/search_strategies/search_strategies_register");

var _get_vis_data = require("./lib/get_vis_data");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MetricsServerPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "initializerContext", void 0);

    this.initializerContext = initializerContext;
  }

  setup(core) {
    const {
      http
    } = core;
    (0, _fields.fieldsRoutes)(http.server);
    (0, _vis.visDataRoutes)(http.server); // Expose getVisData to allow plugins to use TSVB's backend for metrics

    http.server.expose('getVisData', _get_vis_data.getVisData);

    _search_strategies_register.SearchStrategiesRegister.init(http.server);
  }

}

exports.MetricsServerPlugin = MetricsServerPlugin;