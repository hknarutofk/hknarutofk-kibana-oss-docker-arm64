"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HelloWorldEmbeddable = exports.HELLO_WORLD_EMBEDDABLE_TYPE = void 0;

var _ = require("../../..");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HELLO_WORLD_EMBEDDABLE_TYPE = 'HELLO_WORLD_EMBEDDABLE_TYPE';
exports.HELLO_WORLD_EMBEDDABLE_TYPE = HELLO_WORLD_EMBEDDABLE_TYPE;

var HelloWorldEmbeddable =
/*#__PURE__*/
function (_Embeddable) {
  _inherits(HelloWorldEmbeddable, _Embeddable);

  // The type of this embeddable. This will be used to find the appropriate factory
  // to instantiate this kind of embeddable.
  function HelloWorldEmbeddable(initialInput, parent) {
    var _this;

    _classCallCheck(this, HelloWorldEmbeddable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HelloWorldEmbeddable).call(this, // Input state is irrelevant to this embeddable, just pass it along.
    initialInput, // Initial output state - this embeddable does not do anything with output, so just
    // pass along an empty object.
    {}, // Optional parent component, this embeddable can optionally be rendered inside a container.
    parent));

    _defineProperty(_assertThisInitialized(_this), "type", HELLO_WORLD_EMBEDDABLE_TYPE);

    return _this;
  }
  /**
   * Render yourself at the dom node using whatever framework you like, angular, react, or just plain
   * vanilla js.
   * @param node
   */


  _createClass(HelloWorldEmbeddable, [{
    key: "render",
    value: function render(node) {
      node.innerHTML = '<div data-test-subj="helloWorldEmbeddable">HELLO WORLD!</div>';
    }
    /**
     * This is mostly relevant for time based embeddables which need to update data
     * even if EmbeddableInput has not changed at all.
     */

  }, {
    key: "reload",
    value: function reload() {}
  }]);

  return HelloWorldEmbeddable;
}(_.Embeddable);

exports.HelloWorldEmbeddable = HelloWorldEmbeddable;