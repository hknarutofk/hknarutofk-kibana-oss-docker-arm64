"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchEmbeddableFactory = void 0;

require("../doc_table");

var _capabilities = require("ui/capabilities");

var _i18n = require("@kbn/i18n");

var _chrome = _interopRequireDefault(require("ui/chrome"));

var _query_filter = require("ui/filter_manager/query_filter");

var _public = require("../../../../embeddable_api/public/np_ready/public");

var _legacy = require("../../../../embeddable_api/public/np_ready/public/legacy");

var _search_embeddable = require("./search_embeddable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SearchEmbeddableFactory =
/*#__PURE__*/
function (_EmbeddableFactory) {
  _inherits(SearchEmbeddableFactory, _EmbeddableFactory);

  function SearchEmbeddableFactory(executeTriggerActions) {
    var _this;

    _classCallCheck(this, SearchEmbeddableFactory);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchEmbeddableFactory).call(this, {
      savedObjectMetaData: {
        name: _i18n.i18n.translate('kbn.discover.savedSearch.savedObjectName', {
          defaultMessage: 'Saved search'
        }),
        type: 'search',
        getIconForSavedObject: function getIconForSavedObject() {
          return 'search';
        }
      }
    }));
    _this.executeTriggerActions = executeTriggerActions;

    _defineProperty(_assertThisInitialized(_this), "type", _search_embeddable.SEARCH_EMBEDDABLE_TYPE);

    return _this;
  }

  _createClass(SearchEmbeddableFactory, [{
    key: "isEditable",
    value: function isEditable() {
      return _capabilities.capabilities.get().discover.save;
    }
  }, {
    key: "canCreateNew",
    value: function canCreateNew() {
      return false;
    }
  }, {
    key: "getDisplayName",
    value: function getDisplayName() {
      return _i18n.i18n.translate('kbn.embeddable.search.displayName', {
        defaultMessage: 'search'
      });
    }
  }, {
    key: "createFromSavedObject",
    value: function () {
      var _createFromSavedObject = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(savedObjectId, input, parent) {
        var $injector, $compile, $rootScope, searchLoader, editUrl, Private, queryFilter, savedObject;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _chrome.default.dangerouslyGetActiveInjector();

              case 2:
                $injector = _context.sent;
                $compile = $injector.get('$compile');
                $rootScope = $injector.get('$rootScope');
                searchLoader = $injector.get('savedSearches');
                editUrl = _chrome.default.addBasePath("/app/kibana".concat(searchLoader.urlFor(savedObjectId)));
                Private = $injector.get('Private');
                queryFilter = Private(_query_filter.FilterBarQueryFilterProvider);
                _context.prev = 9;
                _context.next = 12;
                return searchLoader.get(savedObjectId);

              case 12:
                savedObject = _context.sent;
                return _context.abrupt("return", new _search_embeddable.SearchEmbeddable({
                  savedSearch: savedObject,
                  $rootScope: $rootScope,
                  $compile: $compile,
                  editUrl: editUrl,
                  queryFilter: queryFilter,
                  editable: _capabilities.capabilities.get().discover.save,
                  indexPatterns: _.compact([savedObject.searchSource.getField('index')])
                }, input, this.executeTriggerActions, parent));

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](9);
                console.error(_context.t0); // eslint-disable-line no-console

                return _context.abrupt("return", new _public.ErrorEmbeddable(_context.t0, input, parent));

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[9, 16]]);
      }));

      function createFromSavedObject(_x, _x2, _x3) {
        return _createFromSavedObject.apply(this, arguments);
      }

      return createFromSavedObject;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(input) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new _public.ErrorEmbeddable('Saved searches can only be created from a saved object', input));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function create(_x4) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }]);

  return SearchEmbeddableFactory;
}(_public.EmbeddableFactory);

exports.SearchEmbeddableFactory = SearchEmbeddableFactory;
var factory = new SearchEmbeddableFactory(_legacy.start.executeTriggerActions);

_legacy.setup.registerEmbeddableFactory(factory.type, factory);