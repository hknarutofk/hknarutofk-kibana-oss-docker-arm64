"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.haproxyLogsSpecProvider = haproxyLogsSpecProvider;

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
function haproxyLogsSpecProvider(context) {
  const moduleName = 'haproxy';
  const platforms = ['OSX', 'DEB', 'RPM', 'WINDOWS'];
  return {
    id: 'haproxyLogs',
    name: _i18n.i18n.translate('home.tutorials.haproxyLogs.nameTitle', {
      defaultMessage: 'HAProxy logs'
    }),
    moduleName,
    category: _tutorials.TutorialsCategory.SECURITY_SOLUTION,
    shortDescription: _i18n.i18n.translate('home.tutorials.haproxyLogs.shortDescription', {
      defaultMessage: 'Collect HAProxy logs.'
    }),
    longDescription: _i18n.i18n.translate('home.tutorials.haproxyLogs.longDescription', {
      defaultMessage: 'The  module collects and parses logs from a ( `haproxy`) process. \
[Learn more]({learnMoreLink}).',
      values: {
        learnMoreLink: '{config.docs.beats.filebeat}/filebeat-module-haproxy.html'
      }
    }),
    euiIconType: 'logoHAproxy',
    artifacts: {
      dashboards: [{
        id: '3560d580-aa34-11e8-9c06-877f0445e3e0-ecs',
        linkLabel: _i18n.i18n.translate('home.tutorials.haproxyLogs.artifacts.dashboards.linkLabel', {
          defaultMessage: 'HAProxy Overview'
        }),
        isOverview: true
      }],
      exportedFields: {
        documentationUrl: '{config.docs.beats.filebeat}/exported-fields-haproxy.html'
      }
    },
    completionTimeMinutes: 10,
    previewImagePath: '/plugins/home/assets/haproxy_logs/screenshot.png',
    onPrem: (0, _filebeat_instructions.onPremInstructions)(moduleName, platforms, context),
    elasticCloud: (0, _filebeat_instructions.cloudInstructions)(moduleName, platforms),
    onPremElasticCloud: (0, _filebeat_instructions.onPremCloudInstructions)(moduleName, platforms)
  };
}