// ! Array
// collection of data

// ? statically typed language => c, java, c++
// array is collection of data of same type
// in real world, we use array with same datatype

// ? dynamically typed language => js, python
// array is the collection of data of diff type

const num = [1, "two", null, undefined, {}, []];
console.log(num, typeof num);

const tempList = [10, 20, 28, 22];
console.log(tempList);

const nationList = [
    "Nepal",
    "Sri Lanka",
    "Netherland",
    "South Africa",
    "Bangladesh",
];
console.log(nationList);

// values in array can be accessed using index
// index always starts from 0.

const laptopBrands = ["Acer", "Lenovo", "Apple", "MSI"];
console.log(laptopBrands[3]);
console.log(laptopBrands.length);

// ? Array as an object
// this is how arrays store the data as an object
const obj = {
    0: "Apple",
    1: "Banana",
    2: "Orange",
    3: "Mango",
};
console.log(obj[1]);

// ? Loop in array
for (let i = 0; i < laptopBrands.length; i++) {
    console.log(laptopBrands[i]);
}

// ! Methods in array
let numList = [16, 11, 12];

// ? push
// add element(s) to end of array
numList.push(13, 14, 15);
console.log(numList);

// ? pop
// remove element from end of the array
numList.pop();
console.log(numList);

// ? shift
// remove first element from the array
numList.shift();
console.log(numList);

// ? unshift
// add element to the beginning of the array
numList.unshift(100, 222);
console.log(numList);

// ? reverse
numList.reverse();
console.log(numList);

// ? includes
// checks whether array contains specific value or not
// results in boolean
console.log(numList.includes(100));
const currentRoute = "/user/edit/1";
console.log(currentRoute[1]);
console.log(currentRoute.includes("edit"));

// ? slice
// get portion of array from original array
// makes shallow copy and doesnt change original copy
const animals = ["dog", "cat", "lion", "tiger", "ant", "wolf"];
console.log(animals.slice());
console.log(animals.slice(2));
console.log(animals.slice(2, 5));

// ? splice
// remove or replace existing items
let months = ["Jan", "Feb", "Mar", "Apr", "May"];

// 1. removes items from this index
months.splice(1);
console.log(months);

// 2. first parameter: start index && second parameter: no of items to delete after first index
months = ["Jan", "Feb", "Mar", "Apr", "May"];
months.splice(1, 2);
console.log(months);

// 3. first: start index && second: no items to be replaced by 3rd parameter && third to N : add items
months = ["Jan", "Feb", "Mar", "Apr", "May"];
months.splice(1, 2, "Jun", "Jul");
console.log(months);

// ? sort
// asc and dsc sort
months = ["Jan", "Feb", "Mar", "Apr", "May"];

months.sort(); // asc sort
console.log(months);

months.sort().reverse(); // dsc sort
console.log(months);

// Numbers sorting
numList = [1, 100, 11, 111, 2, 23, 20, 50, 51, 505];
numList.sort((a, b) => a - b); // ASC
console.log(numList);

numList.sort((a, b) => b - a); // DSC
console.log(numList);

// ! toMethod() Methods
// makes a new copy of the original array and makes changes in it

// ! Call back functions
// function which is passed as an argument to another function.
let getSum = (x, y, callback) => {
    let sum = x + y;

    callback(sum);
};

getSum(1000, 2000, (value) => {
    console.log(value);
});

// ! Rest operator vs Spread operator
// (...)
// rest is opposite to spread operator
// rest acts as a collector

getSum = (a, b, ...otherValues) => {
    const total = otherValues.reduce((total, item) => {
        total += item;
        return total;
    }, 0);
    let sum = a + b + total;
    return sum;
};

console.log(getSum(1, 2, 3, 4, 5));

// ! Function returning function
