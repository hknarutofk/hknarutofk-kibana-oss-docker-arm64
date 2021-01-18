"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardAppController = void 0;

var _lodash = _interopRequireWildcard(require("lodash"));

var _i18n = require("@kbn/i18n");

var _react = _interopRequireDefault(require("react"));

var _angular = _interopRequireDefault(require("angular"));

var _chrome = _interopRequireDefault(require("ui/chrome"));

var _subscribe_with_scope = require("ui/utils/subscribe_with_scope");

var _notify = require("ui/notify");

var _confirm_modal = require("ui/modals/confirm_modal");

var _query_filter = require("ui/filter_manager/query_filter");

var _doc_title = require("ui/doc_title/doc_title");

var _show_saved_object_save_modal = require("ui/saved_objects/show_saved_object_save_modal");

var _share = require("ui/share");

var _migrate_legacy_query = require("ui/utils/migrate_legacy_query");

var _timefilter = require("ui/timefilter");

var _get_unhashable_states_provider = require("ui/state_management/state_hashing/get_unhashable_states_provider");

var _capabilities = require("ui/capabilities");

var _rxjs = require("rxjs");

var _new_platform = require("ui/new_platform");

var _saved_object_finder = require("ui/saved_objects/components/saved_object_finder");

var _setup = require("../../../data/public/setup");

var _public = require("../../../dashboard_embeddable_container/public/np_ready/public");

var _public2 = require("../../../embeddable_api/public/np_ready/public");

var _legacy = require("../../../embeddable_api/public/np_ready/public/legacy");

var _show_options_popover = require("./top_nav/show_options_popover");

var _save_modal = require("./top_nav/save_modal");

var _show_clone_modal = require("./top_nav/show_clone_modal");

var _lib = require("./lib");

var _dashboard_state_manager = require("./dashboard_state_manager");

var _dashboard_constants = require("./dashboard_constants");

var _get_top_nav_config = require("./top_nav/get_top_nav_config");

var _top_nav_ids = require("./top_nav/top_nav_ids");

var _dashboard_strings = require("./dashboard_strings");

var _embeddable = require("../visualize/embeddable");

