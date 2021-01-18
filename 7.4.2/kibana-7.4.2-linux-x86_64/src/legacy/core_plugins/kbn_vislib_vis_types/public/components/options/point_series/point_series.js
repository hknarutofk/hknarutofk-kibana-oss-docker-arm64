"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointSeriesOptions = PointSeriesOptions;

var _react = _interopRequireDefault(require("react"));

var _eui = require("@elastic/eui");

var _i18n = require("@kbn/i18n");

var _react2 = require("@kbn/i18n/react");

var _common = require("../../common");

var _grid_options = require("./grid_options");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PointSeriesOptions(props) {
  var stateParams = props.stateParams,
      _setValue = props.setValue,
      vis = props.vis;
  var options = [{
    value: 'full',
    text: _i18n.i18n.translate('kbnVislibVisTypes.editors.pointSeries.thresholdLine.style.full', {
      defaultMessage: 'Full'
    })
  }, {
    value: 'dashed',
    text: _i18n.i18n.translate('kbnVislibVisTypes.editors.pointSeries.thresholdLine.style.dashed', {
      defaultMessage: 'Dashed'
    })
  }, {
    value: 'dot-dashed',
    text: _i18n.i18n.translate('kbnVislibVisTypes.editors.pointSeries.thresholdLine.style.dotdashed', {
      defaultMessage: 'Dot-dashed'
    })
  }];
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_eui.EuiPanel, {
    paddingSize: "s"
  }, _react.default.createElement(_eui.EuiTitle, {
    size: "xs"
  }, _react.default.createElement("h2", null, _react.default.createElement(_react2.FormattedMessage, {
    id: "kbnVislibVisTypes.editors.pointSeries.settingsTitle",
    defaultMessage: "Settings"
  }))), _react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), _react.default.createElement(_common.BasicOptions, props), vis.hasSchemaAgg('segment', 'date_histogram') ? _react.default.createElement(_common.SwitchOption, {
    label: _i18n.i18n.translate('kbnVislibVisTypes.editors.pointSeries.currentTimeMarkerLabel', {
      defaultMessage: 'Current time marker'
    }),
    paramName: "addTimeMarker",
    value: stateParams.addTimeMarker,
    setValue: _setValue
  }) : _react.default.createElement(_common.SwitchOption, {
    label: _i18n.i18n.translate('kbnVislibVisTypes.editors.pointSeries.orderBucketsBySumLabel', {
      defaultMessage: 'Order buckets by sum'
    }),
    paramName: "orderBucketsBySum",
    value: stateParams.orderBucketsBySum,
    setValue: _setValue
  }), vis.type.type === 'histogram' && _react.default.createElement(_common.SwitchOption, {
    label: _i18n.i18n.translate('kbnVislibVisTypes.editors.pointSeries.showLabels', {
      defaultMessage: 'Show values on chart'
    }),
    paramName: "show",
    value: stateParams.labels.show,
    setValue: function setValue(paramName, value) {
      return _setValue('labels', _objectSpread({}, stateParams.labels, _defineProperty({}, paramName, value)));
    }
  })), _react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), _react.default.createElement(_grid_options.GridOptions, props), _react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), _react.default.createElement(_eui.EuiPanel, {
    paddingSize: "s"
  }, _react.default.createElement(_eui.EuiTitle, {
    size: "xs"
  }, _react.default.createElement("h2", null, _react.default.createElement(_react2.FormattedMessage, {
    id: "kbnVislibVisTypes.editors.pointSeries.thresholdLineSettings",
    defaultMessage: "Threshold Line"
  }))), _react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), _react.default.createElement(_common.SwitchOption, {
    label: _i18n.i18n.translate('kbnVislibVisTypes.editors.pointSeries.thresholdLine.show', {
      defaultMessage: 'Show threshold line'
    }),
    paramName: "show",
    value: stateParams.thresholdLine.show,
    setValue: function setValue(paramName, value) {
      return _setValue('thresholdLine', _objectSpread({}, stateParams.thresholdLine, _defineProperty({}, paramName, value)));
    }
  }), stateParams.thresholdLine.show && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_common.NumberInputOption, {
    label: _i18n.i18n.translate('kbnVislibVisTypes.editors.pointSeries.thresholdLine.valueLabel', {
      defaultMessage: 'Threshold value'
    }),
    paramName: "value",
    value: stateParams.thresholdLine.value,
    setValue: function setValue(paramName, value) {
      return _setValue('thresholdLine', _objectSpread({}, stateParams.thresholdLine, _defineProperty({}, paramName, value || 0)));
    }
  }), _react.default.createElement(_common.NumberInputOption, {
    label: _i18n.i18n.translate('kbnVislibVisTypes.editors.pointSeries.thresholdLine.widthLabel', {
      defaultMessage: 'Line width'
    }),
    paramName: "width",
    min: 1,
    step: 1,
    value: stateParams.thresholdLine.width,
    setValue: function setValue(paramName, value) {
      return _setValue('thresholdLine', _objectSpread({}, stateParams.thresholdLine, _defineProperty({}, paramName, value || 1)));
    }
  }), _react.default.createElement(_common.SelectOption, {
    label: _i18n.i18n.translate('kbnVislibVisTypes.editors.pointSeries.thresholdLine.style', {
      defaultMessage: 'Line style'
    }),
    options: options,
    paramName: "style",
    value: stateParams.thresholdLine.style,
    setValue: function setValue(paramName, value) {
      return _setValue('thresholdLine', _objectSpread({}, stateParams.thresholdLine, _defineProperty({}, paramName, value)));
    }
  }), _react.default.createElement(_eui.EuiFormRow, {
    label: _i18n.i18n.translate('kbnVislibVisTypes.editors.pointSeries.thresholdLine.color', {
      defaultMessage: 'Line color'
    })
  }, _react.default.createElement(_eui.EuiColorPicker, {
    color: stateParams.thresholdLine.color,
    onChange: function onChange(value) {
      _setValue('thresholdLine', _objectSpread({}, stateParams.thresholdLine, {
        color: value
      }));
    }
  })))));
}