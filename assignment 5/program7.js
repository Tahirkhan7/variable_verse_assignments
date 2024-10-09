// program 7
const arrA = [11, 13, 21];
const arrB = [21, 33, 14];
let intersection = arrA.filter((x) => arrB.includes(x));
console.log(intersection);
const arrC = [21, 21, 33, 14, 7, 11, 41, 14, 26];
console.log(...new Set(arrC));
