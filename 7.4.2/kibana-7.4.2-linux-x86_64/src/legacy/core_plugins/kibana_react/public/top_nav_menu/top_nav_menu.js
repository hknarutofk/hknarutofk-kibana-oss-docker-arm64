"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopNavMenu = TopNavMenu;

var _react = _interopRequireDefault(require("react"));

var _eui = require("@elastic/eui");

var _react2 = require("@kbn/i18n/react");

var _top_nav_menu_item = require("./top_nav_menu_item");

var _public = require("../../../../core_plugins/data/public");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Top Nav Menu is a convenience wrapper component for:
 * - Top navigation menu - configured by an array of `TopNavMenuData` objects
 * - Search Bar - which includes Filter Bar \ Query Input \ Timepicker.
 *
 * See SearchBar documentation to learn more about its properties.
 *
 **/
function TopNavMenu(props) {
  function renderItems() {
    if (!props.config) return;
    return props.config.map(function (menuItem, i) {
      return _react.default.createElement(_eui.EuiFlexItem, {
        grow: false,
        key: "nav-menu-".concat(i)
      }, _react.default.createElement(_top_nav_menu_item.TopNavMenuItem, menuItem));
    });
  }

  function renderSearchBar() {
    // Validate presense of all required fields
    if (!props.showSearchBar || !props.savedObjectsClient) return;
    return _react.default.createElement(_public.SearchBar, {
      savedObjectsClient: props.savedObjectsClient,
      query: props.query,
      filters: props.filters,
      toasts: props.toasts,
      uiSettings: props.uiSettings,
      showQueryBar: props.showQueryBar,
      showQueryInput: props.showQueryInput,
      showFilterBar: props.showFilterBar,
      showDatePicker: props.showDatePicker,
      appName: props.appName,
      screenTitle: props.screenTitle,
      onQuerySubmit: props.onQuerySubmit,
      onFiltersUpdated: props.onFiltersUpdated,
      dateRangeFrom: props.dateRangeFrom,
      dateRangeTo: props.dateRangeTo,
      isRefreshPaused: props.isRefreshPaused,
      showAutoRefreshOnly: props.showAutoRefreshOnly,
      onRefreshChange: props.onRefreshChange,
      refreshInterval: props.refreshInterval,
      indexPatterns: props.indexPatterns,
      store: props.store,
      savedQuery: props.savedQuery,
      showSaveQuery: props.showSaveQuery,
      onClearSavedQuery: props.onClearSavedQuery,
      onSaved: props.onSaved,
      onSavedQueryUpdated: props.onSavedQueryUpdated
    });
  }

  function renderLayout() {
    return _react.default.createElement("span", {
      className: "kbnTopNavMenu__wrapper"
    }, _react.default.createElement(_eui.EuiFlexGroup, {
      "data-test-subj": "top-nav",
      justifyContent: "flexStart",
      gutterSize: "none",
      className: "kbnTopNavMenu",
      responsive: false
    }, renderItems()), renderSearchBar());
  }

  return _react.default.createElement(_react2.I18nProvider, null, renderLayout());
}

TopNavMenu.defaultProps = {
  showSearchBar: false,
  showQueryBar: true,
  showQueryInput: true,
  showDatePicker: true,
  showFilterBar: true,
  screenTitle: ''
};