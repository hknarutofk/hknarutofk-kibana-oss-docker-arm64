"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startServers = startServers;
exports.getServices = getServices;
exports.stopServers = stopServers;

var _kbn_server = require("../../../../test_helpers/kbn_server");

var _http_server = require("../../../http/http_server.mocks");

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
let servers;
let esServer;
let kbn;
let kbnServer;
let services;

async function startServers() {
  servers = (0, _kbn_server.createTestServers)({
    adjustTimeout: t => jest.setTimeout(t),
    settings: {
      kbn: {
        uiSettings: {
          overrides: {
            foo: 'bar'
          }
        }
      }
    }
  });
  esServer = await servers.startES();
  kbn = await servers.startKibana();
  kbnServer = kbn.kbnServer;
}

function getServices() {
  if (services) {
    return services;
  }

  const callCluster = esServer.es.getCallCluster();
  const savedObjectsClient = kbn.coreStart.savedObjects.getScopedClient(_http_server.httpServerMock.createKibanaRequest());
  const uiSettings = kbnServer.newPlatform.start.core.uiSettings.asScopedToClient(savedObjectsClient);
  services = {
    kbnServer,
    callCluster,
    savedObjectsClient,
    uiSettings
  };
  return services;
}

async function stopServers() {
  services = null;
  kbnServer = null;

  if (servers) {
    await esServer.stop();
    await kbn.stop();
  }
}