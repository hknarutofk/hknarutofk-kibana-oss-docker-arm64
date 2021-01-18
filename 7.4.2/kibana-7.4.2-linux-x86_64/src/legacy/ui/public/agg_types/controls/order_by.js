"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderByParamEditor = OrderByParamEditor;
exports.aggFilter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _eui = require("@elastic/eui");

var _i18n = require("@kbn/i18n");

var _agg_utils = require("../agg_utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var aggFilter = ['!top_hits', '!percentiles', '!median', '!std_dev', '!derivative', '!moving_avg', '!serial_diff', '!cumulative_sum', '!avg_bucket', '!max_bucket', '!min_bucket', '!sum_bucket'];
exports.aggFilter = aggFilter;
var isCompatibleAgg = (0, _agg_utils.isCompatibleAggregation)(aggFilter);

function OrderByParamEditor(_ref) {
  var agg = _ref.agg,
      value = _ref.value,
      showValidation = _ref.showValidation,
      setValue = _ref.setValue,
      setValidity = _ref.setValidity,
      setTouched = _ref.setTouched,
      metricAggs = _ref.metricAggs;

  var label = _i18n.i18n.translate('common.ui.aggTypes.orderAgg.orderByLabel', {
    defaultMessage: 'Order by'
  });

  var isValid = !!value;
  (0, _react.useEffect)(function () {
    setValidity(isValid);
  }, [isValid]);
  (0, _react.useEffect)(function () {
    // setup the initial value of orderBy
    if (!value) {
      var respAgg = {
        id: '_key'
      };

      if (metricAggs) {
        respAgg = metricAggs.filter(isCompatibleAgg)[0] || respAgg;
      }

      setValue(respAgg.id);
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (metricAggs && value && value !== 'custom') {
      // ensure that orderBy is set to a valid agg
      var respAgg = metricAggs.filter(isCompatibleAgg).find(function (aggregation) {
        return aggregation.id === value;
      });

      if (!respAgg) {
        setValue('_key');
      }
    }
  }, [metricAggs]);
  var defaultOptions = [{
    text: _i18n.i18n.translate('common.ui.aggTypes.orderAgg.customMetricLabel', {
      defaultMessage: 'Custom metric'
    }),
    value: 'custom'
  }, {
    text: _i18n.i18n.translate('common.ui.aggTypes.orderAgg.alphabeticalLabel', {
      defaultMessage: 'Alphabetical'
    }),
    value: '_key'
  }];
  var options = metricAggs ? metricAggs.map(function (respAgg) {
    return {
      text: _i18n.i18n.translate('common.ui.aggTypes.orderAgg.metricLabel', {
        defaultMessage: 'Metric: {metric}',
        values: {
          metric: (0, _agg_utils.safeMakeLabel)(respAgg)
        }
      }),
      value: respAgg.id,
      disabled: !isCompatibleAgg(respAgg)
    };
  }) : [];
  return _react.default.createElement(_eui.EuiFormRow, {
    label: label,
    fullWidth: true,
    isInvalid: showValidation ? !isValid : false,
    compressed: true
  }, _react.default.createElement(_eui.EuiSelect, {
    options: [].concat(_toConsumableArray(options), defaultOptions),
    value: value,
    onChange: function onChange(ev) {
      return setValue(ev.target.value);
    },
    fullWidth: true,
    isInvalid: showValidation ? !isValid : false,
    onBlur: setTouched,
    "data-test-subj": "visEditorOrderBy".concat(agg.id)
  }));
}