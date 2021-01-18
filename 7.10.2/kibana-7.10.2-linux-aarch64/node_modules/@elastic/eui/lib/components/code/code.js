"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCode = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _code_block = require("./_code_block");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiCode = function EuiCode(_ref) {
  var inline = _ref.inline,
      rest = _objectWithoutProperties(_ref, ["inline"]);

  return /*#__PURE__*/_react.default.createElement(_code_block.EuiCodeBlockImpl, _extends({
    inline: true
  }, rest));
};

exports.EuiCode = EuiCode;
EuiCode.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  inline: _propTypes.default.oneOf([true]),

  /**
     * Sets the syntax highlighting for a specific language
     * @see http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html#language-names-and-aliases
     * for options
     */
  language: _propTypes.default.string,
  transparentBackground: _propTypes.default.bool
};