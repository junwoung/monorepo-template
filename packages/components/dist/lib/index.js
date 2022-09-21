'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

exports.Gender = void 0;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(exports.Gender || (exports.Gender = {}));
const Demo = ({ name, age, gender }) => {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { children: "demo component" }), jsxRuntime.jsxs("div", { children: ["name: ", name] }), jsxRuntime.jsxs("div", { children: ["age: ", age] }), jsxRuntime.jsxs("div", { children: ["gender: ", gender === exports.Gender.male ? '男' : '女'] })] }));
};

const Demo2 = ({ name, age }) => {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { children: "demo2 component" }), jsxRuntime.jsxs("div", { children: ["name: ", name] }), jsxRuntime.jsxs("div", { children: ["age: ", age] })] }));
};

exports.Demo = Demo;
exports.Demo2 = Demo2;
