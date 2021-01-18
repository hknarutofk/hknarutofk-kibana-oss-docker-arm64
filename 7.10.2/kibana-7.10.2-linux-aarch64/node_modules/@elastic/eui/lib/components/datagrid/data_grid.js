"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDataGrid = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tabbable = _interopRequireDefault(require("tabbable"));

var _i18n = require("../i18n");

var _data_grid_header_row = require("./data_grid_header_row");

var _button = require("../button");

var _services = require("../../services");

var _data_grid_body = require("./data_grid_body");

var _column_selector = require("./column_selector");

var _style_selector = require("./style_selector");

var _table_pagination = require("../table/table_pagination");

var _focus_trap = require("../focus_trap");

var _resize_observer = require("../observer/resize_observer");

var _data_grid_inmemory_renderer = require("./data_grid_inmemory_renderer");

var _data_grid_schema = require("./data_grid_schema");

var _column_sorting = require("./column_sorting");

var _mutation_observer = require("../observer/mutation_observer");

var _data_grid_context = require("./data_grid_context");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Used to short-circuit some async browser behaviour that is difficult to account for in tests
var IS_JEST_ENVIRONMENT = global.hasOwnProperty('_isJest'); // When below this number the grid only shows the full screen button

var MINIMUM_WIDTH_FOR_GRID_CONTROLS = 479;
// Each gridStyle object above sets a specific CSS select to .euiGrid
var fontSizesToClassMap = {
  s: 'euiDataGrid--fontSizeSmall',
  m: '',
  l: 'euiDataGrid--fontSizeLarge'
};
var headerToClassMap = {
  shade: 'euiDataGrid--headerShade',
  underline: 'euiDataGrid--headerUnderline'
};
var footerToClassMap = {
  shade: 'euiDataGrid--footerShade',
  overline: 'euiDataGrid--footerOverline',
  striped: ''
};
var rowHoverToClassMap = {
  highlight: 'euiDataGrid--rowHoverHighlight',
  none: ''
};
var bordersToClassMap = {
  all: 'euiDataGrid--bordersAll',
  horizontal: 'euiDataGrid--bordersHorizontal',
  none: 'euiDataGrid--bordersNone'
};
var cellPaddingsToClassMap = {
  s: 'euiDataGrid--paddingSmall',
  m: '',
  l: 'euiDataGrid--paddingLarge'
};

function computeVisibleRows(props) {
  var pagination = props.pagination,
      rowCount = props.rowCount;
  var startRow = pagination ? pagination.pageIndex * pagination.pageSize : 0;
  var endRow = pagination ? (pagination.pageIndex + 1) * pagination.pageSize : rowCount;
  endRow = Math.min(endRow, rowCount);
  return endRow - startRow;
}

function renderPagination(props, controls) {
  var pagination = props.pagination;

  if (pagination == null) {
    return null;
  }

  var pageIndex = pagination.pageIndex,
      pageSize = pagination.pageSize,
      pageSizeOptions = pagination.pageSizeOptions,
      onChangePage = pagination.onChangePage,
      onChangeItemsPerPage = pagination.onChangeItemsPerPage;
  var pageCount = Math.ceil(props.rowCount / pageSize);

  var minSizeOption = pageSizeOptions && _toConsumableArray(pageSizeOptions).sort(function (a, b) {
    return a - b;
  })[0];

  if (props.rowCount < (minSizeOption || pageSize)) {
    /**
     * Do not render the pagination when:
     * 1. Rows count is less than min pagination option (rows per page)
     * 2. Rows count is less than pageSize (the case when there are no pageSizeOptions provided)
     */
    return null;
  } // hide select rows per page if pageSizeOptions is undefined or an empty array


  var hidePerPageOptions = !pageSizeOptions || pageSizeOptions.length === 0;
  return /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiDataGrid.ariaLabelGridPagination",
    default: "Pagination for preceding grid: {label}",
    values: {
      label: props['aria-label']
    }
  }, function (ariaLabelGridPagination) {
    return /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
      token: "euiDataGrid.ariaLabelledByGridPagination",
      default: "Pagination for preceding grid"
    }, function (ariaLabelledByGridPagination) {
      var accessibleName = _objectSpread(_objectSpread({}, props['aria-label'] && {
        'aria-label': ariaLabelGridPagination
      }), props['aria-labelledby'] && {
        'aria-labelledby': ariaLabelledByGridPagination
      });

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "euiDataGrid__pagination"
      }, /*#__PURE__*/_react.default.createElement(_table_pagination.EuiTablePagination, _extends({
        "aria-controls": controls,
        activePage: pageIndex,
        hidePerPageOptions: hidePerPageOptions,
        itemsPerPage: pageSize,
        itemsPerPageOptions: pageSizeOptions,
        pageCount: pageCount,
        onChangePage: onChangePage,
        onChangeItemsPerPage: onChangeItemsPerPage
      }, accessibleName)));
    });
  });
}

function useDefaultColumnWidth(container, leadingControlColumns, trailingControlColumns, columns) {
  var containerSize = (0, _resize_observer.useResizeObserver)(container, 'width');
  var gridWidth = containerSize.width;
  var computeDefaultWidth = (0, _react.useCallback)(function () {
    if (IS_JEST_ENVIRONMENT) return 100;
    if (gridWidth === 0) return null; // we can't tell what size to compute yet

    var controlColumnWidths = [].concat(_toConsumableArray(leadingControlColumns), _toConsumableArray(trailingControlColumns)).reduce(function (claimedWidth, controlColumn) {
      return claimedWidth + controlColumn.width;
    }, 0);
    var columnsWithWidths = columns.filter(doesColumnHaveAnInitialWidth);
    var definedColumnsWidth = columnsWithWidths.reduce(function (claimedWidth, column) {
      return claimedWidth + column.initialWidth;
    }, 0);
    var claimedWidth = controlColumnWidths + definedColumnsWidth;
    var widthToFill = gridWidth - claimedWidth;
    var unsizedColumnCount = columns.length - columnsWithWidths.length;

    if (unsizedColumnCount === 0) {
      return 100;
    }

    return Math.max(widthToFill / unsizedColumnCount, 100);
  }, [gridWidth, columns, leadingControlColumns, trailingControlColumns]);

  var _useState = (0, _react.useState)(computeDefaultWidth),
      _useState2 = _slicedToArray(_useState, 2),
      defaultColumnWidth = _useState2[0],
      setDefaultColumnWidth = _useState2[1];

  (0, _react.useEffect)(function () {
    var columnWidth = computeDefaultWidth();
    setDefaultColumnWidth(columnWidth);
  }, [computeDefaultWidth]);
  return defaultColumnWidth;
}

function doesColumnHaveAnInitialWidth(column) {
  return column.hasOwnProperty('initialWidth');
}

