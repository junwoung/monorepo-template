const sum = (...numbers) => {
    return numbers.reduce((prev, cur) => prev + cur, 0);
};

export { sum };
