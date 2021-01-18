"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpressionsService = void 0;

var _expression_renderer = require("./expression_renderer");

var _expression_runner = require("./expression_runner");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Expressions Service
 * @internal
 */
var ExpressionsService =
/*#__PURE__*/
function () {
  function ExpressionsService() {
    _classCallCheck(this, ExpressionsService);
  }

  _createClass(ExpressionsService, [{
    key: "setup",
    value: function setup(_ref) {
      var _ref$interpreter = _ref.interpreter,
          renderersRegistry = _ref$interpreter.renderersRegistry,
          getInterpreter = _ref$interpreter.getInterpreter;
      var run = (0, _expression_runner.createRunFn)(renderersRegistry, getInterpreter().then(function (_ref2) {
        var interpreter = _ref2.interpreter;
        return interpreter;
      }));
      return {
        /**
         * **experimential** This API is experimential and might be removed in the future
         * without notice
         *
         * Executes the given expression string or ast and renders the result into the
         * given DOM element.
         *
         *
         * @param expressionOrAst
         * @param element
         */
        run: run,

        /**
         * **experimential** This API is experimential and might be removed in the future
         * without notice
         *
         * Component which executes and renders the given expression in a div element.
         * The expression is re-executed on updating the props.
         *
         * This is a React bridge of the `run` method
         * @param props
         */
        ExpressionRenderer: (0, _expression_renderer.createRenderer)(run)
      };
    }
  }, {
    key: "stop",
    value: function stop() {// nothing to do here yet
    }
  }]);

  return ExpressionsService;
}();
/** @public */


exports.ExpressionsService = ExpressionsService;