function useColumnWidths(columns, onColumnResize) {
  var hasMounted = (0, _react.useRef)(false);
  var computeColumnWidths = (0, _react.useCallback)(function () {
    return columns.filter(doesColumnHaveAnInitialWidth).reduce(function (initialWidths, column) {
      initialWidths[column.id] = column.initialWidth;
      return initialWidths;
    }, {});
  }, [columns]);

  var _useState3 = (0, _react.useState)(computeColumnWidths),
      _useState4 = _slicedToArray(_useState3, 2),
      columnWidths = _useState4[0],
      setColumnWidths = _useState4[1];

  (0, _react.useEffect)(function () {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    setColumnWidths(computeColumnWidths());
  }, [computeColumnWidths]);

  var setColumnWidth = function setColumnWidth(columnId, width) {
    setColumnWidths(_objectSpread(_objectSpread({}, columnWidths), {}, _defineProperty({}, columnId, width)));

    if (onColumnResize) {
      onColumnResize({
        columnId: columnId,
        width: width
      });
    }
  };

  return [columnWidths, setColumnWidth];
}

function useOnResize(setHasRoomForGridControls, isFullScreen, minSizeForControls) {
  return (0, _react.useCallback)(function (_ref) {
    var width = _ref.width;
    setHasRoomForGridControls(width > minSizeForControls || isFullScreen);
  }, [setHasRoomForGridControls, isFullScreen, minSizeForControls]);
}

function useInMemoryValues(inMemory, rowCount) {
  /**
   * For performance, `onCellRender` below mutates the inMemoryValues object
   * instead of cloning. If this operation were done in a setState call
   * React would ignore the update as the object itself has not changed.
   * So, we keep a dual record: the in-memory values themselves and a "version" counter.
   * When the object is mutated, the version is incremented triggering a re-render, and
   * the returned `inMemoryValues` object is re-created (cloned) from the mutated version.
   * The version updates are batched, so only one clone happens per batch.
   **/
  var _inMemoryValues = (0, _react.useRef)({});

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      inMemoryValuesVersion = _useState6[0],
      setInMemoryValuesVersion = _useState6[1]; // eslint-disable-next-line react-hooks/exhaustive-deps


  var inMemoryValues = (0, _react.useMemo)(function () {
    return _objectSpread({}, _inMemoryValues.current);
  }, [inMemoryValuesVersion]);
  var onCellRender = (0, _react.useCallback)(function (rowIndex, columnId, value) {
    var nextInMemoryValues = _inMemoryValues.current;
    nextInMemoryValues[rowIndex] = nextInMemoryValues[rowIndex] || {};
    nextInMemoryValues[rowIndex][columnId] = value;
    setInMemoryValuesVersion(function (version) {
      return version + 1;
    });
  }, []); // if `inMemory.level` or `rowCount` changes reset the values

  var inMemoryLevel = inMemory && inMemory.level;
  var resetRunCount = (0, _react.useRef)(0);
  (0, _react.useEffect)(function () {
    if (resetRunCount.current++ > 0) {
      // this has to delete "overflow" keys from the object instead of resetting to an empty one,
      // as the internal inmemoryrenderer component's useEffect which sets the values
      // executes before this outer, wrapping useEffect
      var existingRowKeyCount = Object.keys(_inMemoryValues.current).length;

      for (var i = rowCount; i < existingRowKeyCount; i++) {
        delete _inMemoryValues.current[i];
      }

      setInMemoryValuesVersion(function (version) {
        return version + 1;
      });
    }
  }, [inMemoryLevel, rowCount]);
  return [inMemoryValues, onCellRender];
}

function createKeyDownHandler(props, visibleColumns, leadingControlColumns, trailingControlColumns, focusedCell, headerIsInteractive, setFocusedCell, updateFocus) {
  return function (event) {
    if (focusedCell == null) return;
    var colCount = visibleColumns.length + leadingControlColumns.length + trailingControlColumns.length - 1;

    var _focusedCell = _slicedToArray(focusedCell, 2),
        x = _focusedCell[0],
        y = _focusedCell[1];

    var rowCount = computeVisibleRows(props);
    var key = event.key,
        ctrlKey = event.ctrlKey;

    if (key === _services.keys.ARROW_DOWN) {
      event.preventDefault();

      if (props.renderFooterCellValue ? y < rowCount : y < rowCount - 1) {
        setFocusedCell([x, y + 1]);
      }
    } else if (key === _services.keys.ARROW_LEFT) {
      event.preventDefault();

      if (x > 0) {
        setFocusedCell([x - 1, y]);
      }
    } else if (key === _services.keys.ARROW_UP) {
      event.preventDefault();
      var minimumIndex = headerIsInteractive ? -1 : 0;

      if (y > minimumIndex) {
        setFocusedCell([x, y - 1]);
      }
    } else if (key === _services.keys.ARROW_RIGHT) {
      event.preventDefault();

      if (x < colCount) {
        setFocusedCell([x + 1, y]);
      }
    } else if (key === _services.keys.PAGE_DOWN) {
      if (props.pagination) {
        event.preventDefault();
        var _rowCount = props.rowCount;
        var pageIndex = props.pagination.pageIndex;
        var pageSize = props.pagination.pageSize;
        var pageCount = Math.ceil(_rowCount / pageSize);

        if (pageIndex < pageCount - 1) {
          props.pagination.onChangePage(pageIndex + 1);
        }

        setFocusedCell([focusedCell[0], 0]);
        updateFocus();
      }
    } else if (key === _services.keys.PAGE_UP) {
      if (props.pagination) {
        event.preventDefault();
        var _pageIndex = props.pagination.pageIndex;

        if (_pageIndex > 0) {
          props.pagination.onChangePage(_pageIndex - 1);
        }

        setFocusedCell([focusedCell[0], props.pagination.pageSize - 1]);
        updateFocus();
      }
    } else if (key === (ctrlKey && _services.keys.END)) {
      event.preventDefault();
      setFocusedCell([colCount, rowCount - 1]);
    } else if (key === (ctrlKey && _services.keys.HOME)) {
      event.preventDefault();
      setFocusedCell([0, 0]);
    } else if (key === _services.keys.END) {
      event.preventDefault();
      setFocusedCell([colCount, y]);
    } else if (key === _services.keys.HOME) {
      event.preventDefault();
      setFocusedCell([0, y]);
    }
  };
}

function useAfterRender(fn) {
  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isSubscribed = _useState8[0],
      setIsSubscribed = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      needsExecution = _useState10[0],
      setNeedsExecution = _useState10[1]; // first useEffect waits for the parent & children to render & flush to dom


  (0, _react.useEffect)(function () {
    if (isSubscribed) {
      setIsSubscribed(false);
      setNeedsExecution(true);
    }
  }, [isSubscribed, setIsSubscribed, setNeedsExecution]); // second useEffect allows for a new `fn` to have been created
  // with any state updates before being called

  (0, _react.useEffect)(function () {
    if (needsExecution) {
      setNeedsExecution(false);
      fn();
    }
  }, [needsExecution, setNeedsExecution, fn]);
  return function () {
    setIsSubscribed(true);
  };
}

