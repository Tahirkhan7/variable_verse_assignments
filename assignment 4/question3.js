// 3rd program

(function (age) {
    age >= 18 ? console.log("You can vote") : console.log("Sorry! you cant vote");
  })(21);
  
  (function (grade) {
      if (grade < 0 || grade > 100) {
          console.log( "Invalid marks. Please enter a value between 0 and 100.");
      } else if (grade >= 90) {
          console.log("Your grade is: A");
      } else if (grade >= 80) {
          console.log("Your grade is: B");
      } else if (grade >= 70) {
          console.log("Your grade is: C");
      } else if (grade >= 60) {
          console.log("Your grade is: D");
      } else {
          console.log("Your grade is: F");
      }
  })(73);