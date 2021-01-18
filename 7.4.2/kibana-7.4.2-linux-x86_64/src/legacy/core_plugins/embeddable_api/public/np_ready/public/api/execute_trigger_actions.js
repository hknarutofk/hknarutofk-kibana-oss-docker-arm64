"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeTriggerActions = void 0;

var _lib = require("../lib");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var executeSingleAction =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(action, actionContext) {
    var href;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            href = action.getHref(actionContext); // TODO: Do we need a `getHref()` special case?

            if (!href) {
              _context.next = 4;
              break;
            }

            window.location.href = href;
            return _context.abrupt("return");

          case 4:
            _context.next = 6;
            return action.execute(actionContext);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function executeSingleAction(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var executeTriggerActions = function executeTriggerActions(_ref2) {
  var api = _ref2.api;
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(triggerId, actionContext) {
        var actions, panel, session;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return api.getTriggerCompatibleActions(triggerId, actionContext);

              case 2:
                actions = _context2.sent;

                if (actions.length) {
                  _context2.next = 5;
                  break;
                }

                throw new Error("No compatible actions found to execute for trigger [triggerId = ".concat(triggerId, "]."));

              case 5:
                if (!(actions.length === 1)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 8;
                return executeSingleAction(actions[0], actionContext);

              case 8:
                return _context2.abrupt("return");

              case 9:
                _context2.next = 11;
                return (0, _lib.buildContextMenuForActions)({
                  actions: actions,
                  actionContext: actionContext,
                  closeMenu: function closeMenu() {
                    return session.close();
                  }
                });

              case 11:
                panel = _context2.sent;
                session = (0, _lib.openContextMenu)([panel]);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.executeTriggerActions = executeTriggerActions;