"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arg = Arg;
exports.Fn = Fn;
exports.TypesRegistry = exports.FunctionsRegistry = exports.RenderFunctionsRegistry = exports.Registry = void 0;

var _lodash = require("lodash");

var _interpreter = require("../../common/expressions/interpreter");

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Registry =
/*#__PURE__*/
function () {
  function Registry() {
    var prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'name';

    _classCallCheck(this, Registry);

    _defineProperty(this, "_prop", void 0);

    _defineProperty(this, "_indexed", void 0);

    if (typeof prop !== 'string') throw new Error('Registry property name must be a string');
    this._prop = prop;
    this._indexed = new Object();
  }

  _createClass(Registry, [{
    key: "wrapper",
    value: function wrapper(obj) {
      return obj;
    }
  }, {
    key: "register",
    value: function register(fn) {
      if (typeof fn !== 'function') throw new Error("Register requires an function");
      var obj = fn();

      if (_typeof(obj) !== 'object' || !obj[this._prop]) {
        throw new Error("Registered functions must return an object with a ".concat(this._prop, " property"));
      }

      this._indexed[obj[this._prop].toLowerCase()] = this.wrapper(obj);
    }
  }, {
    key: "toJS",
    value: function toJS() {
      var _this = this;

      return Object.keys(this._indexed).reduce(function (acc, key) {
        acc[key] = _this.get(key);
        return acc;
      }, {});
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var _this2 = this;

      return Object.keys(this._indexed).map(function (key) {
        return _this2.get(key);
      });
    }
  }, {
    key: "get",
    value: function get(name) {
      if (name === undefined) {
        return null;
      }

      var lowerCaseName = name.toLowerCase();
      return this._indexed[lowerCaseName] ? (0, _lodash.clone)(this._indexed[lowerCaseName]) : null;
    }
  }, {
    key: "getProp",
    value: function getProp() {
      return this._prop;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._indexed = new Object();
    }
  }]);

  return Registry;
}();

exports.Registry = Registry;

function RenderFunction(config) {
  // This must match the name of the function that is used to create the `type: render` object
  this.name = config.name; // Use this to set a more friendly name

  this.displayName = config.displayName || this.name; // A sentence or few about what this element does

  this.help = config.help; // used to validate the data before calling the render function

  this.validate = config.validate || function validate() {}; // tell the renderer if the dom node should be reused, it's recreated each time by default


  this.reuseDomNode = Boolean(config.reuseDomNode); // the function called to render the data

  this.render = config.render || function render(domNode, data, done) {
    done();
  };
}

function Arg(config) {
  var _this3 = this;

  if (config.name === '_') throw Error('Arg names must not be _. Use it in aliases instead.');
  this.name = config.name;
  this.required = config.required || false;
  this.help = config.help || '';
  this.types = config.types || [];
  this.default = config.default;
  this.aliases = config.aliases || [];
  this.multi = config.multi == null ? false : config.multi;
  this.resolve = config.resolve == null ? true : config.resolve;
  this.options = config.options || [];

  this.accepts = function (type) {
    if (!_this3.types.length) return true;
    return (0, _lodash.includes)(config.types, type);
  };
}

function Fn(config) {
  var _this4 = this;

  // Required
  this.name = config.name; // Name of function
  // Return type of function.
  // This SHOULD be supplied. We use it for UI and autocomplete hinting,
  // We may also use it for optimizations in the future.

  this.type = config.type;
  this.aliases = config.aliases || []; // Function to run function (context, args)

  this.fn = function () {
    return Promise.resolve(config.fn.apply(config, arguments));
  }; // Optional


  this.help = config.help || ''; // A short help text

  this.args = (0, _lodash.mapValues)(config.args || {}, function (arg, name) {
    return new Arg(_objectSpread({
      name: name
    }, arg));
  });
  this.context = config.context || {};

  this.accepts = function (type) {
    if (!_this4.context.types) return true; // If you don't tell us about context, we'll assume you don't care what you get

    return (0, _lodash.includes)(_this4.context.types, type); // Otherwise, check it
  };
}

var RenderFunctionsRegistry =
/*#__PURE__*/
function (_Registry) {
  _inherits(RenderFunctionsRegistry, _Registry);

  function RenderFunctionsRegistry() {
    _classCallCheck(this, RenderFunctionsRegistry);

    return _possibleConstructorReturn(this, _getPrototypeOf(RenderFunctionsRegistry).apply(this, arguments));
  }

  _createClass(RenderFunctionsRegistry, [{
    key: "wrapper",
    value: function wrapper(obj) {
      return new RenderFunction(obj);
    }
  }]);

  return RenderFunctionsRegistry;
}(Registry);

exports.RenderFunctionsRegistry = RenderFunctionsRegistry;

var FunctionsRegistry =
/*#__PURE__*/
function (_Registry2) {
  _inherits(FunctionsRegistry, _Registry2);

  function FunctionsRegistry() {
    _classCallCheck(this, FunctionsRegistry);

    return _possibleConstructorReturn(this, _getPrototypeOf(FunctionsRegistry).apply(this, arguments));
  }

  _createClass(FunctionsRegistry, [{
    key: "wrapper",
    value: function wrapper(obj) {
      return new Fn(obj);
    }
  }]);

  return FunctionsRegistry;
}(Registry);

exports.FunctionsRegistry = FunctionsRegistry;

var TypesRegistry =
/*#__PURE__*/
function (_Registry3) {
  _inherits(TypesRegistry, _Registry3);

  function TypesRegistry() {
    _classCallCheck(this, TypesRegistry);

    return _possibleConstructorReturn(this, _getPrototypeOf(TypesRegistry).apply(this, arguments));
  }

  _createClass(TypesRegistry, [{
    key: "wrapper",
    value: function wrapper(obj) {
      return new _interpreter.Type(obj);
    }
  }]);

  return TypesRegistry;
}(Registry);

exports.TypesRegistry = TypesRegistry;