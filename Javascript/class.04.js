// ! Objects
// It is Key-Value pair
// key / field/ property

const studentDetails = {};
console.log(studentDetails, typeof studentDetails);
const obj1 = { name: "Obj1 name", age: 10 };
const obj2 = { name: "Obj2 name", age: 20 };
console.log(obj1 === obj2); // false

// ! CRUD operations on an object
// Create
let student = {
  firstName: "Samrat",
  lastName: "Adhikari",
  address: {
    permanentAddr: "Pokhara",
    tempAddr: "Lalitpur",
  },
  isGraduated: true,
};
console.log(`My name is ${student.firstName}`);

// ? Read
// dot operator
console.log(student.address.permanentAddr);
// square bracket operator - key must be passed as a string
console.log(student["address"]["tempAddr"]);
// using both
console.log(student.address["permanentAddr"]);

// ? Upsert (Update or Insert)
student.firstName = "Stoic";
console.log(student.firstName);
student.age = 22;
console.log(student.age);

// ? Delete
delete student.address.tempAddr;
console.log(student);

// ! Order in key value pair
const cupDetails = {
  name: "Tea cup",
  name: "Coffee cup",
  color: "Green",
  color: "Blue",
};

// sets the latest value
// doesnt occupy extra memory space
console.log(cupDetails);

// ! Constants
// primary data type : cannot be reassigned, thus immutable
// non-binary data type : cannot be reassigned, but mutable

const phoneDetails = {
  brand: "Samsung",
};
phoneDetails.brand = "Apple";
console.log(phoneDetails.brand);

// to make objects immutable, we use 'freeze'
const newObj = Object.freeze({
  name: "Killer Bee",
});
newObj.name = "Mr Yeti";
console.log(newObj);

// TODO: after array
console.log(Object.entries(obj1));
console.log(Object.keys(obj1));
console.log(Object.values(obj1));

// ! Object Copy
let person1 = {
  name: "Samrat",
  college: "KEC",
  isGraduated: false,
  image: null,
};
console.log(person1);

let person2 = person1;
person2.name = "Naruto";
console.log(person2);
console.log(person1);

// ? resolve method 1: shallow copy
// spread operator
person2 = { ...person1 };
person2.name = "Sasuke";
console.log(person2);
console.log(person1);

// ? resolve method 2: deep copy
person1 = {
  name: "Samrat",
  college: "KEC",
  isGraduated: false,
  image: null,
};

person2 = structuredClone(person1);
person2.name = "Ubermensch";
console.log(person2);
console.log(person1);
