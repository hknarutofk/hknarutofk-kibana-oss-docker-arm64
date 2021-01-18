"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSavedQueryService = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
var createSavedQueryService = function createSavedQueryService(savedObjectsClient) {
  var saveQuery =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(attributes) {
      var _ref2,
          _ref2$overwrite,
          overwrite,
          query,
          queryObject,
          rawQueryResponse,
          _args = arguments;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref2 = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref2$overwrite = _ref2.overwrite, overwrite = _ref2$overwrite === void 0 ? false : _ref2$overwrite;

              if (attributes.title.length) {
                _context.next = 3;
                break;
              }

              throw new Error('Cannot create saved query without a title');

            case 3:
              query = {
                query: typeof attributes.query.query === 'string' ? attributes.query.query : JSON.stringify(attributes.query.query),
                language: attributes.query.language
              };
              queryObject = {
                title: attributes.title.trim(),
                // trim whitespace before save as an extra precaution against circumventing the front end
                description: attributes.description,
                query: query
              };

              if (attributes.filters) {
                queryObject.filters = attributes.filters;
              }

              if (attributes.timefilter) {
                queryObject.timefilter = attributes.timefilter;
              }

              if (overwrite) {
                _context.next = 13;
                break;
              }

              _context.next = 10;
              return savedObjectsClient.create('query', queryObject, {
                id: attributes.title
              });

            case 10:
              rawQueryResponse = _context.sent;
              _context.next = 16;
              break;

            case 13:
              _context.next = 15;
              return savedObjectsClient.create('query', queryObject, {
                id: attributes.title,
                overwrite: true
              });

            case 15:
              rawQueryResponse = _context.sent;

            case 16:
              if (!rawQueryResponse.error) {
                _context.next = 18;
                break;
              }

              throw new Error(rawQueryResponse.error.message);

            case 18:
              return _context.abrupt("return", parseSavedQueryObject(rawQueryResponse));

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function saveQuery(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // we have to tell the saved objects client how many to fetch, otherwise it defaults to fetching 20 per page


  var getAllSavedQueries =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var count, response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getSavedQueryCount();

            case 2:
              count = _context2.sent;
              _context2.next = 5;
              return savedObjectsClient.find({
                type: 'query',
                perPage: count,
                page: 1
              });

            case 5:
              response = _context2.sent;
              return _context2.abrupt("return", response.savedObjects.map(function (savedObject) {
                return parseSavedQueryObject(savedObject);
              }));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getAllSavedQueries() {
      return _ref3.apply(this, arguments);
    };
  }(); // findSavedQueries will do a 'match_all' if no search string is passed in


  var findSavedQueries =
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var searchText,
          perPage,
          activePage,
          response,
          _args3 = arguments;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              searchText = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : '';
              perPage = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 50;
              activePage = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 1;
              _context3.next = 5;
              return savedObjectsClient.find({
                type: 'query',
                search: searchText,
                searchFields: ['title^5', 'description'],
                sortField: '_score',
                perPage: perPage,
                page: activePage
              });

            case 5:
              response = _context3.sent;
              return _context3.abrupt("return", response.savedObjects.map(function (savedObject) {
                return parseSavedQueryObject(savedObject);
              }));

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function findSavedQueries() {
      return _ref4.apply(this, arguments);
    };
  }();

  var getSavedQuery =
  /*#__PURE__*/
  function () {
    var _ref5 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(id) {
      var response;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return savedObjectsClient.get('query', id);

            case 2:
              response = _context4.sent;
              return _context4.abrupt("return", parseSavedQueryObject(response));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getSavedQuery(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var deleteSavedQuery =
  /*#__PURE__*/
  function () {
    var _ref6 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5(id) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return savedObjectsClient.delete('query', id);

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function deleteSavedQuery(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();

  var parseSavedQueryObject = function parseSavedQueryObject(savedQuery) {
    var queryString;

    try {
      queryString = JSON.parse(savedQuery.attributes.query.query);
    } catch (error) {
      queryString = savedQuery.attributes.query.query;
    }

    var savedQueryItems = {
      title: savedQuery.attributes.title || '',
      description: savedQuery.attributes.description || '',
      query: {
        query: queryString,
        language: savedQuery.attributes.query.language
      }
    };

    if (savedQuery.attributes.filters) {
      savedQueryItems.filters = savedQuery.attributes.filters;
    }

    if (savedQuery.attributes.timefilter) {
      savedQueryItems.timefilter = savedQuery.attributes.timefilter;
    }

    return {
      id: savedQuery.id,
      attributes: savedQueryItems
    };
  };

  var getSavedQueryCount =
  /*#__PURE__*/
  function () {
    var _ref7 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee6() {
      var response;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return savedObjectsClient.find({
                type: 'query',
                perPage: 0,
                page: 1
              });

            case 2:
              response = _context6.sent;
              return _context6.abrupt("return", response.total);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function getSavedQueryCount() {
      return _ref7.apply(this, arguments);
    };
  }();

  return {
    saveQuery: saveQuery,
    getAllSavedQueries: getAllSavedQueries,
    findSavedQueries: findSavedQueries,
    getSavedQuery: getSavedQuery,
    deleteSavedQuery: deleteSavedQuery,
    getSavedQueryCount: getSavedQueryCount
  };
};

exports.createSavedQueryService = createSavedQueryService;