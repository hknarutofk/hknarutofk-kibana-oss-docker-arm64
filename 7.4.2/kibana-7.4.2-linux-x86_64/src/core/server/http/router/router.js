"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Router = void 0;

var _configSchema = require("@kbn/config-schema");

var _request = require("./request");

var _response = require("./response");

var _response_adapter = require("./response_adapter");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getRouteFullPath(routerPath, routePath) {
  // If router's path ends with slash and route's path starts with slash,
  // we should omit one of them to have a valid concatenated path.
  const routePathStartIndex = routerPath.endsWith('/') && routePath.startsWith('/') ? 1 : 0;
  return `${routerPath}${routePath.slice(routePathStartIndex)}`;
}
/**
 * Create the validation schemas for a route
 *
 * @returns Route schemas if `validate` is specified on the route, otherwise
 * undefined.
 */


function routeSchemasFromRouteConfig(route, routeMethod) {
  // The type doesn't allow `validate` to be undefined, but it can still
  // happen when it's used from JavaScript.
  if (route.validate === undefined) {
    throw new Error(`The [${routeMethod}] at [${route.path}] does not have a 'validate' specified. Use 'false' as the value if you want to bypass validation.`);
  }

  if (route.validate !== false) {
    Object.entries(route.validate).forEach(([key, schema]) => {
      if (!(schema instanceof _configSchema.Type)) {
        throw new Error(`Expected a valid schema declared with '@kbn/config-schema' package at key: [${key}].`);
      }
    });
  }

  return route.validate ? route.validate : undefined;
}
/**
 * @internal
 */


class Router {
  constructor(routerPath, log, enhanceWithContext) {
    this.routerPath = routerPath;
    this.log = log;
    this.enhanceWithContext = enhanceWithContext;

    _defineProperty(this, "routes", []);

    _defineProperty(this, "get", void 0);

    _defineProperty(this, "post", void 0);

    _defineProperty(this, "delete", void 0);

    _defineProperty(this, "put", void 0);

    const buildMethod = method => (route, handler) => {
      const {
        path,
        options = {}
      } = route;
      const routeSchemas = routeSchemasFromRouteConfig(route, method);
      this.routes.push({
        handler: async (req, responseToolkit) => await this.handle({
          routeSchemas,
          request: req,
          responseToolkit,
          handler: this.enhanceWithContext(handler)
        }),
        method,
        path: getRouteFullPath(this.routerPath, path),
        options
      });
    };

    this.get = buildMethod('get');
    this.post = buildMethod('post');
    this.delete = buildMethod('delete');
    this.put = buildMethod('put');
  }

  getRoutes() {
    return [...this.routes];
  }

  async handle({
    routeSchemas,
    request,
    responseToolkit,
    handler
  }) {
    let kibanaRequest;
    const hapiResponseAdapter = new _response_adapter.HapiResponseAdapter(responseToolkit);

    try {
      kibanaRequest = _request.KibanaRequest.from(request, routeSchemas);
    } catch (e) {
      return hapiResponseAdapter.toBadRequest(e.message);
    }

    try {
      const kibanaResponse = await handler(kibanaRequest, _response.kibanaResponseFactory);
      return hapiResponseAdapter.handle(kibanaResponse);
    } catch (e) {
      this.log.error(e);
      return hapiResponseAdapter.toInternalError();
    }
  }

}

exports.Router = Router;