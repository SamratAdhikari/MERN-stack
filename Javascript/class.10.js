// ! Event loop - Call stack

const multiply = (num1, num2) => {
  return num1 * num2;
};

const square = (n) => {
  return multiply(n, n);
};

const printNumber = () => {
  const result = square(4);
  console.log(result);
};

printNumber();

// ! Recursive function
const sayHi = (count) => {
  if (count === 5) {
    return;
  }
  console.log("Hi");
  count += 1;
  sayHi(count);
};
sayHi(0);

// ! Promise
// sth that happens in the future
// to get result, we need to resolve promise

// ? Tri-state:
// pending
// success
// failure

// ? Promise resolve methods:
// call back func
// .then .catch

// async ... await (relevant today)
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let randomNum = Math.random();

    if (randomNum > 0.5) {
      resolve(randomNum);
    } else {
      reject("Too small number");
    }
  }, 2000);
});

const getRandomNum = async () => {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

console.log("first");
getRandomNum();
console.log("third");

// ? real world use case
const getProductData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Api hit failed");
    console.log(error.message);
  }
};

getProductData();
