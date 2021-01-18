"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observableSelector = void 0;

var _rxjs = require("rxjs");

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
var defaultComparator = function defaultComparator(previous, current) {
  return previous === current;
};

var observableSelector = function observableSelector(state, state$, selector) {
  var comparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultComparator;
  var previousResult = selector(state);
  var result$ = new _rxjs.BehaviorSubject(previousResult);
  var subscription = state$.subscribe(function (value) {
    var result = selector(value);
    var isEqual = comparator(previousResult, result);

    if (!isEqual) {
      result$.next(result);
    }

    previousResult = result;
  });
  return [result$, subscription.unsubscribe];
};

exports.observableSelector = observableSelector;