"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Server = void 0;

var _operators = require("rxjs/operators");

var _config = require("./config");

var _elasticsearch = require("./elasticsearch");

var _http = require("./http");

var _legacy = require("./legacy");

var _plugins = require("./plugins");

var _logging = require("./logging");

var _dev = require("./dev");

var _utils = require("../utils/");

var _context = require("./context");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const coreId = Symbol('core');

class Server {
  constructor(config$, env, logger) {
    this.config$ = config$;
    this.env = env;
    this.logger = logger;

    _defineProperty(this, "configService", void 0);

    _defineProperty(this, "context", void 0);

    _defineProperty(this, "elasticsearch", void 0);

    _defineProperty(this, "http", void 0);

    _defineProperty(this, "plugins", void 0);

    _defineProperty(this, "legacy", void 0);

    _defineProperty(this, "log", void 0);

    this.log = this.logger.get('server');
    this.configService = new _config.ConfigService(config$, env, logger);
    const core = {
      coreId,
      configService: this.configService,
      env,
      logger
    };
    this.context = new _context.ContextService(core);
    this.http = new _http.HttpService(core);
    this.plugins = new _plugins.PluginsService(core);
    this.legacy = new _legacy.LegacyService(core);
    this.elasticsearch = new _elasticsearch.ElasticsearchService(core);
  }

  async setup() {
    this.log.debug('setting up server'); // Discover any plugins before continuing. This allows other systems to utilize the plugin dependency graph.

    const pluginDependencies = await this.plugins.discover();
    const contextServiceSetup = this.context.setup({
      pluginDependencies
    });
    const httpSetup = await this.http.setup({
      context: contextServiceSetup
    });
    this.registerDefaultRoute(httpSetup);
    const elasticsearchServiceSetup = await this.elasticsearch.setup({
      http: httpSetup
    });
    const coreSetup = {
      context: contextServiceSetup,
      elasticsearch: elasticsearchServiceSetup,
      http: httpSetup
    };
    this.registerCoreContext(coreSetup);
    const pluginsSetup = await this.plugins.setup(coreSetup);
    await this.legacy.setup({
      core: { ...coreSetup,
        plugins: pluginsSetup
      },
      plugins: (0, _utils.mapToObject)(pluginsSetup.contracts)
    });
    return coreSetup;
  }

  async start() {
    const pluginsStart = await this.plugins.start({});
    const coreStart = {
      plugins: pluginsStart
    };
    await this.legacy.start({
      core: coreStart,
      plugins: (0, _utils.mapToObject)(pluginsStart.contracts)
    });
    await this.http.start();
    return coreStart;
  }

  async stop() {
    this.log.debug('stopping server');
    await this.legacy.stop();
    await this.plugins.stop();
    await this.elasticsearch.stop();
    await this.http.stop();
  }

  registerDefaultRoute(httpSetup) {
    const router = httpSetup.createRouter('/core');
    router.get({
      path: '/',
      validate: false
    }, async (context, req, res) => res.ok({
      body: {
        version: '0.0.1'
      }
    }));
  }

  registerCoreContext(coreSetup) {
    coreSetup.http.registerRouteHandlerContext(coreId, 'core', async (context, req) => {
      const adminClient = await coreSetup.elasticsearch.adminClient$.pipe((0, _operators.take)(1)).toPromise();
      const dataClient = await coreSetup.elasticsearch.dataClient$.pipe((0, _operators.take)(1)).toPromise();
      return {
        elasticsearch: {
          adminClient: adminClient.asScoped(req),
          dataClient: dataClient.asScoped(req)
        }
      };
    });
  }

  async setupConfigSchemas() {
    const schemas = [[_elasticsearch.config.path, _elasticsearch.config.schema], [_logging.config.path, _logging.config.schema], [_http.config.path, _http.config.schema], [_plugins.config.path, _plugins.config.schema], [_dev.config.path, _dev.config.schema]];

    for (const [path, schema] of schemas) {
      await this.configService.setSchema(path, schema);
    }
  }

}

exports.Server = Server;