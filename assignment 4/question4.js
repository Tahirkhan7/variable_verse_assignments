// 4th program

(function (day) {
    switch (day) {
        case 1: console.log("Sunday");
        case 2: console.log("Monday");
        case 3: console.log("Tuesday");
        case 4: console.log("Wednesday");
        case 5: console.log("Thursday");
        case 6: console.log("Friday");
        case 7: console.log("Saturday");
        default: console.log("Invalid input. Please enter a number between 1 and 7.");
    }
})(3);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

(function (number) {
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
})(11);

(function (n) {
    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }
    console.log(factorial);
})(6);

(function (){
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);
})();