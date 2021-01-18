"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpressionsService = void 0;

var _interpreter = require("./interpreter");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ExpressionsService =
/*#__PURE__*/
function () {
  function ExpressionsService() {
    _classCallCheck(this, ExpressionsService);

    _defineProperty(this, "functions", new _interpreter.FunctionsRegistry());

    _defineProperty(this, "renderers", new _interpreter.RenderFunctionsRegistry());

    _defineProperty(this, "types", new _interpreter.TypesRegistry());
  }

  _createClass(ExpressionsService, [{
    key: "setup",
    value: function setup() {
      var _this = this;

      var functions = this.functions,
          renderers = this.renderers,
          types = this.types;
      return {
        registerFunction: function registerFunction(fn) {
          _this.functions.register(fn);
        },
        registerRenderer: function registerRenderer(renderer) {
          _this.renderers.register(renderer);
        },
        registerType: function registerType(type) {
          _this.types.register(type);
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          functions: functions,
          renderers: renderers,
          types: types
        }
      };
    }
  }]);

  return ExpressionsService;
}();

exports.ExpressionsService = ExpressionsService;