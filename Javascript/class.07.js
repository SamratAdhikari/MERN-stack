// ! map, filter, find, findIndex, reduce
// loop based

// ? map
// apply function to items of the list
// returns new array
// to alter values of the array
// original array length === returned array length
let studentList = ["Samrat", "Ubermensch", "MrYeti", "King Arthur"];

let newStudentList = studentList.map((item, index, array) => {
  return "a";
});
console.log(newStudentList);

newStudentList = studentList.map((item, index, array) => {
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

const newProductList = productList.map((item) => {
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

const numList = [1, 10, 33, -6, -99, 97, -100];
const newNumList = numList.filter((item, index, array) => {
  return item > 0;
});
console.log(newNumList);

// ? find

// ? findIndex

// ? reduce
