"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddPanelAction = exports.ADD_PANEL_ACTION_ID = void 0;

var _i18n = require("@kbn/i18n");

var _types = require("../../../../types");

var _actions = require("../../../../actions");

var _open_add_panel_flyout = require("./open_add_panel_flyout");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADD_PANEL_ACTION_ID = 'ADD_PANEL_ACTION_ID';
exports.ADD_PANEL_ACTION_ID = ADD_PANEL_ACTION_ID;

var AddPanelAction =
/*#__PURE__*/
function (_Action) {
  _inherits(AddPanelAction, _Action);

  function AddPanelAction(getFactory, getAllFactories, overlays, notifications, SavedObjectFinder) {
    var _this;

    _classCallCheck(this, AddPanelAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddPanelAction).call(this, ADD_PANEL_ACTION_ID));
    _this.getFactory = getFactory;
    _this.getAllFactories = getAllFactories;
    _this.overlays = overlays;
    _this.notifications = notifications;
    _this.SavedObjectFinder = SavedObjectFinder;

    _defineProperty(_assertThisInitialized(_this), "type", ADD_PANEL_ACTION_ID);

    return _this;
  }

  _createClass(AddPanelAction, [{
    key: "getDisplayName",
    value: function getDisplayName() {
      return _i18n.i18n.translate('embeddableApi.addPanel.displayName', {
        defaultMessage: 'Add panel'
      });
    }
  }, {
    key: "getIconType",
    value: function getIconType() {
      return 'plusInCircleFilled';
    }
  }, {
    key: "isCompatible",
    value: function () {
      var _isCompatible = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref) {
        var embeddable;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                embeddable = _ref.embeddable;
                return _context.abrupt("return", embeddable.getIsContainer() && embeddable.getInput().viewMode === _types.ViewMode.EDIT);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function isCompatible(_x) {
        return _isCompatible.apply(this, arguments);
      }

      return isCompatible;
    }()
  }, {
    key: "execute",
    value: function () {
      var _execute = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(_ref2) {
        var embeddable;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                embeddable = _ref2.embeddable;
                _context2.t0 = !embeddable.getIsContainer();

                if (_context2.t0) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 5;
                return this.isCompatible({
                  embeddable: embeddable
                });

              case 5:
                _context2.t0 = !_context2.sent;

              case 6:
                if (!_context2.t0) {
                  _context2.next = 8;
                  break;
                }

                throw new Error('Context is incompatible');

              case 8:
                (0, _open_add_panel_flyout.openAddPanelFlyout)({
                  embeddable: embeddable,
                  getFactory: this.getFactory,
                  getAllFactories: this.getAllFactories,
                  overlays: this.overlays,
                  notifications: this.notifications,
                  SavedObjectFinder: this.SavedObjectFinder
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function execute(_x2) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }]);

  return AddPanelAction;
}(_actions.Action);

exports.AddPanelAction = AddPanelAction;