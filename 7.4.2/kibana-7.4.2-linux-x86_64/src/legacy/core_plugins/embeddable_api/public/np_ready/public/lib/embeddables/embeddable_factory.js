"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbeddableFactory = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/**
 * The EmbeddableFactory creates and initializes an embeddable instance
 */
var EmbeddableFactory =
/*#__PURE__*/
function () {
  // A unique identified for this factory, which will be used to map an embeddable spec to
  // a factory that can generate an instance of it.

  /**
   * True if is this factory create embeddables that are Containers. Used in the add panel to
   * conditionally show whether these can be added to another container. It's just not
   * supported right now, but once nested containers are officially supported we can probably get
   * rid of this interface.
   */
  function EmbeddableFactory() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        savedObjectMetaData = _ref.savedObjectMetaData;

    _classCallCheck(this, EmbeddableFactory);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "savedObjectMetaData", void 0);

    _defineProperty(this, "isContainerType", false);

    this.savedObjectMetaData = savedObjectMetaData;
  } // TODO: Can this be a property? If this "...should be based of capabilities service...",
  // TODO: maybe then it should be *async*?

  /**
   * Returns whether the current user should be allowed to edit this type of
   * embeddable. Most of the time this should be based off the capabilities service.
   */


  _createClass(EmbeddableFactory, [{
    key: "canCreateNew",

    /**
     * If false, this type of embeddable can't be created with the "createNew" functionality. Instead,
     * use createFromSavedObject, where an existing saved object must first exist.
     */
    value: function canCreateNew() {
      return true;
    }
    /**
     * Can be used to get any default input, to be passed in to during the creation process. Default
     * input will not be stored in a parent container, so any inherited input from a container will trump
     * default input parameters.
     * @param partial
     */

  }, {
    key: "getDefaultInput",
    value: function getDefaultInput(partial) {
      return {};
    }
    /**
     * Can be used to request explicit input from the user, to be passed in to `EmbeddableFactory:create`.
     * Explicit input is stored on the parent container for this embeddable. It overrides any inherited
     * input passed down from the parent container.
     */

  }, {
    key: "getExplicitInput",
    value: function () {
      var _getExplicitInput = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {});

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getExplicitInput() {
        return _getExplicitInput.apply(this, arguments);
      }

      return getExplicitInput;
    }()
    /**
     * Creates a new embeddable instance based off the saved object id.
     * @param savedObjectId
     * @param input - some input may come from a parent, or user, if it's not stored with the saved object. For example, the time
     * range of the parent container.
     * @param parent
     */

  }, {
    key: "createFromSavedObject",
    value: function createFromSavedObject(savedObjectId, input, parent) {
      throw new Error("Creation from saved object not supported by type ".concat(this.type));
    }
    /**
     * Resolves to undefined if a new Embeddable cannot be directly created and the user will instead be redirected
     * elsewhere.
     *
     * This will likely change in future iterations when we improve in place editing capabilities.
     */

  }]);

  return EmbeddableFactory;
}();

exports.EmbeddableFactory = EmbeddableFactory;