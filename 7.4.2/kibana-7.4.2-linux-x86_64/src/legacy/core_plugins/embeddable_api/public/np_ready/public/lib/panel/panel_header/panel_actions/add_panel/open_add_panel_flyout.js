"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openAddPanelFlyout = openAddPanelFlyout;

var _react = _interopRequireDefault(require("react"));

var _add_panel_flyout = require("./add_panel_flyout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function openAddPanelFlyout(_x) {
  return _openAddPanelFlyout.apply(this, arguments);
}

function _openAddPanelFlyout() {
  _openAddPanelFlyout = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(options) {
    var embeddable, getFactory, getAllFactories, overlays, notifications, SavedObjectFinder, flyoutSession;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            embeddable = options.embeddable, getFactory = options.getFactory, getAllFactories = options.getAllFactories, overlays = options.overlays, notifications = options.notifications, SavedObjectFinder = options.SavedObjectFinder;
            flyoutSession = overlays.openFlyout(_react.default.createElement(_add_panel_flyout.AddPanelFlyout, {
              container: embeddable,
              onClose: function onClose() {
                if (flyoutSession) {
                  flyoutSession.close();
                }
              },
              getFactory: getFactory,
              getAllFactories: getAllFactories,
              notifications: notifications,
              SavedObjectFinder: SavedObjectFinder
            }), {
              'data-test-subj': 'addPanelFlyout'
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _openAddPanelFlyout.apply(this, arguments);
}