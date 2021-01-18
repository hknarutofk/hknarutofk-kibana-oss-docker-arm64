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
import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import { prettyDuration } from '../pretty_duration';
import { EuiFlexGroup, EuiFlexItem } from '../../../flex';
import { EuiTitle } from '../../../title';
import { EuiSpacer } from '../../../spacer';
import { EuiLink } from '../../../link';
import { EuiText } from '../../../text';
import { EuiHorizontalRule } from '../../../horizontal_rule';
export var EuiRecentlyUsed = function EuiRecentlyUsed(_ref) {
  var applyTime = _ref.applyTime,
      commonlyUsedRanges = _ref.commonlyUsedRanges,
      dateFormat = _ref.dateFormat,
      _ref$recentlyUsedRang = _ref.recentlyUsedRanges,
      recentlyUsedRanges = _ref$recentlyUsedRang === void 0 ? [] : _ref$recentlyUsedRang;

  if (recentlyUsedRanges.length === 0) {
    return null;
  }

  var links = recentlyUsedRanges.map(function (_ref2) {
    var start = _ref2.start,
        end = _ref2.end;

    var applyRecentlyUsed = function applyRecentlyUsed() {
      applyTime({
        start: start,
        end: end
      });
    };

    return /*#__PURE__*/React.createElement(EuiFlexItem, {
      grow: false,
      key: "".concat(start, "-").concat(end)
    }, /*#__PURE__*/React.createElement(EuiLink, {
      onClick: applyRecentlyUsed
    }, prettyDuration(start, end, commonlyUsedRanges, dateFormat)));
  });
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(EuiTitle, {
    size: "xxxs"
  }, /*#__PURE__*/React.createElement("span", null, "Recently used date ranges")), /*#__PURE__*/React.createElement(EuiSpacer, {
    size: "s"
  }), /*#__PURE__*/React.createElement(EuiText, {
    size: "s",
    className: "euiQuickSelectPopover__section"
  }, /*#__PURE__*/React.createElement(EuiFlexGroup, {
    gutterSize: "s",
    direction: "column"
  }, links)), /*#__PURE__*/React.createElement(EuiHorizontalRule, {
    margin: "s"
  }));
};
EuiRecentlyUsed.propTypes = {
  applyTime: PropTypes.func.isRequired,
  commonlyUsedRanges: PropTypes.arrayOf(PropTypes.shape({
    end: PropTypes.oneOfType([PropTypes.oneOf(["now"]), PropTypes.string.isRequired]).isRequired,
    label: PropTypes.string,
    start: PropTypes.oneOfType([PropTypes.oneOf(["now"]), PropTypes.string.isRequired]).isRequired
  }).isRequired).isRequired,
  dateFormat: PropTypes.string.isRequired,
  recentlyUsedRanges: PropTypes.arrayOf(PropTypes.shape({
    end: PropTypes.oneOfType([PropTypes.oneOf(["now"]), PropTypes.string.isRequired]).isRequired,
    label: PropTypes.string,
    start: PropTypes.oneOfType([PropTypes.oneOf(["now"]), PropTypes.string.isRequired]).isRequired
  }).isRequired)
};
EuiRecentlyUsed.displayName = 'EuiRecentlyUsed';