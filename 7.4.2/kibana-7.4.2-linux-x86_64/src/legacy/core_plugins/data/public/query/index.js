"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _query_service = require("./query_service");

Object.keys(_query_service).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _query_service[key];
    }
  });
});