'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const multiple = (...numbers) => {
    return numbers.reduce((prev, cur) => prev * cur, 1);
};

exports.multiple = multiple;
