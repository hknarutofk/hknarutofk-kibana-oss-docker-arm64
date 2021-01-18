"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiNavDrawer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _list_group = require("../list_group");

var _nav_drawer_flyout = require("./nav_drawer_flyout");

var _nav_drawer_group = require("./nav_drawer_group");

var _outside_click_detector = require("../outside_click_detector");

var _i18n = require("../i18n");

var _flex = require("../flex");

var _utils = require("../color_picker/utils");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MENU_ELEMENT_ID = 'navDrawerMenu';

var EuiNavDrawer = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiNavDrawer, _Component);

  var _super = _createSuper(EuiNavDrawer);

  function EuiNavDrawer() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiNavDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      flyoutIsCollapsed: true,
      flyoutListItems: null,
      focusReturnRef: null,
      isCollapsed: !_this.props.isLocked,
      isLocked: Boolean(_this.props.isLocked),
      isManagingFocus: false,
      navFlyoutTitle: undefined,
      outsideClickDisabled: true,
      toolTipsEnabled: true
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "expandButtonRef", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "returnOnIsLockedUpdate", function (isLockedState) {
      if (_this.props.onIsLockedUpdate) {
        _this.props.onIsLockedUpdate(isLockedState);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "functionToCallOnWindowResize", (0, _utils.throttle)(function () {
      if (window.innerWidth < 1200) {
        _this.collapseDrawer();

        _this.collapseFlyout();
      } // reacts every 50ms to resize changes and always gets the final update

    }, 50));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "sideNavLockClicked", function () {
      var isLocked = _this.state.isLocked;

      if (isLocked) {
        window.removeEventListener('resize', _this.functionToCallOnWindowResize);
      } else {
        window.addEventListener('resize', _this.functionToCallOnWindowResize);
      }

      _this.returnOnIsLockedUpdate(!isLocked);

      _this.setState({
        isLocked: !isLocked,
        isCollapsed: false,
        outsideClickDisabled: !isLocked
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggleOpen", function () {
      _this.setState(function (_ref) {
        var isCollapsed = _ref.isCollapsed;
        return {
          isCollapsed: !isCollapsed
        };
      }, function () {
        _this.setState(function (_ref2) {
          var isCollapsed = _ref2.isCollapsed;
          return {
            outsideClickDisabled: isCollapsed,
            toolTipsEnabled: isCollapsed
          };
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "collapseButtonClick", function () {
      if (_this.state.isCollapsed) {
        _this.expandDrawer();
      } else {
        _this.collapseDrawer();
      }

      _this.collapseFlyout();

      requestAnimationFrame(function () {
        if (_this.expandButtonRef.current) {
          _this.expandButtonRef.current.focus();
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "expandDrawer", function () {
      _this.setState({
        isCollapsed: false,
        outsideClickDisabled: false
      });

      setTimeout(function () {
        _this.setState({
          toolTipsEnabled: false
        });
      }, 150);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "collapseDrawer", function () {
      _this.setState({
        isCollapsed: true,
        outsideClickDisabled: _this.state.flyoutIsCollapsed ? true : false,
        toolTipsEnabled: true,
        isLocked: false
      });

      _this.returnOnIsLockedUpdate(false); // Scrolls the menu and flyout back to top when the nav drawer collapses


      setTimeout(function () {
        var element = document.getElementById('navDrawerMenu');

        if (element) {
          element.scrollTop = 0;
        }
      }, 50); // In case it was locked before, remove the window resize listener

      window.removeEventListener('resize', _this.functionToCallOnWindowResize);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "expandFlyout", function (links, title, item) {
      if (_this.state.navFlyoutTitle === title) {
        _this.collapseFlyout();
      } else {
        _this.setState(function (_ref3) {
          var isLocked = _ref3.isLocked;
          return {
            flyoutIsCollapsed: false,
            flyoutListItems: links,
            focusReturnRef: item.label,
            isCollapsed: isLocked ? false : true,
            navFlyoutTitle: title,
            outsideClickDisabled: false,
            toolTipsEnabled: false
          };
        }, function () {
          // Ideally this uses React `ref` instead of `querySelector`, but the menu composition
          // does not allow for deep `ref` element management at present
          var element = document.querySelector("#".concat(MENU_ELEMENT_ID, " [").concat(_nav_drawer_group.ATTR_SELECTOR, "='").concat(item.label, "']"));
          if (!element) return;
          element.setAttribute('aria-expanded', 'true');
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "collapseFlyout", function () {
      var shouldReturnFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var focusReturn = _this.state.focusReturnRef;

      _this.setState({
        flyoutIsCollapsed: true,
        navFlyoutTitle: undefined,
        flyoutListItems: null,
        toolTipsEnabled: _this.state.isLocked ? false : true,
        focusReturnRef: null
      }, function () {
        // Ideally this uses React `ref` instead of `querySelector`, but the menu composition
        // does not allow for deep `ref` element management at present
        var element = document.querySelector("#".concat(MENU_ELEMENT_ID, " [").concat(_nav_drawer_group.ATTR_SELECTOR, "='").concat(focusReturn, "']"));

        if (!element) {
          return;
        }

        requestAnimationFrame(function () {
          element.setAttribute('aria-expanded', 'false');
        });
        if (!shouldReturnFocus) return;
        requestAnimationFrame(function () {
          element.focus();
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closeBoth", function () {
      if (!_this.state.isLocked) _this.collapseDrawer();

      _this.collapseFlyout(false);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleDrawerMenuClick", function (event) {
      // walk up e.target until either:
      // 1. a[href] - close the menu
      // 2. document.body - do nothing
      var element = event.target;

      while (element !== null && element !== document.body && (element.tagName !== 'A' || element.getAttribute('href') === undefined)) {
        element = element.parentElement;
      }

      if (element !== document.body) {
        // this is an anchor with an href
        _this.closeBoth();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "modifyChildren", function (children) {
      // Loop through the EuiNavDrawer children (EuiListGroup, EuiHorizontalRules, etc)
      // Filter out falsy items
      var filteredChildren = _react.default.Children.toArray(children);

      return _react.default.Children.map(filteredChildren, function (child) {
        if ( /*#__PURE__*/(0, _react.isValidElement)(child)) {
          // Allow for Fragments by recursive modification
          if (child.type === _react.default.Fragment) {
            return _this.modifyChildren(child.props.children);
          } // Check if child is an EuiNavDrawerGroup and if it does have a flyout, add the expand function


          if (child.type === _nav_drawer_group.EuiNavDrawerGroup) {
            return /*#__PURE__*/_react.default.cloneElement(child, {
              flyoutMenuButtonClick: _this.expandFlyout,
              showToolTips: _this.state.toolTipsEnabled && _this.props.showToolTips
            });
          }
        }

        return child;
      });
    });
    return _this;
  }

  (0, _createClass2.default)(EuiNavDrawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isLocked) {
        window.addEventListener('resize', this.functionToCallOnWindowResize);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.functionToCallOnWindowResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          showExpandButton = _this$props.showExpandButton,
          showToolTips = _this$props.showToolTips,
          isLocked = _this$props.isLocked,
          onIsLockedUpdate = _this$props.onIsLockedUpdate,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "showExpandButton", "showToolTips", "isLocked", "onIsLockedUpdate"]);
      var classes = (0, _classnames.default)('euiNavDrawer', {
        'euiNavDrawer-isCollapsed': this.state.isCollapsed,
        'euiNavDrawer-isExpanded': !this.state.isCollapsed,
        'euiNavDrawer-isLocked': this.state.isLocked,
        'euiNavDrawer-flyoutIsCollapsed': this.state.flyoutIsCollapsed,
        'euiNavDrawer-flyoutIsExpanded': !this.state.flyoutIsCollapsed
      }, className);
      var footerContent;

      if (showExpandButton) {
        footerContent = /*#__PURE__*/_react.default.createElement(_list_group.EuiListGroup, {
          className: "euiNavDrawer__expandButton",
          flush: true
        }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
          tokens: ['euiNavDrawer.sideNavCollapse', 'euiNavDrawer.sideNavExpand', 'euiNavDrawer.sideNavLockAriaLabel', 'euiNavDrawer.sideNavLockExpanded', 'euiNavDrawer.sideNavLockCollapsed'],
          defaults: ['Collapse', 'Expand', 'Dock navigation', 'Navigation is docked', 'Navigation is undocked']
        }, function (_ref4) {
          var _ref5 = (0, _slicedToArray2.default)(_ref4, 5),
              sideNavCollapse = _ref5[0],
              sideNavExpand = _ref5[1],
              sideNavLockAriaLabel = _ref5[2],
              sideNavLockExpanded = _ref5[3],
              sideNavLockCollapsed = _ref5[4];

          return /*#__PURE__*/_react.default.createElement(_list_group.EuiListGroupItem, {
            buttonRef: _this2.expandButtonRef,
            className: _this2.state.isCollapsed ? 'navDrawerExpandButton-isCollapsed' : 'navDrawerExpandButton-isExpanded',
            "data-test-subj": _this2.state.isCollapsed ? 'navDrawerExpandButton-isCollapsed' : 'navDrawerExpandButton-isExpanded',
            extraAction: {
              'aria-label': sideNavLockAriaLabel,
              'aria-pressed': _this2.state.isLocked ? true : false,
              className: 'euiNavDrawer__expandButtonLockAction',
              color: 'text',
              iconType: _this2.state.isLocked ? 'lock' : 'lockOpen',
              iconSize: 's',
              onClick: _this2.sideNavLockClicked,
              title: _this2.state.isLocked ? sideNavLockExpanded : sideNavLockCollapsed
            },
            iconType: _this2.state.isCollapsed ? 'menuRight' : 'menuLeft',
            label: _this2.state.isCollapsed ? sideNavExpand : sideNavCollapse,
            onClick: _this2.collapseButtonClick,
            showToolTip: _this2.state.isCollapsed,
            size: "s"
          });
        }));
      }

      var flyoutContent = /*#__PURE__*/_react.default.createElement(_nav_drawer_flyout.EuiNavDrawerFlyout, {
        id: "navDrawerFlyout",
        isCollapsed: this.state.flyoutIsCollapsed,
        listItems: this.state.flyoutListItems,
        onClose: this.collapseFlyout,
        title: this.state.navFlyoutTitle,
        wrapText: true
      }); // Add an onClick that expands the flyout sub menu for any list items (links) that have a flyoutMenu prop (sub links)


      var modifiedChildren = children;
      modifiedChildren = this.modifyChildren(this.props.children);
      var menuClasses = (0, _classnames.default)('euiNavDrawerMenu', {
        'euiNavDrawerMenu-hasFooter': footerContent
      });
      return /*#__PURE__*/_react.default.createElement(_outside_click_detector.EuiOutsideClickDetector, {
        onOutsideClick: function onOutsideClick() {
          return _this2.closeBoth();
        },
        isDisabled: this.state.outsideClickDisabled
      }, /*#__PURE__*/_react.default.createElement("nav", (0, _extends2.default)({
        className: classes
      }, rest), /*#__PURE__*/_react.default.createElement(_flex.EuiFlexGroup, {
        gutterSize: "none",
        responsive: false
      }, /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, {
        grow: false
      }, /*#__PURE__*/_react.default.createElement("div", {
        id: MENU_ELEMENT_ID,
        className: menuClasses,
        onClick: this.handleDrawerMenuClick
      }, footerContent, modifiedChildren)), flyoutContent)));
    }
  }]);
  return EuiNavDrawer;
}(_react.Component);

exports.EuiNavDrawer = EuiNavDrawer;
(0, _defineProperty2.default)(EuiNavDrawer, "defaultProps", {
  showExpandButton: true,
  showToolTips: true
});
EuiNavDrawer.propTypes = {
  /**
     * One or more ReactNodes to render as this component's content
     */
  children: _propTypes.default.oneOfType([_propTypes.default.node.isRequired, _propTypes.default.arrayOf(_propTypes.default.node.isRequired).isRequired]),

  /**
     * Keep drawer locked open by default
     */
  isLocked: _propTypes.default.bool,

  /**
     * Returns the current state of isLocked
     */
  onIsLockedUpdate: _propTypes.default.func,

  /**
     * Adds fixed toggle button to bottom of menu area
     */
  showExpandButton: _propTypes.default.bool,

  /**
     * Display tooltips on side nav items
     */
  showToolTips: _propTypes.default.bool,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};