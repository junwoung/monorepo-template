import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

var Demo2 = function (_a) {
    var name = _a.name, age = _a.age;
    return (jsxs(Fragment, { children: [jsx("div", { children: "demo2 component" }), jsxs("div", { children: ["name: ", name] }), jsxs("div", { children: ["age: ", age] })] }));
};

export { Demo2 };
