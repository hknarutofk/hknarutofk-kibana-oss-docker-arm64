"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderingService = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _operators = require("rxjs/operators");

var _i18n = require("@kbn/i18n");

var _views = require("./views");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/** @internal */
class RenderingService {
  constructor(coreContext) {
    this.coreContext = coreContext;
  }

  async setup({
    http,
    status,
    uiPlugins
  }) {
    return {
      render: async (request, uiSettings, {
        includeUserSettings = true,
        vars
      } = {}) => {
        var _settings$user, _settings$user$theme;

        const env = {
          mode: this.coreContext.env.mode,
          packageInfo: this.coreContext.env.packageInfo
        };
        const basePath = http.basePath.get(request);
        const serverBasePath = http.basePath.serverBasePath;
        const settings = {
          defaults: uiSettings.getRegistered(),
          user: includeUserSettings ? await uiSettings.getUserProvided() : {}
        };
        const metadata = {
          strictCsp: http.csp.strict,
          uiPublicUrl: `${basePath}/ui`,
          bootstrapScriptUrl: `${basePath}/bootstrap.js`,
          i18n: _i18n.i18n.translate,
          locale: _i18n.i18n.getLocale(),
          darkMode: ((_settings$user = settings.user) === null || _settings$user === void 0 ? void 0 : (_settings$user$theme = _settings$user['theme:darkMode']) === null || _settings$user$theme === void 0 ? void 0 : _settings$user$theme.userValue) ? Boolean(settings.user['theme:darkMode'].userValue) : false,
          injectedMetadata: {
            version: env.packageInfo.version,
            buildNumber: env.packageInfo.buildNum,
            branch: env.packageInfo.branch,
            basePath,
            serverBasePath,
            env,
            anonymousStatusPage: status.isStatusPageAnonymous(),
            i18n: {
              translationsUrl: `${basePath}/translations/${_i18n.i18n.getLocale()}.json`
            },
            csp: {
              warnLegacyBrowsers: http.csp.warnLegacyBrowsers
            },
            vars: vars !== null && vars !== void 0 ? vars : {},
            uiPlugins: await Promise.all([...uiPlugins.public].map(async ([id, plugin]) => ({
              id,
              plugin,
              config: await this.getUiConfig(uiPlugins, id)
            }))),
            legacyMetadata: {
              uiSettings: settings
            }
          }
        };
        return `<!DOCTYPE html>${(0, _server.renderToStaticMarkup)( /*#__PURE__*/_react.default.createElement(_views.Template, {
          metadata: metadata
        }))}`;
      }
    };
  }

  async stop() {}

  async getUiConfig(uiPlugins, pluginId) {
    var _await$browserConfig$;

    const browserConfig = uiPlugins.browserConfigs.get(pluginId);
    return (_await$browserConfig$ = await (browserConfig === null || browserConfig === void 0 ? void 0 : browserConfig.pipe((0, _operators.take)(1)).toPromise())) !== null && _await$browserConfig$ !== void 0 ? _await$browserConfig$ : {};
  }

}

exports.RenderingService = RenderingService;