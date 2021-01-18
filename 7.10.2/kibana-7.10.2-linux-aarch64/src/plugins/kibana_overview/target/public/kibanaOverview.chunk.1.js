(window["kibanaOverview_bundle_jsonpfunction"]=window["kibanaOverview_bundle_jsonpfunction"]||[]).push([[1],{29:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){var classes=[];for(var i=0;i<arguments.length;i++){var arg=arguments[i];if(!arg)continue;var argType=typeof arg;if(argType==="string"||argType==="number"){classes.push(arg)}else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);if(inner){classes.push(inner)}}else if(argType==="object"){for(var key in arg){if(hasOwn.call(arg,key)&&arg[key]){classes.push(key)}}}}return classes.join(" ")}if(true&&module.exports){classNames.default=classNames;module.exports=classNames}else if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}else{}})()},30:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"renderApp",(function(){return application_renderApp}));var external_kbnSharedDeps_React_=__webpack_require__(20);var external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_);var external_kbnSharedDeps_ReactDom_=__webpack_require__(24);var external_kbnSharedDeps_ReactDom_default=__webpack_require__.n(external_kbnSharedDeps_ReactDom_);var external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(21);var public_=__webpack_require__(23);var newsfeed_public_=__webpack_require__(25);var external_kbnSharedDeps_ReactRouterDom_=__webpack_require__(26);var external_kbnSharedDeps_Lodash_=__webpack_require__(27);var external_kbnSharedDeps_ElasticEui_=__webpack_require__(22);var home_public_=__webpack_require__(28);var common=__webpack_require__(1);var classnames=__webpack_require__(29);var classnames_default=__webpack_require__.n(classnames);function Synopsis(_ref){var id=_ref.id,description=_ref.description,iconUrl=_ref.iconUrl,iconType=_ref.iconType,title=_ref.title,url=_ref.url,wrapInPanel=_ref.wrapInPanel,onClick=_ref.onClick,isBeta=_ref.isBeta;var optionalImg;if(iconUrl){optionalImg=external_kbnSharedDeps_React_default.a.createElement("img",{alt:"",className:"synopsisIcon",src:iconUrl})}else if(iconType){optionalImg=external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiIcon"],{color:"text",size:"l",title:"",type:iconType})}var classes=classnames_default()("homSynopsis__card",{"homSynopsis__card--noPanel":!wrapInPanel});return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiCard"],{className:classes,layout:"horizontal",icon:optionalImg,titleSize:"xs",title:title,description:description,onClick:onClick,href:url,"data-test-subj":"homeSynopsisLink".concat(id.toLowerCase()),betaBadgeLabel:isBeta?"Beta":null,titleElement:"h3"})}Synopsis.defaultProps={isBeta:false};var add_data_AddData=function AddData(_ref){var addBasePath=_ref.addBasePath,features=_ref.features;var _useKibana=Object(public_["useKibana"])(),application=_useKibana.services.application;return external_kbnSharedDeps_React_default.a.createElement("section",{className:"kbnOverviewDataAdd","aria-labelledby":"kbnOverviewDataAdd__title"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexGroup"],{alignItems:"center"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{grow:1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiTitle"],{size:"s"},external_kbnSharedDeps_React_default.a.createElement("h2",{id:"kbnOverviewDataAdd__title"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["FormattedMessage"],{id:"kibanaOverview.addData.sectionTitle",defaultMessage:"Ingest your data"})))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{className:"kbnOverviewDataAdd__actions",grow:false},external_kbnSharedDeps_React_default.a.createElement("div",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiButtonEmpty"],{className:"kbnOverviewDataAdd__actionButton",flush:"left",href:addBasePath("#/tutorial_directory/sampleData"),iconType:"visTable",size:"xs"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["FormattedMessage"],{id:"kibanaOverview.addData.sampleDataButtonLabel",defaultMessage:"Try our sample data"}))))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiSpacer"],{size:"m"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexGroup"],{className:"kbnOverviewDataAdd__content"},features.map((function(feature){return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{key:feature.id},external_kbnSharedDeps_React_default.a.createElement(public_["RedirectAppLinks"],{application:application},external_kbnSharedDeps_React_default.a.createElement(Synopsis,{id:feature.id,description:feature.description,iconType:feature.icon,title:feature.title,url:addBasePath(feature.path),wrapInPanel:true})))}))))};var getting_started_GettingStarted=function GettingStarted(_ref){var addBasePath=_ref.addBasePath,isDarkTheme=_ref.isDarkTheme,apps=_ref.apps;var _useKibana=Object(public_["useKibana"])(),application=_useKibana.services.application;var gettingStartedGraphicURL="/plugins/".concat(common["b"],"/assets/kibana_montage_").concat(isDarkTheme?"dark":"light",".svg");return external_kbnSharedDeps_React_default.a.createElement("section",{"aria-labelledby":"kbnOverviewGettingStarted__title",className:"kbnOverviewGettingStarted"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexGroup"],{alignItems:"center"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{className:"kbnOverviewGettingStarted__content"},external_kbnSharedDeps_React_default.a.createElement("div",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiTitle"],{size:"s"},external_kbnSharedDeps_React_default.a.createElement("h2",{id:"kbnOverviewGettingStarted__title"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["FormattedMessage"],{id:"kibanaOverview.gettingStarted.title",defaultMessage:"Getting started with Kibana"}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiSpacer"],{size:"m"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiText"],null,external_kbnSharedDeps_React_default.a.createElement("p",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["FormattedMessage"],{id:"kibanaOverview.gettingStarted.description",defaultMessage:"Kibana empowers you to visualize your data, your way.  Start with one question, and see where the answer leads you."}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiSpacer"],{size:"xl"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexGrid"],{className:"kbnOverviewGettingStarted__apps",columns:2},apps.map((function(_ref2){var _ref2$subtitle=_ref2.subtitle,subtitle=_ref2$subtitle===void 0?"":_ref2$subtitle,icon=_ref2.icon,title=_ref2.title;return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{key:title},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiCard"],{description:subtitle,display:"plain",icon:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiIcon"],{color:"text",size:"l",type:icon}),layout:"horizontal",paddingSize:"none",title:title,titleElement:"h3",titleSize:"xs"}))}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiSpacer"],{size:"xl"}),external_kbnSharedDeps_React_default.a.createElement(public_["RedirectAppLinks"],{application:application},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiButton"],{fill:true,iconType:"indexOpen",href:addBasePath("/app/management/kibana/indexPatterns")},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["FormattedMessage"],{defaultMessage:"Add your data",id:"kibanaOverview.gettingStarted.addDataButtonLabel"}))))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{className:"kbnOverviewGettingStarted__graphic"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiImage"],{alt:"Kibana visualizations illustration",url:addBasePath(gettingStartedGraphicURL)}))))};var manage_data_ManageData=function ManageData(_ref){var addBasePath=_ref.addBasePath,features=_ref.features;var _useKibana=Object(public_["useKibana"])(),application=_useKibana.services.application;return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,features.length>1?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiHorizontalRule"],{margin:"xl","aria-hidden":"true"}):null,features.length>0?external_kbnSharedDeps_React_default.a.createElement("section",{className:"kbnOverviewDataManage","aria-labelledby":"kbnOverviewDataManage__title","data-test-subj":"kbnOverviewDataManage"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiTitle"],{size:"s"},external_kbnSharedDeps_React_default.a.createElement("h2",{id:"kbnOverviewDataManage__title"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["FormattedMessage"],{id:"kibanaOverview.manageData.sectionTitle",defaultMessage:"Manage your data"}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiSpacer"],{size:"m"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexGroup"],{className:"kbnOverviewDataManage__content",wrap:true},features.map((function(feature){return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{className:"kbnOverviewDataManage__item",key:feature.id},external_kbnSharedDeps_React_default.a.createElement(public_["RedirectAppLinks"],{application:application},external_kbnSharedDeps_React_default.a.createElement(Synopsis,{id:feature.id,description:feature.description,iconType:feature.icon,title:feature.title,url:addBasePath(feature.path),wrapInPanel:true})))})))):null)};var news_feed_NewsFeed=function NewsFeed(_ref){var newsFetchResult=_ref.newsFetchResult;return external_kbnSharedDeps_React_default.a.createElement("section",{"aria-labelledby":"kbnOverviewNews__title",className:"kbnOverviewNews"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiTitle"],{size:"s"},external_kbnSharedDeps_React_default.a.createElement("h2",{id:"kbnOverviewNews__title"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["FormattedMessage"],{id:"kibanaOverview.news.title",defaultMessage:"What's new"}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiSpacer"],{size:"m"}),external_kbnSharedDeps_React_default.a.createElement("div",{className:"kbnOverviewNews__content"},newsFetchResult.feedItems.slice(0,3).map((function(_ref2,index){var title=_ref2.title,description=_ref2.description,linkUrl=_ref2.linkUrl,publishOn=_ref2.publishOn;return external_kbnSharedDeps_React_default.a.createElement("article",{key:title,"aria-labelledby":"kbnOverviewNews__title".concat(index)},external_kbnSharedDeps_React_default.a.createElement("header",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiTitle"],{size:"xxs"},external_kbnSharedDeps_React_default.a.createElement("h3",{id:"kbnOverviewNews__title".concat(index)},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiLink"],{href:linkUrl,target:"_blank"},title))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiText"],{size:"xs",color:"subdued"},external_kbnSharedDeps_React_default.a.createElement("p",null,external_kbnSharedDeps_React_default.a.createElement("time",{dateTime:publishOn.format("YYYY-MM-DD")},publishOn.format("DD MMMM YYYY"))))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiText"],{size:"xs"},external_kbnSharedDeps_React_default.a.createElement("p",null,description)))}))))};function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)}))}}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var sortByOrder=function sortByOrder(featureA,featureB){return(featureA.order||Infinity)-(featureB.order||Infinity)};var overview_Overview=function Overview(_ref){var newsFetchResult=_ref.newsFetchResult,solutions=_ref.solutions,features=_ref.features;var _useState=Object(external_kbnSharedDeps_React_["useState"])(false),_useState2=_slicedToArray(_useState,2),isNewKibanaInstance=_useState2[0],setNewKibanaInstance=_useState2[1];var _useKibana=Object(public_["useKibana"])(),_useKibana$services=_useKibana.services,http=_useKibana$services.http,data=_useKibana$services.data,uiSettings=_useKibana$services.uiSettings,application=_useKibana$services.application;var addBasePath=http.basePath.prepend;var indexPatternService=data.indexPatterns;var IS_DARK_THEME=uiSettings.get("theme:darkMode");var getFeaturesByCategory=function getFeaturesByCategory(category){return features.filter((function(feature){return feature.showOnHomePage&&feature.category===category})).sort(sortByOrder)};var getSolutionGraphicURL=function getSolutionGraphicURL(solutionId){return"/plugins/".concat(common["b"],"/assets/solutions_").concat(solutionId,"_").concat(IS_DARK_THEME?"dark":"light","_2x.png")};var findFeatureById=function findFeatureById(featureId){return features.find((function(_ref2){var id=_ref2.id;return id===featureId}))};var kibanaApps=features.filter((function(_ref3){var solutionId=_ref3.solutionId;return solutionId==="kibana"})).sort(sortByOrder);var addDataFeatures=getFeaturesByCategory(home_public_["FeatureCatalogueCategory"].DATA);var manageDataFeatures=getFeaturesByCategory(home_public_["FeatureCatalogueCategory"].ADMIN);var devTools=findFeatureById("console");if(manageDataFeatures.length<1&&devTools){manageDataFeatures.push(devTools)}Object(external_kbnSharedDeps_React_["useEffect"])((function(){var fetchIsNewKibanaInstance=function(){var _ref4=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var resp;return regeneratorRuntime.wrap((function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return indexPatternService.getTitles();case 2:resp=_context.sent;setNewKibanaInstance(resp.length===0);case 4:case"end":return _context.stop()}}}),_callee)})));return function fetchIsNewKibanaInstance(){return _ref4.apply(this,arguments)}}();fetchIsNewKibanaInstance()}),[indexPatternService]);var renderAppCard=function renderAppCard(appId){var app=kibanaApps.find((function(_ref5){var id=_ref5.id;return id===appId}));return app?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{className:"kbnOverviewApps__item",key:appId},external_kbnSharedDeps_React_default.a.createElement(public_["RedirectAppLinks"],{application:application},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiCard"],{description:(app===null||app===void 0?void 0:app.subtitle)||"",href:addBasePath(app.path),image:addBasePath("/plugins/".concat(common["b"],"/assets/kibana_").concat(appId,"_").concat(IS_DARK_THEME?"dark":"light",".svg")),title:app.title,titleElement:"h3",titleSize:"s"}))):null};var mainApps=["dashboard","discover"];var remainingApps=kibanaApps.map((function(_ref6){var id=_ref6.id;return id})).filter((function(id){return!mainApps.includes(id)}));return external_kbnSharedDeps_React_default.a.createElement("main",{"aria-labelledby":"kbnOverviewPageHeader__title",className:"kbnOverviewWrapper"},external_kbnSharedDeps_React_default.a.createElement(public_["OverviewPageHeader"],{addBasePath:addBasePath,hideToolbar:isNewKibanaInstance,iconType:"logoKibana",title:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["FormattedMessage"],{defaultMessage:"Kibana",id:"kibanaOverview.header.title"})}),external_kbnSharedDeps_React_default.a.createElement("div",{className:"kbnOverviewContent"},isNewKibanaInstance?external_kbnSharedDeps_React_default.a.createElement(getting_started_GettingStarted,{addBasePath:addBasePath,isDarkTheme:IS_DARK_THEME,apps:kibanaApps}):external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement("section",{"aria-labelledby":"kbnOverviewApps__title",className:"kbnOverviewApps"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiScreenReaderOnly"],null,external_kbnSharedDeps_React_default.a.createElement("h2",{id:"kbnOverviewApps__title"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["FormattedMessage"],{id:"kibanaOverview.apps.title",defaultMessage:"Explore these apps"}))),mainApps.length?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexGroup"],{className:"kbnOverviewApps__group kbnOverviewApps__group--primary",justifyContent:"center"},mainApps.map(renderAppCard)),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiSpacer"],{size:"l"})):null,remainingApps.length?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexGroup"],{className:"kbnOverviewApps__group kbnOverviewApps__group--secondary",justifyContent:"center"},remainingApps.map(renderAppCard)):null),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiHorizontalRule"],{"aria-hidden":"true",margin:"xl"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexGroup"],{alignItems:"flexStart",className:"kbnOverviewSupplements ".concat(newsFetchResult&&newsFetchResult.feedItems.length?"kbnOverviewSupplements--hasNews":"kbnOverviewSupplements--noNews")},newsFetchResult&&newsFetchResult.feedItems.length?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{grow:1},external_kbnSharedDeps_React_default.a.createElement(news_feed_NewsFeed,{newsFetchResult:newsFetchResult})):null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{grow:3},solutions.length?external_kbnSharedDeps_React_default.a.createElement("section",{"aria-labelledby":"kbnOverviewMore__title",className:"kbnOverviewMore"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiTitle"],{size:"s"},external_kbnSharedDeps_React_default.a.createElement("h2",{id:"kbnOverviewMore__title"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["FormattedMessage"],{id:"kibanaOverview.more.title",defaultMessage:"Do more with Elastic"}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiSpacer"],{size:"m"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexGroup"],{className:"kbnOverviewMore__content"},solutions.map((function(_ref7){var id=_ref7.id,title=_ref7.title,description=_ref7.description,icon=_ref7.icon,path=_ref7.path;return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{className:"kbnOverviewMore__item",key:id},external_kbnSharedDeps_React_default.a.createElement(public_["RedirectAppLinks"],{application:application},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiCard"],{className:"kbnOverviewSolution",description:description?description:"",href:addBasePath(path),icon:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiToken"],{className:"kbnOverviewSolution__icon",fill:"light",iconType:icon,shape:"circle",size:"l"}),image:addBasePath(getSolutionGraphicURL(Object(external_kbnSharedDeps_Lodash_["snakeCase"])(id))),title:title,titleElement:"h3",titleSize:"xs"})))})))):external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexGroup"],{className:"kbnOverviewData ".concat(addDataFeatures.length===1&&manageDataFeatures.length===1?"kbnOverviewData--compressed":"kbnOverviewData--expanded")},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],null,external_kbnSharedDeps_React_default.a.createElement(add_data_AddData,{addBasePath:addBasePath,features:addDataFeatures})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],null,external_kbnSharedDeps_React_default.a.createElement(manage_data_ManageData,{addBasePath:addBasePath,features:manageDataFeatures})))))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiHorizontalRule"],{margin:"xl","aria-hidden":"true"}),external_kbnSharedDeps_React_default.a.createElement(public_["OverviewPageFooter"],{addBasePath:addBasePath,path:common["d"]})))};function app_slicedToArray(arr,i){return app_arrayWithHoles(arr)||app_iterableToArrayLimit(arr,i)||app_unsupportedIterableToArray(arr,i)||app_nonIterableRest()}function app_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function app_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return app_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return app_arrayLikeToArray(o,minLen)}function app_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function app_iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function app_arrayWithHoles(arr){if(Array.isArray(arr))return arr}var app_KibanaOverviewApp=function KibanaOverviewApp(_ref){var basename=_ref.basename,newsfeed$=_ref.newsfeed$,solutions=_ref.solutions,features=_ref.features;var _useState=Object(external_kbnSharedDeps_React_["useState"])(null),_useState2=app_slicedToArray(_useState,2),newsFetchResult=_useState2[0],setNewsFetchResult=_useState2[1];Object(external_kbnSharedDeps_React_["useEffect"])((function(){if(newsfeed$){var subscription=newsfeed$.subscribe((function(res){setNewsFetchResult(res)}));return function(){return subscription.unsubscribe()}}}),[newsfeed$]);return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ReactRouterDom_["HashRouter"],{basename:basename},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["I18nProvider"],null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ReactRouterDom_["Switch"],null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ReactRouterDom_["Route"],{exact:true,path:"/"},external_kbnSharedDeps_React_default.a.createElement(overview_Overview,{newsFetchResult:newsFetchResult,solutions:solutions,features:features})))))};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}));keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach((function(key){_defineProperty(target,key,source[key])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var application_renderApp=function renderApp(core,deps,_ref){var appBasePath=_ref.appBasePath,element=_ref.element;var notifications=core.notifications,http=core.http;var newsfeed=deps.newsfeed,home=deps.home,navigation=deps.navigation;var newsfeed$=newsfeed===null||newsfeed===void 0?void 0:newsfeed.createNewsFeed$(newsfeed_public_["NewsfeedApiEndpoint"].KIBANA_ANALYTICS);var navLinks=core.chrome.navLinks.getAll();var solutions=home.featureCatalogue.getSolutions().filter((function(_ref2){var id=_ref2.id;return id!=="kibana"})).filter((function(_ref3){var id=_ref3.id;return navLinks.find((function(_ref4){var category=_ref4.category,hidden=_ref4.hidden;return!hidden&&(category===null||category===void 0?void 0:category.id)===id}))}));var features=home.featureCatalogue.get();external_kbnSharedDeps_ReactDom_default.a.render(external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["I18nProvider"],null,external_kbnSharedDeps_React_default.a.createElement(public_["KibanaContextProvider"],{services:_objectSpread(_objectSpread({},core),deps)},external_kbnSharedDeps_React_default.a.createElement(app_KibanaOverviewApp,{basename:appBasePath,notifications:notifications,http:http,navigation:navigation,newsfeed$:newsfeed$,solutions:solutions,features:features}))),element);return function(){return external_kbnSharedDeps_ReactDom_default.a.unmountComponentAtNode(element)}}}}]);