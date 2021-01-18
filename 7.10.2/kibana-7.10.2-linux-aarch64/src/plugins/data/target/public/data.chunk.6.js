(window["data_bundle_jsonpfunction"]=window["data_bundle_jsonpfunction"]||[]).push([[6,11],{212:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){var classes=[];for(var i=0;i<arguments.length;i++){var arg=arguments[i];if(!arg)continue;var argType=typeof arg;if(argType==="string"||argType==="number"){classes.push(arg)}else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);if(inner){classes.push(inner)}}else if(argType==="object"){for(var key in arg){if(hasOwn.call(arg,key)&&arg[key]){classes.push(key)}}}}return classes.join(" ")}if(true&&module.exports){classNames.default=classNames;module.exports=classNames}else if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}else{}})()},216:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"default",(function(){return QueryBarTopRow}));var elastic_datemath=__webpack_require__(16);var elastic_datemath_default=__webpack_require__.n(elastic_datemath);var classnames=__webpack_require__(212);var classnames_default=__webpack_require__.n(classnames);var external_kbnSharedDeps_React_=__webpack_require__(3);var external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_);var external_kbnSharedDeps_KbnI18n_=__webpack_require__(0);var external_kbnSharedDeps_ElasticEui_=__webpack_require__(18);var external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(41);var public_=__webpack_require__(21);var query_string_input=__webpack_require__(215);var common=__webpack_require__(1);var public_query=__webpack_require__(13);function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var NO_DATA_POPOVER_STORAGE_KEY="data.noDataPopover";function NoDataPopover(_ref){var showNoDataPopover=_ref.showNoDataPopover,storage=_ref.storage,children=_ref.children;var _useState=Object(external_kbnSharedDeps_React_["useState"])((function(){return Boolean(storage.get(NO_DATA_POPOVER_STORAGE_KEY))})),_useState2=_slicedToArray(_useState,2),noDataPopoverDismissed=_useState2[0],setNoDataPopoverDismissed=_useState2[1];var _useState3=Object(external_kbnSharedDeps_React_["useState"])(false),_useState4=_slicedToArray(_useState3,2),noDataPopoverVisible=_useState4[0],setNoDataPopoverVisible=_useState4[1];Object(external_kbnSharedDeps_React_["useEffect"])((function(){if(showNoDataPopover&&!noDataPopoverDismissed){setNoDataPopoverVisible(true)}}),[noDataPopoverDismissed,showNoDataPopover]);return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiTourStep"],{onFinish:function onFinish(){},closePopover:function closePopover(){setNoDataPopoverVisible(false)},content:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiText"],{size:"s"},external_kbnSharedDeps_React_default.a.createElement("p",{style:{maxWidth:300}},external_kbnSharedDeps_KbnI18n_["i18n"].translate("data.noDataPopover.content",{defaultMessage:"This time range doesn't contain any data. Increase or adjust the time range to see more fields and create charts."}))),minWidth:300,anchorPosition:"downCenter",anchorClassName:"eui-displayBlock",step:1,stepsTotal:1,isStepOpen:noDataPopoverVisible,subtitle:external_kbnSharedDeps_KbnI18n_["i18n"].translate("data.noDataPopover.subtitle",{defaultMessage:"Tip"}),title:external_kbnSharedDeps_KbnI18n_["i18n"].translate("data.noDataPopover.title",{defaultMessage:"Empty dataset"}),footerAction:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiButtonEmpty"],{size:"xs",flush:"right",color:"text","data-test-subj":"noDataPopoverDismissButton",onClick:function onClick(){storage.set(NO_DATA_POPOVER_STORAGE_KEY,true);setNoDataPopoverDismissed(true);setNoDataPopoverVisible(false)}},external_kbnSharedDeps_KbnI18n_["i18n"].translate("data.noDataPopover.dismissAction",{defaultMessage:"Don't show again"}))},external_kbnSharedDeps_React_default.a.createElement("div",{onFocus:function onFocus(){setNoDataPopoverVisible(false)}},children))}function query_bar_top_row_slicedToArray(arr,i){return query_bar_top_row_arrayWithHoles(arr)||query_bar_top_row_iterableToArrayLimit(arr,i)||query_bar_top_row_unsupportedIterableToArray(arr,i)||query_bar_top_row_nonIterableRest()}function query_bar_top_row_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function query_bar_top_row_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return query_bar_top_row_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return query_bar_top_row_arrayLikeToArray(o,minLen)}function query_bar_top_row_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function query_bar_top_row_iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function query_bar_top_row_arrayWithHoles(arr){if(Array.isArray(arr))return arr}var QueryStringInput=Object(public_["withKibana"])(query_string_input["default"]);function QueryBarTopRow(props){var _useState=Object(external_kbnSharedDeps_React_["useState"])(false),_useState2=query_bar_top_row_slicedToArray(_useState,2),isDateRangeInvalid=_useState2[0],setIsDateRangeInvalid=_useState2[1];var _useState3=Object(external_kbnSharedDeps_React_["useState"])(false),_useState4=query_bar_top_row_slicedToArray(_useState3,2),isQueryInputFocused=_useState4[0],setIsQueryInputFocused=_useState4[1];var kibana=Object(public_["useKibana"])();var _kibana$services=kibana.services,uiSettings=_kibana$services.uiSettings,notifications=_kibana$services.notifications,storage=_kibana$services.storage,appName=_kibana$services.appName,docLinks=_kibana$services.docLinks;var kueryQuerySyntaxLink=docLinks.links.query.kueryQuerySyntax;var queryLanguage=props.query&&props.query.language;var persistedLog=external_kbnSharedDeps_React_default.a.useMemo((function(){return queryLanguage&&uiSettings&&storage&&appName?Object(public_query["v"])(uiSettings,storage,appName,queryLanguage):undefined}),[appName,queryLanguage,uiSettings,storage]);function onClickSubmitButton(event){if(persistedLog&&props.query){persistedLog.add(props.query.query)}event.preventDefault();onSubmit({query:props.query,dateRange:getDateRange()})}function getDateRange(){var defaultTimeSetting=uiSettings.get(common["UI_SETTINGS"].TIMEPICKER_TIME_DEFAULTS);return{from:props.dateRangeFrom||defaultTimeSetting.from,to:props.dateRangeTo||defaultTimeSetting.to}}function onQueryChange(query){props.onChange({query:query,dateRange:getDateRange()})}function onChangeQueryInputFocus(isFocused){setIsQueryInputFocused(isFocused)}function onTimeChange(_ref){var start=_ref.start,end=_ref.end,isInvalid=_ref.isInvalid,isQuickSelection=_ref.isQuickSelection;setIsDateRangeInvalid(isInvalid);var retVal={query:props.query,dateRange:{from:start,to:end}};if(isQuickSelection){props.onSubmit(retVal)}else{props.onChange(retVal)}}function onRefresh(_ref2){var start=_ref2.start,end=_ref2.end;var retVal={dateRange:{from:start,to:end}};if(props.onRefresh){props.onRefresh(retVal)}}function onSubmit(_ref3){var query=_ref3.query,dateRange=_ref3.dateRange;handleLuceneSyntaxWarning();if(props.timeHistory){props.timeHistory.add(dateRange)}props.onSubmit({query:query,dateRange:dateRange})}function onInputSubmit(query){onSubmit({query:query,dateRange:getDateRange()})}function toAbsoluteString(value){var roundUp=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var valueAsMoment=elastic_datemath_default.a.parse(value,{roundUp:roundUp});if(!valueAsMoment){return value}return valueAsMoment.toISOString()}function renderQueryInput(){if(!shouldRenderQueryInput())return;return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],null,external_kbnSharedDeps_React_default.a.createElement(QueryStringInput,{disableAutoFocus:props.disableAutoFocus,indexPatterns:props.indexPatterns,prepend:props.prepend,query:props.query,screenTitle:props.screenTitle,onChange:onQueryChange,onChangeQueryInputFocus:onChangeQueryInputFocus,onSubmit:onInputSubmit,persistedLog:persistedLog,dataTestSubj:props.dataTestSubj}))}function renderSharingMetaFields(){var _getDateRange=getDateRange(),from=_getDateRange.from,to=_getDateRange.to;var dateRangePretty=Object(external_kbnSharedDeps_ElasticEui_["prettyDuration"])(toAbsoluteString(from),toAbsoluteString(to),[],uiSettings.get("dateFormat"));return external_kbnSharedDeps_React_default.a.createElement("div",{"data-shared-timefilter-duration":dateRangePretty,"data-test-subj":"dataSharedTimefilterDuration"})}function shouldRenderDatePicker(){return Boolean(props.showDatePicker||props.showAutoRefreshOnly)}function shouldRenderQueryInput(){return Boolean(props.showQueryInput&&props.indexPatterns&&props.query&&storage)}function renderUpdateButton(){var button=props.customSubmitButton?external_kbnSharedDeps_React_default.a.cloneElement(props.customSubmitButton,{onClick:onClickSubmitButton}):external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiSuperUpdateButton"],{needsUpdate:props.isDirty,isDisabled:isDateRangeInvalid,isLoading:props.isLoading,onClick:onClickSubmitButton,"data-test-subj":"querySubmitButton"});if(!shouldRenderDatePicker()){return button}return external_kbnSharedDeps_React_default.a.createElement(NoDataPopover,{storage:storage,showNoDataPopover:props.indicateNoData},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexGroup"],{responsive:false,gutterSize:"s"},renderDatePicker(),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{grow:false},button)))}function renderDatePicker(){if(!shouldRenderDatePicker()){return null}var recentlyUsedRanges;if(props.timeHistory){recentlyUsedRanges=props.timeHistory.get().map((function(_ref4){var from=_ref4.from,to=_ref4.to;return{start:from,end:to}}))}var commonlyUsedRanges=uiSettings.get(common["UI_SETTINGS"].TIMEPICKER_QUICK_RANGES).map((function(_ref5){var from=_ref5.from,to=_ref5.to,display=_ref5.display;return{start:from,end:to,label:display}}));var wrapperClasses=classnames_default()("kbnQueryBar__datePickerWrapper",{"kbnQueryBar__datePickerWrapper-isHidden":isQueryInputFocused});return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{className:wrapperClasses},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiSuperDatePicker"],{start:props.dateRangeFrom,end:props.dateRangeTo,isPaused:props.isRefreshPaused,refreshInterval:props.refreshInterval,onTimeChange:onTimeChange,onRefresh:onRefresh,onRefreshChange:props.onRefreshChange,showUpdateButton:false,recentlyUsedRanges:recentlyUsedRanges,commonlyUsedRanges:commonlyUsedRanges,dateFormat:uiSettings.get("dateFormat"),isAutoRefreshOnly:props.showAutoRefreshOnly,className:"kbnQueryBar__datePicker"}))}function handleLuceneSyntaxWarning(){if(!props.query)return;var _props$query=props.query,query=_props$query.query,language=_props$query.language;if(language==="kuery"&&typeof query==="string"&&(!storage||!storage.get("kibana.luceneSyntaxWarningOptOut"))&&Object(common["doesKueryExpressionHaveLuceneSyntaxError"])(query)){var toast=notifications.toasts.addWarning({title:external_kbnSharedDeps_KbnI18n_["i18n"].translate("data.query.queryBar.luceneSyntaxWarningTitle",{defaultMessage:"Lucene syntax warning"}),text:Object(public_["toMountPoint"])(external_kbnSharedDeps_React_default.a.createElement("div",null,external_kbnSharedDeps_React_default.a.createElement("p",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["FormattedMessage"],{id:"data.query.queryBar.luceneSyntaxWarningMessage",defaultMessage:"It looks like you may be trying to use Lucene query syntax, although you have Kibana Query Language (KQL) selected. Please review the KQL docs {link}.",values:{link:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiLink"],{href:kueryQuerySyntaxLink,target:"_blank"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["FormattedMessage"],{id:"data.query.queryBar.syntaxOptionsDescription.docsLinkText",defaultMessage:"here"}))}})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexGroup"],{justifyContent:"flexEnd",gutterSize:"s"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{grow:false},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiButton"],{size:"s",onClick:function onClick(){return onLuceneSyntaxWarningOptOut(toast)}},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["FormattedMessage"],{id:"data.query.queryBar.luceneSyntaxWarningOptOutText",defaultMessage:"Don't show again"}))))))})}}function onLuceneSyntaxWarningOptOut(toast){if(!storage)return;storage.set("kibana.luceneSyntaxWarningOptOut",true);notifications.toasts.remove(toast)}var classes=classnames_default()("kbnQueryBar",{"kbnQueryBar--withDatePicker":props.showDatePicker});return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexGroup"],{className:classes,responsive:!!props.showDatePicker,gutterSize:"s",justifyContent:"flexEnd"},renderQueryInput(),renderSharingMetaFields(),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{grow:false},renderUpdateButton()))}QueryBarTopRow.defaultProps={showQueryInput:true,showDatePicker:true,showAutoRefreshOnly:false}}}]);