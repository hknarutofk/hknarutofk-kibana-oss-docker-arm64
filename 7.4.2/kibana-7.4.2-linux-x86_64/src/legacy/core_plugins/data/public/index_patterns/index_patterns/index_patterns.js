"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexPatternsProvider = exports.IndexPatterns = void 0;

var _pattern_cache = require("./_pattern_cache");

var _index_pattern = require("./index_pattern");

var _index_patterns_api_client = require("./index_patterns_api_client");

var _modules = require("ui/modules");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var indexPatternCache = (0, _pattern_cache.createIndexPatternCache)();
var apiClient = new _index_patterns_api_client.IndexPatternsApiClient();

var IndexPatterns =
/*#__PURE__*/
function () {
  function IndexPatterns(config, savedObjectsClient) {
    var _this = this;

    _classCallCheck(this, IndexPatterns);

    _defineProperty(this, "fieldFormats", void 0);

    _defineProperty(this, "config", void 0);

    _defineProperty(this, "savedObjectsClient", void 0);

    _defineProperty(this, "savedObjectsCache", void 0);

    _defineProperty(this, "getIds",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var refresh,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              refresh = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;

              if (!(!_this.savedObjectsCache || refresh)) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return _this.refreshSavedObjectsCache();

            case 4:
              if (_this.savedObjectsCache) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", []);

            case 6:
              return _context.abrupt("return", _this.savedObjectsCache.map(function (obj) {
                return obj != null ? obj.id : undefined;
              }));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(this, "getTitles",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var refresh,
          _args2 = arguments;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              refresh = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;

              if (!(!_this.savedObjectsCache || refresh)) {
                _context2.next = 4;
                break;
              }

              _context2.next = 4;
              return _this.refreshSavedObjectsCache();

            case 4:
              if (_this.savedObjectsCache) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", []);

            case 6:
              return _context2.abrupt("return", _this.savedObjectsCache.map(function (obj) {
                return obj != null && obj.attributes != null ? obj.attributes.title : undefined;
              }));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(this, "getFields",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(fields) {
        var refresh,
            _args3 = arguments;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                refresh = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : false;

                if (!(!_this.savedObjectsCache || refresh)) {
                  _context3.next = 4;
                  break;
                }

                _context3.next = 4;
                return _this.refreshSavedObjectsCache();

              case 4:
                if (_this.savedObjectsCache) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", []);

              case 6:
                return _context3.abrupt("return", _this.savedObjectsCache.map(function (obj) {
                  var result = {};
                  fields.forEach(function (f) {
                    return result[f] = obj[f] || (obj != null && obj.attributes != null ? obj.attributes[f] : undefined);
                  });
                  return result;
                }));

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(this, "clearCache", function (id) {
      _this.savedObjectsCache = null;

      if (id) {
        indexPatternCache.clear(id);
      } else {
        indexPatternCache.clearAll();
      }
    });

    _defineProperty(this, "getDefault",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      var defaultIndexPatternId;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              defaultIndexPatternId = _this.config.get('defaultIndex');

              if (!defaultIndexPatternId) {
                _context4.next = 5;
                break;
              }

              _context4.next = 4;
              return _this.get(defaultIndexPatternId);

            case 4:
              return _context4.abrupt("return", _context4.sent);

            case 5:
              return _context4.abrupt("return", null);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));

    _defineProperty(this, "get", function (id) {
      if (!id) return _this.make();
      var cache = indexPatternCache.get(id);
      return cache || indexPatternCache.set(id, _this.make(id));
    });

    _defineProperty(this, "make", function (id) {
      return new _index_pattern.IndexPattern(id, function (cfg) {
        return _this.config.get(cfg);
      }, _this.savedObjectsClient, apiClient, indexPatternCache).init();
    });

    this.config = config;
    this.savedObjectsClient = savedObjectsClient;
  }

  _createClass(IndexPatterns, [{
    key: "refreshSavedObjectsCache",
    value: function () {
      var _refreshSavedObjectsCache = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.savedObjectsClient.find({
                  type: 'index-pattern',
                  fields: [],
                  perPage: 10000
                });

              case 2:
                this.savedObjectsCache = _context5.sent.savedObjects;

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function refreshSavedObjectsCache() {
        return _refreshSavedObjectsCache.apply(this, arguments);
      }

      return refreshSavedObjectsCache;
    }()
  }]);

  return IndexPatterns;
}(); // add angular service for backward compatibility
// @ts-ignore
// eslint-disable-next-line


exports.IndexPatterns = IndexPatterns;

var _module = _modules.uiModules.get('kibana/index_patterns');

var _service;

_module.service('indexPatterns', function (chrome) {
  if (!_service) _service = new IndexPatterns(chrome.getUiSettingsClient(), chrome.getSavedObjectsClient());
  return _service;
});

var IndexPatternsProvider = function IndexPatternsProvider(chrome) {
  if (!_service) _service = new IndexPatterns(chrome.getUiSettingsClient(), chrome.getSavedObjectsClient());
  return _service;
};

exports.IndexPatternsProvider = IndexPatternsProvider;