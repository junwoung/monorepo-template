import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

const Demo2 = ({ name, age }) => {
    return (jsxs(Fragment, { children: [jsx("div", { children: "demo2 component" }), jsxs("div", { children: ["name: ", name] }), jsxs("div", { children: ["age: ", age] })] }));
};

export { Demo2 };
