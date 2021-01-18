"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logstashLogsSpecProvider = logstashLogsSpecProvider;

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
function logstashLogsSpecProvider(context) {
  const moduleName = 'logstash';
  const platforms = ['OSX', 'DEB', 'RPM', 'WINDOWS'];
  return {
    id: 'logstashLogs',
    name: _i18n.i18n.translate('home.tutorials.logstashLogs.nameTitle', {
      defaultMessage: 'Logstash logs'
    }),
    moduleName,
    category: _tutorials.TutorialsCategory.SECURITY_SOLUTION,
    shortDescription: _i18n.i18n.translate('home.tutorials.logstashLogs.shortDescription', {
      defaultMessage: 'Collect Logstash main and slow logs.'
    }),
    longDescription: _i18n.i18n.translate('home.tutorials.logstashLogs.longDescription', {
      defaultMessage: 'The modules parse Logstash regular logs and the slow log, it will support the plain text format and the JSON format. \
[Learn more]({learnMoreLink}).',
      values: {
        learnMoreLink: '{config.docs.beats.filebeat}/filebeat-module-logstash.html'
      }
    }),
    euiIconType: 'logoLogstash',
    artifacts: {
      dashboards: [{
        id: 'Filebeat-Logstash-Log-Dashboard-ecs',
        linkLabel: _i18n.i18n.translate('home.tutorials.logstashLogs.artifacts.dashboards.linkLabel', {
          defaultMessage: 'Logstash Logs'
        }),
        isOverview: true
      }],
      exportedFields: {
        documentationUrl: '{config.docs.beats.filebeat}/exported-fields-logstash.html'
      }
    },
    completionTimeMinutes: 10,
    onPrem: (0, _filebeat_instructions.onPremInstructions)(moduleName, platforms, context),
    elasticCloud: (0, _filebeat_instructions.cloudInstructions)(moduleName, platforms),
    onPremElasticCloud: (0, _filebeat_instructions.onPremCloudInstructions)(moduleName, platforms)
  };
}