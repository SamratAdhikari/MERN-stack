console.log("Hello World");

// ! variables
let name = "Samrat";
console.log(name);

// ? var name cannot be reserved keyword
// let for = 10
// ? var name cannot start with number
// let 10samrat = 10

// ? var name should be descriptive
// let t = 10

// ? var name should camelCase, snake-case, UPPERCASE, lowercase or kebab-case
let stdName = "Samrat";

// ? constants
const x1 = 7;
console.log(x1);
// x = 9

// ? universal constant are written in uppercase
const PI = Math.PI;
console.log(PI);

// ! Data types
// string
// number
// boolean
// undefined
// null
// object
// bigInt
// symbol

// ? string:
// "Double Quote", 'Single Quote', `Back Ticks`
let userName = "samrat@gmail.com";
console.log(userName, typeof userName);

// ? number:
// -Infinity to +Infinity
let num = 12;
console.log(num, typeof num);
let nan = "abc" / 2;
console.log(nan, typeof nan);
let float = 12.123;
console.log(float, typeof float);

// ? boolean
// true / false
let isSunny = false;
console.log(isSunny, typeof isSunny);

// ? undefined
let x2;
console.log(x1, typeof x2);
let x = undefined;
console.log(x, typeof x);

// ? null
let x3 = null;
console.log(x3, typeof x3); // historical bug

// ? object
// dictionary
const studentDetail = {
  firstName: "Samrat",
  lastName: "Adhikari",
  cgpa: 4.0,
};
console.log(studentDetail, typeof studentDetail);
// array
const numList = ["Samrat", 25, 32.12, true];
console.log(numList, typeof numList);

// ! Operators
// symbols which have certain meaning
// Arithmetic operator
// Assignment operator
// Comparision operator
// Logical operator

// ? Arithmetic operator
// + - % * / **
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);
console.log(10 ** 2);

// ? Assignment operator
// = += -= *= /= %= **=
let val = 2;
val += 5;
val -= 5;
val *= 5;
val /= 5;
val %= 5;
val **= 5;
console.log(val);

// ? Comparision operator
// > < >= <= == === != !==
// ? == : weak comparison, checks only value
// ? === : strict comparison, value + data type
// use === and !== instead of == and !=

let a = 1;
let b = "1";
console.log(a == b);
console.log(a === b);
a = "S";
b = "s";
console.log(a === b);
console.log(a.toLowerCase() === b.toLowerCase());
console.log(1 !== 2);

// ? Logical operator
// && || !
console.log(true && false);
console.log(true || false);
console.log(!true);
