"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.googlecloudMetricsSpecProvider = googlecloudMetricsSpecProvider;

var _i18n = require("@kbn/i18n");

var _tutorials = require("../../services/tutorials");

var _metricbeat_instructions = require("../instructions/metricbeat_instructions");

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
function googlecloudMetricsSpecProvider(context) {
  const moduleName = 'googlecloud';
  return {
    id: 'googlecloudMetrics',
    name: _i18n.i18n.translate('home.tutorials.googlecloudMetrics.nameTitle', {
      defaultMessage: 'Google Cloud metrics'
    }),
    moduleName,
    category: _tutorials.TutorialsCategory.METRICS,
    shortDescription: _i18n.i18n.translate('home.tutorials.googlecloudMetrics.shortDescription', {
      defaultMessage: 'Fetch monitoring metrics from Google Cloud Platform using Stackdriver Monitoring API.'
    }),
    longDescription: _i18n.i18n.translate('home.tutorials.googlecloudMetrics.longDescription', {
      defaultMessage: 'The `googlecloud` Metricbeat module fetches monitoring metrics from Google Cloud Platform using Stackdriver Monitoring API. \
[Learn more]({learnMoreLink}).',
      values: {
        learnMoreLink: '{config.docs.beats.metricbeat}/metricbeat-module-googlecloud.html'
      }
    }),
    euiIconType: 'logoGCP',
    isBeta: false,
    artifacts: {
      dashboards: [{
        id: 'f40ee870-5e4a-11ea-a4f6-717338406083',
        linkLabel: _i18n.i18n.translate('home.tutorials.googlecloudMetrics.artifacts.dashboards.linkLabel', {
          defaultMessage: 'Google Cloud metrics dashboard'
        }),
        isOverview: true
      }],
      exportedFields: {
        documentationUrl: '{config.docs.beats.metricbeat}/exported-fields-googlecloud.html'
      }
    },
    completionTimeMinutes: 10,
    previewImagePath: '/plugins/home/assets/googlecloud_metrics/screenshot.png',
    onPrem: (0, _metricbeat_instructions.onPremInstructions)(moduleName, context),
    elasticCloud: (0, _metricbeat_instructions.cloudInstructions)(moduleName),
    onPremElasticCloud: (0, _metricbeat_instructions.onPremCloudInstructions)(moduleName)
  };
}