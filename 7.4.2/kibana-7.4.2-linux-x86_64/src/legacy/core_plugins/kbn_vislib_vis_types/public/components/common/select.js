"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOption = SelectOption;

var _react = _interopRequireDefault(require("react"));

var _eui = require("@elastic/eui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var emptyValue = {
  text: '',
  value: 'EMPTY_VALUE',
  disabled: true,
  hidden: true
};

function SelectOption(_ref) {
  var disabled = _ref.disabled,
      helpText = _ref.helpText,
      id = _ref.id,
      label = _ref.label,
      labelAppend = _ref.labelAppend,
      options = _ref.options,
      paramName = _ref.paramName,
      value = _ref.value,
      setValue = _ref.setValue;
  return _react.default.createElement(_eui.EuiFormRow, {
    compressed: true,
    fullWidth: true,
    helpText: helpText,
    id: id,
    label: label,
    labelAppend: labelAppend
  }, _react.default.createElement(_eui.EuiSelect, {
    disabled: disabled,
    options: [emptyValue].concat(_toConsumableArray(options)),
    value: value || emptyValue.value,
    onChange: function onChange(ev) {
      return setValue(paramName, ev.target.value);
    },
    fullWidth: true
  }));
}