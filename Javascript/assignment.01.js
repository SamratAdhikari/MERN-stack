// ! ASSIGNMENT 1: Conditionals practice:

// ? 1. Check if a number is odd or even.
const num = 12;
console.log(num % 2 === 0 ? "Even" : "Odd");



// ? 2. Check if input variable is a number or not
const val = "some string";
console.log(
  typeof num === "number" ? `${num} is a number` : `${num} is not a number`
);



// ? 3.Find the largest of two numbers.
let num1 = 12,
  num2 = 56;
console.log(num1 > num2 ? "num1 is greater" : "num2 is greater");

// ? 4.Find the largest of three numbers.
num1 = 2300;
num2 = 566;
let num3 = 75;

console.log(
  num1 > num2 && num1 > num2
    ? "num1 is the largest"
    : num2 > num3
    ? "num2 is the largest"
    : "num3 is the largest"
);



// ? 5.Perform arithmetic operation based on the option provided. Set two variables with numbers. Create another variable called “option” which can be add/subtract/multiply/divide/power. Based upon the value of the option. Perform appropriate operation.
// e.g. if option is “add”, perform num1+num2

num1 = 56;
num2 = 6;
const option = "divide";

switch (option) {
  case "add":
    console.log(num1 + num2);
    break;
  case "subtract":
    console.log(num1 - num2);
    break;
  case "multiply":
    console.log(num1 * num2);
    break;
  case "divide":
    console.log(num1 / num2);
    break;
  case "power":
    console.log(num1 ** num2);
    break;

  default:
    console.log("Invalid operator");
}



// ? 6.Find grades for student marks.
// If the mark is greater than or equal to 90, the grade is “A plus”.
// If the mark is greater than or equal to 80,the grade is “A”.
//  Grade “B”  from marks greater than equal to 70.
// “C” for marks greater than equal to 60.
// “F” for marks  less than 60.

const marks = 75;

if (marks >= 90) {
  console.log("The grade is A+");
} else if (marks >= 80) {
  console.log("The grade is A");
} else if (marks >= 70) {
  console.log("The grade is B");
} else if (marks >= 60) {
  console.log("The grade is C");
} else {
  console.log("The grade is F");
}
