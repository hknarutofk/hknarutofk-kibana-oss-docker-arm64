"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchSource = exports.searchSourceRequiredUiSettings = void 0;

var _saferLodashSet = require("@elastic/safer-lodash-set");

var _lodash = require("lodash");

var _normalize_sort_request = require("./normalize_sort_request");

var _filter_docvalue_fields = require("./filter_docvalue_fields");

var _common = require("../../../../kibana_utils/common");

var _fetch = require("./fetch");

var _common2 = require("../../../common");

var _field_formats = require("../../../common/field_formats");

var _legacy = require("./legacy");

var _extract_references = require("./extract_references");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @internal */
const searchSourceRequiredUiSettings = ['dateFormat:tz', _common2.UI_SETTINGS.COURIER_BATCH_SEARCHES, _common2.UI_SETTINGS.COURIER_CUSTOM_REQUEST_PREFERENCE, _common2.UI_SETTINGS.COURIER_IGNORE_FILTER_IF_FIELD_NOT_IN_INDEX, _common2.UI_SETTINGS.COURIER_MAX_CONCURRENT_SHARD_REQUESTS, _common2.UI_SETTINGS.COURIER_SET_REQUEST_PREFERENCE, _common2.UI_SETTINGS.DOC_HIGHLIGHT, _common2.UI_SETTINGS.META_FIELDS, _common2.UI_SETTINGS.QUERY_ALLOW_LEADING_WILDCARDS, _common2.UI_SETTINGS.QUERY_STRING_OPTIONS, _common2.UI_SETTINGS.SEARCH_INCLUDE_FROZEN, _common2.UI_SETTINGS.SORT_OPTIONS];
exports.searchSourceRequiredUiSettings = searchSourceRequiredUiSettings;

/** @public **/
class SearchSource {
  constructor(fields = {}, dependencies) {
    _defineProperty(this, "id", (0, _lodash.uniqueId)('data_source'));

    _defineProperty(this, "searchStrategyId", void 0);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "requestStartHandlers", []);

    _defineProperty(this, "inheritOptions", {});

    _defineProperty(this, "history", []);

    _defineProperty(this, "fields", void 0);

    _defineProperty(this, "dependencies", void 0);

