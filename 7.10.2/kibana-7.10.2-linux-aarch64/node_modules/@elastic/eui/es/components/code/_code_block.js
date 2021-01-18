function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import hljs from 'highlight.js';
import { EuiCopy } from '../copy';
import { EuiButtonIcon } from '../button';
import { EuiOverlayMask } from '../overlay_mask';
import { EuiFocusTrap } from '../focus_trap';
import { keys } from '../../services';
import { EuiI18n } from '../i18n';
import { EuiInnerText } from '../inner_text';
import { keysOf } from '../common';
var fontSizeToClassNameMap = {
  s: 'euiCodeBlock--fontSmall',
  m: 'euiCodeBlock--fontMedium',
  l: 'euiCodeBlock--fontLarge'
};
export var FONT_SIZES = keysOf(fontSizeToClassNameMap);
var paddingSizeToClassNameMap = {
  none: '',
  s: 'euiCodeBlock--paddingSmall',
  m: 'euiCodeBlock--paddingMedium',
  l: 'euiCodeBlock--paddingLarge'
};
export var PADDING_SIZES = keysOf(paddingSizeToClassNameMap);

/**
 * This is the base component extended by EuiCode and EuiCodeBlock.
 * These components share the same propTypes definition with EuiCodeBlockImpl.
 */
