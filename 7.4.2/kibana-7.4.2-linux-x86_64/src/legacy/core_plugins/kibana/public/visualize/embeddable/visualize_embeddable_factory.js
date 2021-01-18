"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisualizeEmbeddableFactory = void 0;

require("ui/registry/field_formats");

require("uiExports/autocompleteProviders");

require("uiExports/contextMenuActions");

require("uiExports/devTools");

require("uiExports/docViews");

require("uiExports/embeddableFactories");

require("uiExports/embeddableActions");

require("uiExports/fieldFormatEditors");

require("uiExports/fieldFormats");

require("uiExports/home");

require("uiExports/indexManagement");

require("uiExports/inspectorViews");

require("uiExports/savedObjectTypes");

require("uiExports/search");

require("uiExports/shareContextMenuExtensions");

require("uiExports/visEditorTypes");

require("uiExports/visRequestHandlers");

require("uiExports/visResponseHandlers");

require("uiExports/visTypes");

require("uiExports/visualize");

var _i18n = require("@kbn/i18n");

var _capabilities = require("ui/capabilities");

var _chrome = _interopRequireDefault(require("ui/chrome"));

var _loader = require("ui/visualize/loader");

var _vis_types = require("ui/registry/vis_types");

var _public = require("../../../../embeddable_api/public/np_ready/public");

var _legacy = require("../../../../embeddable_api/public/np_ready/public/legacy");

var _wizard = require("../wizard");

var _disabled_lab_embeddable = require("./disabled_lab_embeddable");

var _get_index_pattern = require("./get_index_pattern");

var _visualize_embeddable = require("./visualize_embeddable");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VisualizeEmbeddableFactory =
/*#__PURE__*/
function (_EmbeddableFactory) {
  _inherits(VisualizeEmbeddableFactory, _EmbeddableFactory);

  _createClass(VisualizeEmbeddableFactory, null, [{
    key: "createVisualizeEmbeddableFactory",
    value: function () {
      var _createVisualizeEmbeddableFactory = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var $injector, Private, visTypes;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _chrome.default.dangerouslyGetActiveInjector();

              case 2:
                $injector = _context.sent;
                Private = $injector.get('Private');
                visTypes = Private(_vis_types.VisTypesRegistryProvider);
                return _context.abrupt("return", new VisualizeEmbeddableFactory(visTypes));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createVisualizeEmbeddableFactory() {
        return _createVisualizeEmbeddableFactory.apply(this, arguments);
      }

      return createVisualizeEmbeddableFactory;
    }()
  }]);

  function VisualizeEmbeddableFactory(visTypes) {
    var _this;

    _classCallCheck(this, VisualizeEmbeddableFactory);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisualizeEmbeddableFactory).call(this, {
      savedObjectMetaData: {
        name: _i18n.i18n.translate('kbn.visualize.savedObjectName', {
          defaultMessage: 'Visualization'
        }),
        type: 'visualization',
        getIconForSavedObject: function getIconForSavedObject(savedObject) {
          if (!visTypes) {
            return 'visualizeApp';
          }

          return visTypes.byName[JSON.parse(savedObject.attributes.visState).type].icon || 'visualizeApp';
        },
        getTooltipForSavedObject: function getTooltipForSavedObject(savedObject) {
          if (!visTypes) {
            return '';
          }

          return "".concat(savedObject.attributes.title, " (").concat(visTypes.byName[JSON.parse(savedObject.attributes.visState).type].title, ")");
        },
        showSavedObject: function showSavedObject(savedObject) {
          if (!visTypes) {
            return false;
          }

          var typeName = JSON.parse(savedObject.attributes.visState).type;
          var visType = visTypes.byName[typeName];

          if (!visType) {
            return false;
          }

          if (_chrome.default.getUiSettingsClient().get('visualize:enableLabs')) {
            return true;
          }

          return visType.stage !== 'experimental';
        }
      }
    }));

    _defineProperty(_assertThisInitialized(_this), "type", _constants.VISUALIZE_EMBEDDABLE_TYPE);

    _defineProperty(_assertThisInitialized(_this), "visTypes", void 0);

    _this.visTypes = visTypes;
    return _this;
  }

  _createClass(VisualizeEmbeddableFactory, [{
    key: "isEditable",
    value: function isEditable() {
      return _capabilities.capabilities.get().visualize.save;
    }
  }, {
    key: "getDisplayName",
    value: function getDisplayName() {
      return _i18n.i18n.translate('kbn.embeddable.visualizations.displayName', {
        defaultMessage: 'visualization'
      });
    }
  }, {
    key: "createFromSavedObject",
    value: function () {
      var _createFromSavedObject = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(savedObjectId, input, parent) {
        var $injector, config, savedVisualizations, visId, editUrl, loader, savedObject, isLabsEnabled, indexPattern, indexPatterns;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _chrome.default.dangerouslyGetActiveInjector();

              case 2:
                $injector = _context2.sent;
                config = $injector.get('config');
                savedVisualizations = $injector.get('savedVisualizations');
                _context2.prev = 5;
                visId = savedObjectId;
                editUrl = _chrome.default.addBasePath("/app/kibana".concat(savedVisualizations.urlFor(visId)));
                _context2.next = 10;
                return (0, _loader.getVisualizeLoader)();

              case 10:
                loader = _context2.sent;
                _context2.next = 13;
                return savedVisualizations.get(visId);

              case 13:
                savedObject = _context2.sent;
                isLabsEnabled = config.get('visualize:enableLabs');

                if (!(!isLabsEnabled && savedObject.vis.type.stage === 'experimental')) {
                  _context2.next = 17;
                  break;
                }

                return _context2.abrupt("return", new _disabled_lab_embeddable.DisabledLabEmbeddable(savedObject.title, input));

              case 17:
                _context2.next = 19;
                return (0, _get_index_pattern.getIndexPattern)(savedObject);

              case 19:
                indexPattern = _context2.sent;
                indexPatterns = indexPattern ? [indexPattern] : [];
                return _context2.abrupt("return", new _visualize_embeddable.VisualizeEmbeddable({
                  savedVisualization: savedObject,
                  loader: loader,
                  indexPatterns: indexPatterns,
                  editUrl: editUrl,
                  editable: this.isEditable()
                }, input, parent));

              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](5);
                console.error(_context2.t0); // eslint-disable-line no-console

                return _context2.abrupt("return", new _public.ErrorEmbeddable(_context2.t0, input, parent));

              case 28:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 24]]);
      }));

      function createFromSavedObject(_x, _x2, _x3) {
        return _createFromSavedObject.apply(this, arguments);
      }

      return createFromSavedObject;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // TODO: This is a bit of a hack to preserve the original functionality. Ideally we will clean this up
                // to allow for in place creation of visualizations without having to navigate away to a new URL.
                if (this.visTypes) {
                  (0, _wizard.showNewVisModal)(this.visTypes, {
                    editorParams: ['addToDashboard']
                  });
                }

                return _context3.abrupt("return", undefined);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function create() {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }]);

  return VisualizeEmbeddableFactory;
}(_public.EmbeddableFactory);

exports.VisualizeEmbeddableFactory = VisualizeEmbeddableFactory;
VisualizeEmbeddableFactory.createVisualizeEmbeddableFactory().then(function (embeddableFactory) {
  _legacy.setup.registerEmbeddableFactory(_constants.VISUALIZE_EMBEDDABLE_TYPE, embeddableFactory);
});