// program 6
let sum2dArr = 0;
for (let i = 0; i < Arr2d.length; i++) {
  let row = "";
  for (let j = 0; j < Arr2d[i].length; j++) {
    row += Arr2d[i][j] + " ";
    sum2dArr += Arr2d[i][j];
  }
  console.log(row.trim());
}
console.log("Sum of Array: ", sum2dArr);
