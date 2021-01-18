"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traefikLogsSpecProvider = traefikLogsSpecProvider;

var _i18n = require("@kbn/i18n");

var _tutorials = require("../../services/tutorials");

var _filebeat_instructions = require("../instructions/filebeat_instructions");

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
function traefikLogsSpecProvider(context) {
  const moduleName = 'traefik';
  const platforms = ['OSX', 'DEB', 'RPM', 'WINDOWS'];
  return {
    id: 'traefikLogs',
    name: _i18n.i18n.translate('home.tutorials.traefikLogs.nameTitle', {
      defaultMessage: 'Traefik logs'
    }),
    moduleName,
    category: _tutorials.TutorialsCategory.SECURITY_SOLUTION,
    shortDescription: _i18n.i18n.translate('home.tutorials.traefikLogs.shortDescription', {
      defaultMessage: 'Collect Traefik access logs.'
    }),
    longDescription: _i18n.i18n.translate('home.tutorials.traefikLogs.longDescription', {
      defaultMessage: 'The  module parses access logs created by [Træfik](https://traefik.io/). \
[Learn more]({learnMoreLink}).',
      values: {
        learnMoreLink: '{config.docs.beats.filebeat}/filebeat-module-traefik.html'
      }
    }),
    euiIconType: '/plugins/home/assets/logos/traefik.svg',
    artifacts: {
      dashboards: [{
        id: 'Filebeat-Traefik-Dashboard-ecs',
        linkLabel: _i18n.i18n.translate('home.tutorials.traefikLogs.artifacts.dashboards.linkLabel', {
          defaultMessage: 'Traefik Access Logs'
        }),
        isOverview: true
      }],
      exportedFields: {
        documentationUrl: '{config.docs.beats.filebeat}/exported-fields-traefik.html'
      }
    },
    completionTimeMinutes: 10,
    onPrem: (0, _filebeat_instructions.onPremInstructions)(moduleName, platforms, context),
    elasticCloud: (0, _filebeat_instructions.cloudInstructions)(moduleName, platforms),
    onPremElasticCloud: (0, _filebeat_instructions.onPremCloudInstructions)(moduleName, platforms)
  };
}