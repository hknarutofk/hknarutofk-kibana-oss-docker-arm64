"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbeddablePanel = void 0;

var _eui = require("@elastic/eui");

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _context_menu_actions = require("../context_menu_actions");

var _triggers = require("../triggers");

var _types = require("../types");

var _panel_actions = require("./panel_header/panel_actions");

var _add_panel_action = require("./panel_header/panel_actions/add_panel/add_panel_action");

var _customize_panel_action = require("./panel_header/panel_actions/customize_title/customize_panel_action");

var _panel_header = require("./panel_header/panel_header");

var _inspect_panel_action = require("./panel_header/panel_actions/inspect_panel_action");

var _actions = require("../actions");

var _customize_panel_modal = require("./panel_header/panel_actions/customize_title/customize_panel_modal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EmbeddablePanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EmbeddablePanel, _React$Component);

  function EmbeddablePanel(props) {
    var _this;

    _classCallCheck(this, EmbeddablePanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EmbeddablePanel).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "embeddableRoot", void 0);

    _defineProperty(_assertThisInitialized(_this), "parentSubscription", void 0);

    _defineProperty(_assertThisInitialized(_this), "subscription", void 0);

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (focusedPanelIndex) {
      _this.setState({
        focusedPanelIndex: focusedPanelIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (blurredPanelIndex) {
      if (_this.state.focusedPanelIndex === blurredPanelIndex) {
        _this.setState({
          focusedPanelIndex: undefined
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeMyContextMenuPanel", function () {
      if (_this.mounted) {
        _this.setState({
          closeContextMenu: true
        }, function () {
          if (_this.mounted) {
            _this.setState({
              closeContextMenu: false
            });
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getActionContextMenuPanel",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var actions, createGetUserData, extraActions, sorted;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.props.getActions(_triggers.CONTEXT_MENU_TRIGGER, {
                embeddable: _this.props.embeddable
              });

            case 2:
              actions = _context2.sent;

              createGetUserData = function createGetUserData(overlays) {
                return (
                  /*#__PURE__*/
                  function () {
                    var _getUserData = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee(context) {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              return _context.abrupt("return", new Promise(function (resolve) {
                                var session = overlays.openModal(_react.default.createElement(_customize_panel_modal.CustomizePanelModal, {
                                  embeddable: context.embeddable,
                                  updateTitle: function updateTitle(title) {
                                    session.close();
                                    resolve({
                                      title: title
                                    });
                                  }
                                }), {
                                  'data-test-subj': 'customizePanel'
                                });
                              }));

                            case 1:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    function getUserData(_x) {
                      return _getUserData.apply(this, arguments);
                    }

                    return getUserData;
                  }()
                );
              }; // These actions are exposed on the context menu for every embeddable, they bypass the trigger
              // registry.


              extraActions = [new _customize_panel_action.CustomizePanelTitleAction(createGetUserData(_this.props.overlays)), new _add_panel_action.AddPanelAction(_this.props.getEmbeddableFactory, _this.props.getAllEmbeddableFactories, _this.props.overlays, _this.props.notifications, _this.props.SavedObjectFinder), new _inspect_panel_action.InspectPanelAction(_this.props.inspector), new _panel_actions.RemovePanelAction(), new _actions.EditPanelAction(_this.props.getEmbeddableFactory)];
              sorted = actions.concat(extraActions).sort(function (a, b) {
                return b.order - a.order;
              });
              _context2.next = 8;
              return (0, _context_menu_actions.buildContextMenuForActions)({
                actions: sorted,
                actionContext: {
                  embeddable: _this.props.embeddable
                },
                closeMenu: _this.closeMyContextMenuPanel
              });

            case 8:
              return _context2.abrupt("return", _context2.sent);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    var embeddable = _this.props.embeddable;
    var viewMode = embeddable.getInput().viewMode ? embeddable.getInput().viewMode : _types.ViewMode.EDIT;
    var hidePanelTitles = embeddable.parent ? Boolean(embeddable.parent.getInput().hidePanelTitles) : false;
    _this.state = {
      panels: [],
      viewMode: viewMode,
      hidePanelTitles: hidePanelTitles,
      closeContextMenu: false,
      badges: []
    };
    _this.embeddableRoot = _react.default.createRef();
    return _this;
  }

  _createClass(EmbeddablePanel, [{
    key: "refreshBadges",
    value: function () {
      var _refreshBadges = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var badges;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.props.getActions(_triggers.PANEL_BADGE_TRIGGER, {
                  embeddable: this.props.embeddable
                });

              case 2:
                badges = _context3.sent;

                if (this.mounted) {
                  this.setState({
                    badges: badges
                  });
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function refreshBadges() {
        return _refreshBadges.apply(this, arguments);
      }

      return refreshBadges;
    }()
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.mounted = true;
      var embeddable = this.props.embeddable;
      var parent = embeddable.parent;
      this.subscription = embeddable.getInput$().subscribe(
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (_this2.mounted) {
                  _this2.setState({
                    viewMode: embeddable.getInput().viewMode ? embeddable.getInput().viewMode : _types.ViewMode.EDIT
                  });

                  _this2.refreshBadges();
                }

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      })));

      if (parent) {
        this.parentSubscription = parent.getInput$().subscribe(
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (_this2.mounted && parent) {
                    _this2.setState({
                      hidePanelTitles: Boolean(parent.getInput().hidePanelTitles)
                    });

                    _this2.refreshBadges();
                  }

                case 1:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        })));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;

      if (this.subscription) {
        this.subscription.unsubscribe();
      }

      if (this.parentSubscription) {
        this.parentSubscription.unsubscribe();
      }

      this.props.embeddable.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var viewOnlyMode = this.state.viewMode === _types.ViewMode.VIEW;
      var classes = (0, _classnames.default)('embPanel', {
        'embPanel--editing': !viewOnlyMode
      });
      var title = this.props.embeddable.getTitle();
      return _react.default.createElement(_eui.EuiPanel, {
        className: classes,
        "data-test-subj": "embeddablePanel",
        paddingSize: "none"
      }, _react.default.createElement(_panel_header.PanelHeader, {
        getActionContextMenuPanel: this.getActionContextMenuPanel,
        hidePanelTitles: this.state.hidePanelTitles,
        isViewMode: viewOnlyMode,
        closeContextMenu: this.state.closeContextMenu,
        title: title,
        badges: this.state.badges,
        embeddable: this.props.embeddable
      }), _react.default.createElement("div", {
        className: "embPanel__content",
        ref: this.embeddableRoot
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.embeddableRoot.current) {
        this.props.embeddable.render(this.embeddableRoot.current);
      }
    }
  }]);

  return EmbeddablePanel;
}(_react.default.Component);

exports.EmbeddablePanel = EmbeddablePanel;