"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18nService = void 0;

var _react = _interopRequireDefault(require("react"));

var _eui = require("@elastic/eui");

var _i18n = require("@kbn/i18n");

var _react2 = require("@kbn/i18n/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Service that is responsible for i18n capabilities.
 * @internal
 */
var I18nService =
/*#__PURE__*/
function () {
  function I18nService() {
    _classCallCheck(this, I18nService);
  }

  _createClass(I18nService, [{
    key: "getContext",

    /**
     * Used exclusively to give a Context component to FatalErrorsService which
     * may render before Core successfully sets up or starts.
     *
     * Separated from `start` to disambiguate that this can be called from within
     * Core outside the lifecycle flow.
     * @internal
     */
    value: function getContext() {
      var mapping = {
        'euiBasicTable.selectAllRows': _i18n.i18n.translate('core.euiBasicTable.selectAllRows', {
          defaultMessage: 'Select all rows',
          description: 'ARIA and displayed label on a checkbox to select all table rows'
        }),
        'euiBasicTable.selectThisRow': _i18n.i18n.translate('core.euiBasicTable.selectThisRow', {
          defaultMessage: 'Select this row',
          description: 'ARIA and displayed label on a checkbox to select a single table row'
        }),
        'euiBasicTable.tableDescription': function euiBasicTableTableDescription(_ref) {
          var itemCount = _ref.itemCount;
          return _i18n.i18n.translate('core.euiBasicTable.tableDescription', {
            defaultMessage: 'Below is a table of {itemCount} items.',
            values: {
              itemCount: itemCount
            },
            description: 'Screen reader text to describe the size of a table'
          });
        },
        'euiBottomBar.screenReaderAnnouncement': _i18n.i18n.translate('core.euiBottomBar.screenReaderAnnouncement', {
          defaultMessage: 'There is a new menu opening with page level controls at the end of the document.',
          description: 'Screen reader announcement that functionality is available in the page document'
        }),
        'euiCardSelect.select': _i18n.i18n.translate('core.euiCardSelect.select', {
          defaultMessage: 'Select',
          description: 'Displayed button text when a card option can be selected.'
        }),
        'euiCardSelect.selected': _i18n.i18n.translate('core.euiCardSelect.selected', {
          defaultMessage: 'Selected',
          description: 'Displayed button text when a card option is selected.'
        }),
        'euiCardSelect.unavailable': _i18n.i18n.translate('core.euiCardSelect.unavailable', {
          defaultMessage: 'Unavailable',
          description: 'Displayed button text when a card option is unavailable.'
        }),
        'euiCodeBlock.copyButton': _i18n.i18n.translate('core.euiCodeBlock.copyButton', {
          defaultMessage: 'Copy',
          description: 'ARIA label for a button that copies source code text to the clipboard'
        }),
        'euiCodeEditor.startEditing': _i18n.i18n.translate('core.euiCodeEditor.startEditing', {
          defaultMessage: 'Press Enter to start editing.'
        }),
        'euiCodeEditor.startInteracting': _i18n.i18n.translate('core.euiCodeEditor.startInteracting', {
          defaultMessage: 'Press Enter to start interacting with the code.'
        }),
        'euiCodeEditor.stopEditing': _i18n.i18n.translate('core.euiCodeEditor.stopEditing', {
          defaultMessage: "When you're done, press Escape to stop editing."
        }),
        'euiCodeEditor.stopInteracting': _i18n.i18n.translate('core.euiCodeEditor.stopInteracting', {
          defaultMessage: "When you're done, press Escape to stop interacting with the code."
        }),
        'euiCollapsedItemActions.allActions': _i18n.i18n.translate('core.euiCollapsedItemActions.allActions', {
          defaultMessage: 'All actions',
          description: 'ARIA label and tooltip content describing a button that expands an actions menu'
        }),
        'euiColorPicker.screenReaderAnnouncement': _i18n.i18n.translate('core.euiColorPicker.screenReaderAnnouncement', {
          defaultMessage: 'A popup with a range of selectable colors opened. Tab forward to cycle through colors choices or press escape to close this popup.',
          description: 'Message when the color picker popover is opened. Describes the interaction with the elements in the popover.'
        }),
        'euiColorPicker.swatchAriaLabel': function euiColorPickerSwatchAriaLabel(_ref2) {
          var swatch = _ref2.swatch;
          return _i18n.i18n.translate('core.euiColorPicker.swatchAriaLabel', {
            defaultMessage: 'Select {swatch} as the color',
            values: {
              swatch: swatch
            },
            description: 'Screen reader text to describe the action and hex value of the selectable option'
          });
        },
        'euiComboBoxOptionsList.allOptionsSelected': _i18n.i18n.translate('core.euiComboBoxOptionsList.allOptionsSelected', {
          defaultMessage: "You've selected all available options"
        }),
        'euiComboBoxOptionsList.alreadyAdded': function euiComboBoxOptionsListAlreadyAdded(_ref3) {
          var label = _ref3.label;
          return _react.default.createElement(_react2.FormattedMessage, {
            id: "core.euiComboBoxOptionsList.alreadyAdded",
            defaultMessage: "{label} has already been added",
            values: {
              label: label
            }
          });
        },
        'euiComboBoxOptionsList.createCustomOption': function euiComboBoxOptionsListCreateCustomOption(_ref4) {
          var key = _ref4.key,
              searchValue = _ref4.searchValue;
          return _react.default.createElement(_react2.FormattedMessage, {
            id: "core.euiComboBoxOptionsList.createCustomOption",
            defaultMessage: "Hit {key} to add {searchValue} as a custom option",
            values: {
              key: key,
              searchValue: searchValue
            }
          });
        },
        'euiComboBoxOptionsList.loadingOptions': _i18n.i18n.translate('core.euiComboBoxOptionsList.loadingOptions', {
          defaultMessage: 'Loading options',
          description: 'Placeholder message while data is asynchronously loaded'
        }),
        'euiComboBoxOptionsList.noAvailableOptions': _i18n.i18n.translate('core.euiComboBoxOptionsList.noAvailableOptions', {
          defaultMessage: "There aren't any options available"
        }),
        'euiComboBoxOptionsList.noMatchingOptions': function euiComboBoxOptionsListNoMatchingOptions(_ref5) {
          var searchValue = _ref5.searchValue;
          return _react.default.createElement(_react2.FormattedMessage, {
            id: "core.euiComboBoxOptionsList.noMatchingOptions",
            defaultMessage: "{searchValue} doesn't match any options",
            values: {
              searchValue: searchValue
            }
          });
        },
        'euiComboBoxPill.removeSelection': function euiComboBoxPillRemoveSelection(_ref6) {
          var children = _ref6.children;
          return _i18n.i18n.translate('core.euiComboBoxPill.removeSelection', {
            defaultMessage: 'Remove {children} from selection in this group',
            values: {
              children: children
            },
            description: 'ARIA label, `children` is the human-friendly value of an option'
          });
        },
        'euiFilterButton.filterBadge': function euiFilterButtonFilterBadge(_ref7) {
          var count = _ref7.count,
              hasActiveFilters = _ref7.hasActiveFilters;
          return _i18n.i18n.translate('core.euiFilterButton.filterBadge', {
            defaultMessage: '${count} ${filterCountLabel} filters',
            values: {
              count: count,
              filterCountLabel: hasActiveFilters ? 'active' : 'available'
            }
          });
        },
        'euiForm.addressFormErrors': _i18n.i18n.translate('core.euiForm.addressFormErrors', {
          defaultMessage: 'Please address the errors in your form.'
        }),
        'euiFormControlLayoutClearButton.label': _i18n.i18n.translate('core.euiFormControlLayoutClearButton.label', {
          defaultMessage: 'Clear input',
          description: 'ARIA label on a button that removes any entry in a form field'
        }),
        'euiHeaderAlert.dismiss': _i18n.i18n.translate('core.euiHeaderAlert.dismiss', {
          defaultMessage: 'Dismiss',
          description: 'ARIA label on a button that dismisses/removes a notification'
        }),
        'euiHeaderLinks.appNavigation': _i18n.i18n.translate('core.euiHeaderLinks.appNavigation', {
          defaultMessage: 'App navigation',
          description: 'ARIA label on a `nav` element'
        }),
        'euiHeaderLinks.openNavigationMenu': _i18n.i18n.translate('core.euiHeaderLinks.openNavigationMenu', {
          defaultMessage: 'Open navigation menu'
        }),
        'euiHue.label': _i18n.i18n.translate('core.euiHue.label', {
          defaultMessage: 'Select the HSV color mode "hue" value'
        }),
        'euiModal.closeModal': _i18n.i18n.translate('core.euiModal.closeModal', {
          defaultMessage: 'Closes this modal window'
        }),
        'euiPagination.jumpToLastPage': function euiPaginationJumpToLastPage(_ref8) {
          var pageCount = _ref8.pageCount;
          return _i18n.i18n.translate('core.euiPagination.jumpToLastPage', {
            defaultMessage: 'Jump to the last page, number {pageCount}',
            values: {
              pageCount: pageCount
            }
          });
        },
        'euiPagination.nextPage': _i18n.i18n.translate('core.euiPagination.nextPage', {
          defaultMessage: 'Next page'
        }),
        'euiPagination.pageOfTotal': function euiPaginationPageOfTotal(_ref9) {
          var page = _ref9.page,
              total = _ref9.total;
          return _i18n.i18n.translate('core.euiPagination.pageOfTotal', {
            defaultMessage: 'Page {page} of {total}',
            values: {
              page: page,
              total: total
            }
          });
        },
        'euiPagination.previousPage': _i18n.i18n.translate('core.euiPagination.previousPage', {
          defaultMessage: 'Previous page'
        }),
        'euiPopover.screenReaderAnnouncement': _i18n.i18n.translate('core.euiPopover.screenReaderAnnouncement', {
          defaultMessage: 'You are in a popup. To exit this popup, hit Escape.'
        }),
        'euiSaturation.roleDescription': _i18n.i18n.translate('core.euiSaturation.roleDescription', {
          defaultMessage: 'HSV color mode saturation and value selection'
        }),
        'euiSaturation.screenReaderAnnouncement': _i18n.i18n.translate('core.euiSaturation.screenReaderAnnouncement', {
          defaultMessage: 'Use the arrow keys to navigate the square color gradient. The coordinates resulting from each key press will be used to calculate HSV color mode "saturation" and "value" numbers, in the range of 0 to 1. Left and right decrease and increase (respectively) the "saturation" value. Up and down decrease and increase (respectively) the "value" value.'
        }),
        'euiSelectable.loadingOptions': _i18n.i18n.translate('core.euiSelectable.loadingOptions', {
          defaultMessage: 'Loading options',
          description: 'Placeholder message while data is asynchronously loaded'
        }),
        'euiSelectable.noAvailableOptions': _i18n.i18n.translate('core.euiSelectable.noAvailableOptions', {
          defaultMessage: "There aren't any options available"
        }),
        'euiSelectable.noMatchingOptions': function euiSelectableNoMatchingOptions(_ref10) {
          var searchValue = _ref10.searchValue;
          return _react.default.createElement(_react2.FormattedMessage, {
            id: "core.euiSelectable.noMatchingOptions",
            defaultMessage: "{searchValue} doesn't match any options",
            values: {
              searchValue: searchValue
            }
          });
        },
        'euiStat.loadingText': _i18n.i18n.translate('core.euiStat.loadingText', {
          defaultMessage: 'Statistic is loading'
        }),
        'euiStep.completeStep': _i18n.i18n.translate('core.euiStep.completeStep', {
          defaultMessage: 'Step',
          description: 'See https://elastic.github.io/eui/#/navigation/steps to know how Step control looks like'
        }),
        'euiStep.incompleteStep': _i18n.i18n.translate('core.euiStep.incompleteStep', {
          defaultMessage: 'Incomplete Step'
        }),
        'euiStepHorizontal.buttonTitle': function euiStepHorizontalButtonTitle(_ref11) {
          var step = _ref11.step,
              title = _ref11.title,
              disabled = _ref11.disabled,
              isComplete = _ref11.isComplete;
          return _i18n.i18n.translate('core.euiStepHorizontal.buttonTitle', {
            defaultMessage: 'Step {step}: {title}{titleAppendix, select, completed { is completed} disabled { is disabled} other {}}',
            values: {
              step: step,
              title: title,
              titleAppendix: disabled ? 'disabled' : isComplete ? 'completed' : ''
            }
          });
        },
        'euiStepHorizontal.step': _i18n.i18n.translate('core.euiStepHorizontal.step', {
          defaultMessage: 'Step',
          description: 'Screen reader text announcing information about a step in some process'
        }),
        'euiStepNumber.hasErrors': _i18n.i18n.translate('core.euiStepNumber.hasErrors', {
          defaultMessage: 'has errors',
          description: 'Used as the title attribute on an image or svg icon to indicate a given process step has errors'
        }),
        'euiStepNumber.hasWarnings': _i18n.i18n.translate('core.euiStepNumber.hasWarnings', {
          defaultMessage: 'has warnings',
          description: 'Used as the title attribute on an image or svg icon to indicate a given process step has warnings'
        }),
        'euiStepNumber.isComplete': _i18n.i18n.translate('core.euiStepNumber.isComplete', {
          defaultMessage: 'complete',
          description: 'Used as the title attribute on an image or svg icon to indicate a given process step is complete'
        }),
        'euiSuperDatePicker.showDatesButtonLabel': _i18n.i18n.translate('core.euiSuperDatePicker.showDatesButtonLabel', {
          defaultMessage: 'Show dates',
          description: 'Displayed in a button that shows date picker'
        }),
        'euiSuperSelect.screenReaderAnnouncement': function euiSuperSelectScreenReaderAnnouncement(_ref12) {
          var optionsCount = _ref12.optionsCount;
          return _i18n.i18n.translate('core.euiSuperSelect.screenReaderAnnouncement', {
            defaultMessage: 'You are in a form selector of {optionsCount} items and must select a single option. Use the Up and Down keys to navigate or Escape to close.',
            values: {
              optionsCount: optionsCount
            }
          });
        },
        'euiSuperSelectControl.selectAnOption': function euiSuperSelectControlSelectAnOption(_ref13) {
          var selectedValue = _ref13.selectedValue;
          return _i18n.i18n.translate('core.euiSuperSelectControl.selectAnOption', {
            defaultMessage: 'Select an option: {selectedValue}, is selected',
            values: {
              selectedValue: selectedValue
            }
          });
        },
        'euiSuperUpdateButton.cannotUpdateTooltip': _i18n.i18n.translate('core.euiSuperUpdateButton.cannotUpdateTooltip', {
          defaultMessage: 'Cannot update',
          description: "Displayed in a tooltip when updates can't happen"
        }),
        'euiSuperUpdateButton.clickToApplyTooltip': _i18n.i18n.translate('core.euiSuperUpdateButton.clickToApplyTooltip', {
          defaultMessage: 'Click to apply',
          description: "Displayed in a tooltip when there are changes that haven't been applied"
        }),
        'euiSuperUpdateButton.refreshButtonLabel': _i18n.i18n.translate('core.euiSuperUpdateButton.refreshButtonLabel', {
          defaultMessage: 'Refresh',
          description: 'Displayed in a button that refreshes based on date picked'
        }),
        'euiSuperUpdateButton.updatingButtonLabel': _i18n.i18n.translate('core.euiSuperUpdateButton.updatingButtonLabel', {
          defaultMessage: 'Updating',
          description: 'Displayed in a button that refreshes when updates are happening'
        }),
        'euiSuperUpdateButton.updateButtonLabel': _i18n.i18n.translate('core.euiSuperUpdateButton.updateButtonLabel', {
          defaultMessage: 'Update',
          description: 'Displayed in a button that updates based on date picked'
        }),
        'euiTablePagination.rowsPerPage': _i18n.i18n.translate('core.euiTablePagination.rowsPerPage', {
          defaultMessage: 'Rows per page',
          description: 'Displayed in a button that toggles a table pagination menu'
        }),
        'euiTablePagination.rowsPerPageOption': function euiTablePaginationRowsPerPageOption(_ref14) {
          var rowsPerPage = _ref14.rowsPerPage;
          return _i18n.i18n.translate('core.euiTablePagination.rowsPerPageOption', {
            defaultMessage: '{rowsPerPage} rows',
            description: 'Displayed in a button that toggles the number of visible rows',
            values: {
              rowsPerPage: rowsPerPage
            }
          });
        },
        'euiTableSortMobile.sorting': _i18n.i18n.translate('core.euiTableSortMobile.sorting', {
          defaultMessage: 'Sorting',
          description: 'Displayed in a button that toggles a table sorting menu'
        }),
        'euiToast.dismissToast': _i18n.i18n.translate('core.euiToast.dismissToast', {
          defaultMessage: 'Dismiss toast'
        }),
        'euiToast.newNotification': _i18n.i18n.translate('core.euiToast.newNotification', {
          defaultMessage: 'A new notification appears'
        }),
        'euiToast.notification': _i18n.i18n.translate('core.euiToast.notification', {
          defaultMessage: 'Notification',
          description: 'ARIA label on an element containing a notification'
        })
      };
      return {
        Context: function I18nContext(_ref15) {
          var children = _ref15.children;
          return _react.default.createElement(_react2.I18nProvider, null, _react.default.createElement(_eui.EuiContext, {
            i18n: {
              mapping: mapping
            }
          }, children));
        }
      };
    }
  }, {
    key: "start",
    value: function start() {
      return this.getContext();
    }
  }, {
    key: "stop",
    value: function stop() {// nothing to do here currently
    }
  }]);

  return I18nService;
}();
/**
 * I18nStart.Context is required by any localizable React component from \@kbn/i18n and \@elastic/eui packages
 * and is supposed to be used as the topmost component for any i18n-compatible React tree.
 *
 * @public
 *
 */


exports.I18nService = I18nService;