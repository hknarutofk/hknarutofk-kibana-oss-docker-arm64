"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrap = void 0;

var _lib = require("./lib");

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

/**
 * This method initializes Embeddable plugin with initial set of
 * triggers and actions.
 *
 * @param api
 */
var bootstrap = function bootstrap(api) {
  var triggerContext = {
    id: _lib.CONTEXT_MENU_TRIGGER,
    title: 'Context menu',
    description: 'Triggered on top-right corner context-menu select.',
    actionIds: []
  };
  var triggerFilter = {
    id: _lib.APPLY_FILTER_TRIGGER,
    title: 'Filter click',
    description: 'Triggered when user applies filter to an embeddable.',
    actionIds: []
  };
  var triggerBadge = {
    id: _lib.PANEL_BADGE_TRIGGER,
    title: 'Panel badges',
    description: 'Actions appear in title bar when an embeddable loads in a panel',
    actionIds: []
  };
  var actionApplyFilter = new _lib.ApplyFilterAction();
  api.registerTrigger(triggerContext);
  api.registerTrigger(triggerFilter);
  api.registerAction(actionApplyFilter);
  api.registerTrigger(triggerBadge);
  api.attachAction(triggerFilter.id, actionApplyFilter.id);
};

exports.bootstrap = bootstrap;