// ! Question 1
const laptopList = [
  {
    name: "LOQ",
    brand: "Lenovo",
    price: 1070,
  },
  {
    name: "Aspire 5",
    brand: "Acer",
    price: 800,
  },
  {
    name: "Modern 15",
    brand: "MSI",
    price: 690,
  },
  {
    name: "Inspiron ",
    brand: "Dell",
    price: 1015,
  },
  {
    name: "IdeaPad",
    brand: "Lenovo",
    price: 1059,
  },
  {
    name: "Inspiron G15",
    brand: "Dell",
    price: 1015,
  },
  {
    name: "Macbook Pro M3",
    brand: "Apple",
    price: 2059,
  },
  {
    name: "Zenbook 15",
    brand: "MSI",
    price: 1064,
  },
];

// ? 1. give 6 percent on 6:6(sale) on each laptop
let newLaptopList = laptopList.map((item) => {
  return {
    ...item,
    price: item.price - 0.06 * item.price,
  };
});

console.log(newLaptopList);

// ? 2. increase price of Dell laptops by 10%
laptopList.forEach((laptop) => {
  if (laptop.brand === "Dell") {
    laptop.price *= 1.1;
  }
});
console.log(laptopList);

// ? 3. find all lenovo laptops
newLaptopList = laptopList.filter((laptop) => laptop.brand === "Lenovo");
console.log(newLaptopList);

// ? 4. update name of 'IdeaPad' to 'IdeaPad Ultra'
newLaptopList = laptopList.map((laptop) => {
  if (laptop.name === "IdeaPad") {
    return {
      ...laptop,
      name: "IdeaPad Ultra",
    };
  }
});
console.log(newLaptopList);

// ? 5. get all laptops whose price is below $1050
newLaptopList = laptopList.filter((item) => item.price < 1050);
console.log(newLaptopList);

// ? find 'Zenbook 15' laptop details
let value = laptopList.find((item) => item.name === "Zenbook 15");
console.log(value);

// ? 7. find sum of prices of all laptops
value = laptopList.reduce((sum, item) => sum + item.price, 0);
console.log(value);

// ! Question 2
const ageList = [11, 18, 38, 49, 9, 8];

// ? check if all users are adult or not
let isAllAdult = true;
ageList.forEach((age) => {
  if (age < 18) {
    isAllAdult = false;
    return;
  }
});

console.log(isAllAdult);

// another method
isAllAdult - ageList.every((age) => age >= 18);
console.log(isAllAdult);

// ? check if any person is an adult
let isAdult = ageList.some((age) => age >= 18);
console.log(isAdult);

// ! Array destructure
const numList = [11, 25, 47];

console.log(numList[0], numList[1], numList[2]);

// using destructure
const [a, b, c] = numList;
console.log(a, b, c);

// ! Array copy
const nations = ["Nepal", "USA", "Japan", "Australia"];

// ? shallow copy
let newNations = nations;
newNations[0] = "NEPAL !!!";
console.log(nations);

// ? spread operator (...)
newNations = [...nations];
newNations[0] = "Our NEPAL !!!";
console.log(nations);

// ? for objects list, its a bit complex
const userList = [{ name: "A" }, { name: "B" }];
let newUserList = [...userList];
newUserList[0].name = "a"; // for objects, its a ref copy
console.log(userList);

// deep copy
newUserList = structuredClone(userList);
newUserList[0].name = "Z";
console.log(userList);

// ? Rest operator (...)
// asks as a collector for a function
const getProduct = (...otherValueArray) => {
  let product = otherValueArray.reduce((total, num) => {
    total = total * num;
    return total;
  }, 1);
  return product;
};

const result = getProduct(1, 2, 3, 4, 5, 6);
console.log(result);
