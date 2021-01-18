"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAngularHttpError = isAngularHttpError;
exports.formatAngularHttpError = formatAngularHttpError;

var _i18n = require("@kbn/i18n");

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
function isAngularHttpError(error) {
  return error && typeof error.status === 'number' && typeof error.statusText === 'string' && error.data && typeof error.data.message === 'string';
}

function formatAngularHttpError(error) {
  // is an Angular $http "error object"
  if (error.status === -1) {
    // status = -1 indicates that the request was failed to reach the server
    return _i18n.i18n.translate('common.ui.notify.fatalError.unavailableServerErrorMessage', {
      defaultMessage: 'An HTTP request has failed to connect. ' + 'Please check if the Kibana server is running and that your browser has a working connection, ' + 'or contact your system administrator.'
    });
  }

  return _i18n.i18n.translate('common.ui.notify.fatalError.errorStatusMessage', {
    defaultMessage: 'Error {errStatus} {errStatusText}: {errMessage}',
    values: {
      errStatus: error.status,
      errStatusText: error.statusText,
      errMessage: error.data.message
    }
  });
}