"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchSourceService = void 0;

var _ = require("./");

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
class SearchSourceService {
  setup() {}

  start(indexPatterns, dependencies) {
    return {
      /**
       * creates searchsource based on serialized search source fields
       */
      create: (0, _.createSearchSource)(indexPatterns, dependencies),

      /**
       * creates an enpty search source
       */
      createEmpty: () => {
        return new _.SearchSource({}, dependencies);
      }
    };
  }

  stop() {}

}

exports.SearchSourceService = SearchSourceService;