var useFocus = function useFocus(headerIsInteractive) {
  var _useState11 = (0, _react.useState)(undefined),
      _useState12 = _slicedToArray(_useState11, 2),
      focusedCell = _useState12[0],
      setFocusedCell = _useState12[1];

  var hasHadFocus = (0, _react.useMemo)(function () {
    return focusedCell != null;
  }, [focusedCell]);
  var focusProps = (0, _react.useMemo)(function () {
    return hasHadFocus ? {
      // FireFox allows tabbing to a div that is scrollable, while Chrome does not
      tabIndex: -1
    } : {
      tabIndex: 0,
      onFocus: function onFocus(e) {
        // if e.target (the source element of the `focus event`
        // matches e.currentTarget (always the div with this onFocus listener)
        // then the user has focused directly on the data grid wrapper (almost definitely by tabbing)
        // so shift focus to the first interactive cell within the grid
        if (e.target === e.currentTarget) {
          setFocusedCell(headerIsInteractive ? [0, -1] : [0, 0]);
        }
      }
    };
  }, [hasHadFocus, setFocusedCell, headerIsInteractive]);
  return [focusProps, focusedCell, setFocusedCell];
}; // Typeguards to see if toolbarVisibility has a certain boolean property assigned
// If not, just set it to true and assume it's OK to show


function objectHasKey(object, key) {
  return object.hasOwnProperty(key);
}

function checkOrDefaultToolBarDiplayOptions(arg, option) {
  if (arg === undefined) {
    return true;
  } else if (typeof arg === 'boolean') {
    return arg;
  } else if (objectHasKey(arg, option)) {
    return arg[option];
  } else {
    return true;
  }
}

var emptyArrayDefault = [];

