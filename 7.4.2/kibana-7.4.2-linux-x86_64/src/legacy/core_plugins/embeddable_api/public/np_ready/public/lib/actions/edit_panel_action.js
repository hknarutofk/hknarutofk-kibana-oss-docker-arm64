"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditPanelAction = exports.EDIT_PANEL_ACTION_ID = void 0;

var _i18n = require("@kbn/i18n");

var _action = require("./action");

var _types = require("../types");

var _errors = require("../errors");

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

var EDIT_PANEL_ACTION_ID = 'editPanel';
exports.EDIT_PANEL_ACTION_ID = EDIT_PANEL_ACTION_ID;

var EditPanelAction =
/*#__PURE__*/
function (_Action) {
  _inherits(EditPanelAction, _Action);

  function EditPanelAction(getEmbeddableFactory) {
    var _this;

    _classCallCheck(this, EditPanelAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditPanelAction).call(this, EDIT_PANEL_ACTION_ID));
    _this.getEmbeddableFactory = getEmbeddableFactory;

    _defineProperty(_assertThisInitialized(_this), "type", EDIT_PANEL_ACTION_ID);

    _this.order = 15;
    return _this;
  }

  _createClass(EditPanelAction, [{
    key: "getDisplayName",
    value: function getDisplayName(_ref) {
      var embeddable = _ref.embeddable;
      var factory = this.getEmbeddableFactory(embeddable.type);

      if (!factory) {
        throw new _errors.EmbeddableFactoryNotFoundError(embeddable.type);
      }

      return _i18n.i18n.translate('embeddableApi.panel.editPanel.displayName', {
        defaultMessage: 'Edit {value}',
        values: {
          value: factory.getDisplayName()
        }
      });
    }
  }, {
    key: "getIconType",
    value: function getIconType() {
      return 'pencil';
    }
  }, {
    key: "isCompatible",
    value: function () {
      var _isCompatible = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref2) {
        var embeddable, canEditEmbeddable, inDashboardEditMode;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                embeddable = _ref2.embeddable;
                canEditEmbeddable = Boolean(embeddable && embeddable.getOutput().editable && embeddable.getOutput().editUrl);
                inDashboardEditMode = embeddable.getInput().viewMode === _types.ViewMode.EDIT;
                return _context.abrupt("return", Boolean(canEditEmbeddable && inDashboardEditMode));

              case 4:
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
    value: function execute() {
      return undefined;
    }
  }, {
    key: "getHref",
    value: function getHref(_ref3) {
      var embeddable = _ref3.embeddable;
      var editUrl = embeddable ? embeddable.getOutput().editUrl : undefined;
      return editUrl ? editUrl : '';
    }
  }]);

  return EditPanelAction;
}(_action.Action);

exports.EditPanelAction = EditPanelAction;