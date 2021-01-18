"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Vis", {
  enumerable: true,
  get: function get() {
    return _types.Vis;
  }
});
Object.defineProperty(exports, "visFactory", {
  enumerable: true,
  get: function get() {
    return _types.visFactory;
  }
});
Object.defineProperty(exports, "DefaultEditorSize", {
  enumerable: true,
  get: function get() {
    return _types.DefaultEditorSize;
  }
});
Object.defineProperty(exports, "VisParams", {
  enumerable: true,
  get: function get() {
    return _types.VisParams;
  }
});
Object.defineProperty(exports, "VisProvider", {
  enumerable: true,
  get: function get() {
    return _types.VisProvider;
  }
});
Object.defineProperty(exports, "VisState", {
  enumerable: true,
  get: function get() {
    return _types.VisState;
  }
});
Object.defineProperty(exports, "VisTypeAlias", {
  enumerable: true,
  get: function get() {
    return _types.VisTypeAlias;
  }
});
Object.defineProperty(exports, "VisTypesRegistry", {
  enumerable: true,
  get: function get() {
    return _types.VisTypesRegistry;
  }
});
Object.defineProperty(exports, "Status", {
  enumerable: true,
  get: function get() {
    return _types.Status;
  }
});
exports.visualizations = void 0;

var _filters = require("./filters");

var _types = require("./types");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VisualizationsPlugin =
/*#__PURE__*/
function () {
  function VisualizationsPlugin() {
    _classCallCheck(this, VisualizationsPlugin);

    _defineProperty(this, "filters", void 0);

    _defineProperty(this, "types", void 0);

    this.filters = new _filters.FiltersService();
    this.types = new _types.TypesService();
  }

  _createClass(VisualizationsPlugin, [{
    key: "setup",
    value: function setup() {
      return {
        filters: this.filters.setup(),
        types: this.types.setup()
      };
    }
  }, {
    key: "stop",
    value: function stop() {
      this.filters.stop();
      this.types.stop();
    }
  }]);

  return VisualizationsPlugin;
}();
/**
 * We export visualizations here so that users importing from 'plugins/visualizations'
 * will automatically receive the response value of the `setup` contract, mimicking
 * the data that will eventually be injected by the new platform.
 */


var visualizations = new VisualizationsPlugin().setup();
/** @public */

exports.visualizations = visualizations;