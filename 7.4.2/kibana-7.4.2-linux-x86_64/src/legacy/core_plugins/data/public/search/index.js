"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  SearchService: true,
  SearchSetup: true
};
Object.defineProperty(exports, "SearchService", {
  enumerable: true,
  get: function get() {
    return _search_service.SearchService;
  }
});
Object.defineProperty(exports, "SearchSetup", {
  enumerable: true,
  get: function get() {
    return _search_service.SearchSetup;
  }
});

var _search_service = require("./search_service");

var _search_bar = require("./search_bar");

Object.keys(_search_bar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _search_bar[key];
    }
  });
});