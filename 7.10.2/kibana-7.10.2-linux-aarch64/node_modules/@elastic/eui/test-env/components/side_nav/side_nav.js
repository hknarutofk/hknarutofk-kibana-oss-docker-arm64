"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSideNav = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _icon = require("../icon");

var _side_nav_item = require("./side_nav_item");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EuiSideNav = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiSideNav, _Component);

  var _super = _createSuper(EuiSideNav);

  function EuiSideNav() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiSideNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isItemOpen", function (item) {
      // The developer can force the item to be open.
      if (item.forceOpen) {
        return true;
      } // Of course a selected item is open.


      if (item.isSelected) {
        return true;
      } // The item has to be open if it has a child that's open.


      if (item.items) {
        return item.items.some(_this.isItemOpen);
      }

      return false;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderTree", function (items) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var renderItem = _this.props.renderItem;
      return items.map(function (item) {
        var id = item.id,
            name = item.name,
            isSelected = item.isSelected,
            childItems = item.items,
            icon = item.icon,
            onClick = item.onClick,
            href = item.href,
            forceOpen = item.forceOpen,
            rest = (0, _objectWithoutProperties2.default)(item, ["id", "name", "isSelected", "items", "icon", "onClick", "href", "forceOpen"]); // Root items are always open.

        var isOpen = depth === 0 ? true : _this.isItemOpen(item);
        var renderedItems;

        if (childItems) {
          renderedItems = _this.renderTree(childItems, depth + 1);
        }

        return /*#__PURE__*/_react.default.createElement(_side_nav_item.EuiSideNavItem, (0, _extends2.default)({
          isOpen: isOpen,
          isSelected: isSelected,
          isParent: !!childItems,
          icon: icon,
          onClick: onClick,
          href: href,
          items: renderedItems,
          key: id,
          depth: depth,
          renderItem: renderItem
        }, rest), name);
      });
    });
    return _this;
  }

  (0, _createClass2.default)(EuiSideNav, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          items = _this$props.items,
          toggleOpenOnMobile = _this$props.toggleOpenOnMobile,
          isOpenOnMobile = _this$props.isOpenOnMobile,
          mobileTitle = _this$props.mobileTitle,
          renderItem = _this$props.renderItem,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "items", "toggleOpenOnMobile", "isOpenOnMobile", "mobileTitle", "renderItem"]);
      var classes = (0, _classnames.default)('euiSideNav', className, {
        'euiSideNav-isOpenMobile': isOpenOnMobile
      });
      var nav = this.renderTree(items);
      return /*#__PURE__*/_react.default.createElement("nav", (0, _extends2.default)({
        className: classes
      }, rest), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "euiSideNav__mobileToggle euiLink",
        onClick: toggleOpenOnMobile
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "euiSideNav__mobileWrap"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "euiSideNav__mobileTitle"
      }, mobileTitle), /*#__PURE__*/_react.default.createElement(_icon.EuiIcon, {
        className: "euiSideNav__mobileIcon",
        type: "apps",
        size: "m",
        "aria-hidden": "true"
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "euiSideNav__content"
      }, nav));
    }
  }]);
  return EuiSideNav;
}(_react.Component);

exports.EuiSideNav = EuiSideNav;
(0, _defineProperty2.default)(EuiSideNav, "defaultProps", {
  items: []
});
EuiSideNav.propTypes = {
  /**
       * Class names to be merged into the final `className` property.
       */
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * When called, toggles visibility of the navigation menu at mobile responsive widths. The callback should set the `isOpenOnMobile` prop to actually toggle navigation visibility.
       */
  toggleOpenOnMobile: _propTypes.default.func,

  /**
       * If `true`, the navigation menu will be open at mobile device widths. Use in conjunction with the `toggleOpenOnMobile` prop.
       */
  isOpenOnMobile: _propTypes.default.bool,

  /**
       * A React node to render at mobile responsive widths, representing the title of this navigation menu.
       */
  mobileTitle: _propTypes.default.node,

  /**
       *  An array of #EuiSideNavItem objects. Lists navigation menu items.
       */
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
       * A value that is passed to React as the `key` for this item
       */
    id: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired]).isRequired,

    /**
       * If set to true it will force the item to display in an "open" state at all times.
       */
    forceOpen: _propTypes.default.bool,

    /**
       * Is an optional string to be passed as the navigation item's `href` prop, and by default it will force rendering of the item as an `<a>`.
       */
    href: _propTypes.default.string,
    target: _propTypes.default.string,
    rel: _propTypes.default.string,

    /**
       * React node which will be rendered as a small icon to the left of the navigation item text.
       */
    icon: _propTypes.default.element,

    /**
       * If set to true it will render the item in a visible "selected" state, and will force all ancestor navigation items to render in an "open" state.
       */
    isSelected: _propTypes.default.bool,

    /**
       * Array containing additional item objects, representing nested children of this navigation item.
       */
    items: _propTypes.default.arrayOf(_propTypes.default.shape({
      /**
         * A value that is passed to React as the `key` for this item
         */
      id: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired]).isRequired,

      /**
         * If set to true it will force the item to display in an "open" state at all times.
         */
      forceOpen: _propTypes.default.bool,

      /**
         * Is an optional string to be passed as the navigation item's `href` prop, and by default it will force rendering of the item as an `<a>`.
         */
      href: _propTypes.default.string,
      target: _propTypes.default.string,
      rel: _propTypes.default.string,

      /**
         * React node which will be rendered as a small icon to the left of the navigation item text.
         */
      icon: _propTypes.default.element,

      /**
         * If set to true it will render the item in a visible "selected" state, and will force all ancestor navigation items to render in an "open" state.
         */
      isSelected: _propTypes.default.bool,

      /**
         * Array containing additional item objects, representing nested children of this navigation item.
         */
      items: _propTypes.default.arrayOf(_propTypes.default.any.isRequired),

      /**
         * React node representing the text to render for this item (usually a string will suffice).
         */
      name: _propTypes.default.node.isRequired,

      /**
         * Callback function to be passed as the navigation item's `onClick` prop, and by default it will force rendering of the item as a `<button>` instead of a link.
         */
      onClick: _propTypes.default.func,

      /**
         * Function overriding default rendering for this navigation item — when called, it should return a React node representing a replacement navigation item.
         */
      renderItem: _propTypes.default.func
    }).isRequired),

    /**
       * React node representing the text to render for this item (usually a string will suffice).
       */
    name: _propTypes.default.node.isRequired,

    /**
       * Callback function to be passed as the navigation item's `onClick` prop, and by default it will force rendering of the item as a `<button>` instead of a link.
       */
    onClick: _propTypes.default.func,

    /**
       * Function overriding default rendering for this navigation item — when called, it should return a React node representing a replacement navigation item.
       */
    renderItem: _propTypes.default.func
  }).isRequired).isRequired,

  /**
       * Overrides default navigation menu item rendering. When called, it should return a React node representing a replacement navigation item.
       */
  renderItem: _propTypes.default.func
};