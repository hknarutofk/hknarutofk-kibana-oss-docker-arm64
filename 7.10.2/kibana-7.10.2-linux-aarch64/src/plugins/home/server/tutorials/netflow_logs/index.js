"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.netflowLogsSpecProvider = netflowLogsSpecProvider;

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
function netflowLogsSpecProvider(context) {
  const moduleName = 'netflow';
  const platforms = ['OSX', 'DEB', 'RPM', 'WINDOWS'];
  return {
    id: 'netflowLogs',
    name: _i18n.i18n.translate('home.tutorials.netflowLogs.nameTitle', {
      defaultMessage: 'NetFlow / IPFIX Collector'
    }),
    moduleName,
    category: _tutorials.TutorialsCategory.SECURITY_SOLUTION,
    shortDescription: _i18n.i18n.translate('home.tutorials.netflowLogs.shortDescription', {
      defaultMessage: 'Collect NetFlow and IPFIX flow records.'
    }),
    longDescription: _i18n.i18n.translate('home.tutorials.netflowLogs.longDescription', {
      defaultMessage: 'This is a module for receiving NetFlow and IPFIX flow records over UDP. This input supports NetFlow versions 1, 5, 6, 7, 8 and 9, as well as IPFIX. For NetFlow versions older than 9, fields are mapped automatically to NetFlow v9. \
[Learn more]({learnMoreLink}).',
      values: {
        learnMoreLink: '{config.docs.beats.filebeat}/filebeat-module-netflow.html'
      }
    }),
    euiIconType: 'logoBeats',
    artifacts: {
      dashboards: [{
        id: '34e26884-161a-4448-9556-43b5bf2f62a2',
        linkLabel: _i18n.i18n.translate('home.tutorials.netflowLogs.artifacts.dashboards.linkLabel', {
          defaultMessage: 'Netflow Overview'
        }),
        isOverview: true
      }],
      exportedFields: {
        documentationUrl: '{config.docs.beats.filebeat}/exported-fields-netflow.html'
      }
    },
    completionTimeMinutes: 10,
    onPrem: (0, _filebeat_instructions.onPremInstructions)(moduleName, platforms, context),
    elasticCloud: (0, _filebeat_instructions.cloudInstructions)(moduleName, platforms),
    onPremElasticCloud: (0, _filebeat_instructions.onPremCloudInstructions)(moduleName, platforms)
  };
}