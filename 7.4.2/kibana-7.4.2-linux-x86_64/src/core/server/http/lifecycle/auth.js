"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adoptToHapiAuthFormat = adoptToHapiAuthFormat;

var _router = require("../router");

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
var ResultType;

(function (ResultType) {
  ResultType["authenticated"] = "authenticated";
})(ResultType || (ResultType = {}));

const authResult = {
  authenticated(data = {}) {
    return {
      type: ResultType.authenticated,
      state: data.state,
      requestHeaders: data.requestHeaders,
      responseHeaders: data.responseHeaders
    };
  },

  isAuthenticated(result) {
    return result && result.type === ResultType.authenticated;
  }

};
/**
 * Auth Headers map
 * @public
 * */

const toolkit = {
  authenticated: authResult.authenticated
};
/** @public */

/** @public */
function adoptToHapiAuthFormat(fn, log, onSuccess = () => undefined) {
  return async function interceptAuth(request, responseToolkit) {
    const hapiResponseAdapter = new _router.HapiResponseAdapter(responseToolkit);

    try {
      const result = await fn(_router.KibanaRequest.from(request, undefined, false), _router.lifecycleResponseFactory, toolkit);

      if (result instanceof _router.KibanaResponse) {
        return hapiResponseAdapter.handle(result);
      }

      if (authResult.isAuthenticated(result)) {
        onSuccess(request, {
          state: result.state,
          requestHeaders: result.requestHeaders,
          responseHeaders: result.responseHeaders
        });
        return responseToolkit.authenticated({
          credentials: result.state || {}
        });
      }

      throw new Error(`Unexpected result from Authenticate. Expected AuthResult or KibanaResponse, but given: ${result}.`);
    } catch (error) {
      log.error(error);
      return hapiResponseAdapter.toInternalError();
    }
  };
}