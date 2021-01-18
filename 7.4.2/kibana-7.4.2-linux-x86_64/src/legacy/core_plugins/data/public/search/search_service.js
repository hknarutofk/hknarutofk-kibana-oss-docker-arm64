"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchService = void 0;

var _saved_query_service = require("./search_bar/lib/saved_query_service");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Search Service
 * @internal
 */
var SearchService =
/*#__PURE__*/
function () {
  function SearchService() {
    _classCallCheck(this, SearchService);
  }

  _createClass(SearchService, [{
    key: "setup",
    value: function setup(savedObjectsClient) {
      return {
        services: {
          savedQueryService: (0, _saved_query_service.createSavedQueryService)(savedObjectsClient)
        }
      };
    }
  }, {
    key: "stop",
    value: function stop() {}
  }]);

  return SearchService;
}();
/** @public */


exports.SearchService = SearchService;