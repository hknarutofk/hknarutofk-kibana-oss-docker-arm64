"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = void 0;

var _redux = require("redux");

var _rxjs = require("rxjs");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var SET = '__SET__';

var createStore = function createStore(defaultState) {
  var pureMutators = {};
  var mutators = {};

  var reducer = function reducer(state, action) {
    var pureMutator = pureMutators[action.type];

    if (pureMutator) {
      return pureMutator(state).apply(void 0, _toConsumableArray(action.args));
    }

    switch (action.type) {
      case SET:
        return action.state;

      default:
        return state;
    }
  };

  var redux = (0, _redux.createStore)(reducer, defaultState);
  var get = redux.getState;

  var set = function set(state) {
    return redux.dispatch({
      type: SET,
      state: state
    });
  };

  var state$ = new _rxjs.Subject();
  redux.subscribe(function () {
    state$.next(get());
  });

  var createMutators = function createMutators(newPureMutators) {
    var result = {};

    var _loop = function _loop() {
      var type = _Object$keys[_i];

      result[type] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        redux.dispatch({
          type: type,
          args: args
        });
      };
    };

    for (var _i = 0, _Object$keys = Object.keys(newPureMutators); _i < _Object$keys.length; _i++) {
      _loop();
    }

    Object.assign(pureMutators, newPureMutators);
    Object.assign(mutators, result);
    return result;
  };

  return {
    get: get,
    set: set,
    redux: redux,
    state$: state$,
    createMutators: createMutators,
    mutators: mutators
  };
};

exports.createStore = createStore;