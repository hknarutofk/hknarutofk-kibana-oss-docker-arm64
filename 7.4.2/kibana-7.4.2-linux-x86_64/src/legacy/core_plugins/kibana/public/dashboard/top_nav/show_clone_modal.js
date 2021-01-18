"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showCloneModal = showCloneModal;

var _i18n = require("ui/i18n");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _i18n2 = require("@kbn/i18n");

var _clone_modal = require("./clone_modal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function showCloneModal(onClone, title) {
  var container = document.createElement('div');

  var closeModal = function closeModal() {
    _reactDom.default.unmountComponentAtNode(container);

    document.body.removeChild(container);
  };

  var onCloneConfirmed =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(newTitle, isTitleDuplicateConfirmed, onTitleDuplicate) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              onClone(newTitle, isTitleDuplicateConfirmed, onTitleDuplicate).then(function (response) {
                // The only time you don't want to close the modal is if it's asking you
                // to confirm a duplicate title, in which case there will be no error and no id.
                if (response.error || response.id) {
                  closeModal();
                }
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onCloneConfirmed(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  document.body.appendChild(container);

  var element = _react.default.createElement(_i18n.I18nContext, null, _react.default.createElement(_clone_modal.DashboardCloneModal, {
    onClone: onCloneConfirmed,
    onClose: closeModal,
    title: _i18n2.i18n.translate('kbn.dashboard.topNav.showCloneModal.dashboardCopyTitle', {
      defaultMessage: '{title} Copy',
      values: {
        title: title
      }
    })
  }));

  _reactDom.default.render(element, container);
}