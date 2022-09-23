'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sum = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (prev, cur) { return prev + cur; }, 0);
};

exports.sum = sum;
