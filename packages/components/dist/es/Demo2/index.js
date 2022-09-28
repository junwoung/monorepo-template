import { __assign } from '../_virtual/_tslib.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

var Demo2 = function (_a) {
    var name = _a.name, age = _a.age;
    return (jsxs(Fragment, { children: [jsx("div", { children: "demo2 component" }), jsxs("div", __assign({ className: 'name' }, { children: ["name: ", name] })), jsxs("div", __assign({ className: 'age' }, { children: ["age: ", age] }))] }));
};

export { Demo2 };
