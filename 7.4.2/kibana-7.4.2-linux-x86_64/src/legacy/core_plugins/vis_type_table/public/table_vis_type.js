"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTableVisTypeDefinition = void 0;

var _i18n = require("@kbn/i18n");

var _schemas = require("ui/vis/editors/default/schemas");

var _table_vis_request_handler = require("./table_vis_request_handler");

var _table_vis = _interopRequireDefault(require("./table_vis.html"));

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
var createTableVisTypeDefinition = function createTableVisTypeDefinition(dependencies) {
  var responseHandler = (0, _table_vis_request_handler.createTableVisResponseHandler)();
  return dependencies.createAngularVisualization({
    type: 'table',
    name: 'table',
    title: _i18n.i18n.translate('visTypeTable.tableVisTitle', {
      defaultMessage: 'Data Table'
    }),
    icon: 'visTable',
    description: _i18n.i18n.translate('visTypeTable.tableVisDescription', {
      defaultMessage: 'Display values in a table'
    }),
    visConfig: {
      defaults: {
        perPage: 10,
        showPartialRows: false,
        showMetricsAtAllLevels: false,
        sort: {
          columnIndex: null,
          direction: null
        },
        showTotal: false,
        totalFunc: 'sum',
        percentageCol: ''
      },
      template: _table_vis.default
    },
    editorConfig: {
      optionsTemplate: '<table-vis-params></table-vis-params>',
      schemas: new _schemas.Schemas([{
        group: 'metrics',
        name: 'metric',
        title: _i18n.i18n.translate('visTypeTable.tableVisEditorConfig.schemas.metricTitle', {
          defaultMessage: 'Metric'
        }),
        aggFilter: ['!geo_centroid', '!geo_bounds'],
        aggSettings: {
          top_hits: {
            allowStrings: true
          }
        },
        min: 1,
        defaults: [{
          type: 'count',
          schema: 'metric'
        }]
      }, {
        group: 'buckets',
        name: 'bucket',
        title: _i18n.i18n.translate('visTypeTable.tableVisEditorConfig.schemas.bucketTitle', {
          defaultMessage: 'Split rows'
        }),
        aggFilter: ['!filter']
      }, {
        group: 'buckets',
        name: 'split',
        title: _i18n.i18n.translate('visTypeTable.tableVisEditorConfig.schemas.splitTitle', {
          defaultMessage: 'Split table'
        }),
        min: 0,
        max: 1,
        aggFilter: ['!filter']
      }])
    },
    responseHandler: responseHandler,
    hierarchicalData: function hierarchicalData(vis) {
      return Boolean(vis.params.showPartialRows || vis.params.showMetricsAtAllLevels);
    }
  });
};

exports.createTableVisTypeDefinition = createTableVisTypeDefinition;