    this.fields = fields;
    this.dependencies = dependencies;
  }
  /** ***
   * PUBLIC API
   *****/

  /**
   * internal, dont use
   * @param searchStrategyId
   */


  setPreferredSearchStrategyId(searchStrategyId) {
    this.searchStrategyId = searchStrategyId;
  }
  /**
   * sets value to a single search source feild
   * @param field: field name
   * @param value: value for the field
   */


  setField(field, value) {
    if (value == null) {
      delete this.fields[field];
    } else {
      this.fields[field] = value;
    }

    return this;
  }
  /**
   * Internal, do not use. Overrides all search source fields with the new field array.
   *
   * @private
   * @param newFields New field array.
   */


  setFields(newFields) {
    this.fields = newFields;
    return this;
  }
  /**
   * returns search source id
   */


  getId() {
    return this.id;
  }
  /**
   * returns all search source fields
   */


  getFields() {
    return { ...this.fields
    };
  }
  /**
   * Gets a single field from the fields
   */


  getField(field, recurse = true) {
    if (!recurse || this.fields[field] !== void 0) {
      return this.fields[field];
    }

    const parent = this.getParent();
    return parent && parent.getField(field);
  }
  /**
   * Get the field from our own fields, don't traverse up the chain
   */


  getOwnField(field) {
    return this.getField(field, false);
  }
  /**
   * @deprecated Don't use.
   */


  create() {
    return new SearchSource({}, this.dependencies);
  }
  /**
   * creates a copy of this search source (without its children)
   */


  createCopy() {
    const newSearchSource = new SearchSource({}, this.dependencies);
    newSearchSource.setFields({ ...this.fields
    }); // when serializing the internal fields we lose the internal classes used in the index
    // pattern, so we have to set it again to workaround this behavior

    newSearchSource.setField('index', this.getField('index'));
    newSearchSource.setParent(this.getParent());
    return newSearchSource;
  }
  /**
   * creates a new child search source
   * @param options
   */


  createChild(options = {}) {
    const childSearchSource = new SearchSource({}, this.dependencies);
    childSearchSource.setParent(this, options);
    return childSearchSource;
  }
  /**
   * Set a searchSource that this source should inherit from
   * @param  {SearchSource} parent - the parent searchSource
   * @param  {SearchSourceOptions} options - the inherit options
   * @return {this} - chainable
   */


  setParent(parent, options = {}) {
    this.parent = parent;
    this.inheritOptions = options;
    return this;
  }
  /**
   * Get the parent of this SearchSource
   * @return {undefined|searchSource}
   */


  getParent() {
    return this.parent;
  }
  /**
   * Fetch this source and reject the returned Promise on error
   *
   * @async
   */


  async fetch(options = {}) {
    const {
      getConfig
    } = this.dependencies;
    await this.requestIsStarting(options);
    const searchRequest = await this.flatten();
    this.history = [searchRequest];
    let response;

    if (getConfig(_common2.UI_SETTINGS.COURIER_BATCH_SEARCHES)) {
      response = await this.legacyFetch(searchRequest, options);
    } else {
      response = await this.fetchSearch(searchRequest, options);
    } // TODO: Remove casting when https://github.com/elastic/elasticsearch-js/issues/1287 is resolved


    if (response.error) {
      throw new _fetch.RequestFailure(null, response);
    }

    return response;
  }
  /**
   *  Add a handler that will be notified whenever requests start
   *  @param  {Function} handler
   *  @return {undefined}
   */


  onRequestStart(handler) {
    this.requestStartHandlers.push(handler);
  }
  /**
   * Returns body contents of the search request, often referred as query DSL.
   */


  async getSearchRequestBody() {
    const searchRequest = await this.flatten();
    return searchRequest.body;
  }
  /**
   * Completely destroy the SearchSource.
   * @return {undefined}
   */


  destroy() {
    this.requestStartHandlers.length = 0;
  }
  /** ****
   * PRIVATE APIS
   ******/

  /**
   * Run a search using the search service
   * @return {Promise<SearchResponse<unknown>>}
   */


  fetchSearch(searchRequest, options) {
    const {
      search,
      getConfig,
      onResponse
    } = this.dependencies;
    const params = (0, _fetch.getSearchParamsFromRequest)(searchRequest, {
      getConfig
    });
    return search({
      params,
      indexType: searchRequest.indexType
    }, options).then(({
      rawResponse
    }) => onResponse(searchRequest, rawResponse));
  }
  /**
   * Run a search using the search service
   * @return {Promise<SearchResponse<unknown>>}
   */


  async legacyFetch(searchRequest, options) {
    const {
      getConfig,
      legacy,
      onResponse
    } = this.dependencies;
    return await (0, _legacy.fetchSoon)(searchRequest, { ...(this.searchStrategyId && {
        searchStrategyId: this.searchStrategyId
      }),
      ...options
    }, {
      getConfig,
      onResponse,
      legacy
    });
  }
  /**
   *  Called by requests of this search source when they are started
   *  @param options
   *  @return {Promise<undefined>}
   */


  requestIsStarting(options = {}) {
    const handlers = [...this.requestStartHandlers]; // If callParentStartHandlers has been set to true, we also call all
    // handlers of parent search sources.

    if (this.inheritOptions.callParentStartHandlers) {
      let searchSource = this.getParent();

      while (searchSource) {
        handlers.push(...searchSource.requestStartHandlers);
        searchSource = searchSource.getParent();
      }
    }

    return Promise.all(handlers.map(fn => fn(this, options)));
  }
  /**
   * Used to merge properties into the data within ._flatten().
   * The data is passed in and modified by the function
   *
   * @param  {object} data - the current merged data
   * @param  {*} val - the value at `key`
   * @param  {*} key - The key of `val`
   * @return {undefined}
   */


  mergeProp(data, val, key) {
    val = typeof val === 'function' ? val(this) : val;
    if (val == null || !key) return;

    const addToRoot = (rootKey, value) => {
      data[rootKey] = value;
    };
    /**
     * Add the key and val to the body of the request
     */


    const addToBody = (bodyKey, value) => {
      // ignore if we already have a value
      if (data.body[bodyKey] == null) {
        data.body[bodyKey] = value;
      }
    };

    const {
      getConfig
    } = this.dependencies;

    switch (key) {
      case 'filter':
        return addToRoot('filters', (data.filters || []).concat(val));

      case 'query':
        return addToRoot(key, (data[key] || []).concat(val));

      case 'fields':
        const fields = (0, _lodash.uniq)((data[key] || []).concat(val));
        return addToRoot(key, fields);

      case 'index':
      case 'type':
      case 'highlightAll':
        return key && data[key] == null && addToRoot(key, val);

      case 'searchAfter':
        return addToBody('search_after', val);

      case 'source':
        return addToBody('_source', val);

      case 'sort':
        const sort = (0, _normalize_sort_request.normalizeSortRequest)(val, this.getField('index'), getConfig(_common2.UI_SETTINGS.SORT_OPTIONS));
        return addToBody(key, sort);

      default:
        return addToBody(key, val);
    }
  }
  /**
   * Walk the inheritance chain of a source and return its
   * flat representation (taking into account merging rules)
   * @returns {Promise}
   * @resolved {Object|null} - the flat data of the SearchSource
   */


  mergeProps(root = this, searchRequest = {
    body: {}
  }) {
    Object.entries(this.fields).forEach(([key, value]) => {
      this.mergeProp(searchRequest, value, key);
    });

    if (this.parent) {
      this.parent.mergeProps(root, searchRequest);
    }

    return searchRequest;
  }

  getIndexType(index) {
    if (this.searchStrategyId) {
      return this.searchStrategyId === 'default' ? undefined : this.searchStrategyId;
    } else {
      return index === null || index === void 0 ? void 0 : index.type;
    }
  }

  flatten() {
    const searchRequest = this.mergeProps();
    searchRequest.body = searchRequest.body || {};
    const {
      body,
      index,
      fields,
      query,
      filters,
      highlightAll
    } = searchRequest;
    searchRequest.indexType = this.getIndexType(index);
    const computedFields = index ? index.getComputedFields() : {};
    body.stored_fields = computedFields.storedFields;
    body.script_fields = body.script_fields || {};
    (0, _lodash.extend)(body.script_fields, computedFields.scriptFields);
    const defaultDocValueFields = computedFields.docvalueFields ? computedFields.docvalueFields : [];
    body.docvalue_fields = body.docvalue_fields || defaultDocValueFields;

    if (!body.hasOwnProperty('_source') && index) {
      body._source = index.getSourceFiltering();
    }

    const {
      getConfig
    } = this.dependencies;

    if (body._source) {
      // exclude source fields for this index pattern specified by the user
      const filter = (0, _common.fieldWildcardFilter)(body._source.excludes, getConfig(_common2.UI_SETTINGS.META_FIELDS));
      body.docvalue_fields = body.docvalue_fields.filter(docvalueField => filter(docvalueField.field));
    } // if we only want to search for certain fields


    if (fields) {
      // filter out the docvalue_fields, and script_fields to only include those that we are concerned with
      body.docvalue_fields = (0, _filter_docvalue_fields.filterDocvalueFields)(body.docvalue_fields, fields);
      body.script_fields = (0, _lodash.pick)(body.script_fields, fields); // request the remaining fields from both stored_fields and _source

      const remainingFields = (0, _lodash.difference)(fields, (0, _lodash.keys)(body.script_fields));
      body.stored_fields = remainingFields;
      (0, _saferLodashSet.setWith)(body, '_source.includes', remainingFields, nsValue => (0, _lodash.isObject)(nsValue) ? {} : nsValue);
    }

    const esQueryConfigs = (0, _common2.getEsQueryConfig)({
      get: getConfig
    });
    body.query = (0, _common2.buildEsQuery)(index, query, filters, esQueryConfigs);

    if (highlightAll && body.query) {
      body.highlight = (0, _field_formats.getHighlightRequest)(body.query, getConfig(_common2.UI_SETTINGS.DOC_HIGHLIGHT));
      delete searchRequest.highlightAll;
    }

    return searchRequest;
  }
  /**
   * serializes search source fields (which can later be passed to {@link ISearchStartSearchSource})
   */


  getSerializedFields() {
    const {
      filter: originalFilters,
      ...searchSourceFields
    } = (0, _lodash.omit)(this.getFields(), ['sort', 'size']);
    let serializedSearchSourceFields = { ...searchSourceFields,
      index: searchSourceFields.index ? searchSourceFields.index.id : undefined
    };

    if (originalFilters) {
      const filters = this.getFilters(originalFilters);
      serializedSearchSourceFields = { ...serializedSearchSourceFields,
        filter: filters
      };
    }

    return serializedSearchSourceFields;
  }
  /**
   * Serializes the instance to a JSON string and a set of referenced objects.
   * Use this method to get a representation of the search source which can be stored in a saved object.
   *
   * The references returned by this function can be mixed with other references in the same object,
   * however make sure there are no name-collisions. The references will be named `kibanaSavedObjectMeta.searchSourceJSON.index`
   * and `kibanaSavedObjectMeta.searchSourceJSON.filter[<number>].meta.index`.
   *
   * Using `createSearchSource`, the instance can be re-created.
   * @public */


  serialize() {
    const [searchSourceFields, references] = (0, _extract_references.extractReferences)(this.getSerializedFields());
    return {
      searchSourceJSON: JSON.stringify(searchSourceFields),
      references
    };
  }

  getFilters(filterField) {
    if (!filterField) {
      return [];
    }

    if (Array.isArray(filterField)) {
      return filterField;
    }

    if ((0, _lodash.isFunction)(filterField)) {
      return this.getFilters(filterField());
    }

    return [filterField];
  }

}

exports.SearchSource = SearchSource;