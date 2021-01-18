"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoreRouteHandlerContext = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _client = new WeakMap();

var _legacy = new WeakMap();

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
// eslint-disable-next-line max-classes-per-file
class CoreElasticsearchRouteHandlerContext {
  constructor(elasticsearchStart, request) {
    this.elasticsearchStart = elasticsearchStart;
    this.request = request;

    _client.set(this, {
      writable: true,
      value: void 0
    });

    _legacy.set(this, {
      writable: true,
      value: void 0
    });
  }

  get client() {
    if (_classPrivateFieldGet(this, _client) == null) {
      _classPrivateFieldSet(this, _client, this.elasticsearchStart.client.asScoped(this.request));
    }

    return _classPrivateFieldGet(this, _client);
  }

  get legacy() {
    if (_classPrivateFieldGet(this, _legacy) == null) {
      _classPrivateFieldSet(this, _legacy, {
        client: this.elasticsearchStart.legacy.client.asScoped(this.request)
      });
    }

    return _classPrivateFieldGet(this, _legacy);
  }

}

var _scopedSavedObjectsClient = new WeakMap();

var _typeRegistry = new WeakMap();

class CoreSavedObjectsRouteHandlerContext {
  constructor(savedObjectsStart, request) {
    this.savedObjectsStart = savedObjectsStart;
    this.request = request;

    _scopedSavedObjectsClient.set(this, {
      writable: true,
      value: void 0
    });

    _typeRegistry.set(this, {
      writable: true,
      value: void 0
    });
  }

  get client() {
    if (_classPrivateFieldGet(this, _scopedSavedObjectsClient) == null) {
      _classPrivateFieldSet(this, _scopedSavedObjectsClient, this.savedObjectsStart.getScopedClient(this.request));
    }

    return _classPrivateFieldGet(this, _scopedSavedObjectsClient);
  }

  get typeRegistry() {
    if (_classPrivateFieldGet(this, _typeRegistry) == null) {
      _classPrivateFieldSet(this, _typeRegistry, this.savedObjectsStart.getTypeRegistry());
    }

    return _classPrivateFieldGet(this, _typeRegistry);
  }

}

var _client2 = new WeakMap();

class CoreUiSettingsRouteHandlerContext {
  constructor(uiSettingsStart, savedObjectsRouterHandlerContext) {
    this.uiSettingsStart = uiSettingsStart;
    this.savedObjectsRouterHandlerContext = savedObjectsRouterHandlerContext;

    _client2.set(this, {
      writable: true,
      value: void 0
    });
  }

  get client() {
    if (_classPrivateFieldGet(this, _client2) == null) {
      _classPrivateFieldSet(this, _client2, this.uiSettingsStart.asScopedToClient(this.savedObjectsRouterHandlerContext.client));
    }

    return _classPrivateFieldGet(this, _client2);
  }

}

var _auditor = new WeakMap();

class CoreRouteHandlerContext {
  constructor(coreStart, request) {
    this.coreStart = coreStart;
    this.request = request;

    _auditor.set(this, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "elasticsearch", void 0);

    _defineProperty(this, "savedObjects", void 0);

    _defineProperty(this, "uiSettings", void 0);

    this.elasticsearch = new CoreElasticsearchRouteHandlerContext(this.coreStart.elasticsearch, this.request);
    this.savedObjects = new CoreSavedObjectsRouteHandlerContext(this.coreStart.savedObjects, this.request);
    this.uiSettings = new CoreUiSettingsRouteHandlerContext(this.coreStart.uiSettings, this.savedObjects);
  }

  get auditor() {
    if (_classPrivateFieldGet(this, _auditor) == null) {
      _classPrivateFieldSet(this, _auditor, this.coreStart.auditTrail.asScoped(this.request));
    }

    return _classPrivateFieldGet(this, _auditor);
  }

}

exports.CoreRouteHandlerContext = CoreRouteHandlerContext;