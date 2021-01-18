"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayService = void 0;

var _flyout = require("./flyout");

var _modal = require("./modal");

var _banners = require("./banners");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** @internal */
var OverlayService =
/*#__PURE__*/
function () {
  function OverlayService() {
    _classCallCheck(this, OverlayService);
  }

  _createClass(OverlayService, [{
    key: "start",
    value: function start(_ref) {
      var i18n = _ref.i18n,
          targetDomElement = _ref.targetDomElement,
          uiSettings = _ref.uiSettings;
      var flyoutElement = document.createElement('div');
      var modalElement = document.createElement('div');
      targetDomElement.appendChild(flyoutElement);
      targetDomElement.appendChild(modalElement);
      var flyoutService = new _flyout.FlyoutService(flyoutElement);
      var modalService = new _modal.ModalService(modalElement);
      var bannersService = new _banners.OverlayBannersService();
      return {
        banners: bannersService.start({
          i18n: i18n,
          uiSettings: uiSettings
        }),
        openFlyout: flyoutService.openFlyout.bind(flyoutService, i18n),
        openModal: modalService.openModal.bind(modalService, i18n)
      };
    }
  }]);

  return OverlayService;
}();
/** @public */


exports.OverlayService = OverlayService;