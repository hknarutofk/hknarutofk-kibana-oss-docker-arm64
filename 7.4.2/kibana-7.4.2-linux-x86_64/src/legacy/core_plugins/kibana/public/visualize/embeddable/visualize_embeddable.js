"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisualizeEmbeddable = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _persisted_state = require("ui/persisted_state");

var Rx = _interopRequireWildcard(require("rxjs"));

var _public = require("../../../../embeddable_api/public/np_ready/public");

var _public2 = require("../../../../data/public");

var _constants = require("./constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getKeys = function getKeys(o) {
  return Object.keys(o);
};

var VisualizeEmbeddable =
/*#__PURE__*/
function (_Embeddable) {
  _inherits(VisualizeEmbeddable, _Embeddable);

  function VisualizeEmbeddable(_ref, initialInput, parent) {
    var _this;

    var savedVisualization = _ref.savedVisualization,
        loader = _ref.loader,
        editUrl = _ref.editUrl,
        indexPatterns = _ref.indexPatterns,
        editable = _ref.editable;

    _classCallCheck(this, VisualizeEmbeddable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisualizeEmbeddable).call(this, initialInput, {
      defaultTitle: savedVisualization.title,
      editUrl: editUrl,
      indexPatterns: indexPatterns,
      editable: editable,
      savedObjectId: savedVisualization.id,
      visTypeName: savedVisualization.vis.type.name
    }, parent));

    _defineProperty(_assertThisInitialized(_this), "savedVisualization", void 0);

    _defineProperty(_assertThisInitialized(_this), "loader", void 0);

    _defineProperty(_assertThisInitialized(_this), "uiState", void 0);

    _defineProperty(_assertThisInitialized(_this), "handler", void 0);

    _defineProperty(_assertThisInitialized(_this), "timeRange", void 0);

    _defineProperty(_assertThisInitialized(_this), "query", void 0);

    _defineProperty(_assertThisInitialized(_this), "title", void 0);

    _defineProperty(_assertThisInitialized(_this), "filters", void 0);

    _defineProperty(_assertThisInitialized(_this), "visCustomizations", void 0);

    _defineProperty(_assertThisInitialized(_this), "subscription", void 0);

    _defineProperty(_assertThisInitialized(_this), "type", _constants.VISUALIZE_EMBEDDABLE_TYPE);

    _defineProperty(_assertThisInitialized(_this), "uiStateChangeHandler", function () {
      _this.updateInput(_objectSpread({}, _this.uiState.toJSON()));
    });

    _this.savedVisualization = savedVisualization;
    _this.loader = loader;
    var parsedUiState = savedVisualization.uiStateJSON ? JSON.parse(savedVisualization.uiStateJSON) : {};
    _this.uiState = new _persisted_state.PersistedState(parsedUiState);

    _this.uiState.on('change', _this.uiStateChangeHandler);

    _this.subscription = Rx.merge(_this.getOutput$(), _this.getInput$()).subscribe(function () {
      _this.handleChanges();
    });
    return _this;
  }

  _createClass(VisualizeEmbeddable, [{
    key: "getInspectorAdapters",
    value: function getInspectorAdapters() {
      if (!this.handler) {
        return undefined;
      }

      return this.handler.inspectorAdapters;
    }
  }, {
    key: "supportsTrigger",
    value: function supportsTrigger(trigger) {
      return trigger.id !== _public.APPLY_FILTER_TRIGGER;
    }
    /**
     * Transfers all changes in the containerState.customization into
     * the uiState of this visualization.
     */

  }, {
    key: "transferCustomizationsToUiState",
    value: function transferCustomizationsToUiState() {
      var _this2 = this;

      // Check for changes that need to be forwarded to the uiState
      // Since the vis has an own listener on the uiState we don't need to
      // pass anything from here to the handler.update method
      var visCustomizations = this.input.vis;

      if (visCustomizations) {
        if (!_lodash.default.isEqual(visCustomizations, this.visCustomizations)) {
          this.visCustomizations = visCustomizations; // Turn this off or the uiStateChangeHandler will fire for every modification.

          this.uiState.off('change', this.uiStateChangeHandler);
          this.uiState.clearAllKeys();
          this.uiState.set('vis', visCustomizations);
          getKeys(visCustomizations).forEach(function (key) {
            _this2.uiState.set(key, visCustomizations[key]);
          });
          this.uiState.on('change', this.uiStateChangeHandler);
        }
      } else {
        this.uiState.clearAllKeys();
      }
    }
  }, {
    key: "handleChanges",
    value: function handleChanges() {
      this.transferCustomizationsToUiState();
      var updatedParams = {}; // Check if timerange has changed

      if (!_lodash.default.isEqual(this.input.timeRange, this.timeRange)) {
        this.timeRange = _lodash.default.cloneDeep(this.input.timeRange);
        updatedParams.timeRange = this.timeRange;
      } // Check if filters has changed


      if (!(0, _public2.onlyDisabledFiltersChanged)(this.input.filters, this.filters)) {
        updatedParams.filters = this.input.filters;
        this.filters = this.input.filters;
      } // Check if query has changed


      if (!_lodash.default.isEqual(this.input.query, this.query)) {
        updatedParams.query = this.input.query;
        this.query = this.input.query;
      }

      if (this.output.title !== this.title) {
        this.title = this.output.title;
        updatedParams.dataAttrs = {
          title: this.title || ''
        };
      }

      if (this.handler && !_lodash.default.isEmpty(updatedParams)) {
        this.handler.update(updatedParams);
        this.handler.reload();
      }
    }
    /**
     *
     * @param {Element} domNode
     * @param {ContainerState} containerState
     */

  }, {
    key: "render",
    value: function render(domNode) {
      this.timeRange = _lodash.default.cloneDeep(this.input.timeRange);
      this.query = this.input.query;
      this.filters = this.input.filters;
      this.transferCustomizationsToUiState();
      var dataAttrs = {
        'shared-item': '',
        title: this.output.title || ''
      };

      if (this.savedVisualization.description) {
        dataAttrs.description = this.savedVisualization.description;
      }

      var handlerParams = {
        uiState: this.uiState,
        // Append visualization to container instead of replacing its content
        append: true,
        timeRange: _lodash.default.cloneDeep(this.input.timeRange),
        query: this.query,
        filters: this.filters,
        cssClass: "panel-content panel-content--fullWidth",
        dataAttrs: dataAttrs
      };
      this.handler = this.loader.embedVisualizationWithSavedObject(domNode, this.savedVisualization, handlerParams);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(VisualizeEmbeddable.prototype), "destroy", this).call(this);

      if (this.subscription) {
        this.subscription.unsubscribe();
      }

      this.uiState.off('change', this.uiStateChangeHandler);
      this.savedVisualization.destroy();

      if (this.handler) {
        this.handler.destroy();
        this.handler.getElement().remove();
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      if (this.handler) {
        this.handler.reload();
      }
    }
  }]);

  return VisualizeEmbeddable;
}(_public.Embeddable);

exports.VisualizeEmbeddable = VisualizeEmbeddable;