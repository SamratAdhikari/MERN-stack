use("training");

// db.learner.insertOne({
//     name: "Smriti",
//     scores: [
//         {
//             sub: "Computer Network",
//             marks: 70,
//         },
//         {
//             sub: "Project Management",
//             marks: 60,
//         },
//         {
//             sub: "Organization Management",
//             marks: 65,
//         },
//     ],
// });

db.learner.aggregate([
    {
        $match: {},
    },
    {
        $unwind: {
            path: "$scores",
        },
    },
    {
        $sort: {
            "scores.marks": -1,
        },
    },
]);
