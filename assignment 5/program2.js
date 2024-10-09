// program 2
let numbers = [10, 20, 30, 40, 50];
let newArr = [];
numbers.map((number) => {
  newArr.push(number * number);
});
let filteredArr = numbers.filter((number) => number > 25);
console.log(newArr);
console.log(filteredArr);
