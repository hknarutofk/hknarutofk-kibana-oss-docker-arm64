"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexPatternsApiClient = void 0;

var _kfetch = require("ui/kfetch");

var _errors = require("../errors");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function request(url, query) {
  return (0, _kfetch.kfetch)({
    method: 'GET',
    pathname: url,
    query: query
  }).catch(function (resp) {
    if (resp.body.statusCode === 404 && resp.body.statuscode === 'no_matching_indices') {
      throw new _errors.IndexPatternMissingIndices(resp.body.message);
    }

    throw new Error(resp.body.message || resp.body.error || "".concat(resp.body.statusCode, " Response"));
  });
}

var API_BASE_URL = "/api/index_patterns/";

var IndexPatternsApiClient =
/*#__PURE__*/
function () {
  function IndexPatternsApiClient() {
    _classCallCheck(this, IndexPatternsApiClient);
  }

  _createClass(IndexPatternsApiClient, [{
    key: "_getUrl",
    value: function _getUrl(path) {
      return API_BASE_URL + path.filter(Boolean).map(encodeURIComponent).join('/');
    }
  }, {
    key: "getFieldsForTimePattern",
    value: function getFieldsForTimePattern() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var pattern = options.pattern,
          lookBack = options.lookBack,
          metaFields = options.metaFields;

      var url = this._getUrl(['_fields_for_time_pattern']);

      return request(url, {
        pattern: pattern,
        look_back: lookBack,
        meta_fields: metaFields
      }).then(function (resp) {
        return resp.fields;
      });
    }
  }, {
    key: "getFieldsForWildcard",
    value: function getFieldsForWildcard() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var pattern = options.pattern,
          metaFields = options.metaFields,
          type = options.type,
          params = options.params;
      var url;
      var query;

      if (type) {
        url = this._getUrl([type, '_fields_for_wildcard']);
        query = {
          pattern: pattern,
          meta_fields: metaFields,
          params: JSON.stringify(params)
        };
      } else {
        url = this._getUrl(['_fields_for_wildcard']);
        query = {
          pattern: pattern,
          meta_fields: metaFields
        };
      }

      return request(url, query).then(function (resp) {
        return resp.fields;
      });
    }
  }]);

  return IndexPatternsApiClient;
}();

exports.IndexPatternsApiClient = IndexPatternsApiClient;