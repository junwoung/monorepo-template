const multiple = (...numbers) => {
    return numbers.reduce((prev, cur) => prev * cur, 1);
};

const sum = (...numbers) => {
    return numbers.reduce((prev, cur) => prev + cur, 0);
};

export { multiple, sum };
