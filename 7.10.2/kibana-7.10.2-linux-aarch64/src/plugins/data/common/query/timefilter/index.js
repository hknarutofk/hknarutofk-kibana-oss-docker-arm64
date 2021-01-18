"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get_time = require("./get_time");

Object.keys(_get_time).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _get_time[key];
    }
  });
});

var _is_time_range = require("./is_time_range");

Object.keys(_is_time_range).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _is_time_range[key];
    }
  });
});