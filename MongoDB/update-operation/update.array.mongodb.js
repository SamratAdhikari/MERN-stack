const { ObjectId } = require("mongodb");

use("training");

// ? $push
// adds item to end of an array field

// *Que: add 10 (another value) on marks of rajan
db.scores.updateOne(
    { name: "Rajan" },
    {
        $push: {
            marks: 10,
        },
    }
);

// *Que: Add 87 and 93 to marks of Suyasha
// pushing array
db.scores.updateOne(
    { name: "Suyasha" },
    {
        $push: { marks: [87, 93] },
    }
);

// using $each to split the array
db.scores.updateOne(
    { name: "Smarika" },
    {
        $push: { marks: { $each: [1, 2] } },
    }
);

// ? $pop
// removes items from the array
// 1: removes item from the end of an array
// -1: removes item from the front of an array

// *Que: Remove last item of marks of _id: 66829f9b98493c7d6f718594
db.scores.updateOne(
    { _id: new ObjectId("66829f9b98493c7d6f718594") },
    {
        $pop: { marks: 1 },
    }
);

// *Que: Remove first item of marks of _id: 66829f9b98493c7d6f718595
db.scores.updateOne(
    { _id: new ObjectId("66829f9b98493c7d6f718595") },
    {
        $pop: { marks: -1 },
    }
);

// ? $pull
// removes item based on conditions

// *Que: Remove marks that are less than 70
db.scores.updateOne(
    { id: new ObjectId("66829f9b98493c7d6f718593") },
    {
        $pull: {
            marks: { $lt: 85 },
        },
    }
);

// *Que: Remove subject 'Science' of Smarika
db.scores.updateOne(
    { name: "Smarika" },
    {
        $pull: {
            points: { sub: "Science" },
        },
    }
);

// *Que: Change subject Science to Maths for Suyasha
db.scores.updateOne(
    { name: "Suyasha", "points.sub": "Science" },
    {
        $set: {
            "points.$.sub": "Maths",
        },
    }
);

// *Que: Pull item which has sub "Science" and marks less than 85 for Suyasha
db.scores.updateOne(
    {
        name: "Suyasha",
    },
    {
        $pull: {
            marks: { $lt: 85 },
            points: { sub: "Science" },
        },
    }
);

// ? $pullAll
// we give concrete value which needs to be removed
db.scores.updateOne(
    { _id: new ObjectId("66829b73e80fad4a6904fde1") },
    {
        $pullAll: {
            marks: [42, 1],
        },
    }
);

// *Que: Push 78, 67, 83 to marks of Rajan
db.scores.updateOne(
    {
        name: "Rajan",
    },
    {
        $push: {
            marks: { $each: [78, 67, 83] },
        },
    }
);

// ? $addToSet
// if the values are already present in an array, it doesnt push them again

db.scores.updateOne(
    { name: "Rajan" },
    {
        $addToSet: {
            marks: { $each: [78, 67, 83, 95, 52] },
        },
    }
);

db.scores.updateOne(
    { name: "Rajan" },
    {
        $addToSet: {
            points: { sub: "Social", point: 83 },
        },
    }
);

// ! Practice Questions

// *Que: Push an object with sub: Science and point: 92 on Suyasha
db.scores.updateOne(
    { name: "Rajan" },
    {
        $addToSet: {
            points: { sub: "Social", point: 83 },
        },
    }
);

// *Que: Push 57, 88, 96 on Suyasha's marks such that no value is duplicated
db.scores.updateOne(
    { name: "Suyasha" },
    {
        $addToSet: {
            marks: { $each: [57, 88, 96] },
        },
    }
);

// *Que: Change Rajan's lucky color to 'Orange'
db.scores.updateOne(
    { name: "Rajan" },
    {
        $set: {
            "luckyThings.color": "Orange",
        },
    }
);

// *Que: Pull last item from Rajan's points
db.scores.updateOne(
    { name: "Rajan" },
    {
        $pop: {
            luckyThings: 1,
        },
    }
);

// *Que: Decrease age of Smarika by 20
db.scores.updateOne(
    { name: "Smarika" },
    {
        $inc: {
            age: -20,
        },
    }
);

// *Que: Divide age of Rajan by 2
db.scores.updateOne(
    { name: "Smarika" },
    {
        $mul: {
            age: 1 / 2,
        },
    }
);

// *Que: Push {sub:"C Program",point:72} and {sub:"C++",point:65} on Smarika's points
db.scores.updateOne(
    { name: "Smarika" },
    {
        $push: {
            points: {
                $each: [
                    { sub: "C", point: 72 },
                    { sub: "C++", point: 65 },
                ],
            },
        },
    }
);

db.scores.find();
