"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiInMemoryTable = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _basic_table = require("./basic_table");

var _pagination_bar = require("./pagination_bar");

var _predicate = require("../../services/predicate");

var _sort2 = require("../../services/sort");

var _search_bar = require("../search_bar");

var _spacer = require("../spacer");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function isEuiSearchBarProps(x) {
  return typeof x !== 'boolean';
}

var getQueryFromSearch = function getQueryFromSearch(search, defaultQuery) {
  var query;

  if (!search) {
    query = '';
  } else {
    query = (defaultQuery ? search.defaultQuery || search.query || '' : search.query) || '';
  }

  return (0, _predicate.isString)(query) ? _search_bar.EuiSearchBar.Query.parse(query) : query;
};

var getInitialPagination = function getInitialPagination(pagination) {
  if (!pagination) {
    return {
      pageIndex: undefined,
      pageSize: undefined
    };
  }

  var _ref = pagination,
      _ref$pageSizeOptions = _ref.pageSizeOptions,
      pageSizeOptions = _ref$pageSizeOptions === void 0 ? _pagination_bar.defaults.pageSizeOptions : _ref$pageSizeOptions,
      hidePerPageOptions = _ref.hidePerPageOptions;
  var defaultPageSize = pageSizeOptions ? pageSizeOptions[0] : _pagination_bar.defaults.pageSizeOptions[0];
  var initialPageIndex = pagination === true ? 0 : pagination.pageIndex || pagination.initialPageIndex || 0;
  var initialPageSize = pagination === true ? defaultPageSize : pagination.pageSize || pagination.initialPageSize || defaultPageSize;

  if (!hidePerPageOptions && initialPageSize && (!pageSizeOptions || !pageSizeOptions.includes(initialPageSize))) {
    throw new Error("EuiInMemoryTable received initialPageSize ".concat(initialPageSize, ", which wasn't provided within pageSizeOptions."));
  }

  return {
    pageIndex: initialPageIndex,
    pageSize: initialPageSize,
    pageSizeOptions: pageSizeOptions,
    hidePerPageOptions: hidePerPageOptions
  };
};

function findColumnByProp(columns, prop, value) {
  for (var i = 0; i < columns.length; i++) {
    var column = columns[i];

    if (column[prop] === value) {
      return column;
    }
  }
}

function getInitialSorting(columns, sorting) {
  if (!sorting || !sorting.sort) {
    return {
      sortName: undefined,
      sortDirection: undefined
    };
  }

  var _sort = sorting.sort,
      sortable = _sort.field,
      sortDirection = _sort.direction; // sortable could be a column's `field` or its `name`
  // for backwards compatibility `field` must be checked first

  var sortColumn = findColumnByProp(columns, 'field', sortable);

  if (sortColumn == null) {
    sortColumn = findColumnByProp(columns, 'name', sortable);
  }

  if (sortColumn == null) {
    return {
      sortName: undefined,
      sortDirection: undefined
    };
  }

  var sortName = sortColumn.name;
  return {
    sortName: sortName,
    sortDirection: sortDirection
  };
}

