const doSum = (x, y) => {
    return x + y;
};

const sayHello = (name = "user") => {
    console.log(`Hello ${name}`);
};

const PI = Math.PI;
// console.log(doSum(2, 3));

export { doSum, sayHello, PI };
