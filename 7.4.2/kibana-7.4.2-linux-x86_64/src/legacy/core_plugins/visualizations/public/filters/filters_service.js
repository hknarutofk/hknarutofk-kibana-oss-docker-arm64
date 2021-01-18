"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FiltersService = void 0;

var _vis_filters = require("ui/vis/vis_filters");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Vis Filters Service
 *
 * @internal
 */
var FiltersService =
/*#__PURE__*/
function () {
  function FiltersService() {
    _classCallCheck(this, FiltersService);
  }

  _createClass(FiltersService, [{
    key: "setup",
    value: function setup() {
      return {
        VisFiltersProvider: _vis_filters.VisFiltersProvider,
        createFilter: _vis_filters.createFilter
      };
    }
  }, {
    key: "stop",
    value: function stop() {// nothing to do here yet
    }
  }]);

  return FiltersService;
}();
/** @public */


exports.FiltersService = FiltersService;