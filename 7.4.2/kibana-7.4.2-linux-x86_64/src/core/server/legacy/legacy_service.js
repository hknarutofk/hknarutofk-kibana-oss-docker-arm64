"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegacyService = void 0;

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _dev = require("../dev");

var _http = require("../http");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getLegacyRawConfig(config) {
  const rawConfig = config.toRaw(); // Elasticsearch config is solely handled by the core and legacy platform
  // shouldn't have direct access to it.

  if (rawConfig.elasticsearch !== undefined) {
    delete rawConfig.elasticsearch;
  }

  return rawConfig;
}
/**
 * @public
 * @deprecated
 */


/** @internal */
class LegacyService {
  constructor(coreContext) {
    this.coreContext = coreContext;

    _defineProperty(this, "log", void 0);

    _defineProperty(this, "devConfig$", void 0);

    _defineProperty(this, "httpConfig$", void 0);

    _defineProperty(this, "kbnServer", void 0);

    _defineProperty(this, "configSubscription", void 0);

    _defineProperty(this, "setupDeps", void 0);

    this.log = coreContext.logger.get('legacy-service');
    this.devConfig$ = coreContext.configService.atPath('dev').pipe((0, _operators.map)(rawConfig => new _dev.DevConfig(rawConfig)));
    this.httpConfig$ = coreContext.configService.atPath('server').pipe((0, _operators.map)(rawConfig => new _http.HttpConfig(rawConfig, coreContext.env)));
  }

  async setup(setupDeps) {
    this.setupDeps = setupDeps;
  }

  async start(startDeps) {
    const {
      setupDeps
    } = this;

    if (!setupDeps) {
      throw new Error('Legacy service is not setup yet.');
    }

    this.log.debug('starting legacy service');
    const update$ = this.coreContext.configService.getConfig$().pipe((0, _operators.tap)(config => {
      if (this.kbnServer !== undefined) {
        this.kbnServer.applyLoggingConfiguration(config.toRaw());
      }
    }), (0, _operators.tap)({
      error: err => this.log.error(err)
    }), (0, _operators.publishReplay)(1));
    this.configSubscription = update$.connect(); // Receive initial config and create kbnServer/ClusterManager.

    this.kbnServer = await update$.pipe((0, _operators.first)(), (0, _operators.mergeMap)(async config => {
      if (this.coreContext.env.isDevClusterMaster) {
        await this.createClusterManager(config);
        return;
      }

      return await this.createKbnServer(config, setupDeps, startDeps);
    })).toPromise();
  }

  async stop() {
    this.log.debug('stopping legacy service');

    if (this.configSubscription !== undefined) {
      this.configSubscription.unsubscribe();
      this.configSubscription = undefined;
    }

    if (this.kbnServer !== undefined) {
      await this.kbnServer.close();
      this.kbnServer = undefined;
    }
  }

  async createClusterManager(config) {
    const basePathProxy$ = this.coreContext.env.cliArgs.basePath ? (0, _rxjs.combineLatest)(this.devConfig$, this.httpConfig$).pipe((0, _operators.first)(), (0, _operators.map)(([devConfig, httpConfig]) => new _http.BasePathProxyServer(this.coreContext.logger.get('server'), httpConfig, devConfig))) : _rxjs.EMPTY;

    require('../../../cli/cluster/cluster_manager').create(this.coreContext.env.cliArgs, getLegacyRawConfig(config), (await basePathProxy$.toPromise()));
  }

  async createKbnServer(config, setupDeps, startDeps) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const KbnServer = require('../../../legacy/server/kbn_server');

    const kbnServer = new KbnServer(getLegacyRawConfig(config), {
      handledConfigPaths: await this.coreContext.configService.getUsedPaths(),
      setupDeps,
      startDeps,
      logger: this.coreContext.logger
    }); // The kbnWorkerType check is necessary to prevent the repl
    // from being started multiple times in different processes.
    // We only want one REPL.

    if (this.coreContext.env.cliArgs.repl && process.env.kbnWorkerType === 'server') {
      require('../../../cli/repl').startRepl(kbnServer);
    }

    const httpConfig = await this.httpConfig$.pipe((0, _operators.first)()).toPromise();

    if (httpConfig.autoListen) {
      try {
        await kbnServer.listen();
      } catch (err) {
        await kbnServer.close();
        throw err;
      }
    } else {
      await kbnServer.ready();
    }

    return kbnServer;
  }

}

exports.LegacyService = LegacyService;