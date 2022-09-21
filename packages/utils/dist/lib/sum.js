'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const sum = (...numbers) => {
    return numbers.reduce((prev, cur) => prev + cur, 0);
};

exports.sum = sum;
