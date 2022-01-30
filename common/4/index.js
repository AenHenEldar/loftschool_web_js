const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => !(num % 2);
const filterArray = (mixedArray, isEven) => mixedArray.filter(n => isEven(n))

console.log(filterArray(mixedArray, isEven));