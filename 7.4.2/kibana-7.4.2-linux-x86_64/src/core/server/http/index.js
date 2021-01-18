"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  config: true,
  HttpConfig: true,
  HttpConfigType: true,
  HttpService: true,
  HttpServiceSetup: true,
  HttpServiceStart: true,
  HttpServerSetup: true,
  GetAuthHeaders: true,
  AuthStatus: true,
  GetAuthState: true,
  IsAuthenticated: true,
  CustomHttpResponseOptions: true,
  IKibanaSocket: true,
  isRealRequest: true,
  HttpResponseOptions: true,
  HttpResponsePayload: true,
  ErrorHttpResponseOptions: true,
  KibanaRequest: true,
  KibanaRequestRoute: true,
  KnownHeaders: true,
  LegacyRequest: true,
  LifecycleResponseFactory: true,
  RedirectResponseOptions: true,
  RequestHandler: true,
  ResponseError: true,
  ResponseErrorAttributes: true,
  ResponseHeaders: true,
  kibanaResponseFactory: true,
  KibanaResponseFactory: true,
  RouteConfig: true,
  IRouter: true,
  RouteMethod: true,
  RouteConfigOptions: true,
  BasePathProxyServer: true,
  OnPreAuthHandler: true,
  OnPreAuthToolkit: true,
  AuthenticationHandler: true,
  AuthHeaders: true,
  AuthResultParams: true,
  AuthToolkit: true,
  OnPostAuthHandler: true,
  OnPostAuthToolkit: true,
  SessionStorageFactory: true,
  SessionStorage: true,
  SessionStorageCookieOptions: true
};
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function () {
    return _http_config.config;
  }
});
Object.defineProperty(exports, "HttpConfig", {
  enumerable: true,
  get: function () {
    return _http_config.HttpConfig;
  }
});
Object.defineProperty(exports, "HttpConfigType", {
  enumerable: true,
  get: function () {
    return _http_config.HttpConfigType;
  }
});
Object.defineProperty(exports, "HttpService", {
  enumerable: true,
  get: function () {
    return _http_service.HttpService;
  }
});
Object.defineProperty(exports, "HttpServiceSetup", {
  enumerable: true,
  get: function () {
    return _http_service.HttpServiceSetup;
  }
});
Object.defineProperty(exports, "HttpServiceStart", {
  enumerable: true,
  get: function () {
    return _http_service.HttpServiceStart;
  }
});
Object.defineProperty(exports, "HttpServerSetup", {
  enumerable: true,
  get: function () {
    return _http_server.HttpServerSetup;
  }
});
Object.defineProperty(exports, "GetAuthHeaders", {
  enumerable: true,
  get: function () {
    return _auth_headers_storage.GetAuthHeaders;
  }
});
Object.defineProperty(exports, "AuthStatus", {
  enumerable: true,
  get: function () {
    return _auth_state_storage.AuthStatus;
  }
});
Object.defineProperty(exports, "GetAuthState", {
  enumerable: true,
  get: function () {
    return _auth_state_storage.GetAuthState;
  }
});
Object.defineProperty(exports, "IsAuthenticated", {
  enumerable: true,
  get: function () {
    return _auth_state_storage.IsAuthenticated;
  }
});
Object.defineProperty(exports, "CustomHttpResponseOptions", {
  enumerable: true,
  get: function () {
    return _router.CustomHttpResponseOptions;
  }
});
Object.defineProperty(exports, "IKibanaSocket", {
  enumerable: true,
  get: function () {
    return _router.IKibanaSocket;
  }
});
Object.defineProperty(exports, "isRealRequest", {
  enumerable: true,
  get: function () {
    return _router.isRealRequest;
  }
});
Object.defineProperty(exports, "HttpResponseOptions", {
  enumerable: true,
  get: function () {
    return _router.HttpResponseOptions;
  }
});
Object.defineProperty(exports, "HttpResponsePayload", {
  enumerable: true,
  get: function () {
    return _router.HttpResponsePayload;
  }
});
Object.defineProperty(exports, "ErrorHttpResponseOptions", {
  enumerable: true,
  get: function () {
    return _router.ErrorHttpResponseOptions;
  }
});
Object.defineProperty(exports, "KibanaRequest", {
  enumerable: true,
  get: function () {
    return _router.KibanaRequest;
  }
});
Object.defineProperty(exports, "KibanaRequestRoute", {
  enumerable: true,
  get: function () {
    return _router.KibanaRequestRoute;
  }
});
Object.defineProperty(exports, "KnownHeaders", {
  enumerable: true,
  get: function () {
    return _router.KnownHeaders;
  }
});
Object.defineProperty(exports, "LegacyRequest", {
  enumerable: true,
  get: function () {
    return _router.LegacyRequest;
  }
});
Object.defineProperty(exports, "LifecycleResponseFactory", {
  enumerable: true,
  get: function () {
    return _router.LifecycleResponseFactory;
  }
});
Object.defineProperty(exports, "RedirectResponseOptions", {
  enumerable: true,
  get: function () {
    return _router.RedirectResponseOptions;
  }
});
Object.defineProperty(exports, "RequestHandler", {
  enumerable: true,
  get: function () {
    return _router.RequestHandler;
  }
});
Object.defineProperty(exports, "ResponseError", {
  enumerable: true,
  get: function () {
    return _router.ResponseError;
  }
});
Object.defineProperty(exports, "ResponseErrorAttributes", {
  enumerable: true,
  get: function () {
    return _router.ResponseErrorAttributes;
  }
});
Object.defineProperty(exports, "ResponseHeaders", {
  enumerable: true,
  get: function () {
    return _router.ResponseHeaders;
  }
});
Object.defineProperty(exports, "kibanaResponseFactory", {
  enumerable: true,
  get: function () {
    return _router.kibanaResponseFactory;
  }
});
Object.defineProperty(exports, "KibanaResponseFactory", {
  enumerable: true,
  get: function () {
    return _router.KibanaResponseFactory;
  }
});
Object.defineProperty(exports, "RouteConfig", {
  enumerable: true,
  get: function () {
    return _router.RouteConfig;
  }
});
Object.defineProperty(exports, "IRouter", {
  enumerable: true,
  get: function () {
    return _router.IRouter;
  }
});
Object.defineProperty(exports, "RouteMethod", {
  enumerable: true,
  get: function () {
    return _router.RouteMethod;
  }
});
Object.defineProperty(exports, "RouteConfigOptions", {
  enumerable: true,
  get: function () {
    return _router.RouteConfigOptions;
  }
});
Object.defineProperty(exports, "BasePathProxyServer", {
  enumerable: true,
  get: function () {
    return _base_path_proxy_server.BasePathProxyServer;
  }
});
Object.defineProperty(exports, "OnPreAuthHandler", {
  enumerable: true,
  get: function () {
    return _on_pre_auth.OnPreAuthHandler;
  }
});
Object.defineProperty(exports, "OnPreAuthToolkit", {
  enumerable: true,
  get: function () {
    return _on_pre_auth.OnPreAuthToolkit;
  }
});
Object.defineProperty(exports, "AuthenticationHandler", {
  enumerable: true,
  get: function () {
    return _auth.AuthenticationHandler;
  }
});
Object.defineProperty(exports, "AuthHeaders", {
  enumerable: true,
  get: function () {
    return _auth.AuthHeaders;
  }
});
Object.defineProperty(exports, "AuthResultParams", {
  enumerable: true,
  get: function () {
    return _auth.AuthResultParams;
  }
});
Object.defineProperty(exports, "AuthToolkit", {
  enumerable: true,
  get: function () {
    return _auth.AuthToolkit;
  }
});
Object.defineProperty(exports, "OnPostAuthHandler", {
  enumerable: true,
  get: function () {
    return _on_post_auth.OnPostAuthHandler;
  }
});
Object.defineProperty(exports, "OnPostAuthToolkit", {
  enumerable: true,
  get: function () {
    return _on_post_auth.OnPostAuthToolkit;
  }
});
Object.defineProperty(exports, "SessionStorageFactory", {
  enumerable: true,
  get: function () {
    return _session_storage.SessionStorageFactory;
  }
});
Object.defineProperty(exports, "SessionStorage", {
  enumerable: true,
  get: function () {
    return _session_storage.SessionStorage;
  }
});
Object.defineProperty(exports, "SessionStorageCookieOptions", {
  enumerable: true,
  get: function () {
    return _cookie_session_storage.SessionStorageCookieOptions;
  }
});

var _http_config = require("./http_config");

var _http_service = require("./http_service");

var _http_server = require("./http_server");

var _auth_headers_storage = require("./auth_headers_storage");

var _auth_state_storage = require("./auth_state_storage");

var _router = require("./router");

var _base_path_proxy_server = require("./base_path_proxy_server");

var _on_pre_auth = require("./lifecycle/on_pre_auth");

var _auth = require("./lifecycle/auth");

var _on_post_auth = require("./lifecycle/on_post_auth");

var _session_storage = require("./session_storage");

var _cookie_session_storage = require("./cookie_session_storage");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});