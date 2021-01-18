"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegionMapOptions = RegionMapOptions;

var _react = _interopRequireWildcard(require("react"));

var _eui = require("@elastic/eui");

var _i18n = require("@kbn/i18n");

var _react2 = require("@kbn/i18n/react");

var _notify = require("ui/notify");

var _components = require("../../../kbn_vislib_vis_types/public/components");

var _origin = require("../../../tile_map/common/origin");

var _wms_options = require("../../../tile_map/public/components/wms_options");

var _util = require("../util");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var mapLayerForOption = function mapLayerForOption(_ref) {
  var layerId = _ref.layerId,
      name = _ref.name;
  return {
    text: name,
    value: layerId
  };
};

var mapFieldForOption = function mapFieldForOption(_ref2) {
  var description = _ref2.description,
      name = _ref2.name;
  return {
    text: description,
    value: name
  };
};

function RegionMapOptions(props) {
  var includeElasticMapsService = props.includeElasticMapsService,
      serviceSettings = props.serviceSettings,
      stateParams = props.stateParams,
      vis = props.vis,
      setValue = props.setValue;

  var _useState = (0, _react.useState)(vis.type.editorConfig.collections.vectorLayers),
      _useState2 = _slicedToArray(_useState, 2),
      vectorLayers = _useState2[0],
      setVectorLayers = _useState2[1];

  var _useState3 = (0, _react.useState)(vectorLayers.map(mapLayerForOption)),
      _useState4 = _slicedToArray(_useState3, 2),
      vectorLayerOptions = _useState4[0],
      setVectorLayerOptions = _useState4[1];

  var currentLayerId = stateParams.selectedLayer && stateParams.selectedLayer.layerId;
  var fieldOptions = (0, _react.useMemo)(function () {
    return (stateParams.selectedLayer && stateParams.selectedLayer.fields || []).map(mapFieldForOption);
  }, [currentLayerId]);
  var setEmsHotLink = (0, _react.useCallback)(
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(layer) {
      var emsHotLink;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return serviceSettings.getEMSHotLink(layer);

            case 2:
              emsHotLink = _context.sent;
              setValue('emsHotLink', emsHotLink);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }(), [setValue]);
  var setLayer = (0, _react.useCallback)(
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(paramName, value) {
      var newLayer;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              newLayer = vectorLayers.find(function (_ref5) {
                var layerId = _ref5.layerId;
                return layerId === value;
              });

              if (newLayer) {
                setValue(paramName, newLayer);
                setValue('selectedJoinField', newLayer.fields[0]);
                setEmsHotLink(newLayer);
              }

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }(), [vectorLayers, setValue]);
  var setField = (0, _react.useCallback)(function (paramName, value) {
    if (stateParams.selectedLayer) {
      setValue(paramName, stateParams.selectedLayer.fields.find(function (f) {
        return f.name === value;
      }));
    }
  }, [currentLayerId, setValue]);
  (0, _react.useEffect)(function () {
    function setDefaultValues() {
      return _setDefaultValues.apply(this, arguments);
    }

    function _setDefaultValues() {
      _setDefaultValues = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var layers, newLayers, newVectorLayers, _newVectorLayers, newLayer;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return serviceSettings.getFileLayers();

              case 3:
                layers = _context3.sent;
                newLayers = layers.map(_util.mapToLayerWithId.bind(null, _origin.ORIGIN.EMS)).filter(function (layer) {
                  return !vectorLayers.some(function (vectorLayer) {
                    return vectorLayer.layerId === layer.layerId;
                  });
                }); // backfill v1 manifest for now

                newLayers.forEach(function (layer) {
                  if (layer.format === 'geojson') {
                    layer.format = {
                      type: 'geojson'
                    };
                  }
                });
                newVectorLayers = [].concat(_toConsumableArray(vectorLayers), _toConsumableArray(newLayers));
                setVectorLayers(newVectorLayers);
                setVectorLayerOptions(newVectorLayers.map(mapLayerForOption));
                _newVectorLayers = _slicedToArray(newVectorLayers, 1), newLayer = _newVectorLayers[0];

                if (newLayer && !stateParams.selectedLayer) {
                  setValue('selectedLayer', newLayer);
                  setValue('selectedJoinField', newLayer.fields[0]);

                  if (newLayer.isEMS) {
                    setEmsHotLink(newLayer);
                  }
                }

                _context3.next = 16;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](0);

                _notify.toastNotifications.addWarning(_context3.t0.message);

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 13]]);
      }));
      return _setDefaultValues.apply(this, arguments);
    }

    if (includeElasticMapsService) {
      setDefaultValues();
    }
  }, []);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_eui.EuiPanel, {
    paddingSize: "s"
  }, _react.default.createElement(_eui.EuiTitle, {
    size: "xs"
  }, _react.default.createElement("h2", null, _react.default.createElement(_react2.FormattedMessage, {
    id: "regionMap.visParams.layerSettingsTitle",
    defaultMessage: "Layer settings"
  }))), _react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), _react.default.createElement(_components.SelectOption, {
    id: "regionMapOptionsSelectLayer",
    label: _i18n.i18n.translate('regionMap.visParams.vectorMapLabel', {
      defaultMessage: 'Vector map'
    }),
    labelAppend: stateParams.emsHotLink && _react.default.createElement(_eui.EuiText, {
      size: "xs"
    }, _react.default.createElement(_eui.EuiLink, {
      href: stateParams.emsHotLink,
      target: "_blank",
      title: _i18n.i18n.translate('regionMap.visParams.previewOnEMSLinkTitle', {
        defaultMessage: 'Preview {selectedLayerName} on the Elastic Maps Service',
        values: {
          selectedLayerName: stateParams.selectedLayer && stateParams.selectedLayer.name
        }
      })
    }, _react.default.createElement(_react2.FormattedMessage, {
      id: "regionMap.visParams.previewOnEMSLinkText",
      defaultMessage: "Preview on EMS"
    }), ' ', _react.default.createElement(_eui.EuiIcon, {
      type: "popout",
      size: "s"
    }))),
    options: vectorLayerOptions,
    paramName: "selectedLayer",
    value: stateParams.selectedLayer && stateParams.selectedLayer.layerId,
    setValue: setLayer
  }), _react.default.createElement(_components.SelectOption, {
    id: "regionMapOptionsSelectJoinField",
    label: _i18n.i18n.translate('regionMap.visParams.joinFieldLabel', {
      defaultMessage: 'Join field'
    }),
    options: fieldOptions,
    paramName: "selectedJoinField",
    value: stateParams.selectedJoinField && stateParams.selectedJoinField.name,
    setValue: setField
  }), _react.default.createElement(_components.SwitchOption, {
    label: _i18n.i18n.translate('regionMap.visParams.displayWarningsLabel', {
      defaultMessage: 'Display warnings'
    }),
    tooltip: _i18n.i18n.translate('regionMap.visParams.switchWarningsTipText', {
      defaultMessage: 'Turns on/off warnings. When turned on, warning will be shown for each term that cannot be matched to a shape in the vector layer based on the join field. When turned off, these warnings will be turned off.'
    }),
    paramName: "isDisplayWarning",
    value: stateParams.isDisplayWarning,
    setValue: setValue
  }), _react.default.createElement(_components.SwitchOption, {
    label: _i18n.i18n.translate('regionMap.visParams.showAllShapesLabel', {
      defaultMessage: 'Show all shapes'
    }),
    tooltip: _i18n.i18n.translate('regionMap.visParams.turnOffShowingAllShapesTipText', {
      defaultMessage: 'Turning this off only shows the shapes that were matched with a corresponding term.'
    }),
    paramName: "showAllShapes",
    value: stateParams.showAllShapes,
    setValue: setValue
  })), _react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), _react.default.createElement(_eui.EuiPanel, {
    paddingSize: "s"
  }, _react.default.createElement(_eui.EuiTitle, {
    size: "xs"
  }, _react.default.createElement("h2", null, _react.default.createElement(_react2.FormattedMessage, {
    id: "regionMap.visParams.styleSettingsLabel",
    defaultMessage: "Style settings"
  }))), _react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), _react.default.createElement(_components.SelectOption, {
    label: _i18n.i18n.translate('regionMap.visParams.colorSchemaLabel', {
      defaultMessage: 'Color schema'
    }),
    options: vis.type.editorConfig.collections.colorSchemas,
    paramName: "colorSchema",
    value: stateParams.colorSchema,
    setValue: setValue
  }), _react.default.createElement(_components.NumberInputOption, {
    label: _i18n.i18n.translate('regionMap.visParams.outlineWeightLabel', {
      defaultMessage: 'Border thickness'
    }),
    paramName: "outlineWeight",
    value: stateParams.outlineWeight,
    setValue: setValue
  })), _react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), _react.default.createElement(_wms_options.WmsOptions, props));
}