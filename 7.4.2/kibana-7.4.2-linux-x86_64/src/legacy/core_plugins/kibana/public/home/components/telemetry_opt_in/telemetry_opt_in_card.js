"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTelemetryOptInCard = renderTelemetryOptInCard;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@kbn/i18n/react");

var _eui = require("@elastic/eui");

var _opt_in_message = require("./opt_in_message");

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
function renderTelemetryOptInCard(_ref) {
  var urlBasePath = _ref.urlBasePath,
      fetchTelemetry = _ref.fetchTelemetry,
      onConfirm = _ref.onConfirm,
      onDecline = _ref.onDecline;
  return _react.default.createElement(_eui.EuiCard, {
    image: "".concat(urlBasePath, "/plugins/kibana/assets/illo_telemetry.png"),
    textAlign: "left",
    title: _react.default.createElement(_react2.FormattedMessage, {
      id: "kbn.home.telemtery.optInCardTitle",
      defaultMessage: "Help us improve the Elastic Stack"
    }),
    description: _react.default.createElement(_opt_in_message.OptInMessage, {
      fetchTelemetry: fetchTelemetry
    }),
    footer: _react.default.createElement("footer", null, _react.default.createElement(_eui.EuiButton, {
      onClick: onConfirm,
      className: "homWelcome__footerAction",
      "data-test-subj": "WelcomeScreenOptInConfirm",
      fill: true
    }, _react.default.createElement(_react2.FormattedMessage, {
      id: "kbn.home.telemtery.optInCardConfirmButtonLabel",
      defaultMessage: "Yes"
    })), _react.default.createElement(_eui.EuiButton, {
      className: "homWelcome__footerAction",
      onClick: onDecline,
      "data-test-subj": "WelcomeScreenOptInCancel",
      fill: true
    }, _react.default.createElement(_react2.FormattedMessage, {
      id: "kbn.home.telemtery.optInCardDeclineButtonLabel",
      defaultMessage: "No"
    })))
  });
}