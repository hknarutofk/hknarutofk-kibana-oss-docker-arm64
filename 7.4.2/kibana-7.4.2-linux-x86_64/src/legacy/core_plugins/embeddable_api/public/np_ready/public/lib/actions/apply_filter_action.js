"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplyFilterAction = exports.APPLY_FILTER_ACTION = void 0;

var _i18n = require("@kbn/i18n");

var _action = require("./action");

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

var APPLY_FILTER_ACTION = 'APPLY_FILTER_ACTION';
exports.APPLY_FILTER_ACTION = APPLY_FILTER_ACTION;

var ApplyFilterAction =
/*#__PURE__*/
function (_Action) {
  _inherits(ApplyFilterAction, _Action);

  function ApplyFilterAction() {
    var _this;

    _classCallCheck(this, ApplyFilterAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ApplyFilterAction).call(this, APPLY_FILTER_ACTION));

    _defineProperty(_assertThisInitialized(_this), "type", APPLY_FILTER_ACTION);

    return _this;
  }

  _createClass(ApplyFilterAction, [{
    key: "getDisplayName",
    value: function getDisplayName() {
      return _i18n.i18n.translate('embeddableApi.actions.applyFilterActionTitle', {
        defaultMessage: 'Apply filter to current view'
      });
    }
  }, {
    key: "isCompatible",
    value: function () {
      var _isCompatible = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(context) {
        var root;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                root = context.embeddable.getRoot();
                return _context.abrupt("return", Boolean(root.getInput().filters !== undefined && context.triggerContext && context.triggerContext.filters !== undefined));

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
    value: function execute(_ref) {
      var embeddable = _ref.embeddable,
          triggerContext = _ref.triggerContext;

      if (!triggerContext) {
        throw new Error('Applying a filter requires a filter as context');
      }

      var root = embeddable.getRoot();

      if (!this.isCompatible({
        triggerContext: triggerContext,
        embeddable: embeddable
      })) {
        throw new _errors.IncompatibleActionError();
      }

      root.updateInput({
        filters: triggerContext.filters
      });
    }
  }]);

  return ApplyFilterAction;
}(_action.Action);

exports.ApplyFilterAction = ApplyFilterAction;