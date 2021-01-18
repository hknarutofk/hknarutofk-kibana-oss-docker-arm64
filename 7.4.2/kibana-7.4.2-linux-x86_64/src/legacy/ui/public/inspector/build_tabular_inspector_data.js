"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildTabularInspectorData = buildTabularInspectorData;

var _lodash = require("lodash");

var _vis_filters = require("../vis/vis_filters");

var _adapters = require("./adapters");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * @deprecated
 *
 * Do not use this function.
 *
 * @todo This function is used only by Courier. Courier will
 *   soon be removed, and this function will be deleted, too. If Courier is not removed,
 *   move this function inside Courier.
 *
 * ---
 *
 * This function builds tabular data from the response and attaches it to the
 * inspector. It will only be called when the data view in the inspector is opened.
 */
function buildTabularInspectorData(_x, _x2) {
  return _buildTabularInspectorData.apply(this, arguments);
}

function _buildTabularInspectorData() {
  _buildTabularInspectorData = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(table, queryFilter) {
    var aggConfigs, rows, columns;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            aggConfigs = table.columns.map(function (column) {
              return column.aggConfig;
            });
            rows = table.rows.map(function (row) {
              return table.columns.reduce(function (prev, cur, colIndex) {
                var value = row[cur.id];
                var fieldFormatter = cur.aggConfig.fieldFormatter('text');
                prev["col-".concat(colIndex, "-").concat(cur.aggConfig.id)] = new _adapters.FormattedData(value, fieldFormatter(value));
                return prev;
              }, {});
            });
            columns = table.columns.map(function (col, colIndex) {
              var field = col.aggConfig.getField();
              var isCellContentFilterable = col.aggConfig.isFilterable() && (!field || field.filterable);
              return {
                name: col.name,
                field: "col-".concat(colIndex, "-").concat(col.aggConfig.id),
                filter: isCellContentFilterable && function (value) {
                  var rowIndex = rows.findIndex(function (row) {
                    return row["col-".concat(colIndex, "-").concat(col.aggConfig.id)].raw === value.raw;
                  });
                  var filter = (0, _vis_filters.createFilter)(aggConfigs, table, colIndex, rowIndex, value.raw);
                  queryFilter.addFilters(filter);
                },
                filterOut: isCellContentFilterable && function (value) {
                  var rowIndex = rows.findIndex(function (row) {
                    return row["col-".concat(colIndex, "-").concat(col.aggConfig.id)].raw === value.raw;
                  });
                  var filter = (0, _vis_filters.createFilter)(aggConfigs, table, colIndex, rowIndex, value.raw);
                  var notOther = value.raw !== '__other__';
                  var notMissing = value.raw !== '__missing__';

                  if (Array.isArray(filter)) {
                    filter.forEach(function (f) {
                      return (0, _lodash.set)(f, 'meta.negate', notOther && notMissing);
                    });
                  } else {
                    (0, _lodash.set)(filter, 'meta.negate', notOther && notMissing);
                  }

                  queryFilter.addFilters(filter);
                }
              };
            });
            return _context.abrupt("return", {
              columns: columns,
              rows: rows
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _buildTabularInspectorData.apply(this, arguments);
}