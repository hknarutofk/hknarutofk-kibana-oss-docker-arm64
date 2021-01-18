"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelHeader = void 0;

var _eui = require("@elastic/eui");

var _react = require("@kbn/i18n/react");

var _classnames = _interopRequireDefault(require("classnames"));

var _react2 = _interopRequireDefault(require("react"));

var _panel_options_menu = require("./panel_options_menu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function renderBadges(badges, embeddable) {
  return badges.map(function (badge) {
    return _react2.default.createElement(_eui.EuiBadge, {
      key: badge.id,
      iconType: badge.getIconType({
        embeddable: embeddable
      }),
      onClick: function onClick() {
        return badge.execute({
          embeddable: embeddable
        });
      },
      onClickAriaLabel: badge.getDisplayName({
        embeddable: embeddable
      })
    }, badge.getDisplayName({
      embeddable: embeddable
    }));
  });
}

function PanelHeaderUi(_ref) {
  var title = _ref.title,
      isViewMode = _ref.isViewMode,
      hidePanelTitles = _ref.hidePanelTitles,
      getActionContextMenuPanel = _ref.getActionContextMenuPanel,
      intl = _ref.intl,
      closeContextMenu = _ref.closeContextMenu,
      badges = _ref.badges,
      embeddable = _ref.embeddable;
  var classes = (0, _classnames.default)('embPanel__header', {
    'embPanel__header--floater': !title || hidePanelTitles
  });
  var showTitle = !isViewMode || title && !hidePanelTitles;
  var showPanelBar = badges.length > 0 || showTitle;

  if (!showPanelBar) {
    return _react2.default.createElement("div", {
      className: classes
    }, _react2.default.createElement(_panel_options_menu.PanelOptionsMenu, {
      getActionContextMenuPanel: getActionContextMenuPanel,
      isViewMode: isViewMode,
      closeContextMenu: closeContextMenu
    }));
  }

  return _react2.default.createElement("div", {
    className: classes,
    "data-test-subj": "embeddablePanelHeading-".concat((title || '').replace(/\s/g, ''))
  }, _react2.default.createElement("div", {
    "data-test-subj": "dashboardPanelTitle",
    className: "embPanel__title embPanel__dragger",
    title: title,
    "aria-label": intl.formatMessage({
      id: 'embeddableApi.panel.dashboardPanelAriaLabel',
      defaultMessage: 'Dashboard panel: {title}'
    }, {
      title: title
    })
  }, showTitle ? "".concat(title, " ") : '', renderBadges(badges, embeddable)), _react2.default.createElement(_panel_options_menu.PanelOptionsMenu, {
    isViewMode: isViewMode,
    getActionContextMenuPanel: getActionContextMenuPanel,
    closeContextMenu: closeContextMenu
  }));
}

var PanelHeader = (0, _react.injectI18n)(PanelHeaderUi);
exports.PanelHeader = PanelHeader;