var EuiDataGrid = function EuiDataGrid(props) {
  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isFullScreen = _useState14[0],
      setIsFullScreen = _useState14[1];

  var _useState15 = (0, _react.useState)(true),
      _useState16 = _slicedToArray(_useState15, 2),
      hasRoomForGridControls = _useState16[0],
      setHasRoomForGridControls = _useState16[1];

  var _useState17 = (0, _react.useState)(null),
      _useState18 = _slicedToArray(_useState17, 2),
      containerRef = _useState18[0],
      _setContainerRef = _useState18[1];

  var _useState19 = (0, _react.useState)((0, _services.htmlIdGenerator)()()),
      _useState20 = _slicedToArray(_useState19, 1),
      interactiveCellId = _useState20[0];

  var _useState21 = (0, _react.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      headerIsInteractive = _useState22[0],
      setHeaderIsInteractive = _useState22[1];

  var setContainerRef = (0, _react.useCallback)(function (ref) {
    return _setContainerRef(ref);
  }, []);

  var _useFocus = useFocus(headerIsInteractive),
      _useFocus2 = _slicedToArray(_useFocus, 3),
      wrappingDivFocusProps = _useFocus2[0],
      focusedCell = _useFocus2[1],
      setFocusedCell = _useFocus2[2];

  var handleHeaderChange = (0, _react.useCallback)(function (headerRow) {
    var tabbables = (0, _tabbable.default)(headerRow);
    var managed = headerRow.querySelectorAll('[data-euigrid-tab-managed]');
    var hasInteractives = tabbables.length > 0 || managed.length > 0;

    if (hasInteractives !== headerIsInteractive) {
      setHeaderIsInteractive(hasInteractives); // if the focus is on the header, and the header is no longer interactive
      // move the focus down to the first row

      if (hasInteractives === false && focusedCell && focusedCell[1] === -1) {
        setFocusedCell([focusedCell[0], 0]);
      }
    }
  }, [headerIsInteractive, setHeaderIsInteractive, focusedCell, setFocusedCell]);
  var handleHeaderMutation = (0, _react.useCallback)(function (records) {
    var _records = _slicedToArray(records, 1),
        target = _records[0].target; // find the wrapping header div


    var headerRow = target.parentElement;

    while (headerRow && (headerRow.getAttribute('data-test-subj') || '').split(/\s+/).indexOf('dataGridHeader') === -1) {
      headerRow = headerRow.parentElement;
    }

    if (headerRow) handleHeaderChange(headerRow);
  }, [handleHeaderChange]);

  var handleGridKeyDown = function handleGridKeyDown(event) {
    switch (event.key) {
      case _services.keys.ESCAPE:
        if (isFullScreen) {
          event.preventDefault();
          setIsFullScreen(false);
        }

        break;
    }
  };

  var _props$leadingControl = props.leadingControlColumns,
      leadingControlColumns = _props$leadingControl === void 0 ? emptyArrayDefault : _props$leadingControl,
      _props$trailingContro = props.trailingControlColumns,
      trailingControlColumns = _props$trailingContro === void 0 ? emptyArrayDefault : _props$trailingContro,
      columns = props.columns,
      columnVisibility = props.columnVisibility,
      schemaDetectors = props.schemaDetectors,
      rowCount = props.rowCount,
      renderCellValue = props.renderCellValue,
      renderFooterCellValue = props.renderFooterCellValue,
      className = props.className,
      gridStyle = props.gridStyle,
      _props$toolbarVisibil = props.toolbarVisibility,
      toolbarVisibility = _props$toolbarVisibil === void 0 ? true : _props$toolbarVisibil,
      pagination = props.pagination,
      sorting = props.sorting,
      inMemory = props.inMemory,
      popoverContents = props.popoverContents,
      onColumnResize = props.onColumnResize,
      _props$minSizeForCont = props.minSizeForControls,
      minSizeForControls = _props$minSizeForCont === void 0 ? MINIMUM_WIDTH_FOR_GRID_CONTROLS : _props$minSizeForCont,
      rest = _objectWithoutProperties(props, ["leadingControlColumns", "trailingControlColumns", "columns", "columnVisibility", "schemaDetectors", "rowCount", "renderCellValue", "renderFooterCellValue", "className", "gridStyle", "toolbarVisibility", "pagination", "sorting", "inMemory", "popoverContents", "onColumnResize", "minSizeForControls"]); // enables/disables grid controls based on available width


  var onResize = useOnResize(function (nextHasRoomForGridControls) {
    if (nextHasRoomForGridControls !== hasRoomForGridControls) {
      setHasRoomForGridControls(nextHasRoomForGridControls);
    }
  }, isFullScreen, minSizeForControls);

  var _useColumnWidths = useColumnWidths(columns, onColumnResize),
      _useColumnWidths2 = _slicedToArray(_useColumnWidths, 2),
      columnWidths = _useColumnWidths2[0],
      setColumnWidth = _useColumnWidths2[1]; // apply style props on top of defaults


  var gridStyleWithDefaults = _objectSpread(_objectSpread({}, _style_selector.startingStyles), gridStyle);

  var _useInMemoryValues = useInMemoryValues(inMemory, rowCount),
      _useInMemoryValues2 = _slicedToArray(_useInMemoryValues, 2),
      inMemoryValues = _useInMemoryValues2[0],
      onCellRender = _useInMemoryValues2[1];

  var definedColumnSchemas = (0, _react.useMemo)(function () {
    return columns.reduce(function (definedColumnSchemas, _ref2) {
      var id = _ref2.id,
          schema = _ref2.schema;

      if (schema != null) {
        definedColumnSchemas[id] = schema;
      }

      return definedColumnSchemas;
    }, {});
  }, [columns]);
  var allSchemaDetectors = (0, _react.useMemo)(function () {
    return [].concat(_toConsumableArray(_data_grid_schema.schemaDetectors), _toConsumableArray(schemaDetectors || []));
  }, [schemaDetectors]);
  var detectedSchema = (0, _data_grid_schema.useDetectSchema)(inMemory, inMemoryValues, allSchemaDetectors, definedColumnSchemas, inMemory != null);
  var mergedSchema = (0, _data_grid_schema.useMergedSchema)(detectedSchema, columns);
  var displayValues = columns.reduce(function (acc, column) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, column.id, column.displayAsText || column.id));
  }, {});

  var _useColumnSelector = (0, _column_selector.useColumnSelector)(columns, columnVisibility, checkOrDefaultToolBarDiplayOptions(toolbarVisibility, 'showColumnSelector'), displayValues),
      _useColumnSelector2 = _slicedToArray(_useColumnSelector, 4),
      columnSelector = _useColumnSelector2[0],
      orderedVisibleColumns = _useColumnSelector2[1],
      setVisibleColumns = _useColumnSelector2[2],
      switchColumnPos = _useColumnSelector2[3];

  var columnSorting = (0, _column_sorting.useColumnSorting)(orderedVisibleColumns, sorting, mergedSchema, allSchemaDetectors, displayValues);

  var _useStyleSelector = (0, _style_selector.useStyleSelector)(gridStyleWithDefaults),
      _useStyleSelector2 = _slicedToArray(_useStyleSelector, 2),
      styleSelector = _useStyleSelector2[0],
      gridStyles = _useStyleSelector2[1]; // compute the default column width from the container's clientWidth and count of visible columns


  var defaultColumnWidth = useDefaultColumnWidth(containerRef, leadingControlColumns, trailingControlColumns, orderedVisibleColumns);

  var _useState23 = (0, _react.useState)(null),
      _useState24 = _slicedToArray(_useState23, 2),
      contentRef = _useState24[0],
      setContentRef = _useState24[1];

  (0, _react.useEffect)(function () {
    if (contentRef) {
      var headerElement = contentRef.querySelector('[data-test-subj~=dataGridHeader]');

      if (headerElement) {
        handleHeaderChange(headerElement);
      }
    }
  }, [contentRef, handleHeaderChange]); // Because of a weird Chrome bug with position:sticky css items and focus, we force scrolling to the top
  // if the item is in the first row. This prevents the cell from ever being under the sticky header.

  (0, _react.useEffect)(function () {
    if (focusedCell !== undefined && focusedCell[1] === 0) {
      if (contentRef != null) {
        contentRef.scrollTop = 0;
      }
    }
  }, [focusedCell, contentRef]);
  var classes = (0, _classnames.default)('euiDataGrid', fontSizesToClassMap[gridStyles.fontSize], bordersToClassMap[gridStyles.border], headerToClassMap[gridStyles.header], footerToClassMap[gridStyles.footer], rowHoverToClassMap[gridStyles.rowHover], cellPaddingsToClassMap[gridStyles.cellPadding], {
    'euiDataGrid--stripes': gridStyles.stripes
  }, {
    'euiDataGrid--stickyFooter': gridStyles.footer && gridStyles.stickyFooter
  }, {
    'euiDataGrid--fullScreen': isFullScreen
  }, {
    'euiDataGrid--noControls': !toolbarVisibility
  }, className);
  var controlBtnClasses = (0, _classnames.default)('euiDataGrid__controlBtn', {
    'euiDataGrid__controlBtn--active': isFullScreen
  }, className); // By default the toolbar appears

  var showToolbar = !!toolbarVisibility; // These grid controls will only show when there is room. Check the resize observer callback
  // They can also be optionally turned off individually by using toolbarVisibility

  var gridControls = /*#__PURE__*/_react.default.createElement(_react.Fragment, null, checkOrDefaultToolBarDiplayOptions(toolbarVisibility, 'additionalControls') && typeof toolbarVisibility !== 'boolean' ? toolbarVisibility.additionalControls : null, checkOrDefaultToolBarDiplayOptions(toolbarVisibility, 'showColumnSelector') ? columnSelector : null, checkOrDefaultToolBarDiplayOptions(toolbarVisibility, 'showStyleSelector') ? styleSelector : null, checkOrDefaultToolBarDiplayOptions(toolbarVisibility, 'showSortSelector') ? columnSorting : null); // When data grid is full screen, we add a class to the body to remove the extra scrollbar


  if (isFullScreen) {
    document.body.classList.add('euiDataGrid__restrictBody');
  } else {
    document.body.classList.remove('euiDataGrid__restrictBody');
  }

  var fullScreenSelector = /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    tokens: ['euiDataGrid.fullScreenButton', 'euiDataGrid.fullScreenButtonActive'],
    defaults: ['Full screen', 'Exit full screen']
  }, function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        fullScreenButton = _ref4[0],
        fullScreenButtonActive = _ref4[1];

    return /*#__PURE__*/_react.default.createElement(_button.EuiButtonEmpty, {
      size: "xs",
      iconType: "fullScreen",
      color: "text",
      className: controlBtnClasses,
      "data-test-subj": "dataGridFullScrenButton",
      onClick: function onClick() {
        return setIsFullScreen(!isFullScreen);
      }
    }, isFullScreen ? fullScreenButtonActive : fullScreenButton);
  });

  var cellsUpdateFocus = (0, _react.useRef)(new Map());
  var focusAfterRender = useAfterRender(function () {
    if (focusedCell) {
      var _key = "".concat(focusedCell[0], "-").concat(focusedCell[1]);

      if (cellsUpdateFocus.current.has(_key)) {
        cellsUpdateFocus.current.get(_key)();
      }
    }
  });
  var datagridContext = (0, _react.useMemo)(function () {
    return {
      onFocusUpdate: function onFocusUpdate(cell, updateFocus) {
        var key = "".concat(cell[0], "-").concat(cell[1]);
        cellsUpdateFocus.current.set(key, updateFocus);
        return function () {
          cellsUpdateFocus.current.delete(key);
        };
      }
    };
  }, []);
  var gridIds = (0, _services.htmlIdGenerator)();
  var gridId = gridIds();
  var ariaLabelledById = gridIds();
  var commonGridProps = {
    columns: orderedVisibleColumns,
    columnWidths: columnWidths,
    defaultColumnWidth: defaultColumnWidth,
    focusedCell: focusedCell,
    leadingControlColumns: leadingControlColumns,
    onCellFocus: setFocusedCell,
    schema: mergedSchema,
    sorting: sorting,
    trailingControlColumns: trailingControlColumns
  };
  return /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiDataGrid.ariaLabel",
    default: "{label}; Page {page} of {pageCount}.",
    values: {
      label: rest['aria-label'],
      page: pagination ? pagination.pageIndex + 1 : 0,
      pageCount: pagination ? Math.ceil(props.rowCount / pagination.pageSize) : 0
    }
  }, function (ariaLabel) {
    return /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
      token: "euiDataGrid.ariaLabelledBy",
      default: "Page {page} of {pageCount}.",
      values: {
        page: pagination ? pagination.pageIndex + 1 : 0,
        pageCount: pagination ? Math.ceil(props.rowCount / pagination.pageSize) : 0
      }
    }, function (ariaLabelledBy) {
      // extract aria-label and/or aria-labelledby from `rest`
      var gridAriaProps = {};

      if ('aria-label' in rest) {
        gridAriaProps['aria-label'] = pagination ? ariaLabel : rest['aria-label'];
        delete rest['aria-label'];
      }

      if ('aria-labelledby' in rest) {
        gridAriaProps['aria-labelledby'] = "".concat(rest['aria-labelledby'], " ").concat(pagination ? ariaLabelledById : '');
        delete rest['aria-labelledby'];
      }

      return /*#__PURE__*/_react.default.createElement(_data_grid_context.DataGridContext.Provider, {
        value: datagridContext
      }, /*#__PURE__*/_react.default.createElement(_focus_trap.EuiFocusTrap, {
        disabled: !isFullScreen,
        className: "euiDataGrid__focusWrap"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classes,
        onKeyDown: handleGridKeyDown,
        ref: setContainerRef
      }, (IS_JEST_ENVIRONMENT || defaultColumnWidth) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showToolbar ? /*#__PURE__*/_react.default.createElement("div", {
        className: "euiDataGrid__controls",
        "data-test-sub": "dataGridControls"
      }, hasRoomForGridControls ? gridControls : null, checkOrDefaultToolBarDiplayOptions(toolbarVisibility, 'showFullScreenSelector') ? fullScreenSelector : null) : null, /*#__PURE__*/_react.default.createElement(_resize_observer.EuiResizeObserver, {
        onResize: onResize
      }, function (resizeRef) {
        return /*#__PURE__*/_react.default.createElement("div", _extends({
          onKeyDown: createKeyDownHandler(props, orderedVisibleColumns, leadingControlColumns, trailingControlColumns, focusedCell, headerIsInteractive, setFocusedCell, focusAfterRender),
          className: "euiDataGrid__verticalScroll",
          ref: resizeRef
        }, rest), /*#__PURE__*/_react.default.createElement("div", {
          className: "euiDataGrid__overflow"
        }, inMemory ? /*#__PURE__*/_react.default.createElement(_data_grid_inmemory_renderer.EuiDataGridInMemoryRenderer, {
          inMemory: inMemory,
          renderCellValue: renderCellValue,
          columns: columns,
          rowCount: inMemory.level === 'enhancements' ? // if `inMemory.level === enhancements` then we can only be sure the pagination's pageSize is available in memory
          (pagination === null || pagination === void 0 ? void 0 : pagination.pageSize) || rowCount : // otherwise, all of the data is present and usable
          rowCount,
          onCellRender: onCellRender
        }) : null, /*#__PURE__*/_react.default.createElement("div", _extends({
          ref: setContentRef,
          "data-test-subj": "dataGridWrapper",
          className: "euiDataGrid__content",
          role: "grid",
          id: gridId
        }, wrappingDivFocusProps, gridAriaProps), /*#__PURE__*/_react.default.createElement(_mutation_observer.EuiMutationObserver, {
          observerOptions: {
            subtree: true,
            childList: true
          },
          onMutation: handleHeaderMutation
        }, function (ref) {
          return /*#__PURE__*/_react.default.createElement(_data_grid_header_row.EuiDataGridHeaderRow, _extends({
            ref: ref
          }, commonGridProps, {
            setColumnWidth: setColumnWidth,
            setVisibleColumns: setVisibleColumns,
            switchColumnPos: switchColumnPos,
            schema: mergedSchema,
            sorting: sorting,
            headerIsInteractive: headerIsInteractive
          }));
        }), /*#__PURE__*/_react.default.createElement(_data_grid_body.EuiDataGridBody, _extends({}, commonGridProps, {
          inMemoryValues: inMemoryValues,
          inMemory: inMemory,
          schemaDetectors: allSchemaDetectors,
          popoverContents: popoverContents,
          pagination: pagination,
          renderCellValue: renderCellValue,
          renderFooterCellValue: renderFooterCellValue,
          rowCount: rowCount,
          interactiveCellId: interactiveCellId
        })))));
      }), props.pagination && props['aria-labelledby'] && /*#__PURE__*/_react.default.createElement("p", {
        id: ariaLabelledBy,
        hidden: true
      }, ariaLabelledBy), renderPagination(props, gridId), /*#__PURE__*/_react.default.createElement("p", {
        id: interactiveCellId,
        hidden: true
      }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiDataGrid.screenReaderNotice",
        default: "Cell contains interactive content."
      }))))));
    });
  });
};

