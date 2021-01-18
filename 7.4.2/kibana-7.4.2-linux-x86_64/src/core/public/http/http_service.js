"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpService = void 0;

var _http_setup = require("./http_setup");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @internal */
var HttpService =
/*#__PURE__*/
function () {
  function HttpService() {
    _classCallCheck(this, HttpService);

    _defineProperty(this, "service", void 0);
  }

  _createClass(HttpService, [{
    key: "setup",
    value: function setup(deps) {
      this.service = (0, _http_setup.setup)(deps.injectedMetadata, deps.fatalErrors);
      return this.service;
    }
  }, {
    key: "start",
    value: function start(deps) {
      return this.service || this.setup(deps);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.service) {
        this.service.stop();
      }
    }
  }]);

  return HttpService;
}();

exports.HttpService = HttpService;