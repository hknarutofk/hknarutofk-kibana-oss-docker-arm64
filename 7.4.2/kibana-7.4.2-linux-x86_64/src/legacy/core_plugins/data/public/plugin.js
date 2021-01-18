"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataPlugin = void 0;

var _expressions = require("./expressions");

var _search = require("./search");

var _query = require("./query");

var _filter = require("./filter");

var _index_patterns = require("./index_patterns");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Data Plugin - public
 *
 * This is the entry point for the entire client-side public contract of the plugin.
 * If something is not explicitly exported here, you can safely assume it is private
 * to the plugin and not considered stable.
 *
 * All stateful contracts will be injected by the platform at runtime, and are defined
 * in the setup/start interfaces. The remaining items exported here are either types,
 * or static code.
 */
var DataPlugin =
/*#__PURE__*/
function () {
  function DataPlugin() {
    _classCallCheck(this, DataPlugin);

    _defineProperty(this, "expressions", new _expressions.ExpressionsService());

    _defineProperty(this, "filter", new _filter.FilterService());

    _defineProperty(this, "indexPatterns", new _index_patterns.IndexPatternsService());

    _defineProperty(this, "query", new _query.QueryService());

    _defineProperty(this, "search", new _search.SearchService());
  }

  _createClass(DataPlugin, [{
    key: "setup",
    value: function setup(core, _ref) {
      var __LEGACY = _ref.__LEGACY,
          interpreter = _ref.interpreter;
      var uiSettings = core.uiSettings;
      var savedObjectsClient = __LEGACY.savedObjectsClient;
      var indexPatternsService = this.indexPatterns.setup({
        uiSettings: uiSettings,
        savedObjectsClient: savedObjectsClient
      });
      return {
        expressions: this.expressions.setup({
          interpreter: interpreter
        }),
        indexPatterns: indexPatternsService,
        filter: this.filter.setup({
          uiSettings: uiSettings,
          indexPatterns: indexPatternsService.indexPatterns
        }),
        query: this.query.setup(),
        search: this.search.setup(savedObjectsClient)
      };
    }
  }, {
    key: "start",
    value: function start(core) {}
  }, {
    key: "stop",
    value: function stop() {
      this.expressions.stop();
      this.indexPatterns.stop();
      this.filter.stop();
      this.query.stop();
      this.search.stop();
    }
  }]);

  return DataPlugin;
}();

exports.DataPlugin = DataPlugin;