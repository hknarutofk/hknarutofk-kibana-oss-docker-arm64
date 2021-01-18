"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTableVisFn = void 0;

var _i18n = require("@kbn/i18n");

var _table_vis_request_handler = require("./table_vis_request_handler");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var name = 'kibana_table';

var createTableVisFn = function createTableVisFn() {
  return {
    name: name,
    type: 'render',
    context: {
      types: ['kibana_datatable']
    },
    help: _i18n.i18n.translate('visTypeTable.function.help', {
      defaultMessage: 'Table visualization'
    }),
    args: {
      visConfig: {
        types: ['string', 'null'],
        default: '"{}"',
        help: ''
      }
    },
    fn: function () {
      var _fn = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(context, args) {
        var visConfig, responseHandler, convertedData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                visConfig = args.visConfig && JSON.parse(args.visConfig);
                responseHandler = (0, _table_vis_request_handler.createTableVisResponseHandler)();
                _context.next = 4;
                return responseHandler(context, visConfig.dimensions);

              case 4:
                convertedData = _context.sent;
                return _context.abrupt("return", {
                  type: 'render',
                  as: 'visualization',
                  value: {
                    visData: convertedData,
                    visType: 'table',
                    visConfig: visConfig,
                    params: {
                      listenOnChange: true
                    }
                  }
                });

              case 6:
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

exports.createTableVisFn = createTableVisFn;