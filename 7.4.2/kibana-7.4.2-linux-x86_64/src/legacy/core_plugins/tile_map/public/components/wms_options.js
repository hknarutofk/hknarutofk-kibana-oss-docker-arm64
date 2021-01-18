"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WmsOptions = WmsOptions;

var _react = _interopRequireWildcard(require("react"));

var _eui = require("@elastic/eui");

var _i18n = require("@kbn/i18n");

var _react2 = require("@kbn/i18n/react");

var _notify = require("ui/notify");

var _components = require("../../../kbn_vislib_vis_types/public/components");

var _wms_internal_options = require("./wms_internal_options");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var mapLayerForOption = function mapLayerForOption(_ref) {
  var id = _ref.id;
  return {
    text: id,
    value: id
  };
};

function WmsOptions(_ref2) {
  var serviceSettings = _ref2.serviceSettings,
      stateParams = _ref2.stateParams,
      setValue = _ref2.setValue,
      vis = _ref2.vis;
  var wms = stateParams.wms;
  var tmsLayers = vis.type.editorConfig.collections.tmsLayers;

  var _useState = (0, _react.useState)(tmsLayers.map(mapLayerForOption)),
      _useState2 = _slicedToArray(_useState, 2),
      tmsLayerOptions = _useState2[0],
      setTmsLayersOptions = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      layers = _useState4[0],
      setLayers = _useState4[1];

  var setWmsOption = function setWmsOption(paramName, value) {
    return setValue('wms', _objectSpread({}, wms, _defineProperty({}, paramName, value)));
  };

  var selectTmsLayer = function selectTmsLayer(id) {
    var layer = layers.find(function (l) {
      return l.id === id;
    });

    if (layer) {
      setWmsOption('selectedTmsLayer', layer);
    }
  };

  (0, _react.useEffect)(function () {
    serviceSettings.getTMSServices().then(function (services) {
      var newBaseLayers = [].concat(_toConsumableArray(tmsLayers), _toConsumableArray(services.filter(function (service) {
        return !tmsLayers.some(function (_ref3) {
          var id = _ref3.id;
          return service.id === id;
        });
      })));
      setLayers(newBaseLayers);
      setTmsLayersOptions(newBaseLayers.map(mapLayerForOption));

      if (!wms.selectedTmsLayer && newBaseLayers.length) {
        setWmsOption('selectedTmsLayer', newBaseLayers[0]);
      }
    }).catch(function (error) {
      return _notify.toastNotifications.addWarning(error.message);
    });
  }, []);
  return _react.default.createElement(_eui.EuiPanel, {
    paddingSize: "s"
  }, _react.default.createElement(_eui.EuiTitle, {
    size: "xs"
  }, _react.default.createElement("h2", null, _react.default.createElement(_react2.FormattedMessage, {
    id: "tileMap.wmsOptions.baseLayerSettingsTitle",
    defaultMessage: "Base layer settings"
  }))), _react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), _react.default.createElement(_components.SwitchOption, {
    label: _i18n.i18n.translate('tileMap.wmsOptions.wmsMapServerLabel', {
      defaultMessage: 'WMS map server'
    }),
    tooltip: _i18n.i18n.translate('tileMap.wmsOptions.useWMSCompliantMapTileServerTip', {
      defaultMessage: 'Use WMS compliant map tile server. For advanced users only.'
    }),
    paramName: "enabled",
    value: wms.enabled,
    setValue: setWmsOption
  }), !wms.enabled && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), _react.default.createElement(_components.SelectOption, {
    id: "wmsOptionsSelectTmsLayer",
    label: _i18n.i18n.translate('tileMap.wmsOptions.layersLabel', {
      defaultMessage: 'Layers'
    }),
    options: tmsLayerOptions,
    paramName: "selectedTmsLayer",
    value: wms.selectedTmsLayer && wms.selectedTmsLayer.id,
    setValue: function setValue(param, value) {
      return selectTmsLayer(value);
    }
  })), wms.enabled && _react.default.createElement(_wms_internal_options.WmsInternalOptions, {
    wms: wms,
    setValue: setWmsOption
  }));
}