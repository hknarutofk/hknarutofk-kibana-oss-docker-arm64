"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLegendPositions = exports.LegendPositions = void 0;

var _i18n = require("@kbn/i18n");

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
var LegendPositions;
exports.LegendPositions = LegendPositions;

(function (LegendPositions) {
  LegendPositions["RIGHT"] = "right";
  LegendPositions["LEFT"] = "left";
  LegendPositions["TOP"] = "top";
  LegendPositions["BOTTOM"] = "bottom";
})(LegendPositions || (exports.LegendPositions = LegendPositions = {}));

var getLegendPositions = function getLegendPositions() {
  return [{
    text: _i18n.i18n.translate('kbnVislibVisTypes.legendPositions.topText', {
      defaultMessage: 'Top'
    }),
    value: LegendPositions.TOP
  }, {
    text: _i18n.i18n.translate('kbnVislibVisTypes.legendPositions.leftText', {
      defaultMessage: 'Left'
    }),
    value: LegendPositions.LEFT
  }, {
    text: _i18n.i18n.translate('kbnVislibVisTypes.legendPositions.rightText', {
      defaultMessage: 'Right'
    }),
    value: LegendPositions.RIGHT
  }, {
    text: _i18n.i18n.translate('kbnVislibVisTypes.legendPositions.bottomText', {
      defaultMessage: 'Bottom'
    }),
    value: LegendPositions.BOTTOM
  }];
};

exports.getLegendPositions = getLegendPositions;