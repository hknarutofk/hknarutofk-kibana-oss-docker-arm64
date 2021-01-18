"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.esSearchStrategyProvider = void 0;

var _operators = require("rxjs/operators");

var _to_snake_case = require("./to_snake_case");

var _ = require("..");

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
const esSearchStrategyProvider = (config$, logger, usage) => {
  return {
    search: async (context, request, options) => {
      var _request$params;

      logger.debug(`search ${(_request$params = request.params) === null || _request$params === void 0 ? void 0 : _request$params.index}`);
      const config = await config$.pipe((0, _operators.first)()).toPromise();
      const uiSettingsClient = await context.core.uiSettings.client; // Only default index pattern type is supported here.
      // See data_enhanced for other type support.

      if (!!request.indexType) {
        throw new Error(`Unsupported index pattern type ${request.indexType}`);
      } // ignoreThrottled is not supported in OSS


      const {
        ignoreThrottled,
        ...defaultParams
      } = await (0, _.getDefaultSearchParams)(uiSettingsClient);
      const params = (0, _to_snake_case.toSnakeCase)({ ...defaultParams,
        ...(0, _.getShardTimeout)(config),
        ...request.params
      });

      try {
        const promise = (0, _.shimAbortSignal)(context.core.elasticsearch.client.asCurrentUser.search(params), options === null || options === void 0 ? void 0 : options.abortSignal);
        const {
          body: rawResponse
        } = await promise;
        if (usage) usage.trackSuccess(rawResponse.took); // The above query will either complete or timeout and throw an error.
        // There is no progress indication on this api.

        return {
          isPartial: false,
          isRunning: false,
          rawResponse,
          ...(0, _.getTotalLoaded)(rawResponse._shards)
        };
      } catch (e) {
        if (usage) usage.trackError();
        throw e;
      }
    }
  };
};

exports.esSearchStrategyProvider = esSearchStrategyProvider;