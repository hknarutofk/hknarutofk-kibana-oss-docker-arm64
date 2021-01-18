function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { useEuiResizablePanelContext } from './context';
import { htmlIdGenerator } from '../../services';
var generatePanelId = htmlIdGenerator('resizable-panel');
export var EuiResizablePanel = function EuiResizablePanel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      isHorizontal = _ref.isHorizontal,
      size = _ref.size,
      initialSize = _ref.initialSize,
      _ref$minSize = _ref.minSize,
      minSize = _ref$minSize === void 0 ? '0px' : _ref$minSize,
      _ref$scrollable = _ref.scrollable,
      scrollable = _ref$scrollable === void 0 ? true : _ref$scrollable,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      rest = _objectWithoutProperties(_ref, ["children", "className", "id", "isHorizontal", "size", "initialSize", "minSize", "scrollable", "style"]);

  var _useState = useState(initialSize && !size ? initialSize : 0),
      _useState2 = _slicedToArray(_useState, 2),
      innerSize = _useState2[0],
      setInnerSize = _useState2[1];

  var _useEuiResizablePanel = useEuiResizablePanelContext(),
      registry = _useEuiResizablePanel.registry;

  var divRef = useRef(null);
  var panelId = useRef(id || generatePanelId());
  var classes = classNames({
    euiResizablePanel: scrollable
  }, className);
  var dimensions;

  if (size) {
    dimensions = {
      width: isHorizontal ? "".concat(size, "%") : '100%',
      height: isHorizontal ? '100%' : "".concat(size, "%")
    };
  } else {
    dimensions = {
      width: isHorizontal ? "".concat(innerSize, "%") : '100%',
      height: isHorizontal ? '100%' : "".concat(innerSize, "%")
    };
  }

  var styles = _objectSpread(_objectSpread(_objectSpread({}, style), dimensions), {}, {
    minWidth: isHorizontal ? minSize : 0,
    minHeight: isHorizontal ? 0 : minSize
  });

  useEffect(function () {
    var id = panelId.current;
    registry && registry.registerPanel({
      id: id,
      setSize: function setSize(panelSize) {
        if (initialSize && !size) {
          setInnerSize(panelSize);
        }
      },
      getSizePx: function getSizePx() {
        return isHorizontal ? divRef.current.getBoundingClientRect().width : divRef.current.getBoundingClientRect().height;
      },
      minSize: minSize
    });
    return function () {
      registry && registry.deregisterPanel(id);
    };
  }, [initialSize, isHorizontal, minSize, registry, size]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes,
    id: panelId.current,
    ref: divRef,
    style: styles
  }, rest), children);
};
EuiResizablePanel.propTypes = {
  /**
     * Specify minimum panel size in pixels or percents,
     * for example "300px" or "30%"
     */
  minSize: PropTypes.string,

  /**
     * Specify id of panel if you want to track panel size in "onPanelWidthChange" callback
     */
  id: PropTypes.string,

  /**
     * Initial size of the panel in percents
     * Specify this prop if you don't need to handle the panel size from outside
     */
  initialSize: PropTypes.number,

  /**
     * Size of the panel in percents.
     * Specify this prop if you want to control the size from outside, the panel will ignore the "initialSize"
     */
  size: PropTypes.number,

  /**
     * Add Eui scroll and overflow for the panel
     */
  scrollable: PropTypes.bool,

  /**
     * ReactNode to render as this component's content
     */
  children: PropTypes.node.isRequired,

  /**
     * Custom CSS properties
     */
  style: PropTypes.any,
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string
};
export function euiResizablePanelWithControls(controls) {
  return function (props) {
    return /*#__PURE__*/React.createElement(EuiResizablePanel, _extends({}, controls, props));
  };
}