"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRealRequest = isRealRequest;
exports.ensureRawRequest = exports.KibanaRequest = void 0;

var _utils = require("../../../utils");

var _socket = require("./socket");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const requestSymbol = Symbol('request');
/**
 * Request specific route information exposed to a handler.
 * @public
 * */

// eslint-disable-line @typescript-eslint/no-empty-interface

/**
 * Kibana specific abstraction for an incoming request.
 * @public
 */
class KibanaRequest {
  /**
   * Factory for creating requests. Validates the request before creating an
   * instance of a KibanaRequest.
   * @internal
   */
  static from(req, routeSchemas, withoutSecretHeaders = true) {
    const requestParts = KibanaRequest.validate(req, routeSchemas);
    return new KibanaRequest(req, requestParts.params, requestParts.query, requestParts.body, withoutSecretHeaders);
  }
  /**
   * Validates the different parts of a request based on the schemas defined for
   * the route. Builds up the actual params, query and body object that will be
   * received in the route handler.
   * @internal
   */


  static validate(req, routeSchemas) {
    if (routeSchemas === undefined) {
      return {
        body: {},
        params: {},
        query: {}
      };
    }

    const params = routeSchemas.params === undefined ? {} : routeSchemas.params.validate(req.params, {}, 'request params');
    const query = routeSchemas.query === undefined ? {} : routeSchemas.query.validate(req.query, {}, 'request query');
    const body = routeSchemas.body === undefined ? {} : routeSchemas.body.validate(req.payload, {}, 'request body');
    return {
      query,
      params,
      body
    };
  }
  /** a WHATWG URL standard object. */


  constructor(request, params, query, body, withoutSecretHeaders) {
    this.params = params;
    this.query = query;
    this.body = body;
    this.withoutSecretHeaders = withoutSecretHeaders;

    _defineProperty(this, "url", void 0);

    _defineProperty(this, "route", void 0);

    _defineProperty(this, "headers", void 0);

    _defineProperty(this, "socket", void 0);

    _defineProperty(this, requestSymbol, void 0);

    this.url = request.url;
    this.headers = (0, _utils.deepFreeze)({ ...request.headers
    }); // prevent Symbol exposure via Object.getOwnPropertySymbols()

    Object.defineProperty(this, requestSymbol, {
      value: request,
      enumerable: false
    });
    this.route = (0, _utils.deepFreeze)(this.getRouteInfo());
    this.socket = new _socket.KibanaSocket(request.raw.req.socket);
  }

  getRouteInfo() {
    const request = this[requestSymbol];
    return {
      path: request.path,
      method: request.method,
      options: {
        authRequired: request.route.settings.auth !== false,
        tags: request.route.settings.tags || []
      }
    };
  }

}
/**
 * Returns underlying Hapi Request
 * @internal
 */


exports.KibanaRequest = KibanaRequest;

const ensureRawRequest = request => isKibanaRequest(request) ? request[requestSymbol] : request;

exports.ensureRawRequest = ensureRawRequest;

function isKibanaRequest(request) {
  return request instanceof KibanaRequest;
}

function isRequest(request) {
  try {
    return request.raw.req && typeof request.raw.req === 'object';
  } catch {
    return false;
  }
}
/**
 * Checks if an incoming request either KibanaRequest or Legacy.Request
 * @internal
 */


function isRealRequest(request) {
  return isKibanaRequest(request) || isRequest(request);
}