var _embeddable_saved_object_converters = require("./lib/embeddable_saved_object_converters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var savedQueryService = _setup.data.search.services.savedQueryService;

var DashboardAppController = // Part of the exposed plugin API - do not remove without careful consideration.
function DashboardAppController(_ref) {
  var _this = this;

  var $scope = _ref.$scope,
      $route = _ref.$route,
      $routeParams = _ref.$routeParams,
      getAppState = _ref.getAppState,
      dashboardConfig = _ref.dashboardConfig,
      localStorage = _ref.localStorage,
      Private = _ref.Private,
      kbnUrl = _ref.kbnUrl,
      AppStateClass = _ref.AppStateClass,
      indexPatterns = _ref.indexPatterns,
      config = _ref.config,
      confirmModal = _ref.confirmModal,
      courier = _ref.courier;

  _classCallCheck(this, DashboardAppController);

  _defineProperty(this, "appStatus", void 0);

  var queryFilter = Private(_query_filter.FilterBarQueryFilterProvider);
  var getUnhashableStates = Private(_get_unhashable_states_provider.getUnhashableStatesProvider);
  var shareContextMenuExtensions = Private(_share.ShareContextMenuExtensionsRegistryProvider);
  var lastReloadRequestTime = 0;
  var dash = $scope.dash = $route.current.locals.dash;

  if (dash.id) {
    _doc_title.docTitle.change(dash.title);
  }

  var dashboardStateManager = new _dashboard_state_manager.DashboardStateManager({
    savedDashboard: dash,
    AppStateClass: AppStateClass,
    hideWriteControls: dashboardConfig.getHideWriteControls()
  });
  $scope.appState = dashboardStateManager.getAppState(); // The 'previouslyStored' check is so we only update the time filter on dashboard open, not during
  // normal cross app navigation.

  if (dashboardStateManager.getIsTimeSavedWithDashboard() && !getAppState.previouslyStored()) {
    dashboardStateManager.syncTimefilterWithDashboard(_timefilter.timefilter);
  }

  $scope.showSaveQuery = _capabilities.capabilities.get().dashboard.saveQuery;

  var updateIndexPatterns = function updateIndexPatterns(container) {
    if (!container || (0, _public2.isErrorEmbeddable)(container)) {
      return;
    }

    var panelIndexPatterns = [];
    Object.values(container.getChildIds()).forEach(function (id) {
      var _panelIndexPatterns;

      var embeddable = container.getChild(id);
      if ((0, _public2.isErrorEmbeddable)(embeddable)) return;
      var embeddableIndexPatterns = embeddable.getOutput().indexPatterns;
      if (!embeddableIndexPatterns) return;

      (_panelIndexPatterns = panelIndexPatterns).push.apply(_panelIndexPatterns, _toConsumableArray(embeddableIndexPatterns));
    });
    panelIndexPatterns = (0, _lodash.uniq)(panelIndexPatterns, 'id');

    if (panelIndexPatterns && panelIndexPatterns.length > 0) {
      $scope.$evalAsync(function () {
        $scope.indexPatterns = panelIndexPatterns;
      });
    } else {
      indexPatterns.getDefault().then(function (defaultIndexPattern) {
        $scope.$evalAsync(function () {
          $scope.indexPatterns = [defaultIndexPattern];
        });
      });
    }
  };

  var getDashboardInput = function getDashboardInput() {
    var embeddablesMap = {};
    dashboardStateManager.getPanels().forEach(function (panel) {
      embeddablesMap[panel.panelIndex] = (0, _embeddable_saved_object_converters.convertSavedDashboardPanelToPanelState)(panel, dashboardStateManager.getUseMargins());
    });
    var expandedPanelId;

    if (dashboardContainer && !(0, _public2.isErrorEmbeddable)(dashboardContainer)) {
      expandedPanelId = dashboardContainer.getInput().expandedPanelId;
    }

    return {
      id: dashboardStateManager.savedDashboard.id || '',
      filters: queryFilter.getFilters(),
      hidePanelTitles: dashboardStateManager.getHidePanelTitles(),
      query: $scope.model.query,
      timeRange: _objectSpread({}, _lodash.default.cloneDeep(_timefilter.timefilter.getTime())),
      refreshConfig: _timefilter.timefilter.getRefreshInterval(),
      viewMode: dashboardStateManager.getViewMode(),
      panels: embeddablesMap,
      isFullScreenMode: dashboardStateManager.getFullScreenMode(),
      useMargins: dashboardStateManager.getUseMargins(),
      lastReloadRequestTime: lastReloadRequestTime,
      title: dashboardStateManager.getTitle(),
      description: dashboardStateManager.getDescription(),
      expandedPanelId: expandedPanelId
    };
  };

  var updateState = function updateState() {
    // Following the "best practice" of always have a '.' in your ng-models –
    // https://github.com/angular/angular.js/wiki/Understanding-Scopes
    $scope.model = {
      query: dashboardStateManager.getQuery(),
      filters: queryFilter.getFilters(),
      timeRestore: dashboardStateManager.getTimeRestore(),
      title: dashboardStateManager.getTitle(),
      description: dashboardStateManager.getDescription(),
      timeRange: _timefilter.timefilter.getTime(),
      refreshInterval: _timefilter.timefilter.getRefreshInterval()
    };
    $scope.panels = dashboardStateManager.getPanels();
    $scope.screenTitle = dashboardStateManager.getTitle();
  };

  updateState();
  var dashboardContainer;
  var inputSubscription;
  var outputSubscription;
  var dashboardDom = document.getElementById('dashboardViewport');

  var dashboardFactory = _legacy.start.getEmbeddableFactory(_public.DASHBOARD_CONTAINER_TYPE);

  dashboardFactory.create(getDashboardInput()).then(function (container) {
    if (!(0, _public2.isErrorEmbeddable)(container)) {
      dashboardContainer = container;
      updateIndexPatterns(dashboardContainer);
      outputSubscription = dashboardContainer.getOutput$().subscribe(function () {
        updateIndexPatterns(dashboardContainer);
      });
      inputSubscription = dashboardContainer.getInput$().subscribe(
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var dirty;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dirty = false; // This has to be first because handleDashboardContainerChanges causes
                // appState.save which will cause refreshDashboardContainer to be called.
                // Add filters modifies the object passed to it, hence the clone deep.

                if (_lodash.default.isEqual(container.getInput().filters, queryFilter.getFilters())) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return queryFilter.addFilters(_lodash.default.cloneDeep(container.getInput().filters));

              case 4:
                dashboardStateManager.applyFilters($scope.model.query, container.getInput().filters);
                dirty = true;

              case 6:
                $scope.$evalAsync(function () {
                  dashboardStateManager.handleDashboardContainerChanges(container);

                  if (dirty) {
                    updateState();
                  }
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
      dashboardStateManager.registerChangeListener(function () {
        // we aren't checking dirty state because there are changes the container needs to know about
        // that won't make the dashboard "dirty" - like a view mode change.
        refreshDashboardContainer();
      }); // This code needs to be replaced with a better mechanism for adding new embeddables of
      // any type from the add panel. Likely this will happen via creating a visualization "inline",
      // without navigating away from the UX.

      if ($routeParams[_dashboard_constants.DashboardConstants.NEW_VISUALIZATION_ID_PARAM]) {
        container.addSavedObjectEmbeddable(_embeddable.VISUALIZE_EMBEDDABLE_TYPE, $routeParams[_dashboard_constants.DashboardConstants.NEW_VISUALIZATION_ID_PARAM]);
        kbnUrl.removeParam(_dashboard_constants.DashboardConstants.ADD_VISUALIZATION_TO_DASHBOARD_MODE_PARAM);
        kbnUrl.removeParam(_dashboard_constants.DashboardConstants.NEW_VISUALIZATION_ID_PARAM);
      }
    }

    if (dashboardDom) {
      container.render(dashboardDom);
    }
  }); // Part of the exposed plugin API - do not remove without careful consideration.

  this.appStatus = {
    dirty: !dash.id
  };
  dashboardStateManager.registerChangeListener(function (status) {
    _this.appStatus.dirty = status.dirty || !dash.id;
    updateState();
  });
  dashboardStateManager.applyFilters(dashboardStateManager.getQuery() || {
    query: '',
    language: localStorage.get('kibana.userQueryLanguage') || config.get('search:queryLanguage')
  }, queryFilter.getFilters());

  _timefilter.timefilter.disableTimeRangeSelector();

  _timefilter.timefilter.disableAutoRefreshSelector();

  var landingPageUrl = function landingPageUrl() {
    return "#".concat(_dashboard_constants.DashboardConstants.LANDING_PAGE_PATH);
  };

  var getDashTitle = function getDashTitle() {
    return (0, _dashboard_strings.getDashboardTitle)(dashboardStateManager.getTitle(), dashboardStateManager.getViewMode(), dashboardStateManager.getIsDirty(_timefilter.timefilter));
  }; // Push breadcrumbs to new header navigation


  var updateBreadcrumbs = function updateBreadcrumbs() {
    _chrome.default.breadcrumbs.set([{
      text: _i18n.i18n.translate('kbn.dashboard.dashboardAppBreadcrumbsTitle', {
        defaultMessage: 'Dashboard'
      }),
      href: landingPageUrl()
    }, {
      text: getDashTitle()
    }]);
  };

  updateBreadcrumbs();
  dashboardStateManager.registerChangeListener(updateBreadcrumbs);

  $scope.getShouldShowEditHelp = function () {
    return !dashboardStateManager.getPanels().length && dashboardStateManager.getIsEditMode() && !dashboardConfig.getHideWriteControls();
  };

  $scope.getShouldShowViewHelp = function () {
    return !dashboardStateManager.getPanels().length && dashboardStateManager.getIsViewMode() && !dashboardConfig.getHideWriteControls();
  };

  var getChangesFromAppStateForContainerState = function getChangesFromAppStateForContainerState() {
    var appStateDashboardInput = getDashboardInput();

    if (!dashboardContainer || (0, _public2.isErrorEmbeddable)(dashboardContainer)) {
      return appStateDashboardInput;
    }

    var containerInput = dashboardContainer.getInput();
    var differences = {};
    Object.keys(containerInput).forEach(function (key) {
      var containerValue = containerInput[key];
      var appStateValue = appStateDashboardInput[key];

      if (!_lodash.default.isEqual(containerValue, appStateValue)) {
        differences[key] = appStateValue;
      }
    });
    return Object.values(differences).length === 0 ? undefined : differences;
  };

  var refreshDashboardContainer = function refreshDashboardContainer() {
    var changes = getChangesFromAppStateForContainerState();

    if (changes && dashboardContainer) {
      dashboardContainer.updateInput(changes);
    }
  };

  $scope.updateQueryAndFetch = function (_ref3) {
    var query = _ref3.query,
        dateRange = _ref3.dateRange;

    if (dateRange) {
      _timefilter.timefilter.setTime(dateRange);
    }

    var oldQuery = $scope.model.query;

    if (_lodash.default.isEqual(oldQuery, query)) {
      // The user can still request a reload in the query bar, even if the
      // query is the same, and in that case, we have to explicitly ask for
      // a reload, since no state changes will cause it.
      lastReloadRequestTime = new Date().getTime();
      refreshDashboardContainer();
    } else {
      $scope.model.query = query;
      dashboardStateManager.applyFilters($scope.model.query, $scope.model.filters);
    }
  };

  $scope.onRefreshChange = function (_ref4) {
    var isPaused = _ref4.isPaused,
        refreshInterval = _ref4.refreshInterval;

    _timefilter.timefilter.setRefreshInterval({
      pause: isPaused,
      value: refreshInterval ? refreshInterval : $scope.model.refreshInterval.value
    });
  };

  $scope.onFiltersUpdated = function (filters) {
    // The filters will automatically be set when the queryFilter emits an update event (see below)
    queryFilter.setFilters(filters);
  };

  $scope.onCancelApplyFilters = function () {
    $scope.appState.$newFilters = [];
  };

  $scope.onApplyFilters = function (filters) {
    queryFilter.addFiltersAndChangeTimeFilter(filters);
    $scope.appState.$newFilters = [];
  };

  $scope.onQuerySaved = function (savedQuery) {
    $scope.savedQuery = savedQuery;
  };

  $scope.onSavedQueryUpdated = function (savedQuery) {
    $scope.savedQuery = _objectSpread({}, savedQuery);
  };

  $scope.onClearSavedQuery = function () {
    delete $scope.savedQuery;
    dashboardStateManager.setSavedQueryId(undefined);
    queryFilter.removeAll();
    dashboardStateManager.applyFilters({
      query: '',
      language: localStorage.get('kibana.userQueryLanguage') || config.get('search:queryLanguage')
    }, []);
  };

  var updateStateFromSavedQuery = function updateStateFromSavedQuery(savedQuery) {
    queryFilter.setFilters(savedQuery.attributes.filters || []);
    dashboardStateManager.applyFilters(savedQuery.attributes.query, savedQuery.attributes.filters || []);

    if (savedQuery.attributes.timefilter) {
      _timefilter.timefilter.setTime({
        from: savedQuery.attributes.timefilter.from,
        to: savedQuery.attributes.timefilter.to
      });

      if (savedQuery.attributes.timefilter.refreshInterval) {
        _timefilter.timefilter.setRefreshInterval(savedQuery.attributes.timefilter.refreshInterval);
      }
    }
  };

  $scope.$watch('savedQuery', function (newSavedQuery, oldSavedQuery) {
    if (!newSavedQuery) return;
    dashboardStateManager.setSavedQueryId(newSavedQuery.id);

    if (newSavedQuery.id === (oldSavedQuery && oldSavedQuery.id)) {
      updateStateFromSavedQuery(newSavedQuery);
    }
  });
  $scope.$watch(function () {
    return dashboardStateManager.getSavedQueryId();
  }, function (newSavedQueryId) {
    if (!newSavedQueryId) {
      $scope.savedQuery = undefined;
      return;
    }

    savedQueryService.getSavedQuery(newSavedQueryId).then(function (savedQuery) {
      $scope.$evalAsync(function () {
        $scope.savedQuery = savedQuery;
        updateStateFromSavedQuery(savedQuery);
      });
    });
  });
  $scope.$watch('appState.$newFilters', function () {
    var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (filters.length === 1) {
      $scope.onApplyFilters(filters);
    }
  });
  $scope.indexPatterns = [];
  $scope.$watch('model.query', function (newQuery) {
    var query = (0, _migrate_legacy_query.migrateLegacyQuery)(newQuery);
    $scope.updateQueryAndFetch({
      query: query
    });
  });
  $scope.$watch(function () {
    return _capabilities.capabilities.get().dashboard.saveQuery;
  }, function (newCapability) {
    $scope.showSaveQuery = newCapability;
  });
  $scope.timefilterSubscriptions$ = new _rxjs.Subscription();
  $scope.timefilterSubscriptions$.add((0, _subscribe_with_scope.subscribeWithScope)($scope, _timefilter.timefilter.getRefreshIntervalUpdate$(), {
    next: function next() {
      updateState();
      refreshDashboardContainer();
    }
  }));
  $scope.timefilterSubscriptions$.add((0, _subscribe_with_scope.subscribeWithScope)($scope, _timefilter.timefilter.getTimeUpdate$(), {
    next: function next() {
      updateState();
      refreshDashboardContainer();
    }
  }));

  function updateViewMode(newMode) {
    $scope.topNavMenu = (0, _get_top_nav_config.getTopNavConfig)(newMode, navActions, dashboardConfig.getHideWriteControls()); // eslint-disable-line no-use-before-define

    dashboardStateManager.switchViewMode(newMode);
  }

  var onChangeViewMode = function onChangeViewMode(newMode) {
    var isPageRefresh = newMode === dashboardStateManager.getViewMode();
    var isLeavingEditMode = !isPageRefresh && newMode === _public2.ViewMode.VIEW;
    var willLoseChanges = isLeavingEditMode && dashboardStateManager.getIsDirty(_timefilter.timefilter);

    if (!willLoseChanges) {
      updateViewMode(newMode);
      return;
    }

    function revertChangesAndExitEditMode() {
      dashboardStateManager.resetState();
      kbnUrl.change(dash.id ? (0, _dashboard_constants.createDashboardEditUrl)(dash.id) : _dashboard_constants.DashboardConstants.CREATE_NEW_DASHBOARD_URL); // This is only necessary for new dashboards, which will default to Edit mode.

      updateViewMode(_public2.ViewMode.VIEW); // We need to do a hard reset of the timepicker. appState will not reload like
      // it does on 'open' because it's been saved to the url and the getAppState.previouslyStored() check on
      // reload will cause it not to sync.

      if (dashboardStateManager.getIsTimeSavedWithDashboard()) {
        dashboardStateManager.syncTimefilterWithDashboard(_timefilter.timefilter);
      }
    }

    confirmModal(_i18n.i18n.translate('kbn.dashboard.changeViewModeConfirmModal.discardChangesDescription', {
      defaultMessage: "Once you discard your changes, there's no getting them back."
    }), {
      onConfirm: revertChangesAndExitEditMode,
      onCancel: _lodash.default.noop,
      confirmButtonText: _i18n.i18n.translate('kbn.dashboard.changeViewModeConfirmModal.confirmButtonLabel', {
        defaultMessage: 'Discard changes'
      }),
      cancelButtonText: _i18n.i18n.translate('kbn.dashboard.changeViewModeConfirmModal.cancelButtonLabel', {
        defaultMessage: 'Continue editing'
      }),
      defaultFocusedButton: _confirm_modal.ConfirmationButtonTypes.CANCEL,
      title: _i18n.i18n.translate('kbn.dashboard.changeViewModeConfirmModal.discardChangesTitle', {
        defaultMessage: 'Discard changes to dashboard?'
      })
    });
  };
  /**
   * Saves the dashboard.
   *
   * @param {object} [saveOptions={}]
   * @property {boolean} [saveOptions.confirmOverwrite=false] - If true, attempts to create the source so it
   * can confirm an overwrite if a document with the id already exists.
   * @property {boolean} [saveOptions.isTitleDuplicateConfirmed=false] - If true, save allowed with duplicate title
   * @property {func} [saveOptions.onTitleDuplicate] - function called if duplicate title exists.
   * When not provided, confirm modal will be displayed asking user to confirm or cancel save.
   * @return {Promise}
   * @resolved {String} - The id of the doc
   */


  function save(saveOptions) {
    return (0, _lib.saveDashboard)(_angular.default.toJson, _timefilter.timefilter, dashboardStateManager, saveOptions).then(function (id) {
      if (id) {
        _notify.toastNotifications.addSuccess({
          title: _i18n.i18n.translate('kbn.dashboard.dashboardWasSavedSuccessMessage', {
            defaultMessage: "Dashboard '{dashTitle}' was saved",
            values: {
              dashTitle: dash.title
            }
          }),
          'data-test-subj': 'saveDashboardSuccess'
        });

        if (dash.id !== $routeParams.id) {
          kbnUrl.change((0, _dashboard_constants.createDashboardEditUrl)(dash.id));
        } else {
          _doc_title.docTitle.change(dash.lastSavedTitle);

          updateViewMode(_public2.ViewMode.VIEW);
        }
      }

      return {
        id: id
      };
    }).catch(function (error) {
      _notify.toastNotifications.addDanger({
        title: _i18n.i18n.translate('kbn.dashboard.dashboardWasNotSavedDangerMessage', {
          defaultMessage: "Dashboard '{dashTitle}' was not saved. Error: {errorMessage}",
          values: {
            dashTitle: dash.title,
            errorMessage: error.message
          }
        }),
        'data-test-subj': 'saveDashboardFailure'
      });

      return {
        error: error
      };
    });
  }

  $scope.showFilterBar = function () {
    return $scope.model.filters.length > 0 || !dashboardStateManager.getFullScreenMode();
  };

  $scope.showAddPanel = function () {
    dashboardStateManager.setFullScreenMode(false);
    /*
     * Temp solution for triggering menu click.
     * When de-angularizing this code, please call the underlaying action function
     * directly and not via the top nav object.
     **/

    navActions[_top_nav_ids.TopNavIds.ADD]();
  };

  $scope.enterEditMode = function () {
    dashboardStateManager.setFullScreenMode(false);
    /*
     * Temp solution for triggering menu click.
     * When de-angularizing this code, please call the underlaying action function
     * directly and not via the top nav object.
     **/

    navActions[_top_nav_ids.TopNavIds.ENTER_EDIT_MODE]();
  };

  var navActions = {};

  navActions[_top_nav_ids.TopNavIds.FULL_SCREEN] = function () {
    return dashboardStateManager.setFullScreenMode(true);
  };

  navActions[_top_nav_ids.TopNavIds.EXIT_EDIT_MODE] = function () {
    return onChangeViewMode(_public2.ViewMode.VIEW);
  };

  navActions[_top_nav_ids.TopNavIds.ENTER_EDIT_MODE] = function () {
    return onChangeViewMode(_public2.ViewMode.EDIT);
  };

  navActions[_top_nav_ids.TopNavIds.SAVE] = function () {
    var currentTitle = dashboardStateManager.getTitle();
    var currentDescription = dashboardStateManager.getDescription();
    var currentTimeRestore = dashboardStateManager.getTimeRestore();

    var onSave = function onSave(_ref5) {
      var newTitle = _ref5.newTitle,
          newDescription = _ref5.newDescription,
          newCopyOnSave = _ref5.newCopyOnSave,
          newTimeRestore = _ref5.newTimeRestore,
          isTitleDuplicateConfirmed = _ref5.isTitleDuplicateConfirmed,
          onTitleDuplicate = _ref5.onTitleDuplicate;
      dashboardStateManager.setTitle(newTitle);
      dashboardStateManager.setDescription(newDescription);
      dashboardStateManager.savedDashboard.copyOnSave = newCopyOnSave;
      dashboardStateManager.setTimeRestore(newTimeRestore);
      var saveOptions = {
        confirmOverwrite: false,
        isTitleDuplicateConfirmed: isTitleDuplicateConfirmed,
        onTitleDuplicate: onTitleDuplicate
      };
      return save(saveOptions).then(function (response) {
        // If the save wasn't successful, put the original values back.
        if (!response.id) {
          dashboardStateManager.setTitle(currentTitle);
          dashboardStateManager.setDescription(currentDescription);
          dashboardStateManager.setTimeRestore(currentTimeRestore);
        }

        return response;
      });
    };

    var dashboardSaveModal = _react.default.createElement(_save_modal.DashboardSaveModal, {
      onSave: onSave,
      onClose: function onClose() {},
      title: currentTitle,
      description: currentDescription,
      timeRestore: currentTimeRestore,
      showCopyOnSave: dash.id ? true : false
    });

    (0, _show_saved_object_save_modal.showSaveModal)(dashboardSaveModal);
  };

  navActions[_top_nav_ids.TopNavIds.CLONE] = function () {
    var currentTitle = dashboardStateManager.getTitle();

    var onClone = function onClone(newTitle, isTitleDuplicateConfirmed, onTitleDuplicate) {
      dashboardStateManager.savedDashboard.copyOnSave = true;
      dashboardStateManager.setTitle(newTitle);
      var saveOptions = {
        confirmOverwrite: false,
        isTitleDuplicateConfirmed: isTitleDuplicateConfirmed,
        onTitleDuplicate: onTitleDuplicate
      };
      return save(saveOptions).then(function (response) {
        // If the save wasn't successful, put the original title back.
        if (response.error) {
          dashboardStateManager.setTitle(currentTitle);
        }

        return response;
      });
    };

    (0, _show_clone_modal.showCloneModal)(onClone, currentTitle);
  };

  navActions[_top_nav_ids.TopNavIds.ADD] = function () {
    if (dashboardContainer && !(0, _public2.isErrorEmbeddable)(dashboardContainer)) {
      (0, _public2.openAddPanelFlyout)({
        embeddable: dashboardContainer,
        getAllFactories: _legacy.start.getEmbeddableFactories,
        getFactory: _legacy.start.getEmbeddableFactory,
        notifications: _new_platform.npStart.core.notifications,
        overlays: _new_platform.npStart.core.overlays,
        SavedObjectFinder: _saved_object_finder.SavedObjectFinder
      });
    }
  };

  navActions[_top_nav_ids.TopNavIds.OPTIONS] = function (anchorElement) {
    (0, _show_options_popover.showOptionsPopover)({
      anchorElement: anchorElement,
      useMargins: dashboardStateManager.getUseMargins(),
      onUseMarginsChange: function onUseMarginsChange(isChecked) {
        dashboardStateManager.setUseMargins(isChecked);
      },
      hidePanelTitles: dashboardStateManager.getHidePanelTitles(),
      onHidePanelTitlesChange: function onHidePanelTitlesChange(isChecked) {
        dashboardStateManager.setHidePanelTitles(isChecked);
      }
    });
  };

  navActions[_top_nav_ids.TopNavIds.SHARE] = function (anchorElement) {
    (0, _share.showShareContextMenu)({
      anchorElement: anchorElement,
      allowEmbed: true,
      allowShortUrl: !dashboardConfig.getHideWriteControls(),
      getUnhashableStates: getUnhashableStates,
      objectId: dash.id,
      objectType: 'dashboard',
      shareContextMenuExtensions: shareContextMenuExtensions.raw,
      sharingData: {
        title: dash.title
      },
      isDirty: dashboardStateManager.getIsDirty()
    });
  };

  updateViewMode(dashboardStateManager.getViewMode()); // update root source when filters update

  var updateSubscription = queryFilter.getUpdates$().subscribe({
    next: function next() {
      $scope.model.filters = queryFilter.getFilters();
      dashboardStateManager.applyFilters($scope.model.query, $scope.model.filters);

      if (dashboardContainer) {
        dashboardContainer.updateInput({
          filters: $scope.model.filters
        });
      }
    }
  });
  $scope.$on('$destroy', function () {
    updateSubscription.unsubscribe();
    $scope.timefilterSubscriptions$.unsubscribe();
    dashboardStateManager.destroy();

    if (inputSubscription) {
      inputSubscription.unsubscribe();
    }

    if (outputSubscription) {
      outputSubscription.unsubscribe();
    }

    if (dashboardContainer) {
      dashboardContainer.destroy();
    }
  });
};

exports.DashboardAppController = DashboardAppController;