"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildContextMenuForActions = buildContextMenuForActions;

var _lodash = _interopRequireDefault(require("lodash"));

var _i18n = require("@kbn/i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Transforms an array of Actions to the shape EuiContextMenuPanel expects.
 */
function buildContextMenuForActions(_x) {
  return _buildContextMenuForActions.apply(this, arguments);
}
/**
 * Transform an array of Actions into the shape needed to build an EUIContextMenu
 */


function _buildContextMenuForActions() {
  _buildContextMenuForActions = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var actions, actionContext, closeMenu, menuItems;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            actions = _ref.actions, actionContext = _ref.actionContext, closeMenu = _ref.closeMenu;
            _context.next = 3;
            return buildEuiContextMenuPanelItems({
              actions: actions,
              actionContext: actionContext,
              closeMenu: closeMenu
            });

          case 3:
            menuItems = _context.sent;
            return _context.abrupt("return", {
              id: 'mainMenu',
              title: _i18n.i18n.translate('embeddableApi.actionPanel.title', {
                defaultMessage: 'Options'
              }),
              items: menuItems
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _buildContextMenuForActions.apply(this, arguments);
}

function buildEuiContextMenuPanelItems(_x2) {
  return _buildEuiContextMenuPanelItems.apply(this, arguments);
}
/**
 *
 * @param {ContextMenuAction} action
 * @param {Embeddable} embeddable
 * @return {EuiContextMenuPanelItemDescriptor}
 */


function _buildEuiContextMenuPanelItems() {
  _buildEuiContextMenuPanelItems = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_ref2) {
    var actions, actionContext, closeMenu, items, promises;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            actions = _ref2.actions, actionContext = _ref2.actionContext, closeMenu = _ref2.closeMenu;
            items = [];
            promises = actions.map(
            /*#__PURE__*/
            function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(action) {
                var isCompatible;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return action.isCompatible(actionContext);

                      case 2:
                        isCompatible = _context2.sent;

                        if (isCompatible) {
                          _context2.next = 5;
                          break;
                        }

                        return _context2.abrupt("return");

                      case 5:
                        items.push(convertPanelActionToContextMenuItem({
                          action: action,
                          actionContext: actionContext,
                          closeMenu: closeMenu
                        }));

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x3) {
                return _ref4.apply(this, arguments);
              };
            }());
            _context3.next = 5;
            return Promise.all(promises);

          case 5:
            return _context3.abrupt("return", items);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _buildEuiContextMenuPanelItems.apply(this, arguments);
}

function convertPanelActionToContextMenuItem(_ref3) {
  var action = _ref3.action,
      actionContext = _ref3.actionContext,
      closeMenu = _ref3.closeMenu;
  var menuPanelItem = {
    name: action.getDisplayName(actionContext),
    icon: action.getIconType(actionContext),
    panel: _lodash.default.get(action, 'childContextMenuPanel.id'),
    'data-test-subj': "embeddablePanelAction-".concat(action.id)
  };

  menuPanelItem.onClick = function () {
    action.execute(actionContext);
    closeMenu();
  };

  if (action.getHref(actionContext)) {
    menuPanelItem.href = action.getHref(actionContext);
  }

  return menuPanelItem;
}