exports.EuiDataGrid = EuiDataGrid;
EuiDataGrid.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * An array of #EuiDataGridControlColumn objects. Used to define ancillary columns on the left side of the data grid.
       */
  leadingControlColumns: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
       * Used as the React `key` when rendering content
       */
    id: _propTypes.default.string.isRequired,

    /**
       * Component to render in the column header
       */
    headerCellRender: _propTypes.default.elementType.isRequired,

    /**
       * Component to render for each row in the column
       */
    rowCellRender: _propTypes.default.oneOfType([_propTypes.default.func.isRequired, _propTypes.default.func.isRequired]).isRequired,

    /**
       * Width of the column, uses are unable to change this
       */
    width: _propTypes.default.number.isRequired
  }).isRequired),

  /**
       * An array of #EuiDataGridControlColumn objects. Used to define ancillary columns on the right side of the data grid.
       */
  trailingControlColumns: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    headerCellRender: _propTypes.default.elementType.isRequired,
    rowCellRender: _propTypes.default.oneOfType([_propTypes.default.func.isRequired, _propTypes.default.func.isRequired]).isRequired,
    width: _propTypes.default.number.isRequired
  }).isRequired),

  /**
       * An array of #EuiDataGridColumn objects. Lists the columns available and the schema and settings tied to it.
       */
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
       * The unique identifier for this column
       */
    id: _propTypes.default.string.isRequired,

    /**
       * A `ReactNode` used when rendering the column header. When providing complicated content, please make sure to utilize CSS to respect truncation as space allows. Check the docs example.
       */
    display: _propTypes.default.node,

    /**
       * A Schema to use for the column. Built-in values are ['boolean', 'currency', 'datetime', 'numeric', 'json'] but can be expanded by defining your own #EuiDataGrid `schemaDetectors` (for in-memory detection). In general, it is advised to pass in a value here when you are sure of the schema ahead of time, so that you don't need to rely on the automatic detection.
       */
    schema: _propTypes.default.string,

    /**
       * Defaults to true. Defines whether or not the column's cells can be expanded with a popup onClick / keydown.
       */
    isExpandable: _propTypes.default.bool,

    /**
       * Whether this column's width can be changed by the user, defaults to true
       */
    isResizable: _propTypes.default.bool,

    /**
       * Initial width (in pixels) of the column
       */
    initialWidth: _propTypes.default.number,

    /**
       * Whether this column is sortable
       */
    isSortable: _propTypes.default.bool,

    /**
       * Default sort direction of the column
       */
    defaultSortDirection: _propTypes.default.oneOf(["asc", "desc"]),

    /**
       * Display name as text for column. This can be used to display column name in column selector and column sorting where `display` won't be used. If not used `id` will be shown as column name in column selector and column sorting.
       */
    displayAsText: _propTypes.default.string,

    /**
       * Configuration of column actions. Set to false to disable or use #EuiDataGridColumnActions to configure the actions displayed in the header cell of the column.
       */
    actions: _propTypes.default.oneOfType([_propTypes.default.oneOf([false]), _propTypes.default.shape({
      /**
         * Show/hide/configure the action to hide a column, provided EuiListGroupItemProps are merged
         */
      showHide: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
        className: _propTypes.default.string,
        "aria-label": _propTypes.default.string,
        "data-test-subj": _propTypes.default.string,

        /**
             * Size of the label text
             */
        size: _propTypes.default.oneOf(["xs", "s", "m", "l"]),

        /**
             * By default the item will inherit the color of its wrapper (button/link/span),
             * otherwise pass one of the acceptable options
             */
        color: _propTypes.default.oneOf(["inherit", "primary", "text", "subdued", "ghost"]),

        /**
             * Content to be displayed in the list item
             */
        label: _propTypes.default.node.isRequired,

        /**
             * Apply styles indicating an item is active
             */
        isActive: _propTypes.default.bool,

        /**
             * Apply styles indicating an item is disabled
             */
        isDisabled: _propTypes.default.bool,

        /**
             * Make the list item label a link.
             * While permitted, `href` and `onClick` should not be used together in most cases and may create problems.
             */
        href: _propTypes.default.string,
        target: _propTypes.default.string,
        rel: _propTypes.default.string,

        /**
             * Adds `EuiIcon` of `EuiIcon.type`
             */
        iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuLeft", "menuRight", "merge", "metricbeatApp", "metricsApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),

        /**
             * Custom node to pass as the icon. Cannot be used in conjunction
             * with `iconType`.
             */
        icon: _propTypes.default.element,

        /**
             * Display tooltip on list item
             */
        showToolTip: _propTypes.default.bool,

        /**
             * Adds an `EuiButtonIcon` to the right side of the item; `iconType` is required;
             * pass `alwaysShow` if you don't want the default behavior of only showing on hover
             */
        extraAction: _propTypes.default.shape({
          type: _propTypes.default.oneOf(["submit", "reset", "button"]),
          onClick: _propTypes.default.func,
          iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuLeft", "menuRight", "merge", "metricbeatApp", "metricsApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),
          color: _propTypes.default.oneOf(["accent", "danger", "disabled", "ghost", "primary", "subdued", "success", "text", "warning"]),
          "aria-label": _propTypes.default.string,
          "aria-labelledby": _propTypes.default.string,
          isDisabled: _propTypes.default.bool,
          size: _propTypes.default.oneOf(["s", "m"]),
          iconSize: _propTypes.default.oneOf(["original", "s", "m", "l", "xl", "xxl"]),
          className: _propTypes.default.string,
          "data-test-subj": _propTypes.default.string,
          buttonRef: _propTypes.default.any,
          alwaysShow: _propTypes.default.bool
        }),

        /**
             * Make the list item label a button.
             * While permitted, `href` and `onClick` should not be used together in most cases and may create problems.
             */
        onClick: _propTypes.default.func,

        /**
             * Allow link text to wrap
             */
        wrapText: _propTypes.default.bool,

        /**
             * Pass-through ref reference specifically for targeting
             * instances where the item content is rendered as a `button`
             */
        buttonRef: _propTypes.default.any
      }).isRequired]),

      /**
         * Show/hide/configure the action that switches the actual column with the column to the left side, provided EuiListGroupItemProps are merged
         */
      showMoveLeft: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
        className: _propTypes.default.string,
        "aria-label": _propTypes.default.string,
        "data-test-subj": _propTypes.default.string,
        size: _propTypes.default.oneOf(["xs", "s", "m", "l"]),
        color: _propTypes.default.oneOf(["inherit", "primary", "text", "subdued", "ghost"]),
        label: _propTypes.default.node.isRequired,
        isActive: _propTypes.default.bool,
        isDisabled: _propTypes.default.bool,
        href: _propTypes.default.string,
        target: _propTypes.default.string,
        rel: _propTypes.default.string,
        iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuLeft", "menuRight", "merge", "metricbeatApp", "metricsApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),
        icon: _propTypes.default.element,
        showToolTip: _propTypes.default.bool,
        extraAction: _propTypes.default.shape({
          type: _propTypes.default.oneOf(["submit", "reset", "button"]),
          onClick: _propTypes.default.func,
          iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuLeft", "menuRight", "merge", "metricbeatApp", "metricsApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),
          color: _propTypes.default.oneOf(["accent", "danger", "disabled", "ghost", "primary", "subdued", "success", "text", "warning"]),
          "aria-label": _propTypes.default.string,
          "aria-labelledby": _propTypes.default.string,
          isDisabled: _propTypes.default.bool,
          size: _propTypes.default.oneOf(["s", "m"]),
          iconSize: _propTypes.default.oneOf(["original", "s", "m", "l", "xl", "xxl"]),
          className: _propTypes.default.string,
          "data-test-subj": _propTypes.default.string,
          buttonRef: _propTypes.default.any,
          alwaysShow: _propTypes.default.bool
        }),
        onClick: _propTypes.default.func,
        wrapText: _propTypes.default.bool,
        buttonRef: _propTypes.default.any
      }).isRequired]),

      /**
         * Show/hide/configure the action that switches the actual column with the column to the right side, provided EuiListGroupItemProps are merged
         */
      showMoveRight: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
        className: _propTypes.default.string,
        "aria-label": _propTypes.default.string,
        "data-test-subj": _propTypes.default.string,
        size: _propTypes.default.oneOf(["xs", "s", "m", "l"]),
        color: _propTypes.default.oneOf(["inherit", "primary", "text", "subdued", "ghost"]),
        label: _propTypes.default.node.isRequired,
        isActive: _propTypes.default.bool,
        isDisabled: _propTypes.default.bool,
        href: _propTypes.default.string,
        target: _propTypes.default.string,
        rel: _propTypes.default.string,
        iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuLeft", "menuRight", "merge", "metricbeatApp", "metricsApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),
        icon: _propTypes.default.element,
        showToolTip: _propTypes.default.bool,
        extraAction: _propTypes.default.shape({
          type: _propTypes.default.oneOf(["submit", "reset", "button"]),
          onClick: _propTypes.default.func,
          iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuLeft", "menuRight", "merge", "metricbeatApp", "metricsApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),
          color: _propTypes.default.oneOf(["accent", "danger", "disabled", "ghost", "primary", "subdued", "success", "text", "warning"]),
          "aria-label": _propTypes.default.string,
          "aria-labelledby": _propTypes.default.string,
          isDisabled: _propTypes.default.bool,
          size: _propTypes.default.oneOf(["s", "m"]),
          iconSize: _propTypes.default.oneOf(["original", "s", "m", "l", "xl", "xxl"]),
          className: _propTypes.default.string,
          "data-test-subj": _propTypes.default.string,
          buttonRef: _propTypes.default.any,
          alwaysShow: _propTypes.default.bool
        }),
        onClick: _propTypes.default.func,
        wrapText: _propTypes.default.bool,
        buttonRef: _propTypes.default.any
      }).isRequired]),

      /**
         * Show/hide/configure the action to sort ascending by the actual column, provided EuiListGroupItemProps are merged
         */
      showSortAsc: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
        className: _propTypes.default.string,
        "aria-label": _propTypes.default.string,
        "data-test-subj": _propTypes.default.string,
        size: _propTypes.default.oneOf(["xs", "s", "m", "l"]),
        color: _propTypes.default.oneOf(["inherit", "primary", "text", "subdued", "ghost"]),
        label: _propTypes.default.node.isRequired,
        isActive: _propTypes.default.bool,
        isDisabled: _propTypes.default.bool,
        href: _propTypes.default.string,
        target: _propTypes.default.string,
        rel: _propTypes.default.string,
        iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuLeft", "menuRight", "merge", "metricbeatApp", "metricsApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),
        icon: _propTypes.default.element,
        showToolTip: _propTypes.default.bool,
        extraAction: _propTypes.default.shape({
          type: _propTypes.default.oneOf(["submit", "reset", "button"]),
          onClick: _propTypes.default.func,
          iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuLeft", "menuRight", "merge", "metricbeatApp", "metricsApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),
          color: _propTypes.default.oneOf(["accent", "danger", "disabled", "ghost", "primary", "subdued", "success", "text", "warning"]),
          "aria-label": _propTypes.default.string,
          "aria-labelledby": _propTypes.default.string,
          isDisabled: _propTypes.default.bool,
          size: _propTypes.default.oneOf(["s", "m"]),
          iconSize: _propTypes.default.oneOf(["original", "s", "m", "l", "xl", "xxl"]),
          className: _propTypes.default.string,
          "data-test-subj": _propTypes.default.string,
          buttonRef: _propTypes.default.any,
          alwaysShow: _propTypes.default.bool
        }),
        onClick: _propTypes.default.func,
        wrapText: _propTypes.default.bool,
        buttonRef: _propTypes.default.any
      }).isRequired]),

      /**
         * Show/hide/configure the action to sort descending by the actual column, provided EuiListGroupItemProps are merged
         */
      showSortDesc: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
        className: _propTypes.default.string,
        "aria-label": _propTypes.default.string,
        "data-test-subj": _propTypes.default.string,
        size: _propTypes.default.oneOf(["xs", "s", "m", "l"]),
        color: _propTypes.default.oneOf(["inherit", "primary", "text", "subdued", "ghost"]),
        label: _propTypes.default.node.isRequired,
        isActive: _propTypes.default.bool,
        isDisabled: _propTypes.default.bool,
        href: _propTypes.default.string,
        target: _propTypes.default.string,
        rel: _propTypes.default.string,
        iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuLeft", "menuRight", "merge", "metricbeatApp", "metricsApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),
        icon: _propTypes.default.element,
        showToolTip: _propTypes.default.bool,
        extraAction: _propTypes.default.shape({
          type: _propTypes.default.oneOf(["submit", "reset", "button"]),
          onClick: _propTypes.default.func,
          iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuLeft", "menuRight", "merge", "metricbeatApp", "metricsApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),
          color: _propTypes.default.oneOf(["accent", "danger", "disabled", "ghost", "primary", "subdued", "success", "text", "warning"]),
          "aria-label": _propTypes.default.string,
          "aria-labelledby": _propTypes.default.string,
          isDisabled: _propTypes.default.bool,
          size: _propTypes.default.oneOf(["s", "m"]),
          iconSize: _propTypes.default.oneOf(["original", "s", "m", "l", "xl", "xxl"]),
          className: _propTypes.default.string,
          "data-test-subj": _propTypes.default.string,
          buttonRef: _propTypes.default.any,
          alwaysShow: _propTypes.default.bool
        }),
        onClick: _propTypes.default.func,
        wrapText: _propTypes.default.bool,
        buttonRef: _propTypes.default.any
      }).isRequired]),

      /**
         * Append additional actions
         */
      additional: _propTypes.default.arrayOf(_propTypes.default.shape({
        className: _propTypes.default.string,
        "aria-label": _propTypes.default.string,
        "data-test-subj": _propTypes.default.string,
        size: _propTypes.default.oneOf(["xs", "s", "m", "l"]),
        color: _propTypes.default.oneOf(["inherit", "primary", "text", "subdued", "ghost"]),
        label: _propTypes.default.node.isRequired,
        isActive: _propTypes.default.bool,
        isDisabled: _propTypes.default.bool,
        href: _propTypes.default.string,
        target: _propTypes.default.string,
        rel: _propTypes.default.string,
        iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuLeft", "menuRight", "merge", "metricbeatApp", "metricsApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),
        icon: _propTypes.default.element,
        showToolTip: _propTypes.default.bool,
        extraAction: _propTypes.default.shape({
          type: _propTypes.default.oneOf(["submit", "reset", "button"]),
          onClick: _propTypes.default.func,
          iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuLeft", "menuRight", "merge", "metricbeatApp", "metricsApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),
          color: _propTypes.default.oneOf(["accent", "danger", "disabled", "ghost", "primary", "subdued", "success", "text", "warning"]),
          "aria-label": _propTypes.default.string,
          "aria-labelledby": _propTypes.default.string,
          isDisabled: _propTypes.default.bool,
          size: _propTypes.default.oneOf(["s", "m"]),
          iconSize: _propTypes.default.oneOf(["original", "s", "m", "l", "xl", "xxl"]),
          className: _propTypes.default.string,
          "data-test-subj": _propTypes.default.string,
          buttonRef: _propTypes.default.any,
          alwaysShow: _propTypes.default.bool
        }),
        onClick: _propTypes.default.func,
        wrapText: _propTypes.default.bool,
        buttonRef: _propTypes.default.any
      }).isRequired)
    }).isRequired])
  }).isRequired).isRequired,

  /**
       * An array of #EuiDataGridColumnVisibility objects. Defines which columns are visible in the grid and the order they are displayed.
       */
  columnVisibility: _propTypes.default.shape({
    /**
       * An array of #EuiDataGridColumn `id`s dictating the order and visibility of columns.
       */
    visibleColumns: _propTypes.default.arrayOf(_propTypes.default.string.isRequired).isRequired,

    /**
       * A callback for when a column's visibility or order is modified by the user.
       */
    setVisibleColumns: _propTypes.default.func.isRequired
  }).isRequired,

  /**
       * An array of custom #EuiDataGridSchemaDetector objects. You can inject custom schemas to the grid to define the classnames applied
       */
  schemaDetectors: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
       * The name of this data type, matches #EuiDataGridColumn / schema `schema`
       */
    type: _propTypes.default.string.isRequired,

    /**
       * The function given the text value of a cell and returns a score of [0...1] of how well the value matches this data type
       */
    detector: _propTypes.default.func.isRequired,

    /**
       * A custom comparator function when performing in-memory sorting on this data type, takes `(a: string, b: string, direction: 'asc' | 'desc) => -1 | 0 | 1`
       */
    comparator: _propTypes.default.func,

    /**
       * The icon used to visually represent this data type. Accepts any `EuiIcon IconType`.
       */
    icon: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuLeft", "menuRight", "merge", "metricbeatApp", "metricsApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]).isRequired,

    /**
       * The color associated with this data type; it's used to color the icon token
       */
    color: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.oneOf(["euiColorVis0", "euiColorVis1", "euiColorVis2", "euiColorVis3", "euiColorVis4", "euiColorVis5", "euiColorVis6", "euiColorVis7", "euiColorVis8", "euiColorVis9", "gray"]).isRequired, _propTypes.default.string.isRequired]).isRequired, _propTypes.default.string.isRequired]),

    /**
       * Text for how to represent an ascending sort of this data type, e.g. 'A -> Z'
       */
    sortTextAsc: _propTypes.default.node.isRequired,

    /**
       * Text for how to represent a descending sort of this data type, e.g. 'Z -> A'
       */
    sortTextDesc: _propTypes.default.node.isRequired,

    /**
       * Whether this column is sortable (defaults to true)
       */
    isSortable: _propTypes.default.bool,

    /**
       * Default sort direction of the column
       */
    defaultSortDirection: _propTypes.default.oneOf(["asc", "desc"])
  }).isRequired),

  /**
       * An object mapping #EuiDataGridColumn `schema`s to a custom popover formatting component which receives #EuiDataGridPopoverContent props
       */
  popoverContents: _propTypes.default.shape({}),

  /**
       * The total number of rows in the dataset (used by e.g. pagination to know how many pages to list)
       */
  rowCount: _propTypes.default.number.isRequired,

  /**
       * A function called to render a cell's value. Behind the scenes it is treated as a React component
       * allowing hooks, context, and other React concepts to be used. The function receives a #CellValueElement
       * as its only argument.
       */
  renderCellValue: _propTypes.default.oneOfType([_propTypes.default.func.isRequired, _propTypes.default.func.isRequired]).isRequired,

  /**
       * A function called to render a cell's value. Behind the scenes it is treated as a React component
       * allowing hooks, context, and other React concepts to be used. The function receives a #CellValueElement
       * as its only argument.
       */
  renderFooterCellValue: _propTypes.default.oneOfType([_propTypes.default.func.isRequired, _propTypes.default.func.isRequired]),

  /**
       * Defines the look and feel for the grid. Accepts a partial #EuiDataGridStyle object. Settings provided may be overwritten or merged with user defined preferences if toolbarVisibility density controls are available.
       */
  gridStyle: _propTypes.default.shape({
    /**
       * Size of fonts used within the row and column cells
       */
    fontSize: _propTypes.default.oneOf(["s", "m", "l"]),

    /**
       * Border uses for the row and column cells
       */
    border: _propTypes.default.oneOf(["all", "horizontal", "none"]),

    /**
       * If set to true, rows will alternate zebra striping for clarity
       */
    stripes: _propTypes.default.bool,

    /**
       * Visual style for the column headers. Recommendation is to use the `underline` style in times when #EuiDataGrid `toolbarVisibility` is set to `false`.
       */
    header: _propTypes.default.oneOf(["shade", "underline"]),

    /**
       * Visual style for the column footers.
       */
    footer: _propTypes.default.oneOf(["shade", "overline", "striped"]),

    /**
       * Will define what visual style to show on row hover
       */
    rowHover: _propTypes.default.oneOf(["highlight", "none"]),

    /**
       * Defines the padding with the row and column cells
       */
    cellPadding: _propTypes.default.oneOf(["s", "m", "l"]),

    /**
       * If set to true, the footer row will be sticky
       */
    stickyFooter: _propTypes.default.bool
  }),

  /**
       * Accepts either a boolean or #EuiDataGridToolbarVisibilityOptions object. When used as a boolean, defines the display of the toolbar entire. WHen passed an object allows you to turn off individual controls within the toolbar as well as add additional buttons.
       */
  toolbarVisibility: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
    /**
       * Allows the ability for the user to hide fields and sort columns, boolean or a #EuiDataGridToolBarVisibilityColumnSelectorOptions
       */
    showColumnSelector: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
      /**
         * When `false`, removes the ability to show & hide columns through the UI
         */
      allowHide: _propTypes.default.bool,

      /**
         * When `false`, removes the ability to re-order columns through the UI
         */
      allowReorder: _propTypes.default.bool
    }).isRequired]),

    /**
       * Allows the ability for the user to set the grid density. If on, this merges against what is provided in #EuiDataGridStyle
       */
    showStyleSelector: _propTypes.default.bool,

    /**
       * Allows the ability for the user to sort rows based upon column values
       */
    showSortSelector: _propTypes.default.bool,

    /**
       * Allows user to be able to full screen the data grid. If set to `false` make sure your grid fits within a large enough panel to still show the other controls.
       */
    showFullScreenSelector: _propTypes.default.bool,

    /**
       * Will place any passed node into the toolbar in front of the fullscreen button. Recommend using EuiButtonEmpty with the props shown in the examples.
       */
    additionalControls: _propTypes.default.node
  }).isRequired]),

  /**
       * A #EuiDataGridInMemory object to definite the level of high order schema-detection and sorting logic to use on your data. *Try to set when possible*. When omitted, disables all enhancements and assumes content is flat strings.
       */
  inMemory: _propTypes.default.shape({
    /**
        Given the data flow Sorting->Pagination:
        Each step can be performed by service calls or in-memory by the grid.
        However, we cannot allow any service calls after an in-memory operation.
        E.g. if Pagination requires a service call the grid cannot perform
        in-memory Sorting. This means a single value representing the
        service / in-memory boundary can be used. Thus there are four states for in-memory's level:
        * "enhancements" - no in-memory operations, but use the available data to enhance the grid
        * "pagination" - only pagination is performed in-memory
        * "sorting" - sorting & pagination is performed in-memory
     */
    level: _propTypes.default.oneOf(["enhancements", "pagination", "sorting"]).isRequired,

    /**
       * An array of column ids for the in-memory processing to skip
       */
    skipColumns: _propTypes.default.arrayOf(_propTypes.default.string.isRequired)
  }),

  /**
       * A #EuiDataGridPagination object. Omit to disable pagination completely.
       */
  pagination: _propTypes.default.shape({
    /**
       * The index of the current page, starts at 0 for the first page
       */
    pageIndex: _propTypes.default.number.isRequired,

    /**
       * How many rows should initially be shown per page
       */
    pageSize: _propTypes.default.number.isRequired,

    /**
       * An array of page sizes the user can select from.
       * Leave this prop undefined or use an empty array to hide "Rows per page" select button
       */
    pageSizeOptions: _propTypes.default.arrayOf(_propTypes.default.number.isRequired),

    /**
       * A callback for when the user changes the page size selection
       */
    onChangeItemsPerPage: _propTypes.default.func.isRequired,

    /**
       * A callback for when the current page index changes
       */
    onChangePage: _propTypes.default.func.isRequired
  }),

  /**
       * A #EuiDataGridSorting object that provides the sorted columns along with their direction. Omit to disable, but you'll likely want to also turn off the user sorting controls through the `toolbarVisibility` prop.
       */
  sorting: _propTypes.default.shape({
    /**
       * A function that receives updated column sort details in response to user interactions in the toolbar controls
       */
    onSort: _propTypes.default.func.isRequired,

    /**
       * An array of the column ids currently being sorted and their sort direction. The array order determines the sort order. `{ id: 'A'; direction: 'asc' }`
       */
    columns: _propTypes.default.arrayOf(_propTypes.default.shape({
      id: _propTypes.default.string.isRequired,
      direction: _propTypes.default.oneOf(["asc", "desc"]).isRequired
    }).isRequired).isRequired
  }),

  /**
       * A callback for when a column's size changes. Callback receives `{ columnId: string, width: number }`.
       */
  onColumnResize: _propTypes.default.func,

  /**
       * Defines a minimum width for the grid to show all controls in its header.
       */
  minSizeForControls: _propTypes.default.number
};