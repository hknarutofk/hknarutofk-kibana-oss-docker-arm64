"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.migrateIncludeExcludeFormat = exports.isStringOrNumberType = exports.isStringType = exports.isNumberType = exports.isType = void 0;

var _lodash = require("lodash");

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
const isType = (...types) => {
  return agg => {
    const field = agg.params.field;
    return types.some(type => field && field.type === type);
  };
};

exports.isType = isType;
const isNumberType = isType('number');
exports.isNumberType = isNumberType;
const isStringType = isType('string');
exports.isStringType = isStringType;
const isStringOrNumberType = isType('string', 'number');
exports.isStringOrNumberType = isStringOrNumberType;
const migrateIncludeExcludeFormat = {
  serialize(value, agg) {
    if (this.shouldShow && !this.shouldShow(agg)) return;
    if (!value || (0, _lodash.isString)(value) || Array.isArray(value)) return value;else return value.pattern;
  },

  write(aggConfig, output) {
    const value = aggConfig.getParam(this.name);

    if (Array.isArray(value) && value.length > 0 && isNumberType(aggConfig)) {
      const parsedValue = value.filter(val => Number.isFinite(val));

      if (parsedValue.length) {
        output.params[this.name] = parsedValue;
      }
    } else if ((0, _lodash.isObject)(value)) {
      output.params[this.name] = value.pattern;
    } else if (value && isStringType(aggConfig)) {
      output.params[this.name] = value;
    }
  }

};
exports.migrateIncludeExcludeFormat = migrateIncludeExcludeFormat;