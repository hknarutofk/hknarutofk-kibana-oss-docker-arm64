"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = require("../../../../plugins/data/common");

Object.keys(_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _common[key];
    }
  });
});