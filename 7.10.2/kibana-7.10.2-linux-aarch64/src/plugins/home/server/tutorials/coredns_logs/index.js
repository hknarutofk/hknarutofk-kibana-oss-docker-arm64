"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.corednsLogsSpecProvider = corednsLogsSpecProvider;

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
function corednsLogsSpecProvider(context) {
  const moduleName = 'coredns';
  const platforms = ['OSX', 'DEB', 'RPM', 'WINDOWS'];
  return {
    id: 'corednsLogs',
    name: _i18n.i18n.translate('home.tutorials.corednsLogs.nameTitle', {
      defaultMessage: 'CoreDNS logs'
    }),
    moduleName,
    category: _tutorials.TutorialsCategory.SECURITY_SOLUTION,
    shortDescription: _i18n.i18n.translate('home.tutorials.corednsLogs.shortDescription', {
      defaultMessage: 'Collect CoreDNS logs.'
    }),
    longDescription: _i18n.i18n.translate('home.tutorials.corednsLogs.longDescription', {
      defaultMessage: 'This is a filebeat module for CoreDNS. It supports both standalone CoreDNS deployment and CoreDNS deployment in Kubernetes. \
[Learn more]({learnMoreLink}).',
      values: {
        learnMoreLink: '{config.docs.beats.filebeat}/filebeat-module-coredns.html'
      }
    }),
    euiIconType: '/plugins/home/assets/logos/coredns.svg',
    artifacts: {
      dashboards: [{
        id: '53aa1f70-443e-11e9-8548-ab7fbe04f038',
        linkLabel: _i18n.i18n.translate('home.tutorials.corednsLogs.artifacts.dashboards.linkLabel', {
          defaultMessage: '[Filebeat CoreDNS] Overview'
        }),
        isOverview: true
      }],
      exportedFields: {
        documentationUrl: '{config.docs.beats.filebeat}/exported-fields-coredns.html'
      }
    },
    completionTimeMinutes: 10,
    previewImagePath: '/plugins/home/assets/coredns_logs/screenshot.png',
    onPrem: (0, _filebeat_instructions.onPremInstructions)(moduleName, platforms, context),
    elasticCloud: (0, _filebeat_instructions.cloudInstructions)(moduleName, platforms),
    onPremElasticCloud: (0, _filebeat_instructions.onPremCloudInstructions)(moduleName, platforms)
  };
}