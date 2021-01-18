"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SavedObjectRegistryProvider", {
  enumerable: true,
  get: function get() {
    return _saved_object_registry.SavedObjectRegistryProvider;
  }
});
Object.defineProperty(exports, "SavedObjectsClientProvider", {
  enumerable: true,
  get: function get() {
    return _saved_objects_client_provider.SavedObjectsClientProvider;
  }
});
Object.defineProperty(exports, "SavedObjectLoader", {
  enumerable: true,
  get: function get() {
    return _saved_object_loader.SavedObjectLoader;
  }
});
Object.defineProperty(exports, "findObjectByTitle", {
  enumerable: true,
  get: function get() {
    return _find_object_by_title.findObjectByTitle;
  }
});

var _saved_object_registry = require("./saved_object_registry");

var _saved_objects_client_provider = require("./saved_objects_client_provider");

var _saved_object_loader = require("./saved_object_loader");

var _find_object_by_title = require("./find_object_by_title");