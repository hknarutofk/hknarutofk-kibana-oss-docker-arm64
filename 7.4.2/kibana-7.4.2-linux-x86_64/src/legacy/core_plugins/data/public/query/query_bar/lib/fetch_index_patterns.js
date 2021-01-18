"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchIndexPatterns = fetchIndexPatterns;

var _lodash = require("lodash");

var _index_patterns = require("../../../index_patterns");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function fetchIndexPatterns(_x, _x2, _x3) {
  return _fetchIndexPatterns.apply(this, arguments);
}

function _fetchIndexPatterns() {
  _fetchIndexPatterns = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(savedObjectsClient, indexPatternStrings, uiSettings) {
    var searchString, indexPatternsFromSavedObjects, exactMatches, defaultIndex, allMatches;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!indexPatternStrings || (0, _lodash.isEmpty)(indexPatternStrings))) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", []);

          case 2:
            searchString = indexPatternStrings.map(function (string) {
              return "\"".concat(string, "\"");
            }).join(' | ');
            _context.next = 5;
            return savedObjectsClient.find({
              type: 'index-pattern',
              fields: ['title', 'fields'],
              search: searchString,
              searchFields: ['title']
            });

          case 5:
            indexPatternsFromSavedObjects = _context.sent;
            exactMatches = indexPatternsFromSavedObjects.savedObjects.filter(function (savedObject) {
              return indexPatternStrings.includes(savedObject.attributes.title);
            });
            defaultIndex = uiSettings.get('defaultIndex');

            if (!(exactMatches.length === indexPatternStrings.length)) {
              _context.next = 12;
              break;
            }

            _context.t0 = exactMatches;
            _context.next = 19;
            break;

          case 12:
            _context.t1 = [];
            _context.t2 = _toConsumableArray(exactMatches);
            _context.next = 16;
            return savedObjectsClient.get('index-pattern', defaultIndex);

          case 16:
            _context.t3 = _context.sent;
            _context.t4 = [_context.t3];
            _context.t0 = _context.t1.concat.call(_context.t1, _context.t2, _context.t4);

          case 19:
            allMatches = _context.t0;
            return _context.abrupt("return", allMatches.map(_index_patterns.getFromSavedObject));

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchIndexPatterns.apply(this, arguments);
}