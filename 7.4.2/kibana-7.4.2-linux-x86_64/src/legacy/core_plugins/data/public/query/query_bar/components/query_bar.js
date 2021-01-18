"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryBar = exports.QueryBarUI = void 0;

var _esQuery = require("@kbn/es-query");

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _timefilter = require("ui/timefilter");

var _eui = require("@elastic/eui");

var _react2 = require("@kbn/i18n/react");

var _documentation_links = require("ui/documentation_links");

var _query_bar_input = require("./query_bar_input");

var _get_query_log = require("../lib/get_query_log");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var QueryBarUI =
/*#__PURE__*/
function (_Component) {
  _inherits(QueryBarUI, _Component);

  function QueryBarUI() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, QueryBarUI);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(QueryBarUI)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isDateRangeInvalid: false
    });

    _defineProperty(_assertThisInitialized(_this), "inputRef", null);

    _defineProperty(_assertThisInitialized(_this), "persistedLog", void 0);

    _defineProperty(_assertThisInitialized(_this), "onClickSubmitButton", function (event) {
      if (_this.persistedLog && _this.props.query) {
        _this.persistedLog.add(_this.props.query.query);
      }

      event.preventDefault();

      _this.onSubmit({
        query: _this.props.query,
        dateRange: _this.getDateRange()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onQueryChange", function (query) {
      _this.props.onChange({
        query: query,
        dateRange: _this.getDateRange()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTimeChange", function (_ref) {
      var start = _ref.start,
          end = _ref.end,
          isInvalid = _ref.isInvalid,
          isQuickSelection = _ref.isQuickSelection;

      _this.setState({
        isDateRangeInvalid: isInvalid
      }, function () {
        var retVal = {
          query: _this.props.query,
          dateRange: {
            from: start,
            to: end
          }
        };

        if (isQuickSelection) {
          _this.props.onSubmit(retVal);
        } else {
          _this.props.onChange(retVal);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (_ref2) {
      var query = _ref2.query,
          dateRange = _ref2.dateRange;

      _this.handleLuceneSyntaxWarning();

      _timefilter.timeHistory.add(dateRange);

      _this.props.onSubmit({
        query: query,
        dateRange: dateRange
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onInputSubmit", function (query) {
      _this.onSubmit({
        query: query,
        dateRange: _this.getDateRange()
      });
    });

    return _this;
  }

  _createClass(QueryBarUI, [{
    key: "getDateRange",
    value: function getDateRange() {
      var defaultTimeSetting = this.props.uiSettings.get('timepicker:timeDefaults');
      return {
        from: this.props.dateRangeFrom || defaultTimeSetting.from,
        to: this.props.dateRangeTo || defaultTimeSetting.to
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.query) return;
      this.persistedLog = (0, _get_query_log.getQueryLog)(this.props.uiSettings, this.props.appName, this.props.query.language);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.props.query || !prevProps.query) return;

      if (prevProps.query.language !== this.props.query.language) {
        this.persistedLog = (0, _get_query_log.getQueryLog)(this.props.uiSettings, this.props.appName, this.props.query.language);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = (0, _classnames.default)('kbnQueryBar', {
        'kbnQueryBar--withDatePicker': this.props.showDatePicker
      });
      return _react.default.createElement(_eui.EuiFlexGroup, {
        className: classes,
        responsive: !!this.props.showDatePicker,
        gutterSize: "s",
        justifyContent: "flexEnd"
      }, this.renderQueryInput(), _react.default.createElement(_eui.EuiFlexItem, {
        grow: false
      }, this.renderUpdateButton()));
    }
  }, {
    key: "renderQueryInput",
    value: function renderQueryInput() {
      if (!this.shouldRenderQueryInput()) return;
      return _react.default.createElement(_eui.EuiFlexItem, null, _react.default.createElement(_query_bar_input.QueryBarInput, {
        appName: this.props.appName,
        disableAutoFocus: this.props.disableAutoFocus,
        indexPatterns: this.props.indexPatterns,
        prepend: this.props.prepend,
        query: this.props.query,
        screenTitle: this.props.screenTitle,
        store: this.props.store,
        onChange: this.onQueryChange,
        onSubmit: this.onInputSubmit,
        persistedLog: this.persistedLog,
        uiSettings: this.props.uiSettings,
        savedObjectsClient: this.props.savedObjectsClient
      }));
    }
  }, {
    key: "shouldRenderDatePicker",
    value: function shouldRenderDatePicker() {
      return this.props.showDatePicker || this.props.showAutoRefreshOnly;
    }
  }, {
    key: "shouldRenderQueryInput",
    value: function shouldRenderQueryInput() {
      return this.props.showQueryInput && this.props.indexPatterns && this.props.query && this.props.store;
    }
  }, {
    key: "renderUpdateButton",
    value: function renderUpdateButton() {
      var button = this.props.customSubmitButton ? _react.default.cloneElement(this.props.customSubmitButton, {
        onClick: this.onClickSubmitButton
      }) : _react.default.createElement(_eui.EuiSuperUpdateButton, {
        needsUpdate: this.props.isDirty,
        isDisabled: this.state.isDateRangeInvalid,
        onClick: this.onClickSubmitButton,
        "data-test-subj": "querySubmitButton"
      });

      if (!this.shouldRenderDatePicker()) {
        return button;
      }

      return _react.default.createElement(_eui.EuiFlexGroup, {
        responsive: false,
        gutterSize: "s"
      }, this.renderDatePicker(), _react.default.createElement(_eui.EuiFlexItem, {
        grow: false
      }, button));
    }
  }, {
    key: "renderDatePicker",
    value: function renderDatePicker() {
      if (!this.shouldRenderDatePicker()) {
        return null;
      }

      var recentlyUsedRanges = _timefilter.timeHistory.get().map(function (_ref3) {
        var from = _ref3.from,
            to = _ref3.to;
        return {
          start: from,
          end: to
        };
      });

      var commonlyUsedRanges = this.props.uiSettings.get('timepicker:quickRanges').map(function (_ref4) {
        var from = _ref4.from,
            to = _ref4.to,
            display = _ref4.display;
        return {
          start: from,
          end: to,
          label: display
        };
      });
      return _react.default.createElement(_eui.EuiFlexItem, {
        className: "kbnQueryBar__datePickerWrapper"
      }, _react.default.createElement(_eui.EuiSuperDatePicker, {
        start: this.props.dateRangeFrom,
        end: this.props.dateRangeTo,
        isPaused: this.props.isRefreshPaused,
        refreshInterval: this.props.refreshInterval,
        onTimeChange: this.onTimeChange,
        onRefreshChange: this.props.onRefreshChange,
        showUpdateButton: false,
        recentlyUsedRanges: recentlyUsedRanges,
        commonlyUsedRanges: commonlyUsedRanges,
        dateFormat: this.props.uiSettings.get('dateFormat'),
        isAutoRefreshOnly: this.props.showAutoRefreshOnly
      }));
    }
  }, {
    key: "handleLuceneSyntaxWarning",
    value: function handleLuceneSyntaxWarning() {
      var _this2 = this;

      if (!this.props.query) return;
      var _this$props = this.props,
          intl = _this$props.intl,
          store = _this$props.store,
          toasts = _this$props.toasts;
      var _this$props$query = this.props.query,
          query = _this$props$query.query,
          language = _this$props$query.language;

      if (language === 'kuery' && typeof query === 'string' && (!store || !store.get('kibana.luceneSyntaxWarningOptOut')) && (0, _esQuery.doesKueryExpressionHaveLuceneSyntaxError)(query)) {
        var toast = toasts.addWarning({
          title: intl.formatMessage({
            id: 'data.query.queryBar.luceneSyntaxWarningTitle',
            defaultMessage: 'Lucene syntax warning'
          }),
          text: _react.default.createElement("div", null, _react.default.createElement("p", null, _react.default.createElement(_react2.FormattedMessage, {
            id: "data.query.queryBar.luceneSyntaxWarningMessage",
            defaultMessage: "It looks like you may be trying to use Lucene query syntax, although you have Kibana Query Language (KQL) selected. Please review the KQL docs {link}.",
            values: {
              link: _react.default.createElement(_eui.EuiLink, {
                href: _documentation_links.documentationLinks.query.kueryQuerySyntax,
                target: "_blank"
              }, _react.default.createElement(_react2.FormattedMessage, {
                id: "data.query.queryBar.syntaxOptionsDescription.docsLinkText",
                defaultMessage: "here"
              }))
            }
          })), _react.default.createElement(_eui.EuiFlexGroup, {
            justifyContent: "flexEnd",
            gutterSize: "s"
          }, _react.default.createElement(_eui.EuiFlexItem, {
            grow: false
          }, _react.default.createElement(_eui.EuiButton, {
            size: "s",
            onClick: function onClick() {
              return _this2.onLuceneSyntaxWarningOptOut(toast);
            }
          }, _react.default.createElement(_react2.FormattedMessage, {
            id: "data.query.queryBar.luceneSyntaxWarningOptOutText",
            defaultMessage: "Don't show again"
          })))))
        });
      }
    }
  }, {
    key: "onLuceneSyntaxWarningOptOut",
    value: function onLuceneSyntaxWarningOptOut(toast) {
      if (!this.props.store) return;
      this.props.store.set('kibana.luceneSyntaxWarningOptOut', true);
      this.props.toasts.remove(toast);
    }
  }]);

  return QueryBarUI;
}(_react.Component); // @ts-ignore


exports.QueryBarUI = QueryBarUI;

_defineProperty(QueryBarUI, "defaultProps", {
  showQueryInput: true,
  showDatePicker: true,
  showAutoRefreshOnly: false
});

var QueryBar = (0, _react2.injectI18n)(QueryBarUI);
exports.QueryBar = QueryBar;