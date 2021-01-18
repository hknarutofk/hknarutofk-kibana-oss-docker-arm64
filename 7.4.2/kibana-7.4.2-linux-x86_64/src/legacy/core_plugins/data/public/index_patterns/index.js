"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index_patterns_service = require("./index_patterns_service");

Object.keys(_index_patterns_service).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index_patterns_service[key];
    }
  });
});