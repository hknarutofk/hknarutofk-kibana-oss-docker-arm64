"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createContext = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _observable_selector = require("./observable_selector");

var _use_observable = require("../../../kibana_react/public/util/use_observable");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useMemo = React.useMemo,
    useLayoutEffect = React.useLayoutEffect,
    useContext = React.useContext,
    createElement = React.createElement,
    Fragment = React.Fragment;
/**
 * @note
 * Types in `react-redux` seem to be quite off compared to reality
 * that's why a lot of `any`s below.
 */

var mapDispatchToProps = function mapDispatchToProps() {
  return {};
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  return _objectSpread({}, ownProps, {}, stateProps, {}, dispatchProps);
};

var createContext = function createContext(store) {
  var redux = store.redux;
  redux.__appStore = store;
  var context = React.createContext({
    store: redux
  });

  var useStore = function useStore() {
    // eslint-disable-next-line no-shadow
    var _useContext = useContext(context),
        store = _useContext.store;

    return store.__appStore;
  };

  var useState = function useState() {
    var _useStore = useStore(),
        state$ = _useStore.state$,
        get = _useStore.get;

    var state = (0, _use_observable.useObservable)(state$, get());
    return state;
  };

  var useMutators = function useMutators() {
    return useStore().mutators;
  };

  var useSelector = function useSelector(selector, comparator) {
    var _useStore2 = useStore(),
        state$ = _useStore2.state$,
        get = _useStore2.get;

    var _useMemo = useMemo(function () {
      return (0, _observable_selector.observableSelector)(get(), state$, selector, comparator);
    }, [state$]),
        _useMemo2 = _slicedToArray(_useMemo, 2),
        observable$ = _useMemo2[0],
        unsubscribe = _useMemo2[1];

    useLayoutEffect(function () {
      return unsubscribe;
    }, [observable$, unsubscribe]);
    var value = (0, _use_observable.useObservable)(observable$, selector(get()));
    return value;
  };

  var Provider = function Provider(_ref) {
    var children = _ref.children;
    return createElement(_reactRedux.Provider, {
      store: redux,
      context: context,
      children: children
    });
  };

  var Consumer = function Consumer(_ref2) {
    var children = _ref2.children;
    var state = useState();
    return createElement(Fragment, {
      children: children(state)
    });
  };

  var options = {
    context: context
  };

  var connect = function connect(mapStateToProps) {
    return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps, options);
  };

  return {
    Provider: Provider,
    Consumer: Consumer,
    connect: connect,
    context: context,
    useStore: useStore,
    useState: useState,
    useMutators: useMutators,
    useSelector: useSelector
  };
};

exports.createContext = createContext;