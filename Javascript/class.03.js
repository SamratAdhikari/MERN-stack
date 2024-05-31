// ! Truthy-Falsy values

// ? falsy values:
// when these values come in condition, they are equivalent to false values
// false, null, undefined, 0, -0, NaN, ""

// ? truthy values:
// all values except falsy values

console.log(
  null
    ? "false"
    : undefined
    ? "false"
    : NaN
    ? "false"
    : 0
    ? "false"
    : -0
    ? "false"
    : ""
    ? "false"
    : "true"
);

if (null) {
  console.log("hey");
}

// ! Iterations
// ? for loop
for (let i = 0; i <= 10; i++) {
  console.log("For", i);
}

// que: For loop to print numbers from 100 to 50
for (i = 100; i >= 50; i--) {
  console.log(i);
}

// que: For loop to find if a number is prime or not
let num = 11;
let isPrime = true;
for (i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime ? "Prime" : "Not a Prime");

// ? while loop
num = 10;
while (num < 25) {
  console.log("While", num);
  num++;
}

// ? do while
num = 1;
do {
  console.log("Do", num);
  num++;
} while (num > 5);

// ! Functions
// DRY: Donot Repeat Yourself
// function of function: code reusability, reduce code redundancy, single point of failure

let user = "Ubermensch";
let number = 900000000;

function sayHello(user) {
  // function scope
  console.log("Hello world", user);
  console.log("Your number is", number);
}
sayHello("Samrat");

let sum = 0;
function getSum(x, y) {
  sum = x + y;
  console.log("Sum is", sum);
  //   return sum;
}
getSum(2, 3);
console.log(sum);

// ? Arrow function
const sayHi = (name = "Default Name") => {
  name = "new Name";
  console.log("Hello", name);
};

sayHi("MrYeti");

// Example
const doSum = (x, y) => {
  x = +x;
  y = +y;
  console.log(x + y);
};
doSum("5", "7");

// Example: print product of two numbers
const doProduct = (num1, num2) => num1 * num2;
console.log(doProduct(5, 6));

// Que: Function to check whether a numver is odd or even
const checkOddEven = (num) => (num % 2 === 0 ? "Even" : "Odd");
console.log(checkOddEven(12));

// Que: Function to check polarity of a number

const checkPolarity = (num) =>
  num > 0 ? "Positive" : num < 0 ? "Negative" : "Neutral";
console.log(checkPolarity(-12));

// ? Difference between arrow function and normal function
// 1. function func is read by the interpreter first so that the function call can be done before declaring the func
// this feature of function is called hoisting
