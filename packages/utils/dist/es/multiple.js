const multiple = (...numbers) => {
    return numbers.reduce((prev, cur) => prev * cur, 1);
};

export { multiple };
