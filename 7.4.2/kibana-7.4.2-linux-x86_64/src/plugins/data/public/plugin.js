"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataPublicPlugin = void 0;

var _expressions_service = require("./expressions/expressions_service");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DataPublicPlugin =
/*#__PURE__*/
function () {
  function DataPublicPlugin(initializerContext) {
    _classCallCheck(this, DataPublicPlugin);

    _defineProperty(this, "expressions", new _expressions_service.ExpressionsService());
  }

  _createClass(DataPublicPlugin, [{
    key: "setup",
    value: function setup(core) {
      var expressions = this.expressions.setup();
      return {
        expressions: expressions
      };
    }
  }, {
    key: "start",
    value: function start(core) {}
  }, {
    key: "stop",
    value: function stop() {}
  }]);

  return DataPublicPlugin;
}();

exports.DataPublicPlugin = DataPublicPlugin;