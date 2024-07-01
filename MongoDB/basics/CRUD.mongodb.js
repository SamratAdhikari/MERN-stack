use("training");

// ! To insert data:

// ? insertOne
db.student.insertOne({
    name: "Samrat",
    address: "Pokhara",
});

db.student.insertOne({
    name: "Ubermensch",
    address: "Germany",
});
db.student.insertOne({
    name: "MrYeti",
    address: "Poles",
});

// ? insertMany
db.student.insertMany([
    {
        name: "Naruto",
        address: "Hidden Leaf",
    },
    {
        name: "Killer Bee",
        address: "Hidden Stone",
    },
]);

// ! Read operation:

//? find
db.student.find();
db.student.find({ address: "" });
db.student.find({ _id: 101 });
db.student.find({ _id: ObjectId("668286d5b4804e111a05e1f2") });

//? fineOne
db.student.findOne({ address: "Pokhara" });

// ! Delete => remove data

//? deleteOne
db.student.deleteOne({ _id: ObjectId("668286d5b4804e111a05e1f3") });
db.student.deleteOne({ address: "Hidden Stone" });

//? deleteMany
db.student.deleteMany({ address: "Hidden Leaf" });

db.student.insertMany([
    {
        name: "Hinata",
        address: "Moon",
    },
    {
        name: "Pain",
        address: "Hidden Rain",
    },
]);

// ! Update => to change field data(s):

//? updateOne
db.student.updateOne(
    { name: "Pain" },
    {
        $set: {
            name: "Nagato",
        },
    }
);

//? updateMany
db.student.updateMany(
    { address: "Hidden Rain" },
    {
        $set: {
            address: "Heaven",
        },
    }
);

//? Upsert
db.student.updateOne(
    { name: "Samrat" },
    { $set: { address: "Seattle" } },
    { upsert: true }
);

db.student.find();

// ! creating another bucket
db.scores.insertMany([
    {
        name: "Subham",
        scores: [82, 85, 88],
        points: [
            {
                sub: "Social",
                point: 82,
            },
            {
                sub: "Science",
                point: 65,
            },
        ],
    },
    {
        name: "Suyasha",
        scores: [75, 88, 89],
        points: [
            {
                sub: "Social",
                point: 75,
            },
            {
                sub: "Science",
                point: 84,
            },
        ],
    },

    {
        name: "Smarika",
        scores: [42, 65, 88],
        points: [
            {
                sub: "Social",
                point: 67,
            },
            {
                sub: "Science",
                point: 89,
            },
        ],
    },
]);

// ! creating another bucket
db.employee.insertMany([
    { name: "Utsarga", income: 800, expense: 600 },
    { name: "Smriti", income: 900, expense: 1100 },
    { name: "Samrat", income: 1100, expense: 700 },
]);
