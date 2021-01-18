"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auditdLogsSpecProvider = auditdLogsSpecProvider;

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
function auditdLogsSpecProvider(context) {
  const moduleName = 'auditd';
  const platforms = ['DEB', 'RPM'];
  return {
    id: 'auditdLogs',
    name: _i18n.i18n.translate('home.tutorials.auditdLogs.nameTitle', {
      defaultMessage: 'Auditd logs'
    }),
    moduleName,
    category: _tutorials.TutorialsCategory.SECURITY_SOLUTION,
    shortDescription: _i18n.i18n.translate('home.tutorials.auditdLogs.shortDescription', {
      defaultMessage: 'Collect logs from the Linux auditd daemon.'
    }),
    longDescription: _i18n.i18n.translate('home.tutorials.auditdLogs.longDescription', {
      defaultMessage: 'The  module collects and parses logs from the audit daemon ( `auditd`). \
[Learn more]({learnMoreLink}).',
      values: {
        learnMoreLink: '{config.docs.beats.filebeat}/filebeat-module-auditd.html'
      }
    }),
    euiIconType: '/plugins/home/assets/logos/linux.svg',
    artifacts: {
      dashboards: [{
        id: 'dfbb49f0-0a0f-11e7-8a62-2d05eaaac5cb-ecs',
        linkLabel: _i18n.i18n.translate('home.tutorials.auditdLogs.artifacts.dashboards.linkLabel', {
          defaultMessage: 'Audit Events'
        }),
        isOverview: true
      }],
      exportedFields: {
        documentationUrl: '{config.docs.beats.filebeat}/exported-fields-auditd.html'
      }
    },
    completionTimeMinutes: 10,
    previewImagePath: '/plugins/home/assets/auditd_logs/screenshot.png',
    onPrem: (0, _filebeat_instructions.onPremInstructions)(moduleName, platforms, context),
    elasticCloud: (0, _filebeat_instructions.cloudInstructions)(moduleName, platforms),
    onPremElasticCloud: (0, _filebeat_instructions.onPremCloudInstructions)(moduleName, platforms)
  };
}