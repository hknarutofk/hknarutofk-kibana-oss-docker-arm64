"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasePath = void 0;

var _router = require("./router");

var _utils = require("../../utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class BasePath {
  constructor(serverBasePath) {
    this.serverBasePath = serverBasePath;

    _defineProperty(this, "basePathCache", new WeakMap());

    _defineProperty(this, "get", request => {
      const requestScopePath = this.basePathCache.get((0, _router.ensureRawRequest)(request)) || '';
      const serverBasePath = this.serverBasePath || '';
      return `${serverBasePath}${requestScopePath}`;
    });

    _defineProperty(this, "set", (request, requestSpecificBasePath) => {
      const rawRequest = (0, _router.ensureRawRequest)(request);

      if (this.basePathCache.has(rawRequest)) {
        throw new Error('Request basePath was previously set. Setting multiple times is not supported.');
      }

      this.basePathCache.set(rawRequest, requestSpecificBasePath);
    });

    _defineProperty(this, "prepend", path => {
      if (!this.serverBasePath) return path;
      return (0, _utils.modifyUrl)(path, parts => {
        if (!parts.hostname && parts.pathname && parts.pathname.startsWith('/')) {
          parts.pathname = `${this.serverBasePath}${parts.pathname}`;
        }
      });
    });

    _defineProperty(this, "remove", path => {
      if (!this.serverBasePath) {
        return path;
      }

      if (path === this.serverBasePath) {
        return '/';
      }

      if (path.startsWith(`${this.serverBasePath}/`)) {
        return path.slice(this.serverBasePath.length);
      }

      return path;
    });
  }

}

exports.BasePath = BasePath;