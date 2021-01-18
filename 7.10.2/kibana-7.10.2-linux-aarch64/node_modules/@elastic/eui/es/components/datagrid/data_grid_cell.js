function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { Component, memo, createRef } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import tabbable from 'tabbable';
import { EuiPopover } from '../popover';
import { EuiScreenReaderOnly } from '../accessibility';
import { EuiI18n } from '../i18n';
import { EuiButtonIcon } from '../button';
import { EuiMutationObserver } from '../observer/mutation_observer';
import { DataGridContext } from './data_grid_context';
import { EuiFocusTrap } from '../focus_trap';
import { keys } from '../../services';
var EuiDataGridCellContent = /*#__PURE__*/memo(function (props) {
  var renderCellValue = props.renderCellValue,
      rest = _objectWithoutProperties(props, ["renderCellValue"]); // React is more permissible than the TS types indicate


  var CellElement = renderCellValue;
  return /*#__PURE__*/React.createElement(CellElement, _extends({
    isDetails: false,
    "data-test-subj": "cell-content"
  }, rest));
});
EuiDataGridCellContent.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  visibleRowIndex: PropTypes.number.isRequired,
  colIndex: PropTypes.number.isRequired,
  columnId: PropTypes.string.isRequired,
  columnType: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([null])]),
  isExpandable: PropTypes.bool.isRequired,
  className: PropTypes.string,
  renderCellValue: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.func.isRequired]).isRequired,
  setCellProps: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired
};
export var EuiDataGridCell = /*#__PURE__*/function (_Component) {
  _inherits(EuiDataGridCell, _Component);

  var _super = _createSuper(EuiDataGridCell);

  function EuiDataGridCell() {
    var _this;

    _classCallCheck(this, EuiDataGridCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "cellRef", /*#__PURE__*/createRef());

    _defineProperty(_assertThisInitialized(_this), "popoverPanelRef", /*#__PURE__*/createRef());

    _defineProperty(_assertThisInitialized(_this), "cellContentsRef", null);

    _defineProperty(_assertThisInitialized(_this), "state", {
      cellProps: {},
      popoverIsOpen: false,
      isEntered: false,
      disableCellTabIndex: false
    });

    _defineProperty(_assertThisInitialized(_this), "unsubscribeCell", function () {});

    _defineProperty(_assertThisInitialized(_this), "getInteractables", function () {
      var tabbingRef = _this.cellContentsRef;

      if (tabbingRef) {
        return tabbingRef.querySelectorAll('[data-datagrid-interactable=true]');
      }

      return [];
    });

    _defineProperty(_assertThisInitialized(_this), "updateFocus", function () {
      var cell = _this.cellRef.current;
      var isFocused = _this.props.isFocused;

      if (cell && isFocused) {
        // only update focus if we are not already focused on something in this cell
        var element = document.activeElement;

        while (element != null && element !== cell) {
          element = element.parentElement;
        }

        var doFocusUpdate = element !== cell;

        if (doFocusUpdate) {
          var interactables = _this.getInteractables();

          if (_this.props.isExpandable === false && interactables.length === 1) {
            // Only one element can be interacted with
            interactables[0].focus();
          } else {
            cell.focus();
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setCellProps", function (cellProps) {
      _this.setState({
        cellProps: cellProps
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setCellContentsRef", function (ref) {
      _this.cellContentsRef = ref;

      _this.preventTabbing();
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      // only perform this logic when the event's originating element (e.target) is
      // the wrapping element with the onFocus logic
      // reasons:
      //  * the outcome is only meaningful when the focus shifts to the wrapping element
      //  * if the cell children include portalled content React will bubble the focus
      //      event up, which can trigger the focus() call below, causing focus lock fighting
      if (_this.cellRef.current === e.target) {
        var _this$props = _this.props,
            onCellFocus = _this$props.onCellFocus,
            colIndex = _this$props.colIndex,
            visibleRowIndex = _this$props.visibleRowIndex,
            isExpandable = _this$props.isExpandable;
        onCellFocus([colIndex, visibleRowIndex]);

        var interactables = _this.getInteractables();

        if (interactables.length === 1 && isExpandable === false) {
          interactables[0].focus();

          _this.setState({
            disableCellTabIndex: true
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      _this.setState({
        disableCellTabIndex: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "preventTabbing", function () {
      if (_this.cellContentsRef) {
        var tabbables = tabbable(_this.cellContentsRef);

        for (var i = 0; i < tabbables.length; i++) {
          var element = tabbables[i];
          element.setAttribute('tabIndex', '-1');
          element.setAttribute('data-datagrid-interactable', 'true');
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "enableTabbing", function () {
      if (_this.cellContentsRef) {
        var interactables = _this.getInteractables();

        for (var i = 0; i < interactables.length; i++) {
          var element = interactables[i];
          element.removeAttribute('tabIndex');
        }
      }
    });

    return _this;
  }

  _createClass(EuiDataGridCell, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.unsubscribeCell = this.context.onFocusUpdate([this.props.colIndex, this.props.visibleRowIndex], this.updateFocus);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribeCell) {
        this.unsubscribeCell();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var didFocusChange = prevProps.isFocused !== this.props.isFocused;

      if (didFocusChange) {
        this.updateFocus();
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.rowIndex !== this.props.rowIndex) return true;
      if (nextProps.visibleRowIndex !== this.props.visibleRowIndex) return true;
      if (nextProps.colIndex !== this.props.colIndex) return true;
      if (nextProps.columnId !== this.props.columnId) return true;
      if (nextProps.columnType !== this.props.columnType) return true;
      if (nextProps.width !== this.props.width) return true;
      if (nextProps.renderCellValue !== this.props.renderCellValue) return true;
      if (nextProps.onCellFocus !== this.props.onCellFocus) return true;
      if (nextProps.isFocused !== this.props.isFocused) return true;
      if (nextProps.interactiveCellId !== this.props.interactiveCellId) return true;
      if (nextProps.popoverContent !== this.props.popoverContent) return true;
      if (nextState.cellProps !== this.state.cellProps) return true;
      if (nextState.popoverIsOpen !== this.state.popoverIsOpen) return true;
      if (nextState.isEntered !== this.state.isEntered) return true;
      if (nextState.disableCellTabIndex !== this.state.disableCellTabIndex) return true;
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          width = _this$props2.width,
          isFocused = _this$props2.isFocused,
          isExpandable = _this$props2.isExpandable,
          PopoverContent = _this$props2.popoverContent,
          interactiveCellId = _this$props2.interactiveCellId,
          columnType = _this$props2.columnType,
          onCellFocus = _this$props2.onCellFocus,
          className = _this$props2.className,
          rest = _objectWithoutProperties(_this$props2, ["width", "isFocused", "isExpandable", "popoverContent", "interactiveCellId", "columnType", "onCellFocus", "className"]);

      var colIndex = rest.colIndex,
          rowIndex = rest.rowIndex;
      var cellClasses = classNames('euiDataGridRowCell', _defineProperty({}, "euiDataGridRowCell--".concat(columnType), columnType), className);

      var cellProps = _objectSpread(_objectSpread({}, this.state.cellProps), {}, {
        'data-test-subj': classNames('dataGridRowCell', this.state.cellProps['data-test-subj']),
        className: classNames(cellClasses, this.state.cellProps.className)
      });

      var widthStyle = width != null ? {
        width: "".concat(width, "px")
      } : {};

      if (cellProps.hasOwnProperty('style')) {
        cellProps.style = _objectSpread(_objectSpread({}, cellProps.style), widthStyle);
      } else {
        cellProps.style = widthStyle;
      }

      var handleCellKeyDown = function handleCellKeyDown(event) {
        if (isExpandable) {
          switch (event.key) {
            case keys.ENTER:
            case keys.F2:
              event.preventDefault();

              _this2.setState({
                popoverIsOpen: true
              });

              break;
          }
        } else {
          if (event.key === keys.ENTER || event.key === keys.F2 || event.key === keys.ESCAPE) {
            var interactables = _this2.getInteractables();

            if (interactables.length >= 2) {
              switch (event.key) {
                case keys.ENTER:
                  // `Enter` only activates the trap
                  if (_this2.state.isEntered === false) {
                    _this2.enableTabbing();

                    _this2.setState({
                      isEntered: true
                    }); // result of this keypress is focus shifts to the first interactive element
                    // and then the browser fires the onClick event because that's how [Enter] works
                    // so we need to prevent that default action otherwise entering the trap triggers the first element


                    event.preventDefault();
                  }

                  break;

                case keys.F2:
                  // toggle interactives' focus trap
                  _this2.setState(function (_ref) {
                    var isEntered = _ref.isEntered;

                    if (isEntered) {
                      _this2.preventTabbing();
                    } else {
                      _this2.enableTabbing();
                    }

                    return {
                      isEntered: !isEntered
                    };
                  });

                  break;

                case keys.ESCAPE:
                  // `Escape` only de-activates the trap
                  _this2.preventTabbing();

                  if (_this2.state.isEntered === true) {
                    _this2.setState({
                      isEntered: false
                    });
                  }

                  break;
              }
            }
          }
        }
      };

      var cellContentProps = _objectSpread(_objectSpread({}, rest), {}, {
        setCellProps: this.setCellProps,
        columnType: columnType,
        isExpandable: isExpandable,
        isExpanded: this.state.popoverIsOpen,
        isDetails: false
      });

      var buttonIconClasses = classNames('euiDataGridRowCell__expandButtonIcon', {
        'euiDataGridRowCell__expandButtonIcon-isActive': this.state.popoverIsOpen
      });
      var buttonClasses = classNames('euiDataGridRowCell__expandButton', {
        'euiDataGridRowCell__expandButton-isActive': this.state.popoverIsOpen
      });
      var expandButton = /*#__PURE__*/React.createElement(EuiI18n, {
        token: "euiDataGridCell.expandButtonTitle",
        default: "Click or hit enter to interact with cell content"
      }, function (expandButtonTitle) {
        return /*#__PURE__*/React.createElement(EuiButtonIcon, {
          className: buttonIconClasses,
          color: "text",
          iconSize: "s",
          iconType: "expandMini",
          "aria-hidden": true,
          onClick: function onClick() {
            return _this2.setState(function (_ref2) {
              var popoverIsOpen = _ref2.popoverIsOpen;
              return {
                popoverIsOpen: !popoverIsOpen
              };
            });
          },
          title: expandButtonTitle
        });
      });
      var screenReaderPosition = /*#__PURE__*/React.createElement(EuiScreenReaderOnly, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(EuiI18n, {
        tokens: ['euiDataGridCell.row', 'euiDataGridCell.column'],
        defaults: ['Row', 'Column']
      }, function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            row = _ref4[0],
            column = _ref4[1];

        return /*#__PURE__*/React.createElement("span", null, row, ": ", rowIndex + 1, ", ", column, ": ", colIndex + 1, ":");
      })));
      var anchorContent = /*#__PURE__*/React.createElement(EuiFocusTrap, {
        disabled: !this.state.isEntered,
        autoFocus: true,
        onDeactivation: function onDeactivation() {
          _this2.setState({
            isEntered: false
          }, _this2.preventTabbing);
        },
        clickOutsideDisables: true
      }, /*#__PURE__*/React.createElement("div", {
        className: "euiDataGridRowCell__expandFlex"
      }, /*#__PURE__*/React.createElement(EuiMutationObserver, {
        observerOptions: {
          subtree: true,
          childList: true
        },
        onMutation: this.preventTabbing
      }, function (mutationRef) {
        return /*#__PURE__*/React.createElement("div", {
          ref: mutationRef,
          className: "euiDataGridRowCell__expandContent"
        }, screenReaderPosition, /*#__PURE__*/React.createElement("div", {
          ref: _this2.setCellContentsRef,
          className: "euiDataGridRowCell__truncate"
        }, /*#__PURE__*/React.createElement(EuiDataGridCellContent, cellContentProps)));
      })));

      if (isExpandable) {
        anchorContent = /*#__PURE__*/React.createElement("div", {
          className: "euiDataGridRowCell__expandFlex"
        }, /*#__PURE__*/React.createElement(EuiMutationObserver, {
          observerOptions: {
            subtree: true,
            childList: true
          },
          onMutation: this.preventTabbing
        }, function (mutationRef) {
          return /*#__PURE__*/React.createElement("div", {
            ref: mutationRef,
            className: "euiDataGridRowCell__expandContent"
          }, screenReaderPosition, /*#__PURE__*/React.createElement("div", {
            ref: _this2.setCellContentsRef,
            className: "euiDataGridRowCell__truncate"
          }, /*#__PURE__*/React.createElement(EuiDataGridCellContent, cellContentProps)));
        }), /*#__PURE__*/React.createElement("div", {
          className: buttonClasses
        }, expandButton));
      }

      var innerContent = anchorContent;

      if (isExpandable) {
        var CellElement = rest.renderCellValue;
        var popoverContent = /*#__PURE__*/React.createElement(PopoverContent, {
          cellContentsElement: this.cellContentsRef
        }, /*#__PURE__*/React.createElement(CellElement, _extends({}, cellContentProps, {
          isDetails: true
        })));
        innerContent = /*#__PURE__*/React.createElement("div", {
          className: "euiDataGridRowCell__content"
        }, /*#__PURE__*/React.createElement(EuiPopover, {
          hasArrow: false,
          anchorClassName: "euiDataGridRowCell__expand",
          button: anchorContent,
          isOpen: this.state.popoverIsOpen,
          panelRef: function panelRef(ref) {
            return _this2.popoverPanelRef.current = ref;
          },
          ownFocus: true,
          panelClassName: "euiDataGridRowCell__popover",
          zIndex: 8001,
          display: "block",
          closePopover: function closePopover() {
            return _this2.setState({
              popoverIsOpen: false
            });
          },
          onKeyDown: function onKeyDown(event) {
            if (event.key === keys.F2 || event.key === keys.ESCAPE) {
              event.preventDefault();
              event.stopPropagation();

              _this2.setState({
                popoverIsOpen: false
              });
            }
          },
          onTrapDeactivation: this.updateFocus
        }, popoverContent));
      }

      return /*#__PURE__*/React.createElement("div", _extends({
        role: "gridcell",
        tabIndex: isFocused && !this.state.disableCellTabIndex ? 0 : -1,
        ref: this.cellRef
      }, cellProps, {
        "data-test-subj": "dataGridRowCell",
        onKeyDown: handleCellKeyDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }), innerContent);
    }
  }]);

  return EuiDataGridCell;
}(Component);

_defineProperty(EuiDataGridCell, "contextType", DataGridContext);

EuiDataGridCell.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  visibleRowIndex: PropTypes.number.isRequired,
  colIndex: PropTypes.number.isRequired,
  columnId: PropTypes.string.isRequired,
  columnType: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([null])]),
  width: PropTypes.number,
  isFocused: PropTypes.bool.isRequired,
  onCellFocus: PropTypes.func.isRequired,
  interactiveCellId: PropTypes.string.isRequired,
  isExpandable: PropTypes.bool.isRequired,
  className: PropTypes.string,
  popoverContent: PropTypes.elementType.isRequired,
  renderCellValue: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.func.isRequired]).isRequired
};