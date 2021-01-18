(function(modules){function webpackJsonpCallback(data){var chunkIds=data[0];var moreModules=data[1];var moduleId,chunkId,i=0,resolves=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]){resolves.push(installedChunks[chunkId][0])}installedChunks[chunkId]=0}for(moduleId in moreModules){if(Object.prototype.hasOwnProperty.call(moreModules,moduleId)){modules[moduleId]=moreModules[moduleId]}}if(parentJsonpFunction)parentJsonpFunction(data);while(resolves.length){resolves.shift()()}}var installedModules={};var installedChunks={0:0};function jsonpScriptSrc(chunkId){return __webpack_require__.p+"visTypeMarkdown.chunk."+chunkId+".js"}function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.e=function requireEnsure(chunkId){var promises=[];var installedChunkData=installedChunks[chunkId];if(installedChunkData!==0){if(installedChunkData){promises.push(installedChunkData[2])}else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var script=document.createElement("script");var onScriptComplete;script.charset="utf-8";script.timeout=120;if(__webpack_require__.nc){script.setAttribute("nonce",__webpack_require__.nc)}script.src=jsonpScriptSrc(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null;clearTimeout(timeout);var chunk=installedChunks[chunkId];if(chunk!==0){if(chunk){var errorType=event&&(event.type==="load"?"missing":event.type);var realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")";error.name="ChunkLoadError";error.type=errorType;error.request=realSrc;chunk[1](error)}installedChunks[chunkId]=undefined}};var timeout=setTimeout((function(){onScriptComplete({type:"timeout",target:script})}),12e4);script.onerror=script.onload=onScriptComplete;document.head.appendChild(script)}}return Promise.all(promises)};__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";__webpack_require__.oe=function(err){console.error(err);throw err};var jsonpArray=window["visTypeMarkdown_bundle_jsonpfunction"]=window["visTypeMarkdown_bundle_jsonpfunction"]||[];var oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback;jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;return __webpack_require__(__webpack_require__.s=8)})([function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.ReactDom},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/visDefaultEditor/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_val_loader_dist_cjs_js_key_visTypeMarkdown_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9);var _node_modules_val_loader_dist_cjs_js_key_visTypeMarkdown_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_visTypeMarkdown_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);__kbnBundles__.define("plugin/visTypeMarkdown/public",__webpack_require__,10)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__["visTypeMarkdown"]},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));var external_kbnSharedDeps_KbnI18n_=__webpack_require__(2);var external_kbnSharedDeps_React_=__webpack_require__(0);var external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_);var external_kbnSharedDeps_ElasticEui_=__webpack_require__(1);var external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(5);function MarkdownOptions(_ref){var stateParams=_ref.stateParams,setValue=_ref.setValue;var onMarkdownUpdate=Object(external_kbnSharedDeps_React_["useCallback"])((function(value){return setValue("markdown",value)}),[setValue]);return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiPanel"],{paddingSize:"s"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexGroup"],{direction:"column",gutterSize:"m",className:"mkdEditor"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{grow:false},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexGroup"],{gutterSize:"none",justifyContent:"spaceBetween",alignItems:"baseline"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{grow:false},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiTitle"],{size:"xs"},external_kbnSharedDeps_React_default.a.createElement("h2",null,external_kbnSharedDeps_React_default.a.createElement("label",{htmlFor:"markdownVisInput"},"Markdown")))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],{grow:false},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiText"],{size:"xs"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiLink"],{href:"https://help.github.com/articles/github-flavored-markdown/",target:"_blank"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["FormattedMessage"],{id:"visTypeMarkdown.params.helpLinkLabel",defaultMessage:"Help"})," ",external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiIcon"],{type:"popout",size:"s"})))))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiFlexItem"],null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiTextArea"],{id:"markdownVisInput",className:"visEditor--markdown__textarea",value:stateParams.markdown,onChange:function onChange(_ref2){var value=_ref2.target.value;return onMarkdownUpdate(value)},fullWidth:true,"data-test-subj":"markdownTextarea",resize:"none"}))))}var SettingsOptionsComponent=Object(external_kbnSharedDeps_React_["lazy"])((function(){return __webpack_require__.e(2).then(__webpack_require__.bind(null,24))}));var settings_options_lazy_SettingsOptions=function SettingsOptions(props){return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_["Suspense"],{fallback:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiLoadingSpinner"],null)},external_kbnSharedDeps_React_default.a.createElement(SettingsOptionsComponent,props))};var public_=__webpack_require__(6);var expressions_public_=__webpack_require__(3);var to_ast_toExpressionAst=function toExpressionAst(vis){var _vis$params=vis.params,markdown=_vis$params.markdown,fontSize=_vis$params.fontSize,openLinksInNewTab=_vis$params.openLinksInNewTab;var markdownVis=Object(expressions_public_["buildExpressionFunction"])("markdownVis",{markdown:markdown,font:Object(expressions_public_["buildExpression"])("font size=".concat(fontSize)),openLinksInNewTab:openLinksInNewTab});var ast=Object(expressions_public_["buildExpression"])([markdownVis]);return ast.toAst()};var markdownVisDefinition={name:"markdown",title:"Markdown",isAccessible:true,icon:"visText",description:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeMarkdown.markdownDescription",{defaultMessage:"Create a document using markdown syntax"}),toExpressionAst:to_ast_toExpressionAst,visConfig:{defaults:{fontSize:12,openLinksInNewTab:false,markdown:""}},editorConfig:{optionTabs:[{name:"advanced",title:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeMarkdown.tabs.dataText",{defaultMessage:"Data"}),editor:MarkdownOptions},{name:"options",title:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeMarkdown.tabs.optionsText",{defaultMessage:"Options"}),editor:settings_options_lazy_SettingsOptions}],enableAutoApply:true,defaultSize:public_["DefaultEditorSize"].LARGE},options:{showTimePicker:false,showFilterBar:false},requestHandler:"none",responseHandler:"none",inspectorAdapters:{}};var markdown_fn_createMarkdownVisFn=function createMarkdownVisFn(){return{name:"markdownVis",type:"render",inputTypes:[],help:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeMarkdown.function.help",{defaultMessage:"Markdown visualization"}),args:{markdown:{types:["string"],aliases:["_"],required:true,help:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeMarkdown.function.markdown.help",{defaultMessage:"Markdown to render"})},font:{types:["style"],help:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeMarkdown.function.font.help",{defaultMessage:"Font settings."}),default:"{font size=12}"},openLinksInNewTab:{types:["boolean"],default:false,help:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeMarkdown.function.openLinksInNewTab.help",{defaultMessage:"Opens links in new tab"})}},fn(input,args){return{type:"render",as:"markdown_vis",value:{visType:"markdown",visParams:{markdown:args.markdown,openLinksInNewTab:args.openLinksInNewTab,fontSize:parseInt(args.font.spec.fontSize||"12",10)}}}}}};var external_kbnSharedDeps_ReactDom_=__webpack_require__(4);var visualizations_public_=__webpack_require__(7);function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)}))}}var MarkdownVisComponent=Object(external_kbnSharedDeps_React_["lazy"])((function(){return __webpack_require__.e(1).then(__webpack_require__.bind(null,25))}));var markdownVisRenderer={name:"markdown_vis",displayName:"markdown visualization",reuseDomNode:true,render:function(){var _render2=_asyncToGenerator(regeneratorRuntime.mark((function _callee(domNode,_ref,handlers){var visParams;return regeneratorRuntime.wrap((function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:visParams=_ref.visParams;handlers.onDestroy((function(){Object(external_kbnSharedDeps_ReactDom_["unmountComponentAtNode"])(domNode)}));Object(external_kbnSharedDeps_ReactDom_["render"])(external_kbnSharedDeps_React_default.a.createElement(visualizations_public_["VisualizationContainer"],{className:"markdownVis"},external_kbnSharedDeps_React_default.a.createElement(MarkdownVisComponent,_extends({},visParams,{renderComplete:handlers.done}))),domNode);case 3:case"end":return _context.stop()}}}),_callee)})));function render(_x,_x2,_x3){return _render2.apply(this,arguments)}return render}()};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var plugin_MarkdownPlugin=function(){function MarkdownPlugin(initializerContext){_classCallCheck(this,MarkdownPlugin);_defineProperty(this,"initializerContext",void 0);this.initializerContext=initializerContext}_createClass(MarkdownPlugin,[{key:"setup",value:function setup(core,_ref){var expressions=_ref.expressions,visualizations=_ref.visualizations;visualizations.createBaseVisualization(markdownVisDefinition);expressions.registerRenderer(markdownVisRenderer);expressions.registerFunction(markdown_fn_createMarkdownVisFn)}},{key:"start",value:function start(core){}}]);return MarkdownPlugin}();function public_plugin(initializerContext){return new plugin_MarkdownPlugin(initializerContext)}},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/charts/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))}]);