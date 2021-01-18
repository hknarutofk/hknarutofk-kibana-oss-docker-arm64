"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showSettingsModal = showSettingsModal;

var _i18n = require("ui/i18n");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _settings_modal = require("../components/settings_modal");

var _mappings = _interopRequireDefault(require("../mappings"));

var _settings = require("../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function showSettingsModal() {
  var container = document.getElementById('consoleSettingsModal');
  var curSettings = (0, _settings.getCurrentSettings)();

  var refreshAutocompleteSettings = function refreshAutocompleteSettings(selectedSettings) {
    _mappings.default.retrieveAutoCompleteInfo(selectedSettings);
  };

  var closeModal = function closeModal() {
    if (!container) return;

    _reactDom.default.unmountComponentAtNode(container);

    container.innerHTML = '';
  };

  var getAutocompleteDiff = function getAutocompleteDiff(newSettings, prevSettings) {
    return Object.keys(newSettings.autocomplete).filter(function (key) {
      // @ts-ignore
      return prevSettings.autocomplete[key] !== newSettings.autocomplete[key];
    });
  };

  var fetchAutocompleteSettingsIfNeeded = function fetchAutocompleteSettingsIfNeeded(newSettings, prevSettings) {
    // We'll only retrieve settings if polling is on. The expectation here is that if the user
    // disables polling it's because they want manual control over the fetch request (possibly
    // because it's a very expensive request given their cluster and bandwidth). In that case,
    // they would be unhappy with any request that's sent automatically.
    if (newSettings.polling) {
      var autocompleteDiff = getAutocompleteDiff(newSettings, prevSettings);
      var isSettingsChanged = autocompleteDiff.length > 0;
      var isPollingChanged = prevSettings.polling !== newSettings.polling;

      if (isSettingsChanged) {
        // If the user has changed one of the autocomplete settings, then we'll fetch just the
        // ones which have changed.
        var changedSettings = autocompleteDiff.reduce(function (changedSettingsAccum, setting) {
          changedSettingsAccum[setting] = newSettings.autocomplete[setting];
          return changedSettingsAccum;
        }, {});

        _mappings.default.retrieveAutoCompleteInfo(changedSettings);
      } else if (isPollingChanged) {
        // If the user has turned polling on, then we'll fetch all selected autocomplete settings.
        _mappings.default.retrieveAutoCompleteInfo();
      }
    }
  };

  var onSave =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(newSettings) {
      var prevSettings;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              prevSettings = (0, _settings.getCurrentSettings)();
              (0, _settings.updateSettings)(newSettings);
              fetchAutocompleteSettingsIfNeeded(newSettings, prevSettings);
              closeModal();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSave(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var element = _react.default.createElement(_i18n.I18nContext, null, _react.default.createElement(_settings_modal.DevToolsSettingsModal, {
    settings: curSettings,
    onSaveSettings: onSave,
    onClose: closeModal,
    refreshAutocompleteSettings: refreshAutocompleteSettings
  }));

  _reactDom.default.render(element, container);
}