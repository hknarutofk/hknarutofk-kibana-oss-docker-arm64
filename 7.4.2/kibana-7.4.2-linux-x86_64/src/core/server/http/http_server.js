"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpServer = void 0;

var _http_tools = require("./http_tools");

var _auth = require("./lifecycle/auth");

var _on_post_auth = require("./lifecycle/on_post_auth");

var _on_pre_auth = require("./lifecycle/on_pre_auth");

var _cookie_session_storage = require("./cookie_session_storage");

var _auth_state_storage = require("./auth_state_storage");

var _auth_headers_storage = require("./auth_headers_storage");

var _base_path_service = require("./base_path_service");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class HttpServer {
  constructor(logger, name) {
    this.logger = logger;
    this.name = name;

    _defineProperty(this, "server", void 0);

    _defineProperty(this, "config", void 0);

    _defineProperty(this, "registeredRouters", new Set());

    _defineProperty(this, "authRegistered", false);

    _defineProperty(this, "cookieSessionStorageCreated", false);

    _defineProperty(this, "log", void 0);

    _defineProperty(this, "authState", void 0);

    _defineProperty(this, "authRequestHeaders", void 0);

    _defineProperty(this, "authResponseHeaders", void 0);

    this.authState = new _auth_state_storage.AuthStateStorage(() => this.authRegistered);
    this.authRequestHeaders = new _auth_headers_storage.AuthHeadersStorage();
    this.authResponseHeaders = new _auth_headers_storage.AuthHeadersStorage();
    this.log = logger.get('http', 'server', name);
  }

  isListening() {
    return this.server !== undefined && this.server.listener.listening;
  }

  registerRouter(router) {
    if (this.isListening()) {
      throw new Error('Routers can be registered only when HTTP server is stopped.');
    }

    this.registeredRouters.add(router);
  }

  setup(config) {
    const serverOptions = (0, _http_tools.getServerOptions)(config);
    const listenerOptions = (0, _http_tools.getListenerOptions)(config);
    this.server = (0, _http_tools.createServer)(serverOptions, listenerOptions);
    this.config = config;
    const basePathService = new _base_path_service.BasePath(config.basePath);
    this.setupBasePathRewrite(config, basePathService);
    return {
      registerRouter: this.registerRouter.bind(this),
      registerOnPreAuth: this.registerOnPreAuth.bind(this),
      registerOnPostAuth: this.registerOnPostAuth.bind(this),
      createCookieSessionStorageFactory: cookieOptions => this.createCookieSessionStorageFactory(cookieOptions, config.basePath),
      registerAuth: this.registerAuth.bind(this),
      basePath: basePathService,
      auth: {
        get: this.authState.get,
        isAuthenticated: this.authState.isAuthenticated,
        getAuthHeaders: this.authRequestHeaders.get
      },
      isTlsEnabled: config.ssl.enabled,
      // Return server instance with the connection options so that we can properly
      // bridge core and the "legacy" Kibana internally. Once this bridge isn't
      // needed anymore we shouldn't return the instance from this method.
      server: this.server
    };
  }

  async start() {
    if (this.server === undefined) {
      throw new Error('Http server is not setup up yet');
    }

    this.log.debug('starting http server');

    for (const router of this.registeredRouters) {
      for (const route of router.getRoutes()) {
        this.log.debug(`registering route handler for [${route.path}]`);
        const {
          authRequired = true,
          tags
        } = route.options;
        this.server.route({
          handler: route.handler,
          method: route.method,
          path: route.path,
          options: {
            auth: authRequired ? undefined : false,
            tags: tags ? Array.from(tags) : undefined
          }
        });
      }
    }

    await this.server.start();
    const serverPath = this.config && this.config.rewriteBasePath && this.config.basePath !== undefined ? this.config.basePath : '';
    this.log.info(`http server running at ${this.server.info.uri}${serverPath}`);
  }

  async stop() {
    if (this.server === undefined) {
      return;
    }

    this.log.debug('stopping http server');
    await this.server.stop();
    this.server = undefined;
  }

  setupBasePathRewrite(config, basePathService) {
    if (config.basePath === undefined || !config.rewriteBasePath) {
      return;
    }

    this.registerOnPreAuth((request, response, toolkit) => {
      const oldUrl = request.url.href;
      const newURL = basePathService.remove(oldUrl);
      const shouldRedirect = newURL !== oldUrl;

      if (shouldRedirect) {
        return toolkit.rewriteUrl(newURL);
      }

      return response.notFound();
    });
  }

  registerOnPostAuth(fn) {
    if (this.server === undefined) {
      throw new Error('Server is not created yet');
    }

    this.server.ext('onPostAuth', (0, _on_post_auth.adoptToHapiOnPostAuthFormat)(fn, this.log));
  }

  registerOnPreAuth(fn) {
    if (this.server === undefined) {
      throw new Error('Server is not created yet');
    }

    this.server.ext('onRequest', (0, _on_pre_auth.adoptToHapiOnPreAuthFormat)(fn, this.log));
  }

  async createCookieSessionStorageFactory(cookieOptions, basePath) {
    if (this.server === undefined) {
      throw new Error('Server is not created yet');
    }

    if (this.cookieSessionStorageCreated) {
      throw new Error('A cookieSessionStorageFactory was already created');
    }

    this.cookieSessionStorageCreated = true;
    const sessionStorageFactory = await (0, _cookie_session_storage.createCookieSessionStorageFactory)(this.logger.get('http', 'server', this.name, 'cookie-session-storage'), this.server, cookieOptions, basePath);
    return sessionStorageFactory;
  }

  registerAuth(fn) {
    if (this.server === undefined) {
      throw new Error('Server is not created yet');
    }

    if (this.authRegistered) {
      throw new Error('Auth interceptor was already registered');
    }

    this.authRegistered = true;
    this.server.auth.scheme('login', () => ({
      authenticate: (0, _auth.adoptToHapiAuthFormat)(fn, this.log, (req, {
        state,
        requestHeaders,
        responseHeaders
      }) => {
        this.authState.set(req, state);

        if (responseHeaders) {
          this.authResponseHeaders.set(req, responseHeaders);
        }

        if (requestHeaders) {
          this.authRequestHeaders.set(req, requestHeaders); // we mutate headers only for the backward compatibility with the legacy platform.
          // where some plugin read directly from headers to identify whether a user is authenticated.

          Object.assign(req.headers, requestHeaders);
        }
      })
    }));
    this.server.auth.strategy('session', 'login'); // The default means that the `session` strategy that is based on `login` schema defined above will be
    // automatically assigned to all routes that don't contain an auth config.
    // should be applied for all routes if they don't specify auth strategy in route declaration
    // https://github.com/hapijs/hapi/blob/master/API.md#-serverauthdefaultoptions

    this.server.auth.default('session');
    this.server.ext('onPreResponse', (request, t) => {
      const authResponseHeaders = this.authResponseHeaders.get(request);
      this.extendResponseWithHeaders(request, authResponseHeaders);
      return t.continue;
    });
  }

  extendResponseWithHeaders(request, headers) {
    const response = request.response;
    if (!headers || !response) return;

    if (response instanceof Error) {
      this.findHeadersIntersection(response.output.headers, headers); // hapi wraps all error response in Boom object internally

      response.output.headers = { ...response.output.headers,
        ...headers
      };
    } else {
      for (const [headerName, headerValue] of Object.entries(headers)) {
        this.findHeadersIntersection(response.headers, headers);
        response.header(headerName, headerValue); // hapi types don't specify string[] as valid value
      }
    }
  } // NOTE: responseHeaders contains not a full list of response headers, but only explicitly set on a response object.
  // any headers added by hapi internally, like `content-type`, `content-length`, etc. do not present here.


  findHeadersIntersection(responseHeaders, headers) {
    Object.keys(headers).forEach(headerName => {
      if (responseHeaders[headerName] !== undefined) {
        this.log.warn(`Server rewrites a response header [${headerName}].`);
      }
    });
  }

}

exports.HttpServer = HttpServer;