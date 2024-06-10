// ! Object Destructor

// ? Basic Destructor
const bookDetails = {
  name: "The Meditations",
  author: "Marcus Aurelius",
  publishedDate: "175/07/14",
  numberOfPages: 192,
  coverPage: null,
  price: undefined,
};

const { name, author } = bookDetails;
console.log(author);

// ? Renaming the destructed key
const obj1 = {
  name: "Cup",
  price: 7,
};

const obj2 = {
  name: "Mouse",
  price: 15,
};

const { price } = obj1;
console.log(price);

const { price: priceOfObj2 } = obj2;
console.log(priceOfObj2);

// ? Nested Destructor
let student = {
  name: "Samrat",
  address: {
    permanent: "Pokhara",
    temporary: "Lalitpur",
  },
  isGraduated: true,
};

const {
  name: studentName,
  isGraduated,
  address: { permanent },
} = student;
console.log(studentName, permanent);
