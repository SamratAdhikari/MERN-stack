// ! Type conversion

// ? string to number
let x = "45"; // numeric string
console.log(x, typeof x);
x = Number(x);
x = +x; // or
console.log(x, typeof x);

// parseInt, parseFloat
let m = "1.25";
m = parseFloat(m);
console.log(m, typeof m);
m = parseInt(m);
console.log(m, typeof m);

// why parseInt aint used these days
let a = "11.12 abc";
a = parseInt(a);
console.log(a, typeof a);
// gives output 11

// ? boolean to string
let isPlaying = true;
console.log(isPlaying, typeof isPlaying);
isPlaying = String(true);
console.log(isPlaying, typeof isPlaying);

// ? template literal
let username = "Samrat";
console.log(`Hi my name is ${username}.`);

let dict = { name: "Ubermensch" };
console.log(`Hello my name is ${dict.name}.`);

let num = 12;
num = `${num}`;
console.log(num, typeof num);

// ! Scopes : execution context
let s = "parent";
{
  let s = 3;
  console.log(s);
}
console.log(s);

// ? types of scope
// global scope
// local scope
// block scope: let, const, 'var doesnot follow this scope, everything is global with var'
// function scope

{
  var val = 12;
}
console.log(val);

// NOTE: if nth is assigned to a variable, it is taken as a 'var' variable
// eg:
{
  h = "var variable";
}
console.log(h);

// ! Conditional statements
// ? if else
const age = 20;
if (age <= 18) {
  console.log("you are young");
} else if (age > 18 && age <= 60) {
  console.log("you are in your prime");
} else {
  console.log("you are freaking old");
}

// Que: find if a number is odd or even
const userInput = 20;
if (userInput % 2 === 0) {
  console.log(`${userInput} is an even number`);
} else {
  console.log(`${userInput} is an odd number`);
}

// Que: find polarity of a number
let x1 = -25;
let x2;
if (x1 < 0) {
  console.log("-ve");
} else if (x1 > 0) {
  console.log("+ve");
} else {
  console.log("0");
}

// Que: suppose any three +ve numbers and find the greatest among them
let y1 = 1;
let y2 = 2;
let y3 = 3;

if (y1 > y2 && y2 > y3) {
  console.log(`${y1} is the greatest`);
} else if (y2 > y3) {
  console.log(`${y2} is the greatest`);
} else {
  console.log(`${y3} is the greatest`);
}

// ? switch : best for multiple choice questions
let color = "blue";

switch (color) {
  case "green":
    console.log("The color is green");
    break;

  case "blue":
    console.log("The color is blue");
    break;

  case "red":
    console.log("The color is red");
    break;

  default:
    console.log("The color is yellow");
}

// Que:
let dayNumber = 1;

switch (dayNumber) {
  case 1: // dayNumber === 1
    console.log("Sunday");
    break; // break imp

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thursday");
    break;

  case 6:
    console.log("Friday");
    break;

  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Invalid day!!");
}

// ? ternary
// condition ? expIfTrue : expIfFalse
let num1 = 5;
console.log(num1 % 2 === 0 ? "Even" : "Odd");

// ternary operation chain
let pol = -25;
console.log(pol < 0 ? "-ve" : pol > 0 ? "+ve" : "neutral");
