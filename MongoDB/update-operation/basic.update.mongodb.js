const { ObjectId } = require("mongodb");

use("training");

// update operator always comes in the beginning unlike read operator

db.scores.find();

// ? $set
// changes the value of that field
// *Que: Change the name of Subham to Rajan
db.scores.updateOne(
    { name: "Subham" },
    {
        $set: {
            name: "Rajan",
        },
    }
);

// *Que: Change everyone's age to 99
// if not found, the code below adds the age field
db.scores.updateMany(
    {},
    {
        $set: {
            age: 99,
        },
    }
);

// ? $unset
// removes that field

// *Que: Remove age field from Rajan
db.scores.updateOne(
    { name: "Rajan" },
    {
        $unset: {
            age: "",
        },
    }
);

// *Que: Update age of Rajan to 30
db.scores.updateOne(
    { name: "Rajan" },
    {
        $set: {
            age: 30,
        },
    }
);

// *Que: Update age of Suyasha to 40
db.scores.updateOne(
    { name: "Suyasha" },
    {
        $set: {
            age: 40,
        },
    }
);

// ? $inc
// increases (or decreases) the value of a field by the specified value

// *Que: Increase everyone's age by 5
db.scores.updateMany(
    {},
    {
        $inc: {
            age: 5,
        },
    }
);

// *Que: Decrease all Rajan' age by 10
db.scores.updateMany(
    { name: "Rajan" },
    {
        $inc: {
            age: -10,
        },
    }
);

// ? $mul
// multiply (or divide) the value of the field by specified value

// *Que: Multiply the age of _id: 66829b73e80fad4a6904fde1 by 2
db.scores.updateOne(
    { _id: new ObjectId("66829b73e80fad4a6904fde1") },
    { $mul: { age: 2 } }
);

// *Que: Divide the age of _id: 66829b73e80fad4a6904fde0 by 3
db.scores.updateOne(
    { _id: new ObjectId("66829b73e80fad4a6904fde0") },
    {
        $mul: {
            age: 1 / 3,
        },
    }
);

// ? $rename
// rename the field

// *Que: Rename scores field to marks for all students
db.scores.updateMany({}, { $rename: { scores: "marks" } });

// ? $min, $max
// min: all the values greater than specified value are set to that value (min)
// min: all the values smaller than specified value are set to that value (max)

// *Que
db.scores.updateMany(
    {},
    {
        $min: { age: 16 },
    }
);

// add a new field
db.scores.updateMany(
    {},
    {
        $set: {
            luckyThings: {
                number: 7,
                color: "green",
            },
        },
    }
);

// *Que: Update lucky color of Suyasha to Blue
db.scores.updateOne(
    { name: "Suyasha" },
    { $set: { "luckyThings.color": "Blue" } }
);

// *Que: Update lucky number of Smarika to 8
db.scores.updateOne(
    { name: "Smarika" },
    {
        $set: {
            "luckyThings.number": 8,
        },
    }
);

// *Que: Increase the lucky number of Rajan by 900
db.scores.updateOne(
    { name: "Rajan" },
    {
        $inc: { age: 900 },
    }
);

db.scores.find();
