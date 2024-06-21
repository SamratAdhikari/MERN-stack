import { doSum, sayHello, PI as pee } from "./calculator.js";
import greetUser from "./greeter.js";
import respectUser, { reduceTemp } from "./greeter.js";

console.log("Hello");

const sum = doSum(2, 6);

console.log(sum);

sayHello("Samrat");

const PI = "Hi";
console.log(pee, PI);

greetUser();
respectUser();

reduceTemp();
