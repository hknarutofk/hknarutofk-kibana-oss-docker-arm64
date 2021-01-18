"use strict";

var _doc_views = require("ui/registry/doc_views");

var _i18n = require("@kbn/i18n");

var _json_code_block = require("./json_code_block");

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

/*
 * Registration of the the doc view: json
 * - used to display an ES hit as pretty printed JSON at Discover
 */
(0, _doc_views.addDocView)({
  title: _i18n.i18n.translate('kbnDocViews.json.jsonTitle', {
    defaultMessage: 'JSON'
  }),
  order: 20,
  component: _json_code_block.JsonCodeBlock
});