'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const multiple = (...numbers) => {
    return numbers.reduce((prev, cur) => prev * cur, 1);
};

const sum = (...numbers) => {
    return numbers.reduce((prev, cur) => prev + cur, 0);
};

exports.multiple = multiple;
exports.sum = sum;
