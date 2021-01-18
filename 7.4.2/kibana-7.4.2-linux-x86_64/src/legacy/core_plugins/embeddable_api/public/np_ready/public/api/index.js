"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  pureApi: true,
  createApi: true
};
exports.createApi = exports.pureApi = void 0;

var _attach_action = require("./attach_action");

var _detach_action = require("./detach_action");

var _execute_trigger_actions = require("./execute_trigger_actions");

var _get_embeddable_factories = require("./get_embeddable_factories");

var _get_embeddable_factory = require("./get_embeddable_factory");

var _get_trigger = require("./get_trigger");

var _get_trigger_actions = require("./get_trigger_actions");

var _get_trigger_compatible_actions = require("./get_trigger_compatible_actions");

var _register_action = require("./register_action");

var _register_embeddable_factory = require("./register_embeddable_factory");

var _register_trigger = require("./register_trigger");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var pureApi = {
  attachAction: _attach_action.attachAction,
  detachAction: _detach_action.detachAction,
  executeTriggerActions: _execute_trigger_actions.executeTriggerActions,
  getEmbeddableFactories: _get_embeddable_factories.getEmbeddableFactories,
  getEmbeddableFactory: _get_embeddable_factory.getEmbeddableFactory,
  getTrigger: _get_trigger.getTrigger,
  getTriggerActions: _get_trigger_actions.getTriggerActions,
  getTriggerCompatibleActions: _get_trigger_compatible_actions.getTriggerCompatibleActions,
  registerAction: _register_action.registerAction,
  registerEmbeddableFactory: _register_embeddable_factory.registerEmbeddableFactory,
  registerTrigger: _register_trigger.registerTrigger
};
exports.pureApi = pureApi;

var createApi = function createApi(deps) {
  var partialApi = {};

  var depsInternal = _objectSpread({}, deps, {
    api: partialApi
  });

  for (var _i = 0, _Object$entries = Object.entries(pureApi); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        fn = _Object$entries$_i[1];

    partialApi[key] = fn(depsInternal);
  }

  Object.freeze(partialApi);
  var api = partialApi;
  return {
    api: api,
    depsInternal: depsInternal
  };
};

exports.createApi = createApi;