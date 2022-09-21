export const sum = (...numbers: number[]) => {
  return numbers.reduce((prev, cur) => prev + cur, 0);
};
