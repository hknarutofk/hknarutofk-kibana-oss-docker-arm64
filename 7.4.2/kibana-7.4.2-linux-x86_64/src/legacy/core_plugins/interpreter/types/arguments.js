"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arguments = require("../../../../plugins/data/common/expressions/types/arguments");

Object.keys(_arguments).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _arguments[key];
    }
  });
});