"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hello_world_embeddable = require("./hello_world_embeddable");

Object.keys(_hello_world_embeddable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hello_world_embeddable[key];
    }
  });
});

var _hello_world_embeddable_factory = require("./hello_world_embeddable_factory");

Object.keys(_hello_world_embeddable_factory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hello_world_embeddable_factory[key];
    }
  });
});