"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EMSClient = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _tms_service = require("./tms_service");

var _file_layer = require("./file_layer");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _url = require("url");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const extendUrl = (url, props) => modifyUrlLocal(url, parsed => _lodash.default.merge(parsed, props));
/**
 * plugins cannot have upstream dependencies on core/*-kibana.
 * Work-around by copy-pasting modifyUrl routine here.
 * @param url
 * @param block
 */


function modifyUrlLocal(url, block) {
  const parsed = (0, _url.parse)(url, true); // copy over the most specific version of each
  // property. By default, the parsed url includes
  // several conflicting properties (like path and
  // pathname + search, or search and query) and keeping
  // track of which property is actually used when they
  // are formatted is harder than necessary

  const meaningfulParts = {
    protocol: parsed.protocol,
    slashes: parsed.slashes,
    auth: parsed.auth,
    hostname: parsed.hostname,
    port: parsed.port,
    pathname: parsed.pathname,
    query: parsed.query || {},
    hash: parsed.hash
  }; // the block modifies the meaningfulParts object, or returns a new one

  const modifiedParts = block(meaningfulParts) || meaningfulParts; // format the modified/replaced meaningfulParts back into a url

  return (0, _url.format)({
    protocol: modifiedParts.protocol,
    slashes: modifiedParts.slashes,
    auth: modifiedParts.auth,
    hostname: modifiedParts.hostname,
    port: modifiedParts.port,
    pathname: modifiedParts.pathname,
    query: modifiedParts.query,
    hash: modifiedParts.hash
  });
}
/**
 *  Unescape a url template that was escaped by encodeURI() so leaflet
 *  will be able to correctly locate the variables in the template
 *  @param  {String} url
 *  @return {String}
 */


const unescapeTemplateVars = url => {
  const ENCODED_TEMPLATE_VARS_RE = /%7B(\w+?)%7D/g;
  return url.replace(ENCODED_TEMPLATE_VARS_RE, (total, varName) => `{${varName}}`);
}; //this is not the default locale from Kibana, but the default locale supported by the Elastic Maps Service


const DEFAULT_LANGUAGE = 'en';

class EMSClient {
  constructor({
    kbnVersion,
    manifestServiceUrl,
    htmlSanitizer,
    language,
    landingPageUrl,
    fetchFunction,
    proxyPath
  }) {
    _defineProperty(this, "EMS_LOAD_TIMEOUT", 32000);

    this._queryParams = {
      elastic_tile_service_tos: 'agree',
      my_app_name: 'kibana',
      my_app_version: kbnVersion
    };
    this._sanitizer = htmlSanitizer ? htmlSanitizer : x => x;
    this._manifestServiceUrl = manifestServiceUrl;
    this._loadFileLayers = null;
    this._loadTMSServices = null;
    this._emsLandingPageUrl = typeof landingPageUrl === 'string' ? landingPageUrl : '';
    this._language = typeof language === 'string' ? language : DEFAULT_LANGUAGE;
    this._fetchFunction = typeof fetchFunction === 'function' ? fetchFunction : _nodeFetch.default;
    this._proxyPath = typeof proxyPath === 'string' ? proxyPath : '';

    this._invalidateSettings();
  }

  getDefaultLocale() {
    return DEFAULT_LANGUAGE;
  }

  getLocale() {
    return this._language;
  }

  getValueInLanguage(i18nObject) {
    if (!i18nObject) {
      return '';
    }

    return i18nObject[this._language] ? i18nObject[this._language] : i18nObject[DEFAULT_LANGUAGE];
  }
  /**
   * this internal method is overridden by the tests to simulate custom manifest.
   */


  async getManifest(manifestUrl) {
    try {
      const url = extendUrl(manifestUrl, {
        query: this._queryParams
      });
      const result = await this._fetchWithTimeout(url);
      return result ? await result.json() : null;
    } catch (e) {
      if (!e) {
        e = new Error('Unknown error');
      }

      if (!(e instanceof Error)) {
        e = new Error(e.data || `status ${e.statusText || e.status}`);
      }

      throw new Error(`Unable to retrieve manifest from ${manifestUrl}: ${e.message}`);
    }
  }

