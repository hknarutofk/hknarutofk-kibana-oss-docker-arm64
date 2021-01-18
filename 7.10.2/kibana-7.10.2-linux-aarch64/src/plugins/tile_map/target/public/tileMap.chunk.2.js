(window["tileMap_bundle_jsonpfunction"]=window["tileMap_bundle_jsonpfunction"]||[]).push([[2],{17:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"GeohashLayer",(function(){return geohash_layer_GeohashLayer}));var external_kbnSharedDeps_Lodash_=__webpack_require__(3);var external_kbnSharedDeps_Lodash_default=__webpack_require__.n(external_kbnSharedDeps_Lodash_);var external_kbnSharedDeps_KbnI18n_=__webpack_require__(0);var public_=__webpack_require__(1);var d3=__webpack_require__(15);var d3_default=__webpack_require__.n(d3);var events=__webpack_require__(16);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var heatmap_HeatmapMarkers=function(_EventEmitter){_inherits(HeatmapMarkers,_EventEmitter);var _super=_createSuper(HeatmapMarkers);function HeatmapMarkers(featureCollection,options,zoom,max,leaflet){var _this;_classCallCheck(this,HeatmapMarkers);_this=_super.call(this);_this._geojsonFeatureCollection=featureCollection;var points=dataToHeatArray(featureCollection,max);_this._leafletLayer=new leaflet.HeatLayer(points,options);_this._tooltipFormatter=options.tooltipFormatter;_this._zoom=zoom;_this._disableTooltips=false;_this._getLatLng=external_kbnSharedDeps_Lodash_default.a.memoize((function(feature){return leaflet.latLng(feature.geometry.coordinates[1],feature.geometry.coordinates[0])}),(function(feature){return[feature.geometry.coordinates[1],feature.geometry.coordinates[0]].join(",")}));_this._addTooltips();return _this}_createClass(HeatmapMarkers,[{key:"getBounds",value:function getBounds(){return this._leafletLayer.getBounds()}},{key:"getLeafletLayer",value:function getLeafletLayer(){return this._leafletLayer}},{key:"appendLegendContents",value:function appendLegendContents(){}},{key:"movePointer",value:function movePointer(type,event){if(type==="mousemove"){this._debounceMoveMoveLocation(event)}else if(type==="mouseout"){this.emit("hideTooltip")}else if(type==="mousedown"){this._disableTooltips=true;this.emit("hideTooltip")}else if(type==="mouseup"){this._disableTooltips=false}}},{key:"_addTooltips",value:function _addTooltips(){var _this2=this;var mouseMoveLocation=function mouseMoveLocation(e){if(!_this2._geojsonFeatureCollection.features.length||_this2._disableTooltips){_this2.emit("hideTooltip");return}var feature=_this2._nearestFeature(e.latlng);if(_this2._tooltipProximity(e.latlng,feature)){var content=_this2._tooltipFormatter(feature);if(!content){return}_this2.emit("showTooltip",{content:content,position:e.latlng})}else{_this2.emit("hideTooltip")}};this._debounceMoveMoveLocation=external_kbnSharedDeps_Lodash_default.a.debounce(mouseMoveLocation.bind(this),15,{leading:true,trailing:false})}},{key:"_nearestFeature",value:function _nearestFeature(latLng){var self=this;var nearest;if(latLng.lng<-180||latLng.lng>180){return}external_kbnSharedDeps_Lodash_default.a.reduce(this._geojsonFeatureCollection.features,(function(distance,feature){var featureLatLng=self._getLatLng(feature);var dist=latLng.distanceTo(featureLatLng);if(dist<distance){nearest=feature;return dist}return distance}),Infinity);return nearest}},{key:"_tooltipProximity",value:function _tooltipProximity(latlng,feature){if(!feature)return;var showTip=false;var featureLatLng=this._getLatLng(feature);var zoomScale=d3_default.a.scale.linear().domain([1,4,7,10,13,16,18]).range([1e6,3e5,1e5,15e3,2e3,150,50]);var proximity=zoomScale(this._zoom);var distance=latlng.distanceTo(featureLatLng);var maxLngDif=40;var lngDif=Math.abs(latlng.lng-featureLatLng.lng);if(distance<proximity&&lngDif<maxLngDif){showTip=true}d3_default.a.scale.pow().exponent(.2).domain([1,18]).range([15e5,50]);return showTip}}]);return HeatmapMarkers}(events["EventEmitter"]);function dataToHeatArray(featureCollection,max){return featureCollection.features.map((function(feature){var lat=feature.geometry.coordinates[1];var lng=feature.geometry.coordinates[0];var heatIntensity=feature.properties.value/max;return[lat,lng,heatIntensity]}))}var external_kbnSharedDeps_Jquery_=__webpack_require__(14);var external_kbnSharedDeps_Jquery_default=__webpack_require__.n(external_kbnSharedDeps_Jquery_);var charts_public_=__webpack_require__(4);function scaled_circles_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function scaled_circles_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function scaled_circles_createClass(Constructor,protoProps,staticProps){if(protoProps)scaled_circles_defineProperties(Constructor.prototype,protoProps);if(staticProps)scaled_circles_defineProperties(Constructor,staticProps);return Constructor}function scaled_circles_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)scaled_circles_setPrototypeOf(subClass,superClass)}function scaled_circles_setPrototypeOf(o,p){scaled_circles_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return scaled_circles_setPrototypeOf(o,p)}function scaled_circles_createSuper(Derived){var hasNativeReflectConstruct=scaled_circles_isNativeReflectConstruct();return function _createSuperInternal(){var Super=scaled_circles_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=scaled_circles_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return scaled_circles_possibleConstructorReturn(this,result)}}function scaled_circles_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call}return scaled_circles_assertThisInitialized(self)}function scaled_circles_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function scaled_circles_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function scaled_circles_getPrototypeOf(o){scaled_circles_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return scaled_circles_getPrototypeOf(o)}var scaled_circles_ScaledCirclesMarkers=function(_EventEmitter){scaled_circles_inherits(ScaledCirclesMarkers,_EventEmitter);var _super=scaled_circles_createSuper(ScaledCirclesMarkers);function ScaledCirclesMarkers(featureCollection,featureCollectionMetaData,options,targetZoom,kibanaMap,leaflet){var _this;scaled_circles_classCallCheck(this,ScaledCirclesMarkers);_this=_super.call(this);_this._featureCollection=featureCollection;_this._featureCollectionMetaData=featureCollectionMetaData;_this._zoom=targetZoom;_this._valueFormatter=options.valueFormatter||function(x){x};_this._tooltipFormatter=options.tooltipFormatter||function(x){x};_this._label=options.label;_this._colorRamp=options.colorRamp;_this._legendColors=null;_this._legendQuantizer=null;_this._leaflet=leaflet;_this._popups=[];var layerOptions={pointToLayer:_this.getMarkerFunction(),style:_this.getStyleFunction(),onEachFeature:function onEachFeature(feature,layer){_this._bindPopup(feature,layer)}};if(!options.isFilteredByCollar){layerOptions.filter=function(feature){var bucketRectBounds=feature.properties.geohash_meta.rectangle;return kibanaMap.isInside(bucketRectBounds)}}_this._leafletLayer=_this._leaflet.geoJson(null,layerOptions);_this._leafletLayer.addData(_this._featureCollection);return _this}scaled_circles_createClass(ScaledCirclesMarkers,[{key:"getLeafletLayer",value:function getLeafletLayer(){return this._leafletLayer}},{key:"getStyleFunction",value:function getStyleFunction(){var min=external_kbnSharedDeps_Lodash_default.a.get(this._featureCollectionMetaData,"min",0);var max=external_kbnSharedDeps_Lodash_default.a.get(this._featureCollectionMetaData,"max",1);var quantizeDomain=min!==max?[min,max]:d3_default.a.scale.quantize().domain();this._legendColors=this.getLegendColors();this._legendQuantizer=d3_default.a.scale.quantize().domain(quantizeDomain).range(this._legendColors);return makeStyleFunction(this._legendColors,quantizeDomain)}},{key:"movePointer",value:function movePointer(){}},{key:"getLabel",value:function getLabel(){if(this._popups.length){return this._label}return""}},{key:"appendLegendContents",value:function appendLegendContents(jqueryDiv){var _this2=this;if(!this._legendColors||!this._legendQuantizer){return}var titleText=this.getLabel();var $title=external_kbnSharedDeps_Jquery_default()("<div>").addClass("visMapLegend__title").text(titleText);jqueryDiv.append($title);this._legendColors.forEach((function(color){var labelText=_this2._legendQuantizer.invertExtent(color).map(_this2._valueFormatter).join(" – ");var label=external_kbnSharedDeps_Jquery_default()("<div>");var icon=external_kbnSharedDeps_Jquery_default()("<i>").css({background:color,"border-color":makeColorDarker(color)});var text=external_kbnSharedDeps_Jquery_default()("<span>").text(labelText);label.append(icon);label.append(text);jqueryDiv.append(label)}))}},{key:"_bindPopup",value:function _bindPopup(feature,layer){var _this3=this;var popup=layer.on({mouseover:function mouseover(e){var layer=e.target;if(!_this3._leaflet.Browser.ie&&!_this3._leaflet.Browser.opera){layer.bringToFront()}_this3._showTooltip(feature)},mouseout:function mouseout(){_this3.emit("hideTooltip")}});this._popups.push(popup)}},{key:"_showTooltip",value:function _showTooltip(feature){var content=this._tooltipFormatter(feature);if(!content){return}var latLng=this._leaflet.latLng(feature.geometry.coordinates[1],feature.geometry.coordinates[0]);this.emit("showTooltip",{content:content,position:latLng})}},{key:"getMarkerFunction",value:function getMarkerFunction(){var _this4=this;var scaleFactor=.6;return function(feature,latlng){var value=feature.properties.value;var scaledRadius=_this4._radiusScale(value)*scaleFactor;return _this4._leaflet.circleMarker(latlng).setRadius(scaledRadius)}}},{key:"_radiusScale",value:function _radiusScale(value){var precisionBiasBase=5;var precisionBiasNumerator=200;var precision=external_kbnSharedDeps_Lodash_default.a.max(this._featureCollection.features.map((function(feature){return String(feature.properties.geohash).length})));var pct=Math.abs(value)/Math.abs(this._featureCollectionMetaData.max);var zoomRadius=.5*Math.pow(2,this._zoom);var precisionScale=precisionBiasNumerator/Math.pow(precisionBiasBase,precision);return Math.pow(pct,.5)*zoomRadius*precisionScale}},{key:"getBounds",value:function getBounds(){return this._leafletLayer.getBounds()}},{key:"getLegendColors",value:function getLegendColors(){var colorRamp=external_kbnSharedDeps_Lodash_default.a.get(charts_public_["truncatedColorMaps"][this._colorRamp],"value");return public_["colorUtil"].getLegendColors(colorRamp)}}]);return ScaledCirclesMarkers}(events["EventEmitter"]);function makeColorDarker(color){var amount=1.3;return d3_default.a.hcl(color).darker(amount).toString()}function makeStyleFunction(legendColors,quantizeDomain){var legendQuantizer=d3_default.a.scale.quantize().domain(quantizeDomain).range(legendColors);return function(feature){var value=external_kbnSharedDeps_Lodash_default.a.get(feature,"properties.value");var color=legendQuantizer(value);return{fillColor:color,color:makeColorDarker(color),weight:1.5,opacity:1,fillOpacity:.75}}}function shaded_circles_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function shaded_circles_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function shaded_circles_createClass(Constructor,protoProps,staticProps){if(protoProps)shaded_circles_defineProperties(Constructor.prototype,protoProps);if(staticProps)shaded_circles_defineProperties(Constructor,staticProps);return Constructor}function shaded_circles_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)shaded_circles_setPrototypeOf(subClass,superClass)}function shaded_circles_setPrototypeOf(o,p){shaded_circles_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return shaded_circles_setPrototypeOf(o,p)}function shaded_circles_createSuper(Derived){var hasNativeReflectConstruct=shaded_circles_isNativeReflectConstruct();return function _createSuperInternal(){var Super=shaded_circles_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=shaded_circles_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return shaded_circles_possibleConstructorReturn(this,result)}}function shaded_circles_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call}return shaded_circles_assertThisInitialized(self)}function shaded_circles_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function shaded_circles_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function shaded_circles_getPrototypeOf(o){shaded_circles_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return shaded_circles_getPrototypeOf(o)}var shaded_circles_ShadedCirclesMarkers=function(_ScaledCirclesMarkers){shaded_circles_inherits(ShadedCirclesMarkers,_ScaledCirclesMarkers);var _super=shaded_circles_createSuper(ShadedCirclesMarkers);function ShadedCirclesMarkers(){shaded_circles_classCallCheck(this,ShadedCirclesMarkers);return _super.apply(this,arguments)}shaded_circles_createClass(ShadedCirclesMarkers,[{key:"getMarkerFunction",value:function getMarkerFunction(){var _this=this;var scaleFactor=.8;return function(feature,latlng){var radius=_this._geohashMinDistance(feature)*scaleFactor;return _this._leaflet.circle(latlng,radius)}}},{key:"_geohashMinDistance",value:function _geohashMinDistance(feature){var centerPoint=feature.properties.geohash_meta.center;var geohashRect=feature.properties.geohash_meta.rectangle;var east=this._leaflet.latLng([centerPoint[0],geohashRect[2][1]]);var north=this._leaflet.latLng([geohashRect[3][0],centerPoint[1]]);var center=this._leaflet.latLng([centerPoint[0],centerPoint[1]]);var eastRadius=Math.floor(center.distanceTo(east));var northRadius=Math.floor(center.distanceTo(north));return external_kbnSharedDeps_Lodash_default.a.min([eastRadius,northRadius])}}]);return ShadedCirclesMarkers}(scaled_circles_ScaledCirclesMarkers);function geohash_grid_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function geohash_grid_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function geohash_grid_createClass(Constructor,protoProps,staticProps){if(protoProps)geohash_grid_defineProperties(Constructor.prototype,protoProps);if(staticProps)geohash_grid_defineProperties(Constructor,staticProps);return Constructor}function geohash_grid_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)geohash_grid_setPrototypeOf(subClass,superClass)}function geohash_grid_setPrototypeOf(o,p){geohash_grid_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return geohash_grid_setPrototypeOf(o,p)}function geohash_grid_createSuper(Derived){var hasNativeReflectConstruct=geohash_grid_isNativeReflectConstruct();return function _createSuperInternal(){var Super=geohash_grid_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=geohash_grid_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return geohash_grid_possibleConstructorReturn(this,result)}}function geohash_grid_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call}return geohash_grid_assertThisInitialized(self)}function geohash_grid_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function geohash_grid_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function geohash_grid_getPrototypeOf(o){geohash_grid_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return geohash_grid_getPrototypeOf(o)}var GeohashGridMarkers=function(_ScaledCirclesMarkers){geohash_grid_inherits(GeohashGridMarkers,_ScaledCirclesMarkers);var _super=geohash_grid_createSuper(GeohashGridMarkers);function GeohashGridMarkers(){geohash_grid_classCallCheck(this,GeohashGridMarkers);return _super.apply(this,arguments)}geohash_grid_createClass(GeohashGridMarkers,[{key:"getMarkerFunction",value:function getMarkerFunction(){var _this=this;return function(feature){var geohashRect=feature.properties.geohash_meta.rectangle;var corners=[[geohashRect[3][0],geohashRect[3][1]],[geohashRect[1][0],geohashRect[1][1]]];return _this._leaflet.rectangle(corners)}}}]);return GeohashGridMarkers}(scaled_circles_ScaledCirclesMarkers);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)}))}}function geohash_layer_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function geohash_layer_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function geohash_layer_createClass(Constructor,protoProps,staticProps){if(protoProps)geohash_layer_defineProperties(Constructor.prototype,protoProps);if(staticProps)geohash_layer_defineProperties(Constructor,staticProps);return Constructor}function geohash_layer_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)geohash_layer_setPrototypeOf(subClass,superClass)}function geohash_layer_setPrototypeOf(o,p){geohash_layer_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return geohash_layer_setPrototypeOf(o,p)}function geohash_layer_createSuper(Derived){var hasNativeReflectConstruct=geohash_layer_isNativeReflectConstruct();return function _createSuperInternal(){var Super=geohash_layer_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=geohash_layer_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return geohash_layer_possibleConstructorReturn(this,result)}}function geohash_layer_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call}return geohash_layer_assertThisInitialized(self)}function geohash_layer_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function geohash_layer_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function geohash_layer_getPrototypeOf(o){geohash_layer_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return geohash_layer_getPrototypeOf(o)}var geohash_layer_GeohashLayer=function(_KibanaMapLayer){geohash_layer_inherits(GeohashLayer,_KibanaMapLayer);var _super=geohash_layer_createSuper(GeohashLayer);function GeohashLayer(featureCollection,featureCollectionMetaData,options,zoom,kibanaMap,leaflet){var _this;geohash_layer_classCallCheck(this,GeohashLayer);_this=_super.call(this);_this._featureCollection=featureCollection;_this._featureCollectionMetaData=featureCollectionMetaData;_this._geohashOptions=options;_this._zoom=zoom;_this._kibanaMap=kibanaMap;_this._leaflet=leaflet;var geojson=_this._leaflet.geoJson(_this._featureCollection);_this._bounds=geojson.getBounds();_this._createGeohashMarkers();_this._lastBounds=null;return _this}geohash_layer_createClass(GeohashLayer,[{key:"_createGeohashMarkers",value:function _createGeohashMarkers(){var _this2=this;var markerOptions={isFilteredByCollar:this._geohashOptions.isFilteredByCollar,valueFormatter:this._geohashOptions.valueFormatter,tooltipFormatter:this._geohashOptions.tooltipFormatter,label:this._geohashOptions.label,colorRamp:this._geohashOptions.colorRamp};switch(this._geohashOptions.mapType){case public_["MapTypes"].ScaledCircleMarkers:this._geohashMarkers=new scaled_circles_ScaledCirclesMarkers(this._featureCollection,this._featureCollectionMetaData,markerOptions,this._zoom,this._kibanaMap,this._leaflet);break;case public_["MapTypes"].ShadedCircleMarkers:this._geohashMarkers=new shaded_circles_ShadedCirclesMarkers(this._featureCollection,this._featureCollectionMetaData,markerOptions,this._zoom,this._kibanaMap,this._leaflet);break;case public_["MapTypes"].ShadedGeohashGrid:this._geohashMarkers=new GeohashGridMarkers(this._featureCollection,this._featureCollectionMetaData,markerOptions,this._zoom,this._kibanaMap,this._leaflet);break;case public_["MapTypes"].Heatmap:var radius=15;if(this._featureCollectionMetaData.geohashGridDimensionsAtEquator){var minGridLength=Object(external_kbnSharedDeps_Lodash_["min"])(this._featureCollectionMetaData.geohashGridDimensionsAtEquator);var metersPerPixel=this._kibanaMap.getMetersPerPixel();radius=minGridLength/metersPerPixel/2}radius=radius*parseFloat(this._geohashOptions.heatmap.heatClusterSize);this._geohashMarkers=new heatmap_HeatmapMarkers(this._featureCollection,{radius:radius,blur:radius,maxZoom:this._kibanaMap.getZoomLevel(),minOpacity:.1,tooltipFormatter:this._geohashOptions.tooltipFormatter},this._zoom,this._featureCollectionMetaData.max,this._leaflet);break;default:throw new Error(external_kbnSharedDeps_KbnI18n_["i18n"].translate("tileMap.geohashLayer.mapTitle",{defaultMessage:"{mapType} mapType not recognized",values:{mapType:this._geohashOptions.mapType}}))}this._geohashMarkers.on("showTooltip",(function(event){return _this2.emit("showTooltip",event)}));this._geohashMarkers.on("hideTooltip",(function(event){return _this2.emit("hideTooltip",event)}));this._leafletLayer=this._geohashMarkers.getLeafletLayer()}},{key:"appendLegendContents",value:function appendLegendContents(jqueryDiv){return this._geohashMarkers.appendLegendContents(jqueryDiv)}},{key:"movePointer",value:function movePointer(){var _this$_geohashMarkers;(_this$_geohashMarkers=this._geohashMarkers).movePointer.apply(_this$_geohashMarkers,arguments)}},{key:"getBounds",value:function(){var _getBounds=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var geoHashBounds,northEast,southWest;return regeneratorRuntime.wrap((function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!this._geohashOptions.fetchBounds){_context.next=8;break}_context.next=3;return this._geohashOptions.fetchBounds();case 3:geoHashBounds=_context.sent;if(!geoHashBounds){_context.next=8;break}northEast=this._leaflet.latLng(geoHashBounds.top_left.lat,geoHashBounds.bottom_right.lon);southWest=this._leaflet.latLng(geoHashBounds.bottom_right.lat,geoHashBounds.top_left.lon);return _context.abrupt("return",this._leaflet.latLngBounds(southWest,northEast));case 8:return _context.abrupt("return",this._bounds);case 9:case"end":return _context.stop()}}}),_callee,this)})));function getBounds(){return _getBounds.apply(this,arguments)}return getBounds}()},{key:"updateExtent",value:function updateExtent(){if(!this._geohashOptions.isFilteredByCollar){var bounds=this._kibanaMap.getLeafletBounds();if(!this._lastBounds||!this._lastBounds.equals(bounds)){this._kibanaMap.removeLayer(this);this._createGeohashMarkers();this._kibanaMap.addLayer(this)}this._lastBounds=bounds}}},{key:"isReusable",value:function isReusable(options){if(Object(external_kbnSharedDeps_Lodash_["isEqual"])(this._geohashOptions,options)){return true}if(this._geohashOptions.colorRamp!==options.colorRamp){return false}else if(this._geohashOptions.mapType!==options.mapType){return false}else if(this._geohashOptions.mapType==="Heatmap"&&!Object(external_kbnSharedDeps_Lodash_["isEqual"])(this._geohashOptions.heatmap,options)){return false}else{return true}}}]);return GeohashLayer}(public_["KibanaMapLayer"])}}]);