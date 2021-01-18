"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandPanelAction = exports.EXPAND_PANEL_ACTION = void 0;

var _i18n = require("@kbn/i18n");

var _public = require("../../../../../../embeddable_api/public/np_ready/public");

var _embeddable = require("../embeddable");

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

var EXPAND_PANEL_ACTION = 'togglePanel';
exports.EXPAND_PANEL_ACTION = EXPAND_PANEL_ACTION;

function isDashboard(embeddable) {
  return embeddable.type === _embeddable.DASHBOARD_CONTAINER_TYPE;
}

function isExpanded(embeddable) {
  if (!embeddable.parent || !isDashboard(embeddable.parent)) {
    throw new _public.IncompatibleActionError();
  }

  return embeddable.id === embeddable.parent.getInput().expandedPanelId;
}

var ExpandPanelAction =
/*#__PURE__*/
function (_Action) {
  _inherits(ExpandPanelAction, _Action);

  function ExpandPanelAction() {
    var _this;

    _classCallCheck(this, ExpandPanelAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpandPanelAction).call(this, EXPAND_PANEL_ACTION));

    _defineProperty(_assertThisInitialized(_this), "type", EXPAND_PANEL_ACTION);

    _this.order = 7;
    return _this;
  }

  _createClass(ExpandPanelAction, [{
    key: "getDisplayName",
    value: function getDisplayName(_ref) {
      var embeddable = _ref.embeddable;

      if (!embeddable.parent || !isDashboard(embeddable.parent)) {
        throw new _public.IncompatibleActionError();
      }

      return isExpanded(embeddable) ? _i18n.i18n.translate('dashboardEmbeddableContainer.actions.toggleExpandPanelMenuItem.expandedDisplayName', {
        defaultMessage: 'Minimize'
      }) : _i18n.i18n.translate('dashboardEmbeddableContainer.actions.toggleExpandPanelMenuItem.notExpandedDisplayName', {
        defaultMessage: 'Full screen'
      });
    }
  }, {
    key: "getIconType",
    value: function getIconType(_ref2) {
      var embeddable = _ref2.embeddable;

      if (!embeddable.parent || !isDashboard(embeddable.parent)) {
        throw new _public.IncompatibleActionError();
      } // TODO: use 'minimize' when an eui-icon of such is available.


      return isExpanded(embeddable) ? 'expand' : 'expand';
    }
  }, {
    key: "isCompatible",
    value: function () {
      var _isCompatible = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref3) {
        var embeddable;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                embeddable = _ref3.embeddable;
                return _context.abrupt("return", Boolean(embeddable.parent && isDashboard(embeddable.parent)));

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
    value: function execute(_ref4) {
      var embeddable = _ref4.embeddable;

      if (!embeddable.parent || !isDashboard(embeddable.parent)) {
        throw new _public.IncompatibleActionError();
      }

      var newValue = isExpanded(embeddable) ? undefined : embeddable.id;
      embeddable.parent.updateInput({
        expandedPanelId: newValue
      });
    }
  }]);

  return ExpandPanelAction;
}(_public.Action);

exports.ExpandPanelAction = ExpandPanelAction;