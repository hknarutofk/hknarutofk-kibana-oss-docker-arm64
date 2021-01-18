"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbeddableChildPanel = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _eui = require("@elastic/eui");

var _react2 = require("@kbn/i18n/react");

var _panel = require("../panel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/**
 * This component can be used by embeddable containers using react to easily render children. It waits
 * for the child to be initialized, showing a loading indicator until that is complete.
 */
var EmbeddableChildPanelUi =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EmbeddableChildPanelUi, _React$Component);

  function EmbeddableChildPanelUi(props) {
    var _this;

    _classCallCheck(this, EmbeddableChildPanelUi);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EmbeddableChildPanelUi).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "mounted", void 0);

    _defineProperty(_assertThisInitialized(_this), "embeddable", void 0);

    _defineProperty(_assertThisInitialized(_this), "subscription", void 0);

    _this.state = {
      loading: true
    };
    _this.mounted = false;
    return _this;
  }

  _createClass(EmbeddableChildPanelUi, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var container;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.mounted = true;
                container = this.props.container;
                _context.next = 4;
                return container.untilEmbeddableLoaded(this.props.embeddableId);

              case 4:
                this.embeddable = _context.sent;

                if (this.mounted) {
                  this.setState({
                    loading: false
                  });
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;

      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = (0, _classnames.default)('embPanel embPanel__content', {
        'embPanel__content-isLoading': this.state.loading
      });
      return _react.default.createElement("div", {
        id: "embeddedPanel",
        className: classes
      }, this.state.loading || !this.embeddable ? _react.default.createElement(_eui.EuiLoadingChart, {
        size: "l",
        mono: true
      }) : _react.default.createElement(_panel.EmbeddablePanel, {
        embeddable: this.embeddable,
        getActions: this.props.getActions,
        getEmbeddableFactory: this.props.getEmbeddableFactory,
        getAllEmbeddableFactories: this.props.getAllEmbeddableFactories,
        overlays: this.props.overlays,
        notifications: this.props.notifications,
        inspector: this.props.inspector,
        SavedObjectFinder: this.props.SavedObjectFinder
      }));
    }
  }]);

  return EmbeddableChildPanelUi;
}(_react.default.Component);

var EmbeddableChildPanel = (0, _react2.injectI18n)(EmbeddableChildPanelUi);
exports.EmbeddableChildPanel = EmbeddableChildPanel;