"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Query", {
  enumerable: true,
  get: function get() {
    return _query_bar.Query;
  }
});
Object.defineProperty(exports, "QueryBar", {
  enumerable: true,
  get: function get() {
    return _query_bar.QueryBar;
  }
});
Object.defineProperty(exports, "QueryBarInput", {
  enumerable: true,
  get: function get() {
    return _query_bar.QueryBarInput;
  }
});
exports.QueryService = void 0;

var _query_bar = require("./query_bar");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Query Service
 *
 * @internal
 */
var QueryService =
/*#__PURE__*/
function () {
  function QueryService() {
    _classCallCheck(this, QueryService);
  }

  _createClass(QueryService, [{
    key: "setup",
    value: function setup() {
      return {
        helpers: {
          fromUser: _query_bar.fromUser,
          toUser: _query_bar.toUser,
          getQueryLog: _query_bar.getQueryLog
        }
      };
    }
  }, {
    key: "start",
    value: function start() {// nothing to do here yet
    }
  }, {
    key: "stop",
    value: function stop() {// nothing to do here yet
    }
  }]);

  return QueryService;
}();
/** @public */


exports.QueryService = QueryService;