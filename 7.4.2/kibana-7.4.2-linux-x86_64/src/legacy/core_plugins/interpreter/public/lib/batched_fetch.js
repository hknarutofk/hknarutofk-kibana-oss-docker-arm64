"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.batchedFetch = batchedFetch;

var _lodash = _interopRequireDefault(require("lodash"));

var _consts = require("./consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Create a function which executes an Expression function on the
 * server as part of a larger batch of executions.
 */
function batchedFetch(_ref) {
  var ajaxStream = _ref.ajaxStream,
      serialize = _ref.serialize,
      _ref$ms = _ref.ms,
      ms = _ref$ms === void 0 ? 10 : _ref$ms;
  // Uniquely identifies each function call in a batch operation
  // so that the appropriate promise can be resolved / rejected later.
  var id = 0; // A map like { id: { future, request } }, which is used to
  // track all of the function calls in a batch operation.

  var batch = {};
  var timeout;

  var nextId = function nextId() {
    return ++id;
  };

  var reset = function reset() {
    id = 0;
    batch = {};
    timeout = undefined;
  };

  var runBatch = function runBatch() {
    processBatch(ajaxStream, batch);
    reset();
  };

  return function (_ref2) {
    var functionName = _ref2.functionName,
        context = _ref2.context,
        args = _ref2.args;

    if (!timeout) {
      timeout = setTimeout(runBatch, ms);
    }

    var request = {
      functionName: functionName,
      args: args,
      context: serialize(context)
    }; // Check to see if this is a duplicate server function.

    var duplicate = Object.values(batch).find(function (batchedRequest) {
      return _lodash.default.isMatch(batchedRequest.request, request);
    }); // If it is, just return the promise of the duplicated request.

    if (duplicate) {
      return duplicate.future.promise;
    } // If not, create a new promise, id, and add it to the batched collection.


    var future = createFuture();
    var newId = nextId();
    request.id = newId;
    batch[newId] = {
      future: future,
      request: request
    };
    return future.promise;
  };
}
/**
 * An externally resolvable / rejectable promise, used to make sure
 * individual batch responses go to the correct caller.
 */


function createFuture() {
  var resolve;
  var reject;
  var promise = new Promise(function (res, rej) {
    resolve = res;
    reject = rej;
  });
  return {
    resolve: resolve,
    reject: reject,
    promise: promise
  };
}
/**
 * Runs the specified batch of functions on the server, then resolves
 * the related promises.
 */


function processBatch(_x, _x2) {
  return _processBatch.apply(this, arguments);
}

function _processBatch() {
  _processBatch = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(ajaxStream, batch) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return ajaxStream({
              url: _consts.FUNCTIONS_URL,
              body: JSON.stringify({
                functions: Object.values(batch).map(function (_ref3) {
                  var request = _ref3.request;
                  return request;
                })
              }),
              onResponse: function onResponse(_ref4) {
                var id = _ref4.id,
                    statusCode = _ref4.statusCode,
                    result = _ref4.result;
                var future = batch[id].future;

                if (statusCode >= 400) {
                  future.reject(result);
                } else {
                  future.resolve(result);
                }
              }
            });

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            Object.values(batch).forEach(function (_ref5) {
              var future = _ref5.future;
              future.reject(_context.t0);
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));
  return _processBatch.apply(this, arguments);
}