export var EuiCodeBlockImpl = function EuiCodeBlockImpl(_ref) {
  var _ref$transparentBackg = _ref.transparentBackground,
      transparentBackground = _ref$transparentBackg === void 0 ? false : _ref$transparentBackg,
      _ref$paddingSize = _ref.paddingSize,
      paddingSize = _ref$paddingSize === void 0 ? 'l' : _ref$paddingSize,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 's' : _ref$fontSize,
      _ref$isCopyable = _ref.isCopyable,
      isCopyable = _ref$isCopyable === void 0 ? false : _ref$isCopyable,
      _ref$whiteSpace = _ref.whiteSpace,
      whiteSpace = _ref$whiteSpace === void 0 ? 'pre-wrap' : _ref$whiteSpace,
      language = _ref.language,
      inline = _ref.inline,
      children = _ref.children,
      className = _ref.className,
      overflowHeight = _ref.overflowHeight,
      rest = _objectWithoutProperties(_ref, ["transparentBackground", "paddingSize", "fontSize", "isCopyable", "whiteSpace", "language", "inline", "children", "className", "overflowHeight"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFullScreen = _useState2[0],
      setIsFullScreen = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isPortalTargetReady = _useState4[0],
      setIsPortalTargetReady = _useState4[1];

  var codeTarget = useRef(null);
  var code = useRef(null);

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      codeFullScreen = _useState6[0],
      setCodeFullScreen = _useState6[1];

  useEffect(function () {
    codeTarget.current = document.createElement('div');
    setIsPortalTargetReady(true);
  }, []);
  useEffect(function () {
    /**
     * because React maintains a mapping between its Virtual DOM representation and the actual
     * DOM elements (including text nodes), and hljs modifies the DOM structure which leads
     * to React updating detached nodes, we render to a document fragment and
     * copy from that fragment into the target elements
     * (https://github.com/elastic/eui/issues/2322)
     */
    var html = isPortalTargetReady ? codeTarget.current.innerHTML : '';

    if (code.current) {
      code.current.innerHTML = html;
    }

    if (language) {
      if (code.current) {
        hljs.highlightBlock(code.current);
      }
    }
  });
  useEffect(function () {
    if (codeFullScreen) {
      var html = isPortalTargetReady ? codeTarget.current.innerHTML : '';
      codeFullScreen.innerHTML = html;

      if (language) {
        hljs.highlightBlock(codeFullScreen);
      }
    }
  }, [isPortalTargetReady, codeFullScreen, language]);

  var onKeyDown = function onKeyDown(event) {
    if (event.key === keys.ESCAPE) {
      event.preventDefault();
      event.stopPropagation();
      closeFullScreen();
    }
  };

  var toggleFullScreen = function toggleFullScreen() {
    setIsFullScreen(!isFullScreen);
  };

  var closeFullScreen = function closeFullScreen() {
    setIsFullScreen(false);
  };

  var classes = classNames('euiCodeBlock', fontSizeToClassNameMap[fontSize], paddingSizeToClassNameMap[paddingSize], {
    'euiCodeBlock--transparentBackground': transparentBackground,
    'euiCodeBlock--inline': inline,
    'euiCodeBlock--hasControls': isCopyable || overflowHeight
  }, className);
  var codeClasses = classNames('euiCodeBlock__code', language);
  var preClasses = classNames('euiCodeBlock__pre', {
    'euiCodeBlock__pre--whiteSpacePre': whiteSpace === 'pre',
    'euiCodeBlock__pre--whiteSpacePreWrap': whiteSpace === 'pre-wrap'
  });
  var optionalStyles = {};

  if (overflowHeight) {
    optionalStyles.maxHeight = overflowHeight;
  }

  var codeSnippet = /*#__PURE__*/React.createElement("code", _extends({
    ref: code,
    className: codeClasses
  }, rest));
  var wrapperProps = {
    className: classes,
    style: optionalStyles
  };

  if (inline) {
    return isPortalTargetReady ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/createPortal(children, codeTarget.current), /*#__PURE__*/React.createElement("span", wrapperProps, codeSnippet)) : null;
  }

  var getCopyButton = function getCopyButton(textToCopy) {
    var copyButton;

    if (isCopyable && textToCopy) {
      copyButton = /*#__PURE__*/React.createElement("div", {
        className: "euiCodeBlock__copyButton"
      }, /*#__PURE__*/React.createElement(EuiI18n, {
        token: "euiCodeBlock.copyButton",
        default: "Copy"
      }, function (copyButton) {
        return /*#__PURE__*/React.createElement(EuiCopy, {
          textToCopy: textToCopy
        }, function (copy) {
          return /*#__PURE__*/React.createElement(EuiButtonIcon, {
            size: "s",
            onClick: copy,
            iconType: "copy",
            color: "text",
            "aria-label": copyButton
          });
        });
      }));
    }

    return copyButton;
  };

  var fullScreenButton;

  if (!inline && overflowHeight) {
    fullScreenButton = /*#__PURE__*/React.createElement(EuiI18n, {
      tokens: ['euiCodeBlock.fullscreenCollapse', 'euiCodeBlock.fullscreenExpand'],
      defaults: ['Collapse', 'Expand']
    }, function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          fullscreenCollapse = _ref3[0],
          fullscreenExpand = _ref3[1];

      return /*#__PURE__*/React.createElement(EuiButtonIcon, {
        className: "euiCodeBlock__fullScreenButton",
        size: "s",
        onClick: toggleFullScreen,
        iconType: isFullScreen ? 'cross' : 'fullScreen',
        color: "text",
        "aria-label": isFullScreen ? fullscreenCollapse : fullscreenExpand
      });
    });
  }

  var getCodeBlockControls = function getCodeBlockControls(textToCopy) {
    var codeBlockControls;
    var copyButton = getCopyButton(textToCopy);

    if (copyButton || fullScreenButton) {
      codeBlockControls = /*#__PURE__*/React.createElement("div", {
        className: "euiCodeBlock__controls"
      }, fullScreenButton, copyButton);
    }

    return codeBlockControls;
  };

  var getFullScreenDisplay = function getFullScreenDisplay(codeBlockControls) {
    var fullScreenDisplay;

    if (isFullScreen) {
      // Force fullscreen to use large font and padding.
      var fullScreenClasses = classNames('euiCodeBlock', fontSizeToClassNameMap[fontSize], 'euiCodeBlock-paddingLarge', 'euiCodeBlock-isFullScreen', className);
      fullScreenDisplay = /*#__PURE__*/React.createElement(EuiOverlayMask, null, /*#__PURE__*/React.createElement(EuiFocusTrap, {
        clickOutsideDisables: true
      }, /*#__PURE__*/React.createElement("div", {
        className: fullScreenClasses
      }, /*#__PURE__*/React.createElement("pre", {
        className: preClasses
      }, /*#__PURE__*/React.createElement("code", {
        ref: setCodeFullScreen,
        className: codeClasses,
        tabIndex: 0,
        onKeyDown: onKeyDown
      })), codeBlockControls)));
    }

    return fullScreenDisplay;
  };

  return isPortalTargetReady ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/createPortal(children, codeTarget.current), /*#__PURE__*/React.createElement(EuiInnerText, {
    fallback: ""
  }, function (innerTextRef, innerText) {
    var codeBlockControls = getCodeBlockControls(innerText);
    return /*#__PURE__*/React.createElement("div", wrapperProps, /*#__PURE__*/React.createElement("pre", {
      ref: innerTextRef,
      style: optionalStyles,
      className: preClasses
    }, codeSnippet), codeBlockControls, getFullScreenDisplay(codeBlockControls));
  })) : null;
};
EuiCodeBlockImpl.propTypes = {
  className: PropTypes.string,
  fontSize: PropTypes.oneOf(["s", "m", "l"]),

  /**
     * Displays the passed code in an inline format. Also removes any margins set.
     */
  inline: PropTypes.bool,

  /**
     * Displays an icon button to copy the code snippet to the clipboard.
     */
  isCopyable: PropTypes.bool,

  /**
     * Sets the syntax highlighting for a specific language
     */
  language: PropTypes.string,
  overflowHeight: PropTypes.number,
  paddingSize: PropTypes.oneOf(["none", "s", "m", "l"]),
  transparentBackground: PropTypes.bool,

  /**
     * Specify how `white-space` inside the element is handled.
     * `pre` respects line breaks/white space but doesn't force them to wrap the line
     * `pre-wrap` respects line breaks/white space but does force them to wrap the line when necessary.
     */
  whiteSpace: PropTypes.oneOf(["pre", "pre-wrap"])
};