"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  SavedObjectsRepository: true,
  ScopedSavedObjectsClientProvider: true,
  SavedObjectsClientProviderOptions: true,
  SavedObjectsClientWrapperFactory: true,
  SavedObjectsClientWrapperOptions: true,
  SavedObjectsErrorHelpers: true
};
Object.defineProperty(exports, "SavedObjectsRepository", {
  enumerable: true,
  get: function () {
    return _lib.SavedObjectsRepository;
  }
});
Object.defineProperty(exports, "ScopedSavedObjectsClientProvider", {
  enumerable: true,
  get: function () {
    return _lib.ScopedSavedObjectsClientProvider;
  }
});
Object.defineProperty(exports, "SavedObjectsClientProviderOptions", {
  enumerable: true,
  get: function () {
    return _lib.SavedObjectsClientProviderOptions;
  }
});
Object.defineProperty(exports, "SavedObjectsClientWrapperFactory", {
  enumerable: true,
  get: function () {
    return _lib.SavedObjectsClientWrapperFactory;
  }
});
Object.defineProperty(exports, "SavedObjectsClientWrapperOptions", {
  enumerable: true,
  get: function () {
    return _lib.SavedObjectsClientWrapperOptions;
  }
});
Object.defineProperty(exports, "SavedObjectsErrorHelpers", {
  enumerable: true,
  get: function () {
    return _lib.SavedObjectsErrorHelpers;
  }
});

var _lib = require("./lib");

var _saved_objects_client = require("./saved_objects_client");

Object.keys(_saved_objects_client).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _saved_objects_client[key];
    }
  });
});