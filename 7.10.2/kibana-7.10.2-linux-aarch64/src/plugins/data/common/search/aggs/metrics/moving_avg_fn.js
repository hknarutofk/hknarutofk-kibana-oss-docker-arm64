"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aggMovingAvg = void 0;

var _i18n = require("@kbn/i18n");

var _ = require("../");

var _get_parsed_value = require("../utils/get_parsed_value");

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
const fnName = 'aggMovingAvg';

const aggMovingAvg = () => ({
  name: fnName,
  help: _i18n.i18n.translate('data.search.aggs.function.metrics.moving_avg.help', {
    defaultMessage: 'Generates a serialized agg config for a Moving Average agg'
  }),
  type: 'agg_type',
  args: {
    id: {
      types: ['string'],
      help: _i18n.i18n.translate('data.search.aggs.metrics.moving_avg.id.help', {
        defaultMessage: 'ID for this aggregation'
      })
    },
    enabled: {
      types: ['boolean'],
      default: true,
      help: _i18n.i18n.translate('data.search.aggs.metrics.moving_avg.enabled.help', {
        defaultMessage: 'Specifies whether this aggregation should be enabled'
      })
    },
    schema: {
      types: ['string'],
      help: _i18n.i18n.translate('data.search.aggs.metrics.moving_avg.schema.help', {
        defaultMessage: 'Schema to use for this aggregation'
      })
    },
    metricAgg: {
      types: ['string'],
      help: _i18n.i18n.translate('data.search.aggs.metrics.moving_avg.metricAgg.help', {
        defaultMessage: 'Id for finding agg config to use for building parent pipeline aggregations'
      })
    },
    customMetric: {
      types: ['agg_type'],
      help: _i18n.i18n.translate('data.search.aggs.metrics.moving_avg.customMetric.help', {
        defaultMessage: 'Agg config to use for building parent pipeline aggregations'
      })
    },
    window: {
      types: ['number'],
      help: _i18n.i18n.translate('data.search.aggs.metrics.moving_avg.window.help', {
        defaultMessage: 'The size of window to "slide" across the histogram.'
      })
    },
    buckets_path: {
      types: ['string'],
      required: true,
      help: _i18n.i18n.translate('data.search.aggs.metrics.derivative.buckets_path.help', {
        defaultMessage: 'Path to the metric of interest'
      })
    },
    script: {
      types: ['string'],
      help: _i18n.i18n.translate('data.search.aggs.metrics.moving_avg.script.help', {
        defaultMessage: 'Id for finding agg config to use for building parent pipeline aggregations'
      })
    },
    json: {
      types: ['string'],
      help: _i18n.i18n.translate('data.search.aggs.metrics.moving_avg.json.help', {
        defaultMessage: 'Advanced json to include when the agg is sent to Elasticsearch'
      })
    },
    customLabel: {
      types: ['string'],
      help: _i18n.i18n.translate('data.search.aggs.metrics.moving_avg.customLabel.help', {
        defaultMessage: 'Represents a custom label for this aggregation'
      })
    }
  },
  fn: (input, args) => {
    var _args$customMetric;

    const {
      id,
      enabled,
      schema,
      ...rest
    } = args;
    return {
      type: 'agg_type',
      value: {
        id,
        enabled,
        schema,
        type: _.METRIC_TYPES.MOVING_FN,
        params: { ...rest,
          customMetric: (_args$customMetric = args.customMetric) === null || _args$customMetric === void 0 ? void 0 : _args$customMetric.value,
          json: (0, _get_parsed_value.getParsedValue)(args, 'json')
        }
      }
    };
  }
});

exports.aggMovingAvg = aggMovingAvg;