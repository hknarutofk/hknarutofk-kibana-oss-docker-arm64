"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLogKey = createLogKey;

var _utils = require("../../utils/");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createLogKey(_x, _x2) {
  return _createLogKey.apply(this, arguments);
}

function _createLogKey() {
  _createLogKey = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(type, optionalIdentifier) {
    var baseKey, protectedIdentifier;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            baseKey = "kibana.history.".concat(type);

            if (optionalIdentifier) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", baseKey);

          case 3:
            protectedIdentifier = new _utils.Sha256().update(optionalIdentifier, 'utf8').digest('base64');
            return _context.abrupt("return", "".concat(baseKey, "-").concat(protectedIdentifier));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createLogKey.apply(this, arguments);
}