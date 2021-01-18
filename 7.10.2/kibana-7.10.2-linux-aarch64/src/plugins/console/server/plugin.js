"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsoleServerPlugin = void 0;

var _operators = require("rxjs/operators");

var _lib = require("./lib");

var _services = require("./services");

var _routes = require("./routes");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ConsoleServerPlugin {
  constructor(ctx) {
    this.ctx = ctx;

    _defineProperty(this, "log", void 0);

    _defineProperty(this, "specDefinitionsService", new _services.SpecDefinitionsService());

    _defineProperty(this, "esLegacyConfigService", new _services.EsLegacyConfigService());

    this.log = this.ctx.logger.get();
  }

  async setup({
    http,
    capabilities,
    getStartServices,
    elasticsearch
  }) {
    capabilities.registerProvider(() => ({
      dev_tools: {
        show: true,
        save: true
      }
    }));
    const config = await this.ctx.config.create().pipe((0, _operators.first)()).toPromise();
    const globalConfig = await this.ctx.config.legacy.globalConfig$.pipe((0, _operators.first)()).toPromise();
    const proxyPathFilters = config.proxyFilter.map(str => new RegExp(str));
    this.esLegacyConfigService.setup(elasticsearch.legacy.config$);
    const router = http.createRouter();
    (0, _routes.registerRoutes)({
      router,
      log: this.log,
      services: {
        esLegacyConfigService: this.esLegacyConfigService,
        specDefinitionService: this.specDefinitionsService
      },
      proxy: {
        proxyConfigCollection: new _lib.ProxyConfigCollection(config.proxyConfig),
        readLegacyESConfig: async () => {
          const legacyConfig = await this.esLegacyConfigService.readConfig();
          return { ...globalConfig.elasticsearch,
            ...legacyConfig
          };
        },
        pathFilters: proxyPathFilters
      }
    });
    return { ...this.specDefinitionsService.setup()
    };
  }

  start() {
    return { ...this.specDefinitionsService.start()
    };
  }

  stop() {
    this.esLegacyConfigService.stop();
  }

}

exports.ConsoleServerPlugin = ConsoleServerPlugin;