var EuiInMemoryTable = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiInMemoryTable, _Component);

  var _super = _createSuper(EuiInMemoryTable);

  (0, _createClass2.default)(EuiInMemoryTable, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var updatedPrevState = prevState;

      if (nextProps.items !== prevState.prevProps.items) {
        // We have new items because an external search has completed, so reset pagination state.
        var nextPageIndex = 0;

        if (nextProps.pagination != null && typeof nextProps.pagination !== 'boolean') {
          nextPageIndex = nextProps.pagination.pageIndex || 0;
        }

        updatedPrevState = _objectSpread(_objectSpread({}, updatedPrevState), {}, {
          prevProps: _objectSpread(_objectSpread({}, updatedPrevState.prevProps), {}, {
            items: nextProps.items
          }),
          pageIndex: nextPageIndex
        });
      } // apply changes to controlled pagination


      if (nextProps.pagination != null && typeof nextProps.pagination !== 'boolean') {
        if (nextProps.pagination.pageSize != null && nextProps.pagination.pageSize !== updatedPrevState.pageIndex) {
          updatedPrevState = _objectSpread(_objectSpread({}, updatedPrevState), {}, {
            pageSize: nextProps.pagination.pageSize
          });
        }

        if (nextProps.pagination.pageIndex != null && nextProps.pagination.pageIndex !== updatedPrevState.pageIndex) {
          updatedPrevState = _objectSpread(_objectSpread({}, updatedPrevState), {}, {
            pageIndex: nextProps.pagination.pageIndex
          });
        }
      }

      var _getInitialSorting = getInitialSorting(nextProps.columns, nextProps.sorting),
          sortName = _getInitialSorting.sortName,
          sortDirection = _getInitialSorting.sortDirection;

      if (sortName !== prevState.prevProps.sortName || sortDirection !== prevState.prevProps.sortDirection) {
        updatedPrevState = _objectSpread(_objectSpread({}, updatedPrevState), {}, {
          sortName: sortName,
          sortDirection: sortDirection
        });
      }

      var nextQuery = nextProps.search ? nextProps.search.query : '';
      var prevQuery = prevState.prevProps.search ? prevState.prevProps.search.query : '';

      if (nextQuery !== prevQuery) {
        updatedPrevState = _objectSpread(_objectSpread({}, updatedPrevState), {}, {
          prevProps: _objectSpread(_objectSpread({}, updatedPrevState.prevProps), {}, {
            search: nextProps.search
          }),
          query: getQueryFromSearch(nextProps.search, false)
        });
      }

      if (updatedPrevState !== prevState) {
        return updatedPrevState;
      }

      return null;
    }
  }]);

  function EuiInMemoryTable(props) {
    var _this;

    (0, _classCallCheck2.default)(this, EuiInMemoryTable);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "tableRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onTableChange", function (_ref2) {
      var page = _ref2.page,
          sort = _ref2.sort;

      var _ref3 = page || {},
          pageIndex = _ref3.index,
          pageSize = _ref3.size; // don't apply pagination changes that are otherwise controlled
      // `page` is left unchanged as it goes to the consumer's `onTableChange` callback, allowing the app to respond


      var pagination = _this.props.pagination;

      if (pagination != null && typeof pagination !== 'boolean') {
        if (pagination.pageSize != null) pageSize = pagination.pageSize;
        if (pagination.pageIndex != null) pageIndex = pagination.pageIndex;
      }

      var _ref4 = sort || {},
          sortName = _ref4.field,
          sortDirection = _ref4.direction; // To keep backwards compatibility reportedSortName needs to be tracked separately
      // from sortName; sortName gets stored internally while reportedSortName is sent to the callback


      var reportedSortName = sortName; // EuiBasicTable returns the column's `field` if it exists instead of `name`,
      // map back to `name` if this is the case

      for (var i = 0; i < _this.props.columns.length; i++) {
        var column = _this.props.columns[i];

        if (column.field === sortName) {
          sortName = column.name;
          break;
        }
      } // Allow going back to 'neutral' sorting


      if (_this.state.allowNeutralSort && _this.state.sortName === sortName && _this.state.sortDirection === 'desc' && sortDirection === 'asc') {
        sortName = '';
        reportedSortName = '';
        sortDirection = 'asc'; // Default sort direction.
      }

      if (_this.props.onTableChange) {
        _this.props.onTableChange({
          // @ts-ignore complex relationship between pagination's existence and criteria, the code logic ensures this is correctly maintained
          page: page,
          sort: {
            field: reportedSortName,
            direction: sortDirection
          }
        });
      }

      _this.setState({
        pageIndex: pageIndex,
        pageSize: pageSize,
        sortName: sortName,
        sortDirection: sortDirection
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onQueryChange", function (_ref5) {
      var query = _ref5.query,
          queryText = _ref5.queryText,
          error = _ref5.error;
      var search = _this.props.search;

      if (isEuiSearchBarProps(search)) {
        if (search.onChange) {
          var shouldQueryInMemory = error == null ? search.onChange({
            query: query,
            queryText: queryText,
            error: null
          }) : search.onChange({
            query: null,
            queryText: queryText,
            error: error
          });

          if (!shouldQueryInMemory) {
            return;
          }
        }
      } // Reset pagination state.


      _this.setState(function (state) {
        return {
          prevProps: _objectSpread(_objectSpread({}, state.prevProps), {}, {
            search: search
          }),
          query: query,
          pageIndex: 0
        };
      });
    });
    var columns = props.columns,
        _search = props.search,
        _pagination = props.pagination,
        sorting = props.sorting,
        allowNeutralSort = props.allowNeutralSort;

    var _getInitialPagination = getInitialPagination(_pagination),
        _pageIndex = _getInitialPagination.pageIndex,
        _pageSize = _getInitialPagination.pageSize,
        pageSizeOptions = _getInitialPagination.pageSizeOptions,
        hidePerPageOptions = _getInitialPagination.hidePerPageOptions;

    var _getInitialSorting2 = getInitialSorting(columns, sorting),
        _sortName = _getInitialSorting2.sortName,
        _sortDirection = _getInitialSorting2.sortDirection;

    _this.state = {
      prevProps: {
        items: props.items,
        sortName: _sortName,
        sortDirection: _sortDirection,
        search: _search
      },
      search: _search,
      query: getQueryFromSearch(_search, true),
      pageIndex: _pageIndex || 0,
      pageSize: _pageSize,
      pageSizeOptions: pageSizeOptions,
      sortName: _sortName,
      sortDirection: _sortDirection,
      allowNeutralSort: allowNeutralSort !== false,
      hidePerPageOptions: hidePerPageOptions
    };
    _this.tableRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  (0, _createClass2.default)(EuiInMemoryTable, [{
    key: "setSelection",
    value: function setSelection(newSelection) {
      if (this.tableRef.current) {
        this.tableRef.current.setSelection(newSelection);
      }
    }
  }, {
    key: "renderSearchBar",
    value: function renderSearchBar() {
      var search = this.props.search;

      if (search) {
        var searchBarProps = {};

        if (isEuiSearchBarProps(search)) {
          var onChange = search.onChange,
              _searchBarProps = (0, _objectWithoutProperties2.default)(search, ["onChange"]);

          searchBarProps = _searchBarProps;

          if (searchBarProps.box && searchBarProps.box.schema === true) {
            searchBarProps.box = _objectSpread(_objectSpread({}, searchBarProps.box), {}, {
              schema: this.resolveSearchSchema()
            });
          }
        }

        return /*#__PURE__*/_react.default.createElement(_search_bar.EuiSearchBar, (0, _extends2.default)({
          onChange: this.onQueryChange
        }, searchBarProps));
      }
    }
  }, {
    key: "resolveSearchSchema",
    value: function resolveSearchSchema() {
      var columns = this.props.columns;
      return columns.reduce(function (schema, column) {
        var _ref6 = column,
            field = _ref6.field,
            dataType = _ref6.dataType;

        if (field) {
          var type = dataType || 'string';
          schema.fields[field] = {
            type: type
          };
        }

        return schema;
      }, {
        strict: true,
        fields: {}
      });
    }
  }, {
    key: "getItemSorter",
    value: function getItemSorter() {
      var _this$state = this.state,
          sortName = _this$state.sortName,
          sortDirection = _this$state.sortDirection;
      var columns = this.props.columns;
      var sortColumn = columns.find(function (_ref7) {
        var name = _ref7.name;
        return name === sortName;
      });

      if (sortColumn == null) {
        // can't return a non-function so return a function that says everything is the same
        return function () {
          return 0;
        };
      }

      var sortable = sortColumn.sortable;

      if (typeof sortable === 'function') {
        return _sort2.Comparators.value(sortable, _sort2.Comparators.default(sortDirection));
      }

      return _sort2.Comparators.property(sortColumn.field, _sort2.Comparators.default(sortDirection));
    }
  }, {
    key: "getItems",
    value: function getItems() {
      var executeQueryOptions = this.props.executeQueryOptions;
      var items = this.state.prevProps.items;

      if (!items.length) {
        return {
          items: [],
          totalItemCount: 0
        };
      }

      var _this$state2 = this.state,
          query = _this$state2.query,
          sortName = _this$state2.sortName,
          pageIndex = _this$state2.pageIndex,
          pageSize = _this$state2.pageSize;
      var matchingItems = query ? _search_bar.EuiSearchBar.Query.execute(query, items, executeQueryOptions) : items;
      var sortedItems = sortName ? matchingItems.slice(0) // avoid mutating the source array
      .sort(this.getItemSorter()) // sort, causes mutation
      : matchingItems;
      var visibleItems = pageSize ? function () {
        var startIndex = pageIndex * pageSize;
        return sortedItems.slice(startIndex, Math.min(startIndex + pageSize, sortedItems.length));
      }() : sortedItems;
      return {
        items: visibleItems,
        totalItemCount: matchingItems.length
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          columns = _this$props.columns,
          loading = _this$props.loading,
          message = _this$props.message,
          error = _this$props.error,
          selection = _this$props.selection,
          isSelectable = _this$props.isSelectable,
          hasActions = _this$props.hasActions,
          compressed = _this$props.compressed,
          hasPagination = _this$props.pagination,
          hasSorting = _this$props.sorting,
          itemIdToExpandedRowMap = _this$props.itemIdToExpandedRowMap,
          itemId = _this$props.itemId,
          rowProps = _this$props.rowProps,
          cellProps = _this$props.cellProps,
          tableLayout = _this$props.tableLayout,
          _unuseditems = _this$props.items,
          search = _this$props.search,
          onTableChange = _this$props.onTableChange,
          executeQueryOptions = _this$props.executeQueryOptions,
          allowNeutralSort = _this$props.allowNeutralSort,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["columns", "loading", "message", "error", "selection", "isSelectable", "hasActions", "compressed", "pagination", "sorting", "itemIdToExpandedRowMap", "itemId", "rowProps", "cellProps", "tableLayout", "items", "search", "onTableChange", "executeQueryOptions", "allowNeutralSort"]);
      var _this$state3 = this.state,
          pageIndex = _this$state3.pageIndex,
          pageSize = _this$state3.pageSize,
          pageSizeOptions = _this$state3.pageSizeOptions,
          sortName = _this$state3.sortName,
          sortDirection = _this$state3.sortDirection,
          hidePerPageOptions = _this$state3.hidePerPageOptions;

      var _this$getItems = this.getItems(),
          items = _this$getItems.items,
          totalItemCount = _this$getItems.totalItemCount;

      var pagination = !hasPagination ? undefined : {
        pageIndex: pageIndex,
        pageSize: pageSize || 1,
        pageSizeOptions: pageSizeOptions,
        totalItemCount: totalItemCount,
        hidePerPageOptions: hidePerPageOptions
      }; // Data loaded from a server can have a default sort order which is meaningful to the
      // user, but can't be reproduced with client-side sort logic. So we allow the table to display
      // rows in the order in which they're initially loaded by providing an undefined sorting prop.

      var sorting = !hasSorting ? undefined : {
        sort: !sortName && !sortDirection ? undefined : {
          field: sortName,
          direction: sortDirection
        },
        allowNeutralSort: this.state.allowNeutralSort
      };
      var searchBar = this.renderSearchBar();

      var table =
      /*#__PURE__*/
      // @ts-ignore complex relationship between pagination's existence and criteria, the code logic ensures this is correctly maintained
      _react.default.createElement(_basic_table.EuiBasicTable, (0, _extends2.default)({
        ref: this.tableRef,
        items: items,
        itemId: itemId,
        rowProps: rowProps,
        cellProps: cellProps,
        columns: columns,
        pagination: pagination,
        sorting: sorting,
        selection: selection,
        isSelectable: isSelectable,
        hasActions: hasActions,
        onChange: this.onTableChange,
        error: error,
        loading: loading,
        noItemsMessage: message,
        tableLayout: tableLayout,
        compressed: compressed,
        itemIdToExpandedRowMap: itemIdToExpandedRowMap
      }, rest));

      if (!searchBar) {
        return table;
      }

      return /*#__PURE__*/_react.default.createElement("div", null, searchBar, /*#__PURE__*/_react.default.createElement(_spacer.EuiSpacer, {
        size: "l"
      }), table);
    }
  }]);
  return EuiInMemoryTable;
}(_react.Component);

exports.EuiInMemoryTable = EuiInMemoryTable;
(0, _defineProperty2.default)(EuiInMemoryTable, "defaultProps", {
  responsive: true,
  tableLayout: 'fixed'
});
EuiInMemoryTable.propTypes = {
  className: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]), _propTypes.default.string]),
  "aria-label": _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]), _propTypes.default.string]),
  "data-test-subj": _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]), _propTypes.default.string]),
  itemId: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired, _propTypes.default.func.isRequired]),
  itemIdToExpandedRowMap: _propTypes.default.shape({}),
  items: _propTypes.default.arrayOf(_propTypes.default.any.isRequired),
  cellProps: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.func.isRequired]),
  columns: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.shape({
    field: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.string.isRequired]).isRequired,
    // supports outer.inner key paths
    name: _propTypes.default.node.isRequired,
    description: _propTypes.default.string,
    dataType: _propTypes.default.oneOf(["auto", "string", "number", "boolean", "date"]),
    width: _propTypes.default.string,
    sortable: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.func.isRequired]),
    isExpander: _propTypes.default.bool,
    textOnly: _propTypes.default.bool,
    align: _propTypes.default.oneOf(["left", "right", "center"]),
    truncateText: _propTypes.default.bool,
    isMobileHeader: _propTypes.default.bool,
    mobileOptions: _propTypes.default.shape({
      show: _propTypes.default.bool,
      only: _propTypes.default.bool,
      render: _propTypes.default.func,
      header: _propTypes.default.bool
    }),
    hideForMobile: _propTypes.default.bool,
    render: _propTypes.default.func,
    footer: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired, _propTypes.default.func.isRequired]),
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }).isRequired, _propTypes.default.shape({
    render: _propTypes.default.func.isRequired,
    name: _propTypes.default.node,
    description: _propTypes.default.string,
    sortable: _propTypes.default.func,
    width: _propTypes.default.string,
    truncateText: _propTypes.default.bool,
    isExpander: _propTypes.default.bool,
    align: _propTypes.default.oneOf(["left", "right", "center"]),
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }).isRequired, _propTypes.default.shape({
    actions: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.shape({
      type: _propTypes.default.oneOfType([_propTypes.default.oneOf(["button"]), _propTypes.default.oneOf(["icon"]).isRequired]),
      color: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.oneOf(["primary", "danger", "disabled", "text", "ghost"]).isRequired, _propTypes.default.func.isRequired]), _propTypes.default.oneOfType([_propTypes.default.oneOf(["accent", "danger", "disabled", "ghost", "primary", "subdued", "success", "text", "warning"]).isRequired, _propTypes.default.func.isRequired])]),
      name: _propTypes.default.oneOfType([_propTypes.default.node.isRequired, _propTypes.default.func.isRequired]).isRequired,
      description: _propTypes.default.string.isRequired,
      onClick: _propTypes.default.func,
      href: _propTypes.default.string,
      target: _propTypes.default.string,
      available: _propTypes.default.func,
      enabled: _propTypes.default.func,
      isPrimary: _propTypes.default.bool,
      "data-test-subj": _propTypes.default.string,
      icon: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuLeft", "menuRight", "merge", "metricbeatApp", "metricsApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.func.isRequired])
    }).isRequired, _propTypes.default.shape({
      render: _propTypes.default.func.isRequired,
      available: _propTypes.default.func,
      enabled: _propTypes.default.func,
      isPrimary: _propTypes.default.bool
    }).isRequired]).isRequired).isRequired,
    name: _propTypes.default.node,
    description: _propTypes.default.string,
    width: _propTypes.default.string
  }).isRequired]).isRequired),
  error: _propTypes.default.string,
  tableCaption: _propTypes.default.string,
  rowHeader: _propTypes.default.string,
  hasActions: _propTypes.default.bool,
  isExpandable: _propTypes.default.bool,
  isSelectable: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  rowProps: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.func.isRequired]),
  selection: _propTypes.default.shape({
    onSelectionChange: _propTypes.default.func,
    selectable: _propTypes.default.func,
    selectableMessage: _propTypes.default.func,
    initialSelected: _propTypes.default.arrayOf(_propTypes.default.any.isRequired)
  }),
  message: _propTypes.default.node,
  search: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
    onChange: _propTypes.default.func,

    /**
       The initial query the bar will hold when first mounted
       */
    defaultQuery: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.string.isRequired]),

    /**
       If you wish to use the search bar as a controlled component, continuously pass the query
       via this prop
       */
    query: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.string.isRequired]),

    /**
       Configures the search box. Set `placeholder` to change the placeholder text in the box and
       `incremental` to support incremental (as you type) search.
       */
    box: _propTypes.default.shape({
      name: _propTypes.default.string,
      id: _propTypes.default.string,
      placeholder: _propTypes.default.string,
      value: _propTypes.default.string,
      isInvalid: _propTypes.default.bool,
      fullWidth: _propTypes.default.bool,
      isLoading: _propTypes.default.bool,

      /**
         * Called when the user presses [Enter] OR on change if the incremental prop is `true`.
         * If you don't need the on[Enter] functionality, prefer using onChange
         */
      onSearch: _propTypes.default.func,

      /**
         * When `true` the search will be executed (that is, the `onSearch` will be called) as the
         * user types.
         */
      incremental: _propTypes.default.bool,

      /**
         * when `true` creates a shorter height input
         */
      compressed: _propTypes.default.bool,
      inputRef: _propTypes.default.func,

      /**
         * Shows a button that quickly clears any input
         */
      isClearable: _propTypes.default.bool,

      /**
         * Creates an input group with element(s) coming before input
         * `string` | `ReactElement` or an array of these
         */
      prepend: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired).isRequired]),

      /**
         * Creates an input group with element(s) coming after input.
         * `string` | `ReactElement` or an array of these
         */
      append: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired).isRequired]),
      className: _propTypes.default.string,
      "aria-label": _propTypes.default.string,
      "data-test-subj": _propTypes.default.string,
      // Boolean values are not meaningful to this EuiSearchBox, but are allowed so that other
      // components can use e.g. a true value to mean "auto-derive a schema". See EuiInMemoryTable.
      // Admittedly, this is a bit of a hack.
      schema: _propTypes.default.oneOfType([_propTypes.default.shape({
        strict: _propTypes.default.bool,
        fields: _propTypes.default.any,
        flags: _propTypes.default.arrayOf(_propTypes.default.string.isRequired)
      }).isRequired, _propTypes.default.bool.isRequired])
    }),

    /**
       An array of search filters.
       */
    filters: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.shape({
      type: _propTypes.default.oneOf(["is"]).isRequired,
      field: _propTypes.default.string.isRequired,
      name: _propTypes.default.string.isRequired,
      negatedName: _propTypes.default.string,
      available: _propTypes.default.func
    }).isRequired, _propTypes.default.shape({
      type: _propTypes.default.oneOf(["field_value_selection"]).isRequired,
      field: _propTypes.default.string,
      name: _propTypes.default.string.isRequired,
      options: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.shape({
        field: _propTypes.default.string,
        value: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired, _propTypes.default.bool.isRequired, _propTypes.default.shape({
          type: _propTypes.default.oneOf(["date"]).isRequired,
          raw: _propTypes.default.any.isRequired,
          granularity: _propTypes.default.oneOfType([_propTypes.default.shape({
            es: _propTypes.default.oneOf(["d", "w", "M", "y"]).isRequired,
            js: _propTypes.default.oneOf(["day", "week", "month", "year"]).isRequired,
            isSame: _propTypes.default.func.isRequired,
            start: _propTypes.default.func.isRequired,
            startOfNext: _propTypes.default.func.isRequired,
            iso8601: _propTypes.default.func.isRequired
          }).isRequired, _propTypes.default.oneOf([undefined])]).isRequired,
          text: _propTypes.default.string.isRequired,
          resolve: _propTypes.default.func.isRequired
        }).isRequired]).isRequired,
        name: _propTypes.default.string,
        view: _propTypes.default.node
      }).isRequired).isRequired, _propTypes.default.func.isRequired]).isRequired,
      filterWith: _propTypes.default.oneOfType([_propTypes.default.oneOf(["prefix", "includes"]), _propTypes.default.func.isRequired]),
      cache: _propTypes.default.number,
      multiSelect: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.oneOf(["and", "or"])]),
      loadingMessage: _propTypes.default.string,
      noOptionsMessage: _propTypes.default.string,
      searchThreshold: _propTypes.default.number,
      available: _propTypes.default.func,
      autoClose: _propTypes.default.bool,
      operator: _propTypes.default.oneOf(["eq", "exact", "gt", "gte", "lt", "lte"])
    }).isRequired, _propTypes.default.shape({
      type: _propTypes.default.oneOf(["field_value_toggle"]).isRequired,
      field: _propTypes.default.string.isRequired,
      value: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired, _propTypes.default.bool.isRequired, _propTypes.default.shape({
        type: _propTypes.default.oneOf(["date"]).isRequired,
        raw: _propTypes.default.any.isRequired,
        granularity: _propTypes.default.oneOfType([_propTypes.default.shape({
          es: _propTypes.default.oneOf(["d", "w", "M", "y"]).isRequired,
          js: _propTypes.default.oneOf(["day", "week", "month", "year"]).isRequired,
          isSame: _propTypes.default.func.isRequired,
          start: _propTypes.default.func.isRequired,
          startOfNext: _propTypes.default.func.isRequired,
          iso8601: _propTypes.default.func.isRequired
        }).isRequired, _propTypes.default.oneOf([undefined])]).isRequired,
        text: _propTypes.default.string.isRequired,
        resolve: _propTypes.default.func.isRequired
      }).isRequired]).isRequired,
      name: _propTypes.default.string.isRequired,
      negatedName: _propTypes.default.string,
      available: _propTypes.default.func,
      operator: _propTypes.default.oneOf(["eq", "exact", "gt", "gte", "lt", "lte"])
    }).isRequired, _propTypes.default.shape({
      type: _propTypes.default.oneOf(["field_value_toggle_group"]).isRequired,
      field: _propTypes.default.string.isRequired,
      items: _propTypes.default.arrayOf(_propTypes.default.shape({
        value: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired, _propTypes.default.bool.isRequired]).isRequired,
        name: _propTypes.default.string.isRequired,
        negatedName: _propTypes.default.string,
        operator: _propTypes.default.oneOf(["eq", "exact", "gt", "gte", "lt", "lte"])
      }).isRequired).isRequired,
      available: _propTypes.default.func
    }).isRequired]).isRequired),

    /**
       * Tools which go to the left of the search bar.
       */
    toolsLeft: _propTypes.default.oneOfType([_propTypes.default.element.isRequired, _propTypes.default.arrayOf(_propTypes.default.element.isRequired).isRequired]),

    /**
       * Tools which go to the right of the search bar.
       */
    toolsRight: _propTypes.default.oneOfType([_propTypes.default.element.isRequired, _propTypes.default.arrayOf(_propTypes.default.element.isRequired).isRequired]),

    /**
       * Date formatter to use when parsing date values
       */
    dateFormat: _propTypes.default.any,
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }).isRequired]),
  pagination: _propTypes.default.oneOfType([_propTypes.default.oneOf([undefined]), _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
    pageSizeOptions: _propTypes.default.arrayOf(_propTypes.default.number.isRequired),
    hidePerPageOptions: _propTypes.default.bool,
    initialPageIndex: _propTypes.default.number,
    initialPageSize: _propTypes.default.number,
    pageIndex: _propTypes.default.number,
    pageSize: _propTypes.default.number
  }).isRequired])]),
  sorting: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
    sort: _propTypes.default.shape({
      field: _propTypes.default.string.isRequired,
      direction: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.any.isRequired]).isRequired
    }).isRequired
  }).isRequired]),

  /**
     * Set `allowNeutralSort` to false to force column sorting. Defaults to true.
     */

  /**
     * Set `allowNeutralSort` to false to force column sorting. Defaults to true.
     */
  allowNeutralSort: _propTypes.default.bool,
  onTableChange: _propTypes.default.func,
  executeQueryOptions: _propTypes.default.shape({
    defaultFields: _propTypes.default.arrayOf(_propTypes.default.string.isRequired),
    isClauseMatcher: _propTypes.default.func,
    explain: _propTypes.default.bool
  })
};