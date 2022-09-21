import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
const Demo = ({ name, age, gender }) => {
    return (jsxs(Fragment, { children: [jsx("div", { children: "demo component" }), jsxs("div", { children: ["name: ", name] }), jsxs("div", { children: ["age: ", age] }), jsxs("div", { children: ["gender: ", gender === Gender.male ? '男' : '女'] })] }));
};

const Demo2 = ({ name, age }) => {
    return (jsxs(Fragment, { children: [jsx("div", { children: "demo2 component" }), jsxs("div", { children: ["name: ", name] }), jsxs("div", { children: ["age: ", age] })] }));
};

export { Demo, Demo2, Gender };
