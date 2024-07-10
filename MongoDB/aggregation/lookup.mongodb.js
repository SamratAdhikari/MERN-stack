const { ObjectId } = require("mongodb");

use("training");

// ! $lookup
// to query between collections

// db.person.insertMany([
//     {
//         firstname: "Rohan",
//         lastname: "Bhandari",
//         address: "Sydney",
//     },

//     {
//         firstname: "Rohil",
//         lastname: "Khadka",
//         address: "Udaypur",
//     },

//     {
//         firstname: "Enish",
//         lastname: "Shrestha",
//         address: "Kathmandu",
//     },
// ]);

// db.vehicle.insertMany([
//     {
//         model: "X",
//         brand: "Tesla",
//         builtYear: 2021,
//         ownerId: new ObjectId("668bb3169f43abd35c154e37")
//     },
//     {
//         model: "Mustang GT 1969",
//         brand: "Ford",
//         builtYear: 1969,
//         ownerId: new ObjectId("668bb3169f43abd35c154e38")
//     },
//     {
//         model: "Creta",
//         brand: "Hyundai",
//         builtYear: 2024,
//         ownerId: new ObjectId("668bb3169f43abd35c154e39")
//     },

// ]);

db.vehicle.aggregate([
    {
        $match: {
            model: "Mustang GT 1969",
        },
    },
    {
        $lookup: {
            from: "person",
            localField: "ownerId",
            foreignField: "_id",
            as: "ownerDetails",
        },
    },
    {
        $project: {
            model: 1,
            brand: 1,
            // ownerFirstName: {
            //     $first: "$ownerDetails.firstname",
            // },
            // ownerLastName: {
            //     $first: "$ownerDetails.lastname",
            // },
            ownerFullName: {
                $concat: [
                    { $first: "$ownerDetails.firstname" },
                    " ",
                    { $first: "$ownerDetails.lastname" },
                ],
            },
        },
    },
    // {
    //     $project: {
    //         model: 1,
    //         brand: 1,
    //         ownerFullName: {
    //             $concat: ["$ownerFirstName", " ", "$ownerLastName"],
    //         },
    //     },
    // },
]);

db.person.aggregate([
    {
        $match: {
            firstname: "Enish",
        },
    },
    {
        $lookup: {
            from: "vehicle",
            localField: "_id",
            foreignField: "ownerId",
            as: "vehicleDetails",
        },
    },
    {
        $project: {
            firstname: 1,
            carModel: {
                $arrayElemAt: ["$vehicleDetails.model", 0],
            },
            carBrand: {
                $arrayElemAt: ["$vehicleDetails.brand", 0],
            },
        },
    },
]);

// db.vehicle.insertOne({
//     model: "Y",
//     brand: "Tesla",
//     builtYear: 2020,
//     ownerId: new ObjectId("668bb3169f43abd35c154e39"),
// });

// db.person.aggregate([
//     {
//         $match: {
//             firstname: "Enish",
//         },
//     },
//     {
//         $lookup: {
//             from: "vehicle",
//             localField: "_id",
//             foreignField: "ownerId",
//             as: "vehicleData",
//         },
//     },
//     {
//         $project: {
//             firstname: 1,
//             lastname: 1,
//             models: "$vehicleData.model",
//             "vehicleData.model": 1,
//             "vehicleData.brand": 1,
//             lastCarBrand: {
//                 $last: "$vehicleData.brand",
//             },
//         },
//     },
// ]);

// *Que: Find the owner of Mustang GT 1969
db.vehicle.aggregate([
    {
        $match: {
            model: "Mustang GT 1969",
        },
    },
    {
        $lookup: {
            from: "person",
            localField: "ownerId",
            foreignField: "_id",
            as: "ownerDetails",
        },
    },
    {
        $project: {
            name: {
                $concat: [
                    { $first: "$ownerDetails.firstname" },
                    " ",
                    { $first: "$ownerDetails.lastname" },
                ],
            },
        },
    },
]);
