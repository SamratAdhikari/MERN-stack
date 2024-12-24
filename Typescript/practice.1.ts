// create an object called animal which can be eitehr dog or cat

let animal: Animal = {
    name: "Eagle",
    type: "Brid",
    isPet: false,
    weight: 5000,
    lifeSpan: 60,
    location: {
        first: "Asia",
        second: "Africa",
    },

    someFunc: () => {
        console.log("returns nth");
    },

    makeSound: () => {
        return "Trumpet";
    },
};

interface Animal {
    name: string;
    type: string;
    isPet: boolean;
    weight: number;
    lifeSpan: number;
    location: {
        first: string;
        second: string;
    };
    someFunc: () => void;
    makeSound: () => string;
}

interface NumberType {
    num1: number;
    num2: number;
    addNum: () => number;
}

let numbers: NumberType = {
    num1: 5,
    num2: 10,
    addNum: function () {
        return this.num1 + this.num2;
    },
};
