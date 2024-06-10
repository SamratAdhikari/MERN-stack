// ? Why do we use objects in javascript?

// They provide Key-Value pair.
let obj = { key: "value" };

// They provide Encapsulation & Abstraction.
obj = {};
Object.defineProperty(obj, "name", {
  value: "Samrat",
  enumerable: true, // show data
  writable: true, // changable
  configurable: true, // deletable
});
console.log(obj);

// They allow dynamic data management.
// i.e. We can add, edit, update and delete property easily.
const laptopDetails = {
  name: "Yoga 6",
  brand: "Lenovo",
  ram: 8,
  ssd: 500,
};
let key = "ssd";
console.log(laptopDetails[key]);

// They allow better organization of the code.

// ? Create an object named myHouseDetails and add following properties
/*
a. numberOfRooms
b. numberOfMembers
c. colorOfHouse
d. builtYear
e. numberOfStorey
*/

myHouseDetails = {
  numberOfRooms: 9,
  numberOfMembers: 10,
  colorOfHouse: "green",
  builtYear: 2011,
  numberOfStorey: 3,
};

// a. Delete numberOfMembers property.
// delete myHouseDetails.numberOfMembers;

// b. Update numberOfRooms by new value.
myHouseDetails.numberOfRooms = 9;

// c. Add a new property called estimatedPriceOfHouse.
myHouseDetails.estimatedPriceOfHouse = "2 crores";

// d. Print out the objects.
console.log(
  `I have a ${myHouseDetails.colorOfHouse} coloured house with ${myHouseDetails.numberOfRooms} rooms where ${myHouseDetails.numberOfMembers} people are living. The house is ${myHouseDetails.numberOfStorey} storey and was built in ${myHouseDetails.builtYear} with an estimated budget of ${myHouseDetails.estimatedPriceOfHouse}.`
);
