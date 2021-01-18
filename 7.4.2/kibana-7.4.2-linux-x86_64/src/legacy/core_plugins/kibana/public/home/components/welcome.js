"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Welcome = void 0;

var _react = _interopRequireDefault(require("react"));

var _eui = require("@elastic/eui");

var _notify = require("ui/notify");

var _react2 = require("@kbn/i18n/react");

var _chrome = _interopRequireDefault(require("ui/chrome"));

var _sample_data = require("./sample_data");

var _telemetry_opt_in = require("./telemetry_opt_in");

var _kibana_services = require("../kibana_services");

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
 * Shows a full-screen welcome page that gives helpful quick links to beginners.
 */
var Welcome =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Welcome, _React$PureComponent);

  function Welcome() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Welcome);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Welcome)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      step: 0
    });

    _defineProperty(_assertThisInitialized(_this), "hideOnEsc", function (e) {
      if (e.key === 'Escape') {
        _this.props.onSkip();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSampleDataDecline", function () {
      (0, _kibana_services.trackUiMetric)(_kibana_services.METRIC_TYPE.CLICK, 'sampleDataDecline');

      _this.props.onSkip();
    });

    _defineProperty(_assertThisInitialized(_this), "onSampleDataConfirm", function () {
      (0, _kibana_services.trackUiMetric)(_kibana_services.METRIC_TYPE.CLICK, 'sampleDataConfirm');

      _this.redirecToSampleData();
    });

    return _this;
  }

  _createClass(Welcome, [{
    key: "redirecToSampleData",
    value: function redirecToSampleData() {
      var path = _chrome.default.addBasePath('#/home/tutorial_directory/sampleData');

      window.location.href = path;
    }
  }, {
    key: "handleTelemetrySelection",
    value: function () {
      var _handleTelemetrySelection = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(confirm) {
        var metricName, bannerId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                metricName = "telemetryOptIn".concat(confirm ? 'Confirm' : 'Decline');
                (0, _kibana_services.trackUiMetric)(_kibana_services.METRIC_TYPE.CLICK, metricName);
                _context.next = 4;
                return this.props.setOptIn(confirm);

              case 4:
                bannerId = this.props.getTelemetryBannerId();

                _notify.banners.remove(bannerId);

                this.setState(function () {
                  return {
                    step: 1
                  };
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleTelemetrySelection(_x) {
        return _handleTelemetrySelection.apply(this, arguments);
      }

      return handleTelemetrySelection;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _kibana_services.trackUiMetric)(_kibana_services.METRIC_TYPE.LOADED, 'welcomeScreenMount');

      if (this.props.shouldShowTelemetryOptIn) {
        (0, _kibana_services.trackUiMetric)(_kibana_services.METRIC_TYPE.COUNT, 'welcomeScreenWithTelemetryOptIn');
      }

      document.addEventListener('keydown', this.hideOnEsc);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.hideOnEsc);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          urlBasePath = _this$props.urlBasePath,
          shouldShowTelemetryOptIn = _this$props.shouldShowTelemetryOptIn,
          fetchTelemetry = _this$props.fetchTelemetry;
      var step = this.state.step;
      return _react.default.createElement(_eui.EuiPortal, null, _react.default.createElement("div", {
        className: "homWelcome"
      }, _react.default.createElement("header", {
        className: "homWelcome__header"
      }, _react.default.createElement("div", {
        className: "homWelcome__content eui-textCenter"
      }, _react.default.createElement(_eui.EuiSpacer, {
        size: "xl"
      }), _react.default.createElement("span", {
        className: "homWelcome__logo"
      }, _react.default.createElement(_eui.EuiIcon, {
        type: "logoKibana",
        size: "xxl"
      })), _react.default.createElement(_eui.EuiTitle, {
        size: "l",
        className: "homWelcome__title"
      }, _react.default.createElement("h1", null, _react.default.createElement(_react2.FormattedMessage, {
        id: "kbn.home.welcomeTitle",
        defaultMessage: "Welcome to Kibana"
      }))), _react.default.createElement(_eui.EuiText, {
        size: "s",
        color: "subdued",
        className: "homWelcome__subtitle"
      }, _react.default.createElement("p", null, _react.default.createElement(_react2.FormattedMessage, {
        id: "kbn.home.welcomeDescription",
        defaultMessage: "Your window into the Elastic Stack"
      }))), _react.default.createElement(_eui.EuiSpacer, {
        size: "m"
      }))), _react.default.createElement("div", {
        className: "homWelcome__content homWelcome-body"
      }, _react.default.createElement(_eui.EuiFlexGroup, {
        gutterSize: "l"
      }, _react.default.createElement(_eui.EuiFlexItem, null, shouldShowTelemetryOptIn && step === 0 && _react.default.createElement(_telemetry_opt_in.TelemetryOptInCard, {
        urlBasePath: urlBasePath,
        fetchTelemetry: fetchTelemetry,
        onConfirm: this.handleTelemetrySelection.bind(this, true),
        onDecline: this.handleTelemetrySelection.bind(this, false)
      }), (!shouldShowTelemetryOptIn || step === 1) && _react.default.createElement(_sample_data.SampleDataCard, {
        urlBasePath: urlBasePath,
        onConfirm: this.onSampleDataConfirm,
        onDecline: this.onSampleDataDecline
      }), _react.default.createElement(_eui.EuiSpacer, {
        size: "xs"
      }))))));
    }
  }]);

  return Welcome;
}(_react.default.PureComponent);

exports.Welcome = Welcome;