type Laptop = { brand: string; model: string; price: number };

let laptopDetails: Laptop = {
    brand: "Dell",
    model: "Inspiron",
    price: 50000,
};

console.log(laptopDetails);

type LaptopExtraProperties = Laptop & { color: string };

interface Bike {
    brand: string;
    model: string;
    price: number;
}
let bikeDetails = {
    brand: "Honda",
    model: "CBR",
    price: 5000,
} satisfies Bike;
