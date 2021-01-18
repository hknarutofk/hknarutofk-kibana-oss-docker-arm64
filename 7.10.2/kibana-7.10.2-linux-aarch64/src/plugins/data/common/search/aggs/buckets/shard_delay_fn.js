"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aggShardDelay = exports.aggShardDelayFnName = void 0;

var _i18n = require("@kbn/i18n");

var _get_parsed_value = require("../utils/get_parsed_value");

var _shard_delay = require("./shard_delay");

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
const aggShardDelayFnName = 'aggShardDelay';
exports.aggShardDelayFnName = aggShardDelayFnName;

const aggShardDelay = () => ({
  name: aggShardDelayFnName,
  help: _i18n.i18n.translate('data.search.aggs.function.buckets.shardDelay.help', {
    defaultMessage: 'Generates a serialized agg config for a Shard Delay agg'
  }),
  type: 'agg_type',
  args: {
    id: {
      types: ['string'],
      help: _i18n.i18n.translate('data.search.aggs.buckets.shardDelay.id.help', {
        defaultMessage: 'ID for this aggregation'
      })
    },
    enabled: {
      types: ['boolean'],
      default: true,
      help: _i18n.i18n.translate('data.search.aggs.buckets.shardDelay.enabled.help', {
        defaultMessage: 'Specifies whether this aggregation should be enabled'
      })
    },
    schema: {
      types: ['string'],
      help: _i18n.i18n.translate('data.search.aggs.buckets.shardDelay.schema.help', {
        defaultMessage: 'Schema to use for this aggregation'
      })
    },
    delay: {
      types: ['number'],
      help: _i18n.i18n.translate('data.search.aggs.buckets.shardDelay.delay.help', {
        defaultMessage: 'Delay in ms between shards to process.'
      })
    },
    json: {
      types: ['string'],
      help: _i18n.i18n.translate('data.search.aggs.buckets.shardDelay.json.help', {
        defaultMessage: 'Advanced json to include when the agg is sent to Elasticsearch'
      })
    },
    customLabel: {
      types: ['string'],
      help: _i18n.i18n.translate('data.search.aggs.buckets.shardDelay.customLabel.help', {
        defaultMessage: 'Represents a custom label for this aggregation'
      })
    }
  },
  fn: (input, args) => {
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
        type: _shard_delay.SHARD_DELAY_AGG_NAME,
        params: { ...rest,
          json: (0, _get_parsed_value.getParsedValue)(args, 'json'),
          delay: (0, _get_parsed_value.getParsedValue)(args, 'delay')
        }
      }
    };
  }
});

exports.aggShardDelay = aggShardDelay;