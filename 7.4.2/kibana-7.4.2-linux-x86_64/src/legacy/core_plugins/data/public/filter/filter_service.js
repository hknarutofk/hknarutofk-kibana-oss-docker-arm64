"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterService = void 0;

var _filter_manager = require("./filter_manager");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FilterService =
/*#__PURE__*/
function () {
  function FilterService() {
    _classCallCheck(this, FilterService);
  }

  _createClass(FilterService, [{
    key: "setup",
    value: function setup(_ref) {
      var indexPatterns = _ref.indexPatterns,
          uiSettings = _ref.uiSettings;
      return {
        filterManager: new _filter_manager.FilterManager(indexPatterns, uiSettings)
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

  return FilterService;
}();
/** @public */


exports.FilterService = FilterService;