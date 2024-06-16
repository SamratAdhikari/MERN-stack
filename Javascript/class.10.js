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
