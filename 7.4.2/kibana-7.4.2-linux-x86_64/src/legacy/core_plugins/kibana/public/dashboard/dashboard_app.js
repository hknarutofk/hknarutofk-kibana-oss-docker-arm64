"use strict";

var _modules = require("ui/modules");

var _dashboard_app_controller = require("./dashboard_app_controller");

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
// @ts-ignore
var app = _modules.uiModules.get('app/dashboard', ['elasticsearch', 'ngRoute', 'react', 'kibana/courier', 'kibana/config']);

app.directive('dashboardApp', function ($injector) {
  var AppState = $injector.get('AppState');
  var kbnUrl = $injector.get('kbnUrl');
  var confirmModal = $injector.get('confirmModal');
  var config = $injector.get('config');
  var courier = $injector.get('courier');
  var Private = $injector.get('Private');
  var indexPatterns = $injector.get('indexPatterns');
  return {
    restrict: 'E',
    controllerAs: 'dashboardApp',
    controller: function controller($scope, $route, $routeParams, getAppState, dashboardConfig, localStorage) {
      return new _dashboard_app_controller.DashboardAppController({
        $route: $route,
        $scope: $scope,
        $routeParams: $routeParams,
        getAppState: getAppState,
        dashboardConfig: dashboardConfig,
        localStorage: localStorage,
        Private: Private,
        kbnUrl: kbnUrl,
        AppStateClass: AppState,
        indexPatterns: indexPatterns,
        config: config,
        confirmModal: confirmModal,
        courier: courier
      });
    }
  };
});