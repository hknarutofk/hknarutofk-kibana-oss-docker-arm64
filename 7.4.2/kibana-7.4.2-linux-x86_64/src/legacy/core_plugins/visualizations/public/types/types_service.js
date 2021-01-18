"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "visFactory", {
  enumerable: true,
  get: function get() {
    return _vis_factory.visFactory;
  }
});
Object.defineProperty(exports, "DefaultEditorSize", {
  enumerable: true,
  get: function get() {
    return _editor_size.DefaultEditorSize;
  }
});
Object.defineProperty(exports, "VisTypesRegistry", {
  enumerable: true,
  get: function get() {
    return _vis_types.VisTypesRegistry;
  }
});
Object.defineProperty(exports, "Status", {
  enumerable: true,
  get: function get() {
    return _update_status.Status;
  }
});
exports.TypesService = void 0;

var _default_feedback_message = require("ui/vis/default_feedback_message");

var _index = require("ui/vis/index.js");

var _vis_factory = require("ui/vis/vis_factory");

var _editor_size = require("ui/vis/editor_size");

var _vis_types = require("ui/registry/vis_types");

var _vis_type_alias_registry = require("./vis_type_alias_registry");

var _update_status = require("ui/vis/update_status");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Vis Types Service
 *
 * @internal
 */
var TypesService =
/*#__PURE__*/
function () {
  function TypesService() {
    _classCallCheck(this, TypesService);
  }

  _createClass(TypesService, [{
    key: "setup",
    value: function setup() {
      return {
        Vis: _index.VisProvider,
        VisFactoryProvider: _vis_factory.VisFactoryProvider,
        VisTypesRegistryProvider: _vis_types.VisTypesRegistryProvider,
        defaultFeedbackMessage: _default_feedback_message.defaultFeedbackMessage,
        // make default in base vis type, or move?
        visTypeAliasRegistry: _vis_type_alias_registry.visTypeAliasRegistry
      };
    }
  }, {
    key: "stop",
    value: function stop() {// nothing to do here yet
    }
  }]);

  return TypesService;
}();
/** @public */


exports.TypesService = TypesService;