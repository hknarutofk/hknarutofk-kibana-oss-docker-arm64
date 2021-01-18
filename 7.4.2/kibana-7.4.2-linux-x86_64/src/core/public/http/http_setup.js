"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = void 0;

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _lodash = require("lodash");

var _url = require("url");

var _http_intercept_controller = require("./http_intercept_controller");

var _http_fetch_error = require("./http_fetch_error");

var _http_intercept_halt_error = require("./http_intercept_halt_error");

var _base_path_service = require("./base_path_service");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var JSON_CONTENT = /^(application\/(json|x-javascript)|text\/(x-)?javascript|x-json)(;.*)?$/;
var NDJSON_CONTENT = /^(application\/ndjson)(;.*)?$/;

var setup = function setup(injectedMetadata, fatalErrors) {
  var loadingCount$ = new _rxjs.BehaviorSubject(0);
  var stop$ = new _rxjs.Subject();
  var interceptors = new Set();
  var kibanaVersion = injectedMetadata.getKibanaVersion();
  var basePath = new _base_path_service.BasePath(injectedMetadata.getBasePath());

  function intercept(interceptor) {
    interceptors.add(interceptor);
    return function () {
      return interceptors.delete(interceptor);
    };
  }

  function removeAllInterceptors() {
    interceptors.clear();
  }

  function createRequest(path, options) {
    var _merge = (0, _lodash.merge)({
      method: 'GET',
      credentials: 'same-origin',
      prependBasePath: true,
      headers: {
        'kbn-version': kibanaVersion,
        'Content-Type': 'application/json'
      }
    }, options || {}),
        query = _merge.query,
        shouldPrependBasePath = _merge.prependBasePath,
        fetchOptions = _objectWithoutProperties(_merge, ["query", "prependBasePath"]);

    var url = (0, _url.format)({
      pathname: shouldPrependBasePath ? basePath.prepend(path) : path,
      query: query
    });

    if (options && options.headers && 'Content-Type' in options.headers && options.headers['Content-Type'] === undefined) {
      delete fetchOptions.headers['Content-Type'];
    }

    return new Request(url, fetchOptions);
  } // Request/response interceptors are called in opposite orders.
  // Request hooks start from the newest interceptor and end with the oldest.


  function interceptRequest(request, controller) {
    var next = request;
    return _toConsumableArray(interceptors).reduceRight(function (promise, interceptor) {
      return promise.then(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(current) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!controller.halted) {
                    _context.next = 2;
                    break;
                  }

                  throw new _http_intercept_halt_error.HttpInterceptHaltError();

                case 2:
                  if (interceptor.request) {
                    _context.next = 4;
                    break;
                  }

                  return _context.abrupt("return", current);

                case 4:
                  _context.next = 6;
                  return interceptor.request(current, controller);

                case 6:
                  _context.t0 = _context.sent;

                  if (_context.t0) {
                    _context.next = 9;
                    break;
                  }

                  _context.t0 = current;

                case 9:
                  next = _context.t0;
                  return _context.abrupt("return", next);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(),
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(error) {
          var nextRequest;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(error instanceof _http_intercept_halt_error.HttpInterceptHaltError)) {
                    _context2.next = 4;
                    break;
                  }

                  throw error;

                case 4:
                  if (!controller.halted) {
                    _context2.next = 6;
                    break;
                  }

                  throw new _http_intercept_halt_error.HttpInterceptHaltError();

                case 6:
                  if (interceptor.requestError) {
                    _context2.next = 8;
                    break;
                  }

                  throw error;

                case 8:
                  _context2.next = 10;
                  return interceptor.requestError({
                    error: error,
                    request: next
                  }, controller);

                case 10:
                  nextRequest = _context2.sent;

                  if (nextRequest) {
                    _context2.next = 13;
                    break;
                  }

                  throw error;

                case 13:
                  next = nextRequest;
                  return _context2.abrupt("return", next);

                case 15:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }, Promise.resolve(request));
  } // Response hooks start from the oldest interceptor and end with the newest.


  function interceptResponse(_x3, _x4) {
    return _interceptResponse.apply(this, arguments);
  }

  function _interceptResponse() {
    _interceptResponse = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5(responsePromise, controller) {
      var current, finalHttpResponse;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _toConsumableArray(interceptors).reduce(function (promise, interceptor) {
                return promise.then(
                /*#__PURE__*/
                function () {
                  var _ref5 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee3(httpResponse) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!controller.halted) {
                              _context3.next = 2;
                              break;
                            }

                            throw new _http_intercept_halt_error.HttpInterceptHaltError();

                          case 2:
                            if (interceptor.response) {
                              _context3.next = 4;
                              break;
                            }

                            return _context3.abrupt("return", httpResponse);

                          case 4:
                            _context3.next = 6;
                            return interceptor.response(httpResponse, controller);

                          case 6:
                            _context3.t0 = _context3.sent;

                            if (_context3.t0) {
                              _context3.next = 9;
                              break;
                            }

                            _context3.t0 = httpResponse;

                          case 9:
                            current = _context3.t0;
                            return _context3.abrupt("return", current);

                          case 11:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x6) {
                    return _ref5.apply(this, arguments);
                  };
                }(),
                /*#__PURE__*/
                function () {
                  var _ref6 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee4(error) {
                    var next;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            if (!(error instanceof _http_intercept_halt_error.HttpInterceptHaltError)) {
                              _context4.next = 4;
                              break;
                            }

                            throw error;

                          case 4:
                            if (!controller.halted) {
                              _context4.next = 6;
                              break;
                            }

                            throw new _http_intercept_halt_error.HttpInterceptHaltError();

                          case 6:
                            if (interceptor.responseError) {
                              _context4.next = 8;
                              break;
                            }

                            throw error;

                          case 8:
                            _context4.next = 10;
                            return interceptor.responseError(_objectSpread({}, current, {
                              error: error
                            }), controller);

                          case 10:
                            next = _context4.sent;

                            if (next) {
                              _context4.next = 13;
                              break;
                            }

                            throw error;

                          case 13:
                            return _context4.abrupt("return", next);

                          case 14:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x7) {
                    return _ref6.apply(this, arguments);
                  };
                }());
              }, responsePromise);

            case 2:
              finalHttpResponse = _context5.sent;
              return _context5.abrupt("return", finalHttpResponse.body);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _interceptResponse.apply(this, arguments);
  }

  function fetcher(_x5) {
    return _fetcher.apply(this, arguments);
  }

  function _fetcher() {
    _fetcher = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee6(request) {
      var response, body, contentType, text;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              body = null;
              _context6.prev = 1;
              _context6.next = 4;
              return window.fetch(request);

            case 4:
              response = _context6.sent;
              _context6.next = 10;
              break;

            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](1);
              throw new _http_fetch_error.HttpFetchError(_context6.t0.message);

            case 10:
              contentType = response.headers.get('Content-Type') || '';
              _context6.prev = 11;

              if (!NDJSON_CONTENT.test(contentType)) {
                _context6.next = 18;
                break;
              }

              _context6.next = 15;
              return response.blob();

            case 15:
              body = _context6.sent;
              _context6.next = 28;
              break;

            case 18:
              if (!JSON_CONTENT.test(contentType)) {
                _context6.next = 24;
                break;
              }

              _context6.next = 21;
              return response.json();

            case 21:
              body = _context6.sent;
              _context6.next = 28;
              break;

            case 24:
              _context6.next = 26;
              return response.text();

            case 26:
              text = _context6.sent;

              try {
                body = JSON.parse(text);
              } catch (err) {
                body = text;
              }

            case 28:
              _context6.next = 33;
              break;

            case 30:
              _context6.prev = 30;
              _context6.t1 = _context6["catch"](11);
              throw new _http_fetch_error.HttpFetchError(_context6.t1.message, response, body);

            case 33:
              if (response.ok) {
                _context6.next = 35;
                break;
              }

              throw new _http_fetch_error.HttpFetchError(response.statusText, response, body);

            case 35:
              return _context6.abrupt("return", {
                response: response,
                body: body,
                request: request
              });

            case 36:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[1, 7], [11, 30]]);
    }));
    return _fetcher.apply(this, arguments);
  }

  function fetch(path) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var controller = new _http_intercept_controller.HttpInterceptController();
    var initialRequest = createRequest(path, options);
    return interceptResponse(interceptRequest(initialRequest, controller).then(fetcher), controller);
  }

  function shorthand(method) {
    return function (path) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return fetch(path, _objectSpread({}, options, {
        method: method
      }));
    };
  }

  function stop() {
    stop$.next();
    loadingCount$.complete();
  }

  function addLoadingCount(count$) {
    count$.pipe((0, _operators.distinctUntilChanged)(), (0, _operators.tap)(function (count) {
      if (count < 0) {
        throw new Error('Observables passed to loadingCount.add() must only emit positive numbers');
      }
    }), // use takeUntil() so that we can finish each stream on stop() the same way we do when they complete,
    // by removing the previous count from the total
    (0, _operators.takeUntil)(stop$), (0, _operators.endWith)(0), (0, _operators.startWith)(0), (0, _operators.pairwise)(), (0, _operators.map)(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          prev = _ref4[0],
          next = _ref4[1];

      return next - prev;
    })).subscribe({
      next: function next(delta) {
        loadingCount$.next(loadingCount$.getValue() + delta);
      },
      error: function error(_error) {
        if (fatalErrors) {
          fatalErrors.add(_error);
        }
      }
    });
  }

  function getLoadingCount$() {
    return loadingCount$.pipe((0, _operators.distinctUntilChanged)());
  }

  return {
    stop: stop,
    basePath: basePath,
    intercept: intercept,
    removeAllInterceptors: removeAllInterceptors,
    fetch: fetch,
    delete: shorthand('DELETE'),
    get: shorthand('GET'),
    head: shorthand('HEAD'),
    options: shorthand('OPTIONS'),
    patch: shorthand('PATCH'),
    post: shorthand('POST'),
    put: shorthand('PUT'),
    addLoadingCount: addLoadingCount,
    getLoadingCount$: getLoadingCount$
  };
};

exports.setup = setup;