  _fetchWithTimeout(url) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error(`Request to ${url} timed out`)), this.EMS_LOAD_TIMEOUT);

      this._fetchFunction(url).then(response => {
        clearTimeout(timer);
        resolve(response);
      }, err => {
        clearTimeout(timer);
        reject(err);
      });
    });
  }
  /**
   * Add optional query-parameters to all requests
   *
   * @param additionalQueryParams
   */


  addQueryParams(additionalQueryParams) {
    for (const key in additionalQueryParams) {
      if (additionalQueryParams.hasOwnProperty(key)) {
        if (additionalQueryParams[key] !== this._queryParams[key]) {
          //changes detected.
          this._queryParams = _lodash.default.assign({}, this._queryParams, additionalQueryParams);

          this._invalidateSettings();

          break;
        }
      }
    }
  }

  async _getManifestWithParams(url) {
    const extendedUrl = this.extendUrlWithParams(url);
    return await this.getManifest(extendedUrl);
  }

  _invalidateSettings() {
    this._getMainCatalog = _lodash.default.once(async () => {
      return await this._getManifestWithParams(this._manifestServiceUrl);
    });
    this._getDefaultTMSCatalog = _lodash.default.once(async () => {
      const catalogue = await this._getMainCatalog();
      const firstService = catalogue.services.find(service => service.type === 'tms');

      if (!firstService) {
        return [];
      }

      const url = this._proxyPath + firstService.manifest;
      return await this.getManifest(url);
    });
    this._getDefaultFileCatalog = _lodash.default.once(async () => {
      const catalogue = await this._getMainCatalog();
      const firstService = catalogue.services.find(service => service.type === 'file');

      if (!firstService) {
        return [];
      }

      const url = this._proxyPath + firstService.manifest;
      return await this.getManifest(url);
    }); //Cache the actual instances of TMSService as these in turn cache sub-manifests for the style-files

    this._loadTMSServices = _lodash.default.once(async () => {
      const tmsManifest = await this._getDefaultTMSCatalog();
      return tmsManifest.services.map(serviceConfig => new _tms_service.TMSService(serviceConfig, this, this._proxyPath));
    });
    this._loadFileLayers = _lodash.default.once(async () => {
      const fileManifest = await this._getDefaultFileCatalog();
      return fileManifest.layers.map(layerConfig => new _file_layer.FileLayer(layerConfig, this, this._proxyPath));
    });
  }

  async getMainManifest() {
    return await this._getMainCatalog();
  }

  async getDefaultFileManifest() {
    return await this._getDefaultFileCatalog();
  }

  async getDefaultTMSManifest() {
    return await this._getDefaultTMSCatalog();
  }

  async getFileLayers() {
    return await this._loadFileLayers();
  }

  async getTMSServices() {
    return await this._loadTMSServices();
  }

  getLandingPageUrl() {
    return this._emsLandingPageUrl;
  }

  sanitizeHtml(html) {
    return this._sanitizer(html);
  }

  extendUrlWithParams(url) {
    return unescapeTemplateVars(extendUrl(url, {
      query: this._queryParams
    }));
  }

  async findFileLayerById(id) {
    const fileLayers = await this.getFileLayers();

    for (let i = 0; i < fileLayers.length; i++) {
      if (fileLayers[i].hasId(id)) {
        return fileLayers[i];
      }
    }
  }

  async findTMSServiceById(id) {
    const tmsServices = await this.getTMSServices();

    for (let i = 0; i < tmsServices.length; i++) {
      if (tmsServices[i].hasId(id)) {
        return tmsServices[i];
      }
    }
  }

}

exports.EMSClient = EMSClient;