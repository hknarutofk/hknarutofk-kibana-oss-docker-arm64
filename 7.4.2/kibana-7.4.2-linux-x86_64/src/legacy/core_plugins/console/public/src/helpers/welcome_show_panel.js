"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showWelcomePanel = showWelcomePanel;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _i18n = require("ui/i18n");

var _welcome_panel = require("../components/welcome_panel");

var _storage = _interopRequireDefault(require("../storage"));

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
// @ts-ignore
var isOpen = false;

function showWelcomePanel() {
  var onClose = function onClose() {
    if (!container) return;

    _reactDom.default.unmountComponentAtNode(container);

    isOpen = false;
  };

  var onDismiss = function onDismiss() {
    _storage.default.set('version_welcome_shown', '@@SENSE_REVISION');

    onClose();
  };

  var container = document.getElementById('consoleWelcomePanel');

  if (container && !isOpen) {
    isOpen = true;

    var element = _react.default.createElement(_i18n.I18nContext, null, _react.default.createElement(_welcome_panel.WelcomePanel, {
      onDismiss: onDismiss
    }));

    _reactDom.default.render(element, container);
  }

  return onClose;
}