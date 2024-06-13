// ! map, filter, find, findIndex, reduce
// loop based

// ? map
// apply function to items of the list
// returns new array
// to alter values of the array
// original array length === returned array length
let studentList = ["Samrat", "Ubermensch", "MrYeti", "King Arthur"];

let newStudentList = studentList.map((item, index, self) => {
  return "a";
});
console.log(newStudentList);

newStudentList = studentList.map((item, index, self) => {
  let uppercaseName = item.toUpperCase();
  return uppercaseName;
});
console.log(newStudentList);

// increase price of every item by 3 dollars
const priceList = [25, 35, 11, 9, 5, 99];
const newPriceList = priceList.map((item) => item + 3);
console.log(newPriceList);

// array of object - increase price of each item by 10% due to inflation
const productList = [
  {
    id: 1,
    name: "Glass",
    price: 5,
  },
  {
    id: 2,
    name: "Watch",
    price: 7,
  },
  {
    id: 1,
    name: "Cap",
    price: 25,
  },
];

let newProductList = productList.map((item) => {
  const newPrice = item.price + item.price * 0.1;
  return {
    ...item,
    price: newPrice,
  };
});
console.log(newProductList);

// ? filter
// filter out necessary and unnecessary items from an array
// returns new array
// checks for some condition to satisfy
// mostly, original array length !== returned array length
// doesnt change value, just selects em

// get positive numbers from a list
let numList = [1, 10, 33, -6, -99, 97, -100];
let newNumList = numList.filter((item, index, self) => item > 0);
console.log(newNumList);

// find all items whose price is less than 10
newProductList = productList.filter((item) => item.price < 10);
console.log(newProductList);

// ? find
// gets first item in array which satisfies the condition
// if none of the items satisfy the condition, it returns undefined
// find is better optimized than filter usually

numList = [-15, 25, 10, 55, -95, 63, 75];
let value = numList.find((item, index, self) => {
  return item > 20;
});
console.log(value);

// find user whose email is 'sam@gmail.com'
studentList = [
  {
    id: 1,
    name: "Samrat",
    email: "sam@gmail.com",
  },
  {
    id: 1,
    name: "Ubermensch",
    email: "uber@gmail.com",
  },
  {
    id: 1,
    name: "MrYeti",
    email: "yeti@gmail.com",
  },
  {
    id: 1,
    name: "King Arthur",
    email: "arthur@gmail.com",
  },
];
value = studentList.find((item) => item.email === "sam@gmail.com");
console.log(value);

// ? findIndex
// return index of the first item that satisfies the condition
value = studentList.findIndex((item) => item.email === "sam@gmail.com");
console.log(value);

// ? reduce
// returns a processed value
// uses extra parameter, accumulator.
// no need to initialzie the accumulator

// get product of this list
numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
value = numList.reduce(
  (accumulator, item, index, self) => accumulator * item,
  1
);
console.log(value);

// ! forEach
// just a simple loop
// doesnt return anything
numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
numList.forEach((item, index, self) => {
  sum = sum + item;
});
console.log(sum);
