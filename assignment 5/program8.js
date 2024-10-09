// program 8
const arrFinal = [21, 24, 36, 11, 7, 4, 67, 99];
const statistics = {
  totalNumbers: arrFinal.length,
  sumOfAllNumbers: arrFinal.reduce((a, b) => a + b, 0),
  avgOfArr: arrFinal.reduce((a, b) => a + b, 0) / arrFinal.length,
};
console.log(statistics);
