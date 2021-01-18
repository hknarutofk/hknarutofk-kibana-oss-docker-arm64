"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectAngularElement = injectAngularElement;
exports.convertDirectiveToRenderFn = convertDirectiveToRenderFn;

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _angular = _interopRequireDefault(require("angular"));

var _chrome = _interopRequireDefault(require("ui/chrome"));

var _doc_viewer_render_error = require("../../../core_plugins/kibana/public/doc_viewer/doc_viewer_render_error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Compiles and injects the give angular template into the given dom node
 * returns a function to cleanup the injected angular element
 */
function injectAngularElement(_x, _x2, _x3, _x4) {
  return _injectAngularElement.apply(this, arguments);
}
/**
 * Converts a given legacy angular directive to a render function
 * for usage in a react component. Note that the rendering is async
 */


function _injectAngularElement() {
  _injectAngularElement = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(domNode, template, scopeProps, Controller) {
    var $injector, rootScope, $compile, newScope, $target, $element;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _chrome.default.dangerouslyGetActiveInjector();

          case 2:
            $injector = _context.sent;
            rootScope = $injector.get('$rootScope');
            $compile = $injector.get('$compile');
            newScope = Object.assign(rootScope.$new(), scopeProps);

            if (typeof Controller === 'function') {
              // when a controller is defined, expose the value it produces to the view as `$ctrl`
              // see: https://docs.angularjs.org/api/ng/provider/$compileProvider#component
              newScope.$ctrl = $injector.instantiate(Controller, {
                $scope: newScope
              });
            }

            $target = _angular.default.element(domNode);
            $element = _angular.default.element(template);
            newScope.$apply(function () {
              var linkFn = $compile($element);
              $target.empty().append($element);
              linkFn(newScope);
            });
            return _context.abrupt("return", function () {
              newScope.$destroy();
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _injectAngularElement.apply(this, arguments);
}

function convertDirectiveToRenderFn(directive) {
  return function (domNode, props) {
    var rejected = false;
    var cleanupFnPromise = injectAngularElement(domNode, directive.template, props, directive.controller);
    cleanupFnPromise.catch(function (e) {
      rejected = true;
      (0, _reactDom.render)(_react.default.createElement(_doc_viewer_render_error.DocViewerError, {
        error: e
      }), domNode);
    });
    return function () {
      if (!rejected) {
        // for cleanup
        // http://roubenmeschian.com/rubo/?p=51
        cleanupFnPromise.then(function (cleanup) {
          return cleanup();
        });
      }
    };
  };
}