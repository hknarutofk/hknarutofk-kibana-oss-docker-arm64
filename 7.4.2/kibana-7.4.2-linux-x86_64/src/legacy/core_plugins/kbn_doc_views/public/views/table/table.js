"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocViewTable = DocViewTable;

var _react = _interopRequireWildcard(require("react"));

var _table_row = require("./table_row");

var _table_helper = require("./table_helper");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var COLLAPSE_LINE_LENGTH = 350;

function DocViewTable(_ref) {
  var hit = _ref.hit,
      indexPattern = _ref.indexPattern,
      filter = _ref.filter,
      columns = _ref.columns,
      onAddColumn = _ref.onAddColumn,
      onRemoveColumn = _ref.onRemoveColumn;
  var mapping = indexPattern.fields.byName;
  var flattened = indexPattern.flattenHit(hit);
  var formatted = indexPattern.formatHit(hit, 'html');

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      fieldRowOpen = _useState2[0],
      setFieldRowOpen = _useState2[1];

  function toggleValueCollapse(field) {
    fieldRowOpen[field] = fieldRowOpen[field] !== true;
    setFieldRowOpen(_objectSpread({}, fieldRowOpen));
  }

  return _react.default.createElement("table", {
    className: "table table-condensed kbnDocViewerTable"
  }, _react.default.createElement("tbody", null, Object.keys(flattened).sort().map(function (field) {
    var valueRaw = flattened[field];
    var value = (0, _table_helper.trimAngularSpan)(String(formatted[field]));
    var isCollapsible = value.length > COLLAPSE_LINE_LENGTH;
    var isCollapsed = isCollapsible && !fieldRowOpen[field];
    var toggleColumn = onRemoveColumn && onAddColumn && Array.isArray(columns) ? function () {
      if (columns.includes(field)) {
        onRemoveColumn(field);
      } else {
        onAddColumn(field);
      }
    } : undefined;
    var isArrayOfObjects = Array.isArray(flattened[field]) && (0, _table_helper.arrayContainsObjects)(flattened[field]);
    var displayUnderscoreWarning = !mapping[field] && field.indexOf('_') === 0;
    var displayNoMappingWarning = !mapping[field] && !displayUnderscoreWarning && !isArrayOfObjects;
    return _react.default.createElement(_table_row.DocViewTableRow, {
      key: field,
      field: field,
      fieldMapping: mapping[field],
      displayUnderscoreWarning: displayUnderscoreWarning,
      displayNoMappingWarning: displayNoMappingWarning,
      isCollapsed: isCollapsed,
      isCollapsible: isCollapsible,
      isColumnActive: Array.isArray(columns) && columns.includes(field),
      onFilter: filter,
      onToggleCollapse: function onToggleCollapse() {
        return toggleValueCollapse(field);
      },
      onToggleColumn: toggleColumn,
      value: value,
      valueRaw: valueRaw
    });
  })));
}