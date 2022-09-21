'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

const Demo2 = ({ name, age }) => {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { children: "demo2 component" }), jsxRuntime.jsxs("div", { children: ["name: ", name] }), jsxRuntime.jsxs("div", { children: ["age: ", age] })] }));
};

exports.Demo2 = Demo2;
