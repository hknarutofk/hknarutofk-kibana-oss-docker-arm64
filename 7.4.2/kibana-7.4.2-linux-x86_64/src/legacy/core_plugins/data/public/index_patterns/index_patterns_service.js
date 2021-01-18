"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "IndexPatternSelect", {
  enumerable: true,
  get: function get() {
    return _components.IndexPatternSelect;
  }
});
Object.defineProperty(exports, "IndexPatternsProvider", {
  enumerable: true,
  get: function get() {
    return _index_patterns.IndexPatternsProvider;
  }
});
Object.defineProperty(exports, "CONTAINS_SPACES", {
  enumerable: true,
  get: function get() {
    return _utils.CONTAINS_SPACES;
  }
});
Object.defineProperty(exports, "getFromSavedObject", {
  enumerable: true,
  get: function get() {
    return _utils.getFromSavedObject;
  }
});
Object.defineProperty(exports, "getRoutes", {
  enumerable: true,
  get: function get() {
    return _utils.getRoutes;
  }
});
Object.defineProperty(exports, "ILLEGAL_CHARACTERS", {
  enumerable: true,
  get: function get() {
    return _utils.ILLEGAL_CHARACTERS;
  }
});
Object.defineProperty(exports, "INDEX_PATTERN_ILLEGAL_CHARACTERS", {
  enumerable: true,
  get: function get() {
    return _utils.INDEX_PATTERN_ILLEGAL_CHARACTERS;
  }
});
Object.defineProperty(exports, "INDEX_PATTERN_ILLEGAL_CHARACTERS_VISIBLE", {
  enumerable: true,
  get: function get() {
    return _utils.INDEX_PATTERN_ILLEGAL_CHARACTERS_VISIBLE;
  }
});
Object.defineProperty(exports, "isFilterable", {
  enumerable: true,
  get: function get() {
    return _utils.isFilterable;
  }
});
Object.defineProperty(exports, "validateIndexPattern", {
  enumerable: true,
  get: function get() {
    return _utils.validateIndexPattern;
  }
});
Object.defineProperty(exports, "mockFields", {
  enumerable: true,
  get: function get() {
    return _utils.mockFields;
  }
});
Object.defineProperty(exports, "mockIndexPattern", {
  enumerable: true,
  get: function get() {
    return _utils.mockIndexPattern;
  }
});
Object.defineProperty(exports, "IndexPatternAlreadyExists", {
  enumerable: true,
  get: function get() {
    return _errors.IndexPatternAlreadyExists;
  }
});
Object.defineProperty(exports, "IndexPatternMissingIndices", {
  enumerable: true,
  get: function get() {
    return _errors.IndexPatternMissingIndices;
  }
});
Object.defineProperty(exports, "NoDefaultIndexPattern", {
  enumerable: true,
  get: function get() {
    return _errors.NoDefaultIndexPattern;
  }
});
Object.defineProperty(exports, "NoDefinedIndexPatterns", {
  enumerable: true,
  get: function get() {
    return _errors.NoDefinedIndexPatterns;
  }
});
exports.IndexPatternsService = void 0;

var _fields = require("./fields");

var _flatten_hit = require("./index_patterns/flatten_hit");

var _components = require("./components");

var _index_patterns = require("./index_patterns");

var _utils = require("./utils");

var _errors = require("./errors");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Index Patterns Service
 *
 * @internal
 */
var IndexPatternsService =
/*#__PURE__*/
function () {
  function IndexPatternsService() {
    _classCallCheck(this, IndexPatternsService);
  }

  _createClass(IndexPatternsService, [{
    key: "setup",
    value: function setup(_ref) {
      var uiSettings = _ref.uiSettings,
          savedObjectsClient = _ref.savedObjectsClient;
      return {
        FieldList: _fields.FieldList,
        flattenHitWrapper: (0, _flatten_hit.createFlattenHitWrapper)(),
        formatHitProvider: _index_patterns.formatHitProvider,
        indexPatterns: new _index_patterns.IndexPatterns(uiSettings, savedObjectsClient),
        IndexPatternSelect: (0, _components.createIndexPatternSelect)(savedObjectsClient),
        __LEGACY: {
          // For BWC we must temporarily export the class implementation of Field,
          // which is only used externally by the Index Pattern UI.
          FieldImpl: _fields.Field
        }
      };
    }
  }, {
    key: "start",
    value: function start() {// nothing to do here yet
    }
  }, {
    key: "stop",
    value: function stop() {// nothing to do here yet
    }
  }]);

  return IndexPatternsService;
}(); // static code

/** @public */
// types

/** @internal */


exports.IndexPatternsService = IndexPatternsService;