"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangesPanel = RangesPanel;

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _eui = require("@elastic/eui");

var _i18n = require("@kbn/i18n");

var _react2 = require("@kbn/i18n/react");

var _ranges = require("ui/agg_types/controls/ranges");

var _common = require("../../common");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function RangesPanel(_ref) {
  var setGaugeValue = _ref.setGaugeValue,
      setTouched = _ref.setTouched,
      setValidity = _ref.setValidity,
      setValue = _ref.setValue,
      stateParams = _ref.stateParams,
      uiState = _ref.uiState,
      vis = _ref.vis;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCustomColors = _useState2[0],
      setIsCustomColors = _useState2[1];

  (0, _react.useEffect)(function () {
    uiState.on('colorChanged', function () {
      setIsCustomColors(true);
    });
  }, [uiState]);
  var addRangeValues = (0, _react.useCallback)(function () {
    var previousRange = (0, _lodash.last)(stateParams.gauge.colorsRange);
    var from = previousRange.to ? previousRange.to : 0;
    var to = previousRange.to ? from + (previousRange.to - (previousRange.from || 0)) : 100;
    return {
      from: from,
      to: to
    };
  }, [stateParams.gauge.colorsRange]);
  var validateRange = (0, _react.useCallback)(function (_ref2, index) {
    var from = _ref2.from,
        to = _ref2.to;
    var leftBound = index === 0 ? -Infinity : stateParams.gauge.colorsRange[index - 1].to || 0;
    var isFromValid = from >= leftBound;
    var isToValid = to >= from;
    return [isFromValid, isToValid];
  }, [stateParams.gauge.colorsRange]);

  var resetColorsButton = _react.default.createElement(_eui.EuiText, {
    size: "xs"
  }, _react.default.createElement(_eui.EuiLink, {
    onClick: function onClick() {
      uiState.set('vis.colors', null);
      setIsCustomColors(false);
    }
  }, _react.default.createElement(_react2.FormattedMessage, {
    id: "kbnVislibVisTypes.controls.gaugeOptions.resetColorsButtonLabel",
    defaultMessage: "Reset colors"
  })));

  return _react.default.createElement(_eui.EuiPanel, {
    paddingSize: "s"
  }, _react.default.createElement(_eui.EuiTitle, {
    size: "xs"
  }, _react.default.createElement("h2", null, _react.default.createElement(_react2.FormattedMessage, {
    id: "kbnVislibVisTypes.controls.gaugeOptions.rangesTitle",
    defaultMessage: "Ranges"
  }))), _react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), _react.default.createElement(_ranges.RangesParamEditor, {
    dataTestSubj: "gaugeColorRange",
    error: _i18n.i18n.translate('kbnVislibVisTypes.controls.gaugeOptions.errorText', {
      defaultMessage: 'Each range should be greater than previous.'
    }),
    hidePlaceholders: true,
    value: stateParams.gauge.colorsRange,
    setValue: function setValue(value) {
      return setGaugeValue('colorsRange', value);
    },
    setTouched: setTouched,
    setValidity: setValidity,
    addRangeValues: addRangeValues,
    validateRange: validateRange
  }), _react.default.createElement(_common.SwitchOption, {
    disabled: stateParams.gauge.colorsRange.length < 2,
    label: _i18n.i18n.translate('kbnVislibVisTypes.controls.gaugeOptions.autoExtendRangeLabel', {
      defaultMessage: 'Auto extend range'
    }),
    tooltip: _i18n.i18n.translate('kbnVislibVisTypes.controls.gaugeOptions.extendRangeTooltip', {
      defaultMessage: 'Extends range to the maximum value in your data.'
    }),
    paramName: "extendRange",
    value: stateParams.gauge.extendRange,
    setValue: setGaugeValue
  }), _react.default.createElement(_common.SwitchOption, {
    dataTestSubj: "gaugePercentageMode",
    label: _i18n.i18n.translate('kbnVislibVisTypes.controls.gaugeOptions.percentageModeLabel', {
      defaultMessage: 'Percentage mode'
    }),
    paramName: "percentageMode",
    value: stateParams.gauge.percentageMode,
    setValue: setGaugeValue
  }), _react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), _react.default.createElement(_common.SelectOption, {
    disabled: stateParams.gauge.colorsRange.length < 2,
    helpText: _i18n.i18n.translate('kbnVislibVisTypes.controls.gaugeOptions.howToChangeColorsDescription', {
      defaultMessage: 'Note: colors can be changed in the legend.'
    }),
    label: _i18n.i18n.translate('kbnVislibVisTypes.controls.gaugeOptions.colorSchemaLabel', {
      defaultMessage: 'Color schema'
    }),
    labelAppend: isCustomColors && resetColorsButton,
    options: vis.type.editorConfig.collections.colorSchemas,
    paramName: "colorSchema",
    value: stateParams.gauge.colorSchema,
    setValue: setGaugeValue
  }), _react.default.createElement(_common.SwitchOption, {
    disabled: stateParams.gauge.colorsRange.length < 2,
    label: _i18n.i18n.translate('kbnVislibVisTypes.controls.gaugeOptions.reverseColorSchemaLabel', {
      defaultMessage: 'Reverse schema'
    }),
    paramName: "invertColors",
    value: stateParams.gauge.invertColors,
    setValue: setGaugeValue
  }), _react.default.createElement(_common.SwitchOption, {
    label: _i18n.i18n.translate('kbnVislibVisTypes.controls.gaugeOptions.showLegendLabel', {
      defaultMessage: 'Show legend'
    }),
    paramName: "addLegend",
    value: stateParams.addLegend,
    setValue: setValue
  }), _react.default.createElement(_common.SwitchOption, {
    label: _i18n.i18n.translate('kbnVislibVisTypes.controls.gaugeOptions.showScaleLabel', {
      defaultMessage: 'Show scale'
    }),
    paramName: "show",
    value: stateParams.gauge.scale.show,
    setValue: function setValue(paramName, value) {
      return setGaugeValue('scale', _objectSpread({}, stateParams.gauge.scale, _defineProperty({}, paramName, value)));
    }
  }));
}