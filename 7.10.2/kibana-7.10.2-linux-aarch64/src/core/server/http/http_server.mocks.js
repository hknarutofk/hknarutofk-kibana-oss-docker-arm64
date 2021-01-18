"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpServerMock = void 0;

var _lodash = require("lodash");

var _net = require("net");

var _queryString = require("query-string");

var _configSchema = require("@kbn/config-schema");

var _router = require("./router");

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
function createKibanaRequestMock({
  path = '/path',
  headers = {
    accept: 'something/html'
  },
  params = {},
  body = {},
  query = {},
  method = 'get',
  socket = new _net.Socket(),
  routeTags,
  routeAuthRequired,
  validation = {},
  kibanaRouteOptions = {
    xsrfRequired: true
  },
  kibanaRequestState = {
    requestId: '123',
    requestUuid: '123e4567-e89b-12d3-a456-426614174000'
  },
  auth = {
    isAuthenticated: true
  }
} = {}) {
  const queryString = (0, _queryString.stringify)(query, {
    sort: false
  });
  return _router.KibanaRequest.from(createRawRequestMock({
    app: kibanaRequestState,
    auth,
    headers,
    params,
    query,
    payload: body,
    path,
    method,
    url: {
      path,
      pathname: path,
      query: queryString,
      search: queryString ? `?${queryString}` : queryString
    },
    route: {
      settings: {
        tags: routeTags,
        auth: routeAuthRequired,
        app: kibanaRouteOptions
      }
    },
    raw: {
      req: {
        socket,
        // these are needed to avoid an error when consuming KibanaRequest.events
        on: jest.fn(),
        off: jest.fn()
      }
    }
  }), {
    params: validation.params || _configSchema.schema.any(),
    body: validation.body || _configSchema.schema.any(),
    query: validation.query || _configSchema.schema.any()
  });
}

function createRawRequestMock(customization = {}) {
  return (0, _lodash.merge)({}, {
    app: {
      xsrfRequired: true
    },
    auth: {
      isAuthenticated: true
    },
    headers: {},
    path: '/',
    route: {
      settings: {}
    },
    url: {
      href: '/'
    },
    raw: {
      req: {
        url: '/',
        socket: {}
      }
    }
  }, customization);
}

const createResponseFactoryMock = () => ({
  ok: jest.fn(),
  accepted: jest.fn(),
  noContent: jest.fn(),
  custom: jest.fn(),
  redirected: jest.fn(),
  badRequest: jest.fn(),
  unauthorized: jest.fn(),
  forbidden: jest.fn(),
  notFound: jest.fn(),
  conflict: jest.fn(),
  internalError: jest.fn(),
  customError: jest.fn()
});

const createLifecycleResponseFactoryMock = () => ({
  redirected: jest.fn(),
  badRequest: jest.fn(),
  unauthorized: jest.fn(),
  forbidden: jest.fn(),
  notFound: jest.fn(),
  conflict: jest.fn(),
  internalError: jest.fn(),
  customError: jest.fn()
});

const createToolkitMock = () => {
  return {
    render: jest.fn(),
    next: jest.fn(),
    rewriteUrl: jest.fn()
  };
};

const httpServerMock = {
  createKibanaRequest: createKibanaRequestMock,
  createRawRequest: createRawRequestMock,
  createResponseFactory: createResponseFactoryMock,
  createLifecycleResponseFactory: createLifecycleResponseFactoryMock,
  createToolkit: createToolkitMock
};
exports.httpServerMock = httpServerMock;