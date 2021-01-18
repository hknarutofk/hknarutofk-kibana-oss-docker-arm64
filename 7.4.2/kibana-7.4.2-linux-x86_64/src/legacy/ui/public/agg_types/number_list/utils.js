"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.getRange = getRange;
exports.validateValue = validateValue;
exports.validateOrder = validateOrder;
exports.getNextModel = getNextModel;
exports.getInitModelList = getInitModelList;
exports.getUpdatedModels = getUpdatedModels;
exports.hasInvalidValues = hasInvalidValues;
exports.EMPTY_STRING = void 0;

var _lodash = require("lodash");

var _i18n = require("@kbn/i18n");

var _eui = require("@elastic/eui");

var _range = require("../../utils/range");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EMPTY_STRING = '';
exports.EMPTY_STRING = EMPTY_STRING;
var defaultRange = (0, _range.parseRange)('[0,Infinity)');
var generateId = (0, _eui.htmlIdGenerator)();

function parse(value) {
  var parsedValue = parseFloat(value);
  return isNaN(parsedValue) ? EMPTY_STRING : parsedValue;
}

function getRange(range) {
  try {
    return range ? (0, _range.parseRange)(range) : defaultRange;
  } catch (e) {
    throw new TypeError('Unable to parse range: ' + e.message);
  }
}

function validateValue(value, numberRange) {
  var result = {
    isValid: true,
    errors: []
  };

  if (value === EMPTY_STRING) {
    result.isValid = false;
  } else if (!numberRange.within(value)) {
    result.isValid = false;
    result.errors.push(_i18n.i18n.translate('common.ui.aggTypes.numberList.invalidRangeErrorMessage', {
      defaultMessage: 'The value should be in the range of {min} to {max}.',
      values: {
        min: numberRange.min,
        max: numberRange.max
      }
    }));
  }

  return result;
}

function validateOrder(list) {
  var isInvalidOrder = false;
  list.forEach(function (model, index, array) {
    var previousModel = array[index - 1];

    if (previousModel && model.value !== EMPTY_STRING) {
      var isInvalidOrderOfItem = model.value <= previousModel.value;

      if (!model.isInvalid && isInvalidOrderOfItem) {
        model.isInvalid = true;
      }

      if (isInvalidOrderOfItem) {
        isInvalidOrder = true;
      }
    }
  });
  return isInvalidOrder;
}

function getNextModel(list, range) {
  var lastValue = (0, _lodash.last)(list).value;
  var next = Number(lastValue) ? Number(lastValue) + 1 : 1;

  if (next >= range.max) {
    next = range.max - 1;
  }

  return {
    id: generateId(),
    value: next,
    isInvalid: false
  };
}

function getInitModelList(list) {
  return list.length ? list.map(function (num) {
    return {
      value: num === undefined ? EMPTY_STRING : num,
      id: generateId(),
      isInvalid: false
    };
  }) : [{
    value: 0,
    id: generateId(),
    isInvalid: false
  }];
}

function getUpdatedModels(numberList, modelList, numberRange) {
  if (!numberList.length) {
    return modelList;
  }

  return numberList.map(function (number, index) {
    var model = modelList[index] || {
      id: generateId()
    };
    var newValue = number === undefined ? EMPTY_STRING : number;

    var _validateValue = validateValue(newValue, numberRange),
        isValid = _validateValue.isValid,
        errors = _validateValue.errors;

    return _objectSpread({}, model, {
      value: newValue,
      isInvalid: !isValid,
      errors: errors
    });
  });
}

function hasInvalidValues(modelList) {
  return !!modelList.find(function (_ref) {
    var isInvalid = _ref.isInvalid;
    return isInvalid;
  });
}