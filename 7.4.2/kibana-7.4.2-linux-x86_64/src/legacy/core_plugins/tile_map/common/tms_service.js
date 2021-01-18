"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TMSService = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _origin = require("./origin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TMSService {
  constructor(config, emsClient, proxyPath) {
    _defineProperty(this, "_getRasterStyleJson", _lodash.default.once(async () => {
      const rasterUrl = this._getStyleUrlForLocale('raster');

      const url = this._proxyPath + rasterUrl;
      return this._emsClient.getManifest(this._emsClient.extendUrlWithParams(url));
    }));

    _defineProperty(this, "_getVectorStyleJsonRaw", _lodash.default.once(async () => {
      const vectorUrl = this._getStyleUrlForLocale('vector');

      const url = this._proxyPath + vectorUrl;
      const vectorJson = await this._emsClient.getManifest(this._emsClient.extendUrlWithParams(url));
      return { ...vectorJson
      };
    }));

    _defineProperty(this, "_getVectorStyleJsonInlined", _lodash.default.once(async () => {
      const vectorJson = await this._getVectorStyleJsonRaw();
      const inlinedSources = {};

      for (const sourceName of Object.getOwnPropertyNames(vectorJson.sources)) {
        const sourceUrl = this._proxyPath + vectorJson.sources[sourceName].url;

        const extendedUrl = this._emsClient.extendUrlWithParams(sourceUrl);

        const sourceJson = await this._emsClient.getManifest(extendedUrl);
        const extendedTileUrls = sourceJson.tiles.map(tileUrl => {
          const url = this._proxyPath + tileUrl;
          return this._emsClient.extendUrlWithParams(url);
        });
        inlinedSources[sourceName] = {
          type: 'vector',
          ...sourceJson,
          tiles: extendedTileUrls
        };
      }

      return { ...vectorJson,
        sources: inlinedSources,
        sprite: await this._getSpriteSheetRootPath()
      };
    }));

    this._config = config;
    this._emsClient = emsClient;
    this._proxyPath = proxyPath;
  }

  _getFormats(formatType, locale) {
    return this._config.formats.filter(format => format.locale === locale && format.format === formatType);
  }

  _getStyleUrlForLocale(formatType) {
    let vectorFormats = this._getFormats(formatType, this._emsClient.getLocale());

    if (!vectorFormats.length) {
      //fallback to default locale
      vectorFormats = this._getFormats(formatType, this._emsClient.getDefaultLocale());
    }

    if (!vectorFormats.length) {
      // eslint-disable-next-line max-len
      throw new Error(`Cannot find ${formatType} tile layer for locale ${this._emsClient.getLocale()} or ${this._emsClient.getDefaultLocale()}`);
    }

    const defaultStyle = vectorFormats[0];

    if (defaultStyle && defaultStyle.hasOwnProperty('url')) {
      return defaultStyle.url;
    }
  }

  async getDefaultRasterStyle() {
    return await this._getRasterStyleJson();
  }

  async getUrlTemplate() {
    const tileJson = await this._getRasterStyleJson();
    const directUrl = this._proxyPath + tileJson.tiles[0];
    return this._emsClient.extendUrlWithParams(directUrl);
  }

  async getUrlTemplateForVector(sourceId) {
    const tileJson = await this._getVectorStyleJsonInlined();

    if (!tileJson.sources[sourceId] || !tileJson.sources[sourceId].tiles) {
      return null;
    }

    const directUrl = this._proxyPath + tileJson.sources[sourceId].tiles[0];
    return this._emsClient.extendUrlWithParams(directUrl);
  }

  async getVectorStyleSheet() {
    return await this._getVectorStyleJsonInlined();
  }

  async getVectorStyleSheetRaw() {
    return await this._getVectorStyleJsonRaw();
  }

  async getSpriteSheetMeta(isRetina = false) {
    const metaUrl = await this.getSpriteSheetJsonPath(isRetina);
    const spritePngs = await this.getSpriteSheetPngPath(isRetina);

    const metaUrlExtended = this._emsClient.extendUrlWithParams(metaUrl);

    const jsonMeta = await this._emsClient.getManifest(metaUrlExtended);
    return {
      png: spritePngs,
      json: jsonMeta
    };
  }

  async _getSpriteSheetRootPath() {
    const vectorStyleJson = await this._getVectorStyleJsonRaw();
    return this._proxyPath + vectorStyleJson.sprite;
  }

  async getSpriteSheetJsonPath(isRetina = false) {
    const spriteSheetRootPath = await this._getSpriteSheetRootPath();
    const suffix = isRetina ? '@2x' : '';
    return spriteSheetRootPath + suffix + '.json';
  }

  async getSpriteSheetPngPath(isRetina = false) {
    const spriteSheetRootPath = await this._getSpriteSheetRootPath();
    const suffix = isRetina ? '@2x' : '';
    return spriteSheetRootPath + suffix + '.png';
  }

  getDisplayName() {
    return this._emsClient.getValueInLanguage(this._config.name);
  }

  getAttributions() {
    return this._config.attribution.map(attribution => {
      const url = this._emsClient.getValueInLanguage(attribution.url);

      const label = this._emsClient.getValueInLanguage(attribution.label);

      return {
        url: url,
        label: label
      };
    });
  }

  getHTMLAttribution() {
    const attributions = this._config.attribution.map(attribution => {
      const url = this._emsClient.getValueInLanguage(attribution.url);

      const label = this._emsClient.getValueInLanguage(attribution.label);

      const html = url ? `<a rel="noreferrer noopener" href="${url}">${label}</a>` : label;
      return this._emsClient.sanitizeHtml(`${html}`);
    });

    return `<p>${attributions.join(' | ')}</p>`; //!!!this is the current convention used in Kibana
  }

  getMarkdownAttribution() {
    const attributions = this._config.attribution.map(attribution => {
      const url = this._emsClient.getValueInLanguage(attribution.url);

      const label = this._emsClient.getValueInLanguage(attribution.label);

      return `[${label}](${url})`;
    });

    return attributions.join('|');
  }

  async getMinZoom() {
    const tileJson = await this._getRasterStyleJson();
    return tileJson.minzoom;
  }

  async getMaxZoom() {
    const tileJson = await this._getRasterStyleJson();
    return tileJson.maxzoom;
  }

  getId() {
    return this._config.id;
  }

  hasId(id) {
    return this._config.id === id;
  }

  getOrigin() {
    return _origin.ORIGIN.EMS;
  }

}

exports.TMSService = TMSService;