(window["discover_bundle_jsonpfunction"]=window["discover_bundle_jsonpfunction"]||[]).push([[9],{146:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"renderApp",(function(){return renderApp}));var _index_scss__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(54);var _index_scss__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);var angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9);var angular__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);var _kibana_services__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)}))}}function renderApp(_x,_x2){return _renderApp.apply(this,arguments)}function _renderApp(){_renderApp=_asyncToGenerator(regeneratorRuntime.mark((function _callee(moduleName,element){var $injector;return regeneratorRuntime.wrap((function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:Object(_kibana_services__WEBPACK_IMPORTED_MODULE_2__["h"])().kibanaLegacy.loadFontAwesome();_context.next=3;return Promise.all([__webpack_require__.e(3),__webpack_require__.e(8),__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(7)]).then(__webpack_require__.bind(null,145));case 3:$injector=mountDiscoverApp(moduleName,element);return _context.abrupt("return",(function(){return $injector.get("$rootScope").$destroy()}));case 5:case"end":return _context.stop()}}}),_callee)})));return _renderApp.apply(this,arguments)}function mountDiscoverApp(moduleName,element){var mountpoint=document.createElement("div");var appWrapper=document.createElement("div");appWrapper.setAttribute("ng-view","");mountpoint.appendChild(appWrapper);var $injector=angular__WEBPACK_IMPORTED_MODULE_1___default.a.bootstrap(mountpoint,[moduleName]);element.appendChild(mountpoint);return $injector}}}]);