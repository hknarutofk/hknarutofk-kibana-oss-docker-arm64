"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoDefaultIndexPattern = exports.NoDefinedIndexPatterns = exports.IndexPatternMissingIndices = exports.IndexPatternAlreadyExists = void 0;

var _errors = require("ui/errors");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * when a mapping already exists for a field the user is attempting to add
 * @param {String} name - the field name
 */
var IndexPatternAlreadyExists =
/*#__PURE__*/
function (_KbnError) {
  _inherits(IndexPatternAlreadyExists, _KbnError);

  function IndexPatternAlreadyExists(name) {
    _classCallCheck(this, IndexPatternAlreadyExists);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndexPatternAlreadyExists).call(this, "An index pattern of \"".concat(name, "\" already exists"), IndexPatternAlreadyExists));
  }

  return IndexPatternAlreadyExists;
}(_errors.KbnError);
/**
 * Tried to call a method that relies on SearchSource having an indexPattern assigned
 */


exports.IndexPatternAlreadyExists = IndexPatternAlreadyExists;

var IndexPatternMissingIndices =
/*#__PURE__*/
function (_KbnError2) {
  _inherits(IndexPatternMissingIndices, _KbnError2);

  function IndexPatternMissingIndices(message) {
    _classCallCheck(this, IndexPatternMissingIndices);

    var defaultMessage = "IndexPattern's configured pattern does not match any indices";
    return _possibleConstructorReturn(this, _getPrototypeOf(IndexPatternMissingIndices).call(this, message && message.length ? "No matching indices found: ".concat(message) : defaultMessage, IndexPatternMissingIndices));
  }

  return IndexPatternMissingIndices;
}(_errors.KbnError);
/**
 * Tried to call a method that relies on SearchSource having an indexPattern assigned
 */


exports.IndexPatternMissingIndices = IndexPatternMissingIndices;

var NoDefinedIndexPatterns =
/*#__PURE__*/
function (_KbnError3) {
  _inherits(NoDefinedIndexPatterns, _KbnError3);

  function NoDefinedIndexPatterns() {
    _classCallCheck(this, NoDefinedIndexPatterns);

    return _possibleConstructorReturn(this, _getPrototypeOf(NoDefinedIndexPatterns).call(this, 'Define at least one index pattern to continue', NoDefinedIndexPatterns));
  }

  return NoDefinedIndexPatterns;
}(_errors.KbnError);
/**
 * Tried to load a route besides management/kibana/index but you don't have a default index pattern!
 */


exports.NoDefinedIndexPatterns = NoDefinedIndexPatterns;

var NoDefaultIndexPattern =
/*#__PURE__*/
function (_KbnError4) {
  _inherits(NoDefaultIndexPattern, _KbnError4);

  function NoDefaultIndexPattern() {
    _classCallCheck(this, NoDefaultIndexPattern);

    return _possibleConstructorReturn(this, _getPrototypeOf(NoDefaultIndexPattern).call(this, 'Please specify a default index pattern', NoDefaultIndexPattern));
  }

  return NoDefaultIndexPattern;
}(_errors.KbnError);

exports.NoDefaultIndexPattern = NoDefaultIndexPattern;