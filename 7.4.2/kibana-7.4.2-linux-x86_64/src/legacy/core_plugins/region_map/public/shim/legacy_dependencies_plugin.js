"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegacyDependenciesPlugin = void 0;

var _chrome = _interopRequireDefault(require("ui/chrome"));

require("ui/vis/map/service_settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LegacyDependenciesPlugin =
/*#__PURE__*/
function () {
  function LegacyDependenciesPlugin(regionmapsConfig) {
    _classCallCheck(this, LegacyDependenciesPlugin);

    this.regionmapsConfig = regionmapsConfig;
  }

  _createClass(LegacyDependenciesPlugin, [{
    key: "setup",
    value: function () {
      var _setup = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var $injector;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _chrome.default.dangerouslyGetActiveInjector();

              case 2:
                $injector = _context.sent;
                return _context.abrupt("return", {
                  $injector: $injector,
                  regionmapsConfig: this.regionmapsConfig,
                  // Settings for EMSClient.
                  // EMSClient, which currently lives in the tile_map vis,
                  //  will probably end up being exposed from the future vis_type_maps plugin,
                  //  which would register both the tile_map and the region_map vis plugins.
                  serviceSettings: $injector.get('serviceSettings')
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setup() {
        return _setup.apply(this, arguments);
      }

      return setup;
    }()
  }, {
    key: "start",
    value: function start(core) {// nothing to do here yet
    }
  }]);

  return LegacyDependenciesPlugin;
}();

exports.LegacyDependenciesPlugin = LegacyDependenciesPlugin;