import { __assign } from '../_virtual/_tslib.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var Demo = function (_a) {
    var name = _a.name, age = _a.age, gender = _a.gender;
    return (jsxs(Fragment, { children: [jsx("div", { children: "demo component" }), jsxs("div", __assign({ className: "name" }, { children: ["name: ", name] })), jsxs("div", { children: ["age: ", age] }), jsxs("div", { children: ["gender: ", gender === Gender.male ? '男' : '女'] })] }));
};

export { Demo, Gender };
