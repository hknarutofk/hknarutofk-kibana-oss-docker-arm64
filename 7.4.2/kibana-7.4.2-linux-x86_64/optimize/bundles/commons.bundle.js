}},{key:"getMarkdownAttribution",value:function getMarkdownAttribution(){var _this4=this;var attributions=this._config.attribution.map(function(attribution){var url=_this4._emsClient.getValueInLanguage(attribution.url);var label=_this4._emsClient.getValueInLanguage(attribution.label);return"[".concat(label,"](").concat(url,")")});return attributions.join("|")}},{key:"getMinZoom",value:function(){var _getMinZoom=_asyncToGenerator(regeneratorRuntime.mark(function _callee13(){var tileJson;return regeneratorRuntime.wrap(function _callee13$(_context13){while(1){switch(_context13.prev=_context13.next){case 0:_context13.next=2;return this._getRasterStyleJson();case 2:tileJson=_context13.sent;return _context13.abrupt("return",tileJson.minzoom);case 4:case"end":return _context13.stop()}}},_callee13,this)}));function getMinZoom(){return _getMinZoom.apply(this,arguments)}return getMinZoom}()},{key:"getMaxZoom",value:function(){var _getMaxZoom=_asyncToGenerator(regeneratorRuntime.mark(function _callee14(){var tileJson;return regeneratorRuntime.wrap(function _callee14$(_context14){while(1){switch(_context14.prev=_context14.next){case 0:_context14.next=2;return this._getRasterStyleJson();case 2:tileJson=_context14.sent;return _context14.abrupt("return",tileJson.maxzoom);case 4:case"end":return _context14.stop()}}},_callee14,this)}));function getMaxZoom(){return _getMaxZoom.apply(this,arguments)}return getMaxZoom}()},{key:"getId",value:function getId(){return this._config.id}},{key:"hasId",value:function hasId(id){return this._config.id===id}},{key:"getOrigin",value:function getOrigin(){return _origin.ORIGIN.EMS}}]);return TMSService}();exports.TMSService=TMSService},function(module,exports,__webpack_require__){"use strict";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}Object.defineProperty(exports,"__esModule",{value:true});exports.FileLayer=void 0;var _origin=__webpack_require__(87);var _url=_interopRequireDefault(__webpack_require__(38));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var FileLayer=function(){function FileLayer(config,emsClient,proxyPath){_classCallCheck(this,FileLayer);this._config=config;this._emsClient=emsClient;this._proxyPath=proxyPath}_createClass(FileLayer,[{key:"getAttributions",value:function getAttributions(){var _this=this;return this._config.attribution.map(function(attribution){var url=_this._emsClient.getValueInLanguage(attribution.url);var label=_this._emsClient.getValueInLanguage(attribution.label);return{url:url,label:label}})}},{key:"getHTMLAttribution",value:function getHTMLAttribution(){var _this2=this;var attributions=this._config.attribution.map(function(attribution){var url=_this2._emsClient.getValueInLanguage(attribution.url);var label=_this2._emsClient.getValueInLanguage(attribution.label);var html=url?"<a href=".concat(url,">").concat(label,"</a>"):label;return _this2._emsClient.sanitizeHtml(html)});return attributions.join(" | ");//!!!this is the current convention used in Kibana