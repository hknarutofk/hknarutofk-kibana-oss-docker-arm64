"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMarkdownVisFn = void 0;

var _i18n = require("@kbn/i18n");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var name = 'markdownVis';

var createMarkdownVisFn = function createMarkdownVisFn() {
  return {
    name: name,
    type: 'render',
    context: {
      types: []
    },
    help: _i18n.i18n.translate('visTypeMarkdown.function.help', {
      defaultMessage: 'Markdown visualization'
    }),
    args: {
      markdown: {
        types: ['string'],
        aliases: ['_'],
        required: true,
        help: _i18n.i18n.translate('visTypeMarkdown.function.markdown.help', {
          defaultMessage: 'Markdown to render'
        })
      },
      font: {
        types: ['style'],
        help: _i18n.i18n.translate('visTypeMarkdown.function.font.help', {
          defaultMessage: 'Font settings.'
        }),
        default: "{font size=12}"
      },
      openLinksInNewTab: {
        types: ['boolean'],
        default: false,
        help: _i18n.i18n.translate('visTypeMarkdown.function.openLinksInNewTab.help', {
          defaultMessage: 'Opens links in new tab'
        })
      }
    },
    fn: function () {
      var _fn = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(context, args) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {
                  type: 'render',
                  as: 'visualization',
                  value: {
                    visType: 'markdown',
                    visConfig: {
                      markdown: args.markdown,
                      openLinksInNewTab: args.openLinksInNewTab,
                      fontSize: parseInt(args.font.spec.fontSize || '12', 10)
                    }
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fn(_x, _x2) {
        return _fn.apply(this, arguments);
      }

      return fn;
    }()
  };
};

exports.createMarkdownVisFn = createMarkdownVisFn;