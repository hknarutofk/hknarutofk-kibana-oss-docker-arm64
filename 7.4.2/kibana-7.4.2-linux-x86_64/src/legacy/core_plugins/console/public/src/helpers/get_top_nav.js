"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTopNavConfig = getTopNavConfig;

var _i18n = require("@kbn/i18n");

var _settings_show_modal = require("./settings_show_modal");

var _help_show_panel = require("./help_show_panel");

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
// help
function getTopNavConfig($scope, toggleHistory) {
  return [{
    id: 'history',
    label: _i18n.i18n.translate('console.topNav.historyTabLabel', {
      defaultMessage: 'History'
    }),
    description: _i18n.i18n.translate('console.topNav.historyTabDescription', {
      defaultMessage: 'History'
    }),
    run: function run() {
      $scope.$evalAsync(toggleHistory);
    },
    testId: 'consoleHistoryButton'
  }, {
    id: 'settings',
    label: _i18n.i18n.translate('console.topNav.settingsTabLabel', {
      defaultMessage: 'Settings'
    }),
    description: _i18n.i18n.translate('console.topNav.settingsTabDescription', {
      defaultMessage: 'Settings'
    }),
    run: function run() {
      (0, _settings_show_modal.showSettingsModal)();
    },
    testId: 'consoleSettingsButton'
  }, {
    id: 'help',
    label: _i18n.i18n.translate('console.topNav.helpTabLabel', {
      defaultMessage: 'Help'
    }),
    description: _i18n.i18n.translate('console.topNav.helpTabDescription', {
      defaultMessage: 'Help'
    }),
    run: function run() {
      var hideHelpPanel = (0, _help_show_panel.showHelpPanel)();
      $scope.$on('$destroy', function () {
        hideHelpPanel();
      });
    },
    testId: 'consoleHelpButton'
  }];
}