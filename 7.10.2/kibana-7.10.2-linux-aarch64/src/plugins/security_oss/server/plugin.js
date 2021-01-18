"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecurityOssPlugin = void 0;

var _rxjs = require("rxjs");

var _check_cluster_data = require("./check_cluster_data");

var _routes = require("./routes");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SecurityOssPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "config$", void 0);

    _defineProperty(this, "logger", void 0);

    this.config$ = initializerContext.config.create();
    this.logger = initializerContext.logger.get();
  }

  setup(core) {
    const router = core.http.createRouter();
    const showInsecureClusterWarning$ = new _rxjs.BehaviorSubject(true);
    (0, _routes.setupDisplayInsecureClusterAlertRoute)({
      router,
      log: this.logger,
      config$: this.config$,
      displayModifier$: showInsecureClusterWarning$,
      doesClusterHaveUserData: (0, _check_cluster_data.createClusterDataCheck)()
    });
    return {
      showInsecureClusterWarning$
    };
  }

  start() {}

  stop() {}

}

exports.SecurityOssPlugin = SecurityOssPlugin;