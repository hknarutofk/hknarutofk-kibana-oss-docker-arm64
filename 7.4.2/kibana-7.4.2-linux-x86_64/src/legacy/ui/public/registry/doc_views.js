"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDocView = addDocView;
exports.emptyDocViews = emptyDocViews;
exports.getDocViewsSorted = getDocViewsSorted;
Object.defineProperty(exports, "DocViewRenderProps", {
  enumerable: true,
  get: function get() {
    return _doc_views_types.DocViewRenderProps;
  }
});
Object.defineProperty(exports, "DocView", {
  enumerable: true,
  get: function get() {
    return _doc_views_types.DocView;
  }
});
Object.defineProperty(exports, "DocViewRenderFn", {
  enumerable: true,
  get: function get() {
    return _doc_views_types.DocViewRenderFn;
  }
});
exports.DocViewsRegistryProvider = exports.docViews = void 0;

var _doc_views_helpers = require("./doc_views_helpers");

var _doc_views_types = require("./doc_views_types");

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
var docViews = [];
/**
 * Extends and adds the given doc view to the registry array
 */

exports.docViews = docViews;

function addDocView(docView) {
  if (docView.directive) {
    // convert angular directive to render function for backwards compatibility
    docView.render = (0, _doc_views_helpers.convertDirectiveToRenderFn)(docView.directive);
  }

  if (typeof docView.shouldShow !== 'function') {
    docView.shouldShow = function () {
      return true;
    };
  }

  docViews.push(docView);
}
/**
 * Empty array of doc views for testing
 */


function emptyDocViews() {
  docViews.length = 0;
}
/**
 * Returns a sorted array of doc_views for rendering tabs
 */


function getDocViewsSorted(hit) {
  return docViews.filter(function (docView) {
    return docView.shouldShow(hit);
  }).sort(function (a, b) {
    return Number(a.order) > Number(b.order) ? 1 : -1;
  });
}
/**
 * Provider for compatibility with 3rd Party plugins
 */


var DocViewsRegistryProvider = {
  register: function register(docViewRaw) {
    var docView = typeof docViewRaw === 'function' ? docViewRaw() : docViewRaw;
    addDocView(docView);
  }
};
exports.DocViewsRegistryProvider = DocViewsRegistryProvider;