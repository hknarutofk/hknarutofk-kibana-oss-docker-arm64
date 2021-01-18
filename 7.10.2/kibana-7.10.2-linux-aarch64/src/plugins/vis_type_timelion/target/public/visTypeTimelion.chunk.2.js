(window["visTypeTimelion_bundle_jsonpfunction"]=window["visTypeTimelion_bundle_jsonpfunction"]||[]).push([[2],{25:function(module,exports,__webpack_require__){"use strict";var isOldIE=function isOldIE(){var memo;return function memorize(){if(typeof memo==="undefined"){memo=Boolean(window&&document&&document.all&&!window.atob)}return memo}}();var getTarget=function getTarget(){var memo={};return function memorize(target){if(typeof memo[target]==="undefined"){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}}memo[target]=styleTarget}return memo[target]}}();var stylesInDom=[];function getIndexByIdentifier(identifier){var result=-1;for(var i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break}}return result}function modulesToDom(list,options){var idCountMap={};var identifiers=[];for(var i=0;i<list.length;i++){var item=list[i];var id=options.base?item[0]+options.base:item[0];var count=idCountMap[id]||0;var identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier);var obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj)}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1})}identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style");var attributes=options.attributes||{};if(typeof attributes.nonce==="undefined"){var nonce=true?__webpack_require__.nc:undefined;if(nonce){attributes.nonce=nonce}}Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])}));if(typeof options.insert==="function"){options.insert(style)}else{var target=getTarget(options.insert||"head");if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}target.appendChild(style)}return style}function removeStyleElement(style){if(style.parentNode===null){return false}style.parentNode.removeChild(style)}var replaceText=function replaceText(){var textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join("\n")}}();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css)}else{var cssNode=document.createTextNode(css);var childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index])}if(childNodes.length){style.insertBefore(cssNode,childNodes[index])}else{style.appendChild(cssNode)}}}function applyToTag(style,options,obj){var css=obj.css;var media=obj.media;var sourceMap=obj.sourceMap;if(media){style.setAttribute("media",media)}else{style.removeAttribute("media")}if(sourceMap&&btoa){css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")}if(style.styleSheet){style.styleSheet.cssText=css}else{while(style.firstChild){style.removeChild(style.firstChild)}style.appendChild(document.createTextNode(css))}}var singleton=null;var singletonCounter=0;function addStyle(obj,options){var style;var update;var remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true)}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function remove(){removeStyleElement(style)}}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return}update(obj=newObj)}else{remove()}}}module.exports=function(list,options){options=options||{};if(!options.singleton&&typeof options.singleton!=="boolean"){options.singleton=isOldIE()}list=list||[];var lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=="[object Array]"){return}for(var i=0;i<lastIdentifiers.length;i++){var identifier=lastIdentifiers[i];var index=getIndexByIdentifier(identifier);stylesInDom[index].references--}var newLastIdentifiers=modulesToDom(newList,options);for(var _i=0;_i<lastIdentifiers.length;_i++){var _identifier=lastIdentifiers[_i];var _index=getIndexByIdentifier(_identifier);if(stylesInDom[_index].references===0){stylesInDom[_index].updater();stylesInDom.splice(_index,1)}}lastIdentifiers=newLastIdentifiers}}},26:function(module,exports,__webpack_require__){"use strict";module.exports=function(useSourceMap){var list=[];list.toString=function toString(){return this.map((function(item){var content=cssWithMappingToString(item,useSourceMap);if(item[2]){return"@media ".concat(item[2]," {").concat(content,"}")}return content})).join("")};list.i=function(modules,mediaQuery,dedupe){if(typeof modules==="string"){modules=[[null,modules,""]]}var alreadyImportedModules={};if(dedupe){for(var i=0;i<this.length;i++){var id=this[i][0];if(id!=null){alreadyImportedModules[id]=true}}}for(var _i=0;_i<modules.length;_i++){var item=[].concat(modules[_i]);if(dedupe&&alreadyImportedModules[item[0]]){continue}if(mediaQuery){if(!item[2]){item[2]=mediaQuery}else{item[2]="".concat(mediaQuery," and ").concat(item[2])}}list.push(item)}};return list};function cssWithMappingToString(item,useSourceMap){var content=item[1]||"";var cssMapping=item[3];if(!cssMapping){return content}if(useSourceMap&&typeof btoa==="function"){var sourceMapping=toComment(cssMapping);var sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}return[content].join("\n")}function toComment(sourceMap){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));var data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);return"/*# ".concat(data," */")}},37:function(module,exports,__webpack_require__){switch(window.__kbnThemeTag__){case"v7dark":return __webpack_require__(38);case"v7light":return __webpack_require__(40);case"v8dark":return __webpack_require__(42);case"v8light":return __webpack_require__(44)}},38:function(module,exports,__webpack_require__){var api=__webpack_require__(25);var content=__webpack_require__(39);content=content.__esModule?content.default:content;if(typeof content==="string"){content=[[module.i,content,""]]}var options={};options.insert="head";options.singleton=false;var update=api(content,options);var exported=content.locals?content.locals:{};module.exports=exported},39:function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(26);exports=___CSS_LOADER_API_IMPORT___(false);exports.push([module.i,".timChart {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n  .timChart .chart-top-title {\n    font-size: 12px;\n    font-size: 0.75rem;\n    line-height: 1.5;\n    flex: 0;\n    text-align: center;\n    font-weight: 700; }\n  .timChart .chart-canvas {\n    min-width: 100%;\n    flex: 1;\n    overflow: hidden; }\n  .timChart .legendLabel {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow-x: hidden;\n    line-height: normal; }\n  .timChart .legendColorBox {\n    vertical-align: middle; }\n  .timChart .ngLegendValue {\n    color: #DFE5EF;\n    cursor: pointer; }\n    .timChart .ngLegendValue:focus, .timChart .ngLegendValue:hover {\n      text-decoration: underline; }\n  .timChart .ngLegendValueNumber {\n    margin-left: 4px;\n    margin-right: 4px;\n    font-weight: 700; }\n  .timChart .flot-tick-label {\n    font-size: 12px;\n    color: #98A2B3; }\n\n.timChart__legendCaption {\n  color: #DFE5EF;\n  white-space: nowrap;\n  font-weight: 700; }\n",""]);module.exports=exports},40:function(module,exports,__webpack_require__){var api=__webpack_require__(25);var content=__webpack_require__(41);content=content.__esModule?content.default:content;if(typeof content==="string"){content=[[module.i,content,""]]}var options={};options.insert="head";options.singleton=false;var update=api(content,options);var exported=content.locals?content.locals:{};module.exports=exported},41:function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(26);exports=___CSS_LOADER_API_IMPORT___(false);exports.push([module.i,".timChart {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n  .timChart .chart-top-title {\n    font-size: 12px;\n    font-size: 0.75rem;\n    line-height: 1.5;\n    flex: 0;\n    text-align: center;\n    font-weight: 700; }\n  .timChart .chart-canvas {\n    min-width: 100%;\n    flex: 1;\n    overflow: hidden; }\n  .timChart .legendLabel {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow-x: hidden;\n    line-height: normal; }\n  .timChart .legendColorBox {\n    vertical-align: middle; }\n  .timChart .ngLegendValue {\n    color: #343741;\n    cursor: pointer; }\n    .timChart .ngLegendValue:focus, .timChart .ngLegendValue:hover {\n      text-decoration: underline; }\n  .timChart .ngLegendValueNumber {\n    margin-left: 4px;\n    margin-right: 4px;\n    font-weight: 700; }\n  .timChart .flot-tick-label {\n    font-size: 12px;\n    color: #69707D; }\n\n.timChart__legendCaption {\n  color: #343741;\n  white-space: nowrap;\n  font-weight: 700; }\n",""]);module.exports=exports},42:function(module,exports,__webpack_require__){var api=__webpack_require__(25);var content=__webpack_require__(43);content=content.__esModule?content.default:content;if(typeof content==="string"){content=[[module.i,content,""]]}var options={};options.insert="head";options.singleton=false;var update=api(content,options);var exported=content.locals?content.locals:{};module.exports=exported},43:function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(26);exports=___CSS_LOADER_API_IMPORT___(false);exports.push([module.i,".timChart {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n  .timChart .chart-top-title {\n    font-size: 12px;\n    font-size: 0.85714rem;\n    line-height: 1.5;\n    flex: 0;\n    text-align: center;\n    font-weight: 700; }\n  .timChart .chart-canvas {\n    min-width: 100%;\n    flex: 1;\n    overflow: hidden; }\n  .timChart .legendLabel {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow-x: hidden;\n    line-height: normal; }\n  .timChart .legendColorBox {\n    vertical-align: middle; }\n  .timChart .ngLegendValue {\n    color: #DFE5EF;\n    cursor: pointer; }\n    .timChart .ngLegendValue:focus, .timChart .ngLegendValue:hover {\n      text-decoration: underline; }\n  .timChart .ngLegendValueNumber {\n    margin-left: 4px;\n    margin-right: 4px;\n    font-weight: 700; }\n  .timChart .flot-tick-label {\n    font-size: 12px;\n    color: #98A2B3; }\n\n.timChart__legendCaption {\n  color: #DFE5EF;\n  white-space: nowrap;\n  font-weight: 700; }\n",""]);module.exports=exports},44:function(module,exports,__webpack_require__){var api=__webpack_require__(25);var content=__webpack_require__(45);content=content.__esModule?content.default:content;if(typeof content==="string"){content=[[module.i,content,""]]}var options={};options.insert="head";options.singleton=false;var update=api(content,options);var exported=content.locals?content.locals:{};module.exports=exported},45:function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(26);exports=___CSS_LOADER_API_IMPORT___(false);exports.push([module.i,".timChart {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n  .timChart .chart-top-title {\n    font-size: 12px;\n    font-size: 0.85714rem;\n    line-height: 1.5;\n    flex: 0;\n    text-align: center;\n    font-weight: 700; }\n  .timChart .chart-canvas {\n    min-width: 100%;\n    flex: 1;\n    overflow: hidden; }\n  .timChart .legendLabel {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow-x: hidden;\n    line-height: normal; }\n  .timChart .legendColorBox {\n    vertical-align: middle; }\n  .timChart .ngLegendValue {\n    color: #343741;\n    cursor: pointer; }\n    .timChart .ngLegendValue:focus, .timChart .ngLegendValue:hover {\n      text-decoration: underline; }\n  .timChart .ngLegendValueNumber {\n    margin-left: 4px;\n    margin-right: 4px;\n    font-weight: 700; }\n  .timChart .flot-tick-label {\n    font-size: 12px;\n    color: #69707D; }\n\n.timChart__legendCaption {\n  color: #343741;\n  white-space: nowrap;\n  font-weight: 700; }\n",""]);module.exports=exports},47:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"default",(function(){return TimelionVisComponent}));var external_kbnSharedDeps_React_=__webpack_require__(2);var external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_);var external_kbnSharedDeps_Jquery_=__webpack_require__(23);var external_kbnSharedDeps_Jquery_default=__webpack_require__.n(external_kbnSharedDeps_Jquery_);var external_kbnSharedDeps_MomentTimezone_=__webpack_require__(8);var external_kbnSharedDeps_MomentTimezone_default=__webpack_require__.n(external_kbnSharedDeps_MomentTimezone_);var external_kbnSharedDeps_Lodash_=__webpack_require__(0);var external_kbnSharedDeps_ElasticEui_=__webpack_require__(21);var public_=__webpack_require__(12);var lib=__webpack_require__(7);var xaxis_formatter=__webpack_require__(14);var ACTIVE_CURSOR="ACTIVE_CURSOR_TIMELION";var eventBus=external_kbnSharedDeps_Jquery_default()({});var colors=["#01A4A4","#C66","#D0D102","#616161","#00A1CB","#32742C","#F18D05","#113F8C","#61AE24","#D70060"];var SERIES_ID_ATTR="data-series-id";function buildSeriesData(chart,options){var seriesData=chart.map((function(series,seriesIndex){var newSeries=Object(external_kbnSharedDeps_Lodash_["cloneDeep"])(Object(external_kbnSharedDeps_Lodash_["defaults"])(series,{shadowSize:0,lines:{lineWidth:3}}));newSeries._id=seriesIndex;if(series.color){var span=document.createElement("span");span.style.color=series.color;newSeries.color=span.style.color}if(series._hide){newSeries.data=[];newSeries.stack=false;newSeries.label="(hidden) ".concat(series.label)}if(series._global){Object(external_kbnSharedDeps_Lodash_["mergeWith"])(options,series._global,(function(objVal,srcVal){if(objVal==null){return srcVal}if(srcVal==null){return objVal}}))}return newSeries}));return Object(external_kbnSharedDeps_Lodash_["compact"])(seriesData)}function buildOptions(intervalValue,timefilter,uiSettings){var clientWidth=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0;var showGrid=arguments.length>4?arguments[4]:undefined;var time=timefilter.getBounds();var interval=Object(lib["b"])(time.min&&time.min.valueOf()||0,time.max&&time.max.valueOf()||0,uiSettings.get("timelion:target_buckets")||200,intervalValue,uiSettings.get("timelion:min_interval")||"1ms");var format=Object(xaxis_formatter["a"])(uiSettings)(interval);var tickLetterWidth=7;var tickPadding=45;var options={xaxis:{mode:"time",tickLength:5,timezone:"browser",ticks:Math.floor(clientWidth/(format.length*tickLetterWidth+tickPadding)),tickFormatter:function tickFormatter(val){return external_kbnSharedDeps_MomentTimezone_default()(val).format(format)}},selection:{mode:"x",color:"#ccc"},crosshair:{mode:"x",color:"#C66",lineWidth:2},colors:colors,grid:{show:showGrid,borderWidth:0,borderColor:null,margin:10,hoverable:true,autoHighlight:false},legend:{backgroundColor:"rgb(255,255,255,0)",position:"nw",labelBoxBorderColor:"rgb(255,255,255,0)",labelFormatter(label,series){var wrapperSpan=document.createElement("span");var labelSpan=document.createElement("span");var numberSpan=document.createElement("span");wrapperSpan.setAttribute("class","ngLegendValue");wrapperSpan.setAttribute(SERIES_ID_ATTR,"".concat(series._id));labelSpan.appendChild(document.createTextNode(label));numberSpan.setAttribute("class","ngLegendValueNumber");wrapperSpan.appendChild(labelSpan);wrapperSpan.appendChild(numberSpan);return wrapperSpan.outerHTML}}};return options}var tick_formatters=__webpack_require__(13);var tick_generator=__webpack_require__(15);var timelion_vis=__webpack_require__(37);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}));keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach((function(key){_defineProperty(target,key,source[key])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var DEBOUNCE_DELAY=50;var emptyCaption="<br>";function TimelionVisComponent(_ref){var interval=_ref.interval,seriesList=_ref.seriesList,renderComplete=_ref.renderComplete,fireEvent=_ref.fireEvent;var kibana=Object(public_["useKibana"])();var _useState=Object(external_kbnSharedDeps_React_["useState"])((function(){return Object(external_kbnSharedDeps_Lodash_["cloneDeep"])(seriesList.list)})),_useState2=_slicedToArray(_useState,2),chart=_useState2[0],setChart=_useState2[1];var _useState3=Object(external_kbnSharedDeps_React_["useState"])(),_useState4=_slicedToArray(_useState3,2),canvasElem=_useState4[0],setCanvasElem=_useState4[1];var _useState5=Object(external_kbnSharedDeps_React_["useState"])(null),_useState6=_slicedToArray(_useState5,2),chartElem=_useState6[0],setChartElem=_useState6[1];var _useState7=Object(external_kbnSharedDeps_React_["useState"])((function(){return new Map})),_useState8=_slicedToArray(_useState7,2),originalColorMap=_useState8[0],setOriginalColorMap=_useState8[1];var _useState9=Object(external_kbnSharedDeps_React_["useState"])(null),_useState10=_slicedToArray(_useState9,2),highlightedSeries=_useState10[0],setHighlightedSeries=_useState10[1];var _useState11=Object(external_kbnSharedDeps_React_["useState"])(),_useState12=_slicedToArray(_useState11,2),focusedSeries=_useState12[0],setFocusedSeries=_useState12[1];var _useState13=Object(external_kbnSharedDeps_React_["useState"])(),_useState14=_slicedToArray(_useState13,2),plot=_useState14[0],setPlot=_useState14[1];var _useState15=Object(external_kbnSharedDeps_React_["useState"])(),_useState16=_slicedToArray(_useState15,2),legendValueNumbers=_useState16[0],setLegendValueNumbers=_useState16[1];var _useState17=Object(external_kbnSharedDeps_React_["useState"])(),_useState18=_slicedToArray(_useState17,2),legendCaption=_useState18[0],setLegendCaption=_useState18[1];var canvasRef=Object(external_kbnSharedDeps_React_["useCallback"])((function(node){if(node!==null){setCanvasElem(node)}}),[]);var elementRef=Object(external_kbnSharedDeps_React_["useCallback"])((function(node){if(node!==null){setChartElem(node)}}),[]);Object(external_kbnSharedDeps_React_["useEffect"])((function(){return function(){if(chartElem){external_kbnSharedDeps_Jquery_default()(chartElem).off("plotselected").off("plothover").off("mouseleave")}}}),[chartElem]);var highlightSeries=Object(external_kbnSharedDeps_React_["useCallback"])(Object(external_kbnSharedDeps_Lodash_["debounce"])((function(_ref2){var currentTarget=_ref2.currentTarget;var id=Number(currentTarget.getAttribute(SERIES_ID_ATTR));if(highlightedSeries===id){return}setHighlightedSeries(id);setChart((function(chartState){return chartState.map((function(series,seriesIndex){series.color=seriesIndex===id?originalColorMap.get(series):"rgba(128,128,128,0.1)";return series}))}))}),DEBOUNCE_DELAY),[originalColorMap,highlightedSeries]);var focusSeries=Object(external_kbnSharedDeps_React_["useCallback"])((function(event){var id=Number(event.currentTarget.getAttribute(SERIES_ID_ATTR));setFocusedSeries(id);highlightSeries(event)}),[highlightSeries]);var toggleSeries=Object(external_kbnSharedDeps_React_["useCallback"])((function(_ref3){var currentTarget=_ref3.currentTarget;var id=Number(currentTarget.getAttribute(SERIES_ID_ATTR));setChart((function(chartState){return chartState.map((function(series,seriesIndex){if(seriesIndex===id){series._hide=!series._hide}return series}))}))}),[]);var updateCaption=Object(external_kbnSharedDeps_React_["useCallback"])((function(plotData){if(canvasElem&&Object(external_kbnSharedDeps_Lodash_["get"])(plotData,"[0]._global.legend.showTime",true)){var caption=external_kbnSharedDeps_Jquery_default()('<caption class="timChart__legendCaption"></caption>');caption.html(emptyCaption);setLegendCaption(caption);var canvasNode=external_kbnSharedDeps_Jquery_default()(canvasElem);canvasNode.find("div.legend table").append(caption);setLegendValueNumbers(canvasNode.find(".ngLegendValueNumber"));var legend=external_kbnSharedDeps_Jquery_default()(canvasElem).find(".ngLegendValue");if(legend){legend.click(toggleSeries);legend.focus(focusSeries);legend.mouseover(highlightSeries)}if(focusedSeries||focusedSeries===0){canvasNode.find("div.legend table .legendLabel>span").get(focusedSeries).focus()}}}),[focusedSeries,canvasElem,toggleSeries,focusSeries,highlightSeries]);var updatePlot=Object(external_kbnSharedDeps_React_["useCallback"])((function(chartValue,grid){if(canvasElem&&canvasElem.clientWidth>0&&canvasElem.clientHeight>0){var options=buildOptions(interval,kibana.services.timefilter,kibana.services.uiSettings,chartElem===null||chartElem===void 0?void 0:chartElem.clientWidth,grid);var updatedSeries=buildSeriesData(chartValue,options);if(options.yaxes){options.yaxes.forEach((function(yaxis){if(yaxis&&yaxis.units){var formatters=Object(tick_formatters["a"])();yaxis.tickFormatter=formatters[yaxis.units.type];var byteModes=["bytes","bytes/s"];if(byteModes.includes(yaxis.units.type)){yaxis.tickGenerator=Object(tick_generator["a"])()}}}))}var newPlot=external_kbnSharedDeps_Jquery_default.a.plot(external_kbnSharedDeps_Jquery_default()(canvasElem),updatedSeries,options);setPlot(newPlot);renderComplete();updateCaption(newPlot.getData())}}),[canvasElem,chartElem===null||chartElem===void 0?void 0:chartElem.clientWidth,renderComplete,kibana.services,interval,updateCaption]);var dimensions=Object(external_kbnSharedDeps_ElasticEui_["useResizeObserver"])(chartElem);Object(external_kbnSharedDeps_React_["useEffect"])((function(){updatePlot(chart,seriesList.render&&seriesList.render.grid)}),[chart,updatePlot,seriesList.render,dimensions]);Object(external_kbnSharedDeps_React_["useEffect"])((function(){var colorsSet=[];var newChart=seriesList.list.map((function(series,seriesIndex){var newSeries=_objectSpread({},series);if(!newSeries.color){var colorIndex=seriesIndex%colors.length;newSeries.color=colors[colorIndex]}colorsSet.push([newSeries,newSeries.color]);return newSeries}));setChart(newChart);setOriginalColorMap(new Map(colorsSet))}),[seriesList.list]);var unhighlightSeries=Object(external_kbnSharedDeps_React_["useCallback"])((function(){if(highlightedSeries===null){return}setHighlightedSeries(null);setFocusedSeries(null);setChart((function(chartState){return chartState.map((function(series){series.color=originalColorMap.get(series);return series}))}))}),[originalColorMap,highlightedSeries]);var setLegendNumbers=Object(external_kbnSharedDeps_React_["useCallback"])((function(pos){unhighlightSeries();var axes=plot.getAxes();if(pos.x<axes.xaxis.min||pos.x>axes.xaxis.max){return}var dataset=plot.getData();if(legendCaption){legendCaption.text(external_kbnSharedDeps_MomentTimezone_default()(pos.x).format(Object(external_kbnSharedDeps_Lodash_["get"])(dataset,"[0]._global.legend.timeFormat",lib["a"])))}var _loop=function _loop(i){var series=dataset[i];var useNearestPoint=series.lines.show&&!series.lines.steps;var precision=Object(external_kbnSharedDeps_Lodash_["get"])(series,"_meta.precision",2);if(series._hide){return"continue"}var currentPoint=series.data.find((function(point,index){if(index+1===series.data.length){return true}if(useNearestPoint){return pos.x-point[0]<series.data[index+1][0]-pos.x}else{return pos.x<series.data[index+1][0]}}));var y=currentPoint[1];if(legendValueNumbers){if(y==null){legendValueNumbers.eq(i).empty()}else{var label=y.toFixed(precision);var formatter=series.yaxis.tickFormatter;if(formatter){label=formatter(Number(label),series.yaxis)}legendValueNumbers.eq(i).text("(".concat(label,")"))}}};for(var i=0;i<dataset.length;++i){var _ret=_loop(i);if(_ret==="continue")continue}}),[plot,legendValueNumbers,unhighlightSeries,legendCaption]);var debouncedSetLegendNumbers=Object(external_kbnSharedDeps_React_["useCallback"])(Object(external_kbnSharedDeps_Lodash_["debounce"])(setLegendNumbers,DEBOUNCE_DELAY,{maxWait:DEBOUNCE_DELAY,leading:true,trailing:false}),[setLegendNumbers]);var clearLegendNumbers=Object(external_kbnSharedDeps_React_["useCallback"])((function(){if(legendCaption){legendCaption.html(emptyCaption)}Object(external_kbnSharedDeps_Lodash_["each"])(legendValueNumbers,(function(num){external_kbnSharedDeps_Jquery_default()(num).empty()}))}),[legendCaption,legendValueNumbers]);var plotHover=Object(external_kbnSharedDeps_React_["useCallback"])((function(pos){plot.setCrosshair(pos);debouncedSetLegendNumbers(pos)}),[plot,debouncedSetLegendNumbers]);var plotHoverHandler=Object(external_kbnSharedDeps_React_["useCallback"])((function(event,pos){if(!plot){return}plotHover(pos);eventBus.trigger(ACTIVE_CURSOR,[event,pos])}),[plot,plotHover]);Object(external_kbnSharedDeps_React_["useEffect"])((function(){var updateCursor=function updateCursor(_,event,pos){if(!plot){return}plotHover(pos)};eventBus.on(ACTIVE_CURSOR,updateCursor);return function(){eventBus.off(ACTIVE_CURSOR,updateCursor)}}),[plot,plotHover]);var mouseLeaveHandler=Object(external_kbnSharedDeps_React_["useCallback"])((function(){if(!plot){return}plot.clearCrosshair();clearLegendNumbers()}),[plot,clearLegendNumbers]);var plotSelectedHandler=Object(external_kbnSharedDeps_React_["useCallback"])((function(event,ranges){fireEvent({name:"applyFilter",data:{timeFieldName:"*",filters:[{range:{"*":{gte:ranges.xaxis.from,lte:ranges.xaxis.to}}}]}})}),[fireEvent]);Object(external_kbnSharedDeps_React_["useEffect"])((function(){if(chartElem){external_kbnSharedDeps_Jquery_default()(chartElem).off("plotselected").on("plotselected",plotSelectedHandler)}}),[chartElem,plotSelectedHandler]);Object(external_kbnSharedDeps_React_["useEffect"])((function(){if(chartElem){external_kbnSharedDeps_Jquery_default()(chartElem).off("mouseleave").on("mouseleave",mouseLeaveHandler)}}),[chartElem,mouseLeaveHandler]);Object(external_kbnSharedDeps_React_["useEffect"])((function(){if(chartElem){external_kbnSharedDeps_Jquery_default()(chartElem).off("plothover").on("plothover",plotHoverHandler)}}),[chartElem,plotHoverHandler]);var title=Object(external_kbnSharedDeps_React_["useMemo"])((function(){return Object(external_kbnSharedDeps_Lodash_["last"])(Object(external_kbnSharedDeps_Lodash_["compact"])(Object(external_kbnSharedDeps_Lodash_["map"])(seriesList.list,"_title")))||""}),[seriesList.list]);return external_kbnSharedDeps_React_default.a.createElement("div",{ref:elementRef,className:"timChart"},external_kbnSharedDeps_React_default.a.createElement("div",{className:"chart-top-title"},title),external_kbnSharedDeps_React_default.a.createElement("div",{ref:canvasRef,className:"chart-canvas"}))}}}]);