// ! Default values
// always place default values at the end

// example 1
const getSum = (x, y = 5) => {
  return x + y;
};
console.log(getSum(2, 3));
console.log(getSum(2));

// example 2
const greetUser = (userName) => {
  console.log(`Good morning, ${userName || "Samrat"}`);
};
greetUser("Ubermensch");
greetUser();

// ! More on Objects

// when keys and values are same
let firstName = "Samrat";
let lastName = "Adhikari";
let address = "Pokhara";

let studentDetail = {
  firstName,
  lastName,
  address,
};
console.log(studentDetail);

let num = 5;
console.log(`num = ${num}`);
console.log({ num }); // another way

// ! Error handling
// error is inevitable

// example 1
const x = 2;

try {
  x = 5;
  console.log("Hit");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Error Handled");
}

// example 2
let user = null;
try {
  if (!user) {
    throw new Error("User doesnt exist");
  }
  console.log("Inside try");
} catch (error) {
  console.log(error.message);
}

// ! Closure function
// function returning function
// function + lexical (surrounding) environment
// function factory

const makeAdder = (x) => {
  const doSum = (y) => {
    return x + y;
  };
  return doSum;
};
const doSum = makeAdder(5);
let sum = doSum(10);
console.log(sum);

// another way
sum = makeAdder(25)(5);
console.log(sum);

// another way
const adder = (x) => (y) => x + y;
console.log(adder(10)(5));

// ! Higher order func
// 1. callback func
// 2. closure func

// ! Async function
// synchronous : existing or occuring at the same time
// asynchronous : not existing or occuring at the same time
// H -> Hexa core
// u -> ultra power saving
// k -> unlocked, optimized frequency, overclocking
// h -> high performance

// node -> single threaded
// none-blocking -> doesnt block code execution

// setTimeout is also a async func
console.log("Hi");
setTimeout(() => {
  console.log("Timeout");
}, 2000);

console.log("Hello");
