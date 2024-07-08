use("training");

// ! Pipeline Stage

// ? $match
db.movies.aggregate([
    {
        $match: {
            name: "Berserk",
        },
    },
]);

// ? $aggregate
db.movies.aggregate([
    {
        $match: {
            genres: "Action",
            "rating.average": { $gt: 9 },
        },
    },

    {
        $project: {
            _id: 0,
            name: 1,
            genres: 1,
            rating: 1,
        },
    },
]);

// *Que: Find movies whose genres is "Crime" or network country is
db.movies.aggregate([
    {
        $match: {
            $or: [{ genres: "Crime" }, { "network.country": "United States" }],
        },
    },
    {
        $project: {
            name: 1,
            genres: 1,
            networkCountry: "$network.country.name",
        },
    },
]);

// *Que: Find movies whose genres include both "Drama" and "Comedy" and project "name" and "genre" field
db.movies.aggregate([
    {
        $match: {
            genres: { $all: ["Drama", "Comedy"] },
        },
    },
    {
        $project: {
            _id: 0,
            name: 1,
            genres: 1,
        },
    },
]);

// ? $sort
// arranges data in either ascending or descending order
// 1: ascending sort
// -1: descending sort
// returns only top 20 data

db.movies.aggregate([
    {
        $match: {},
    },
    {
        $sort: {
            id: -1,
            name: 1,
        },
    },

    {
        $project: {
            _id: 0,
            id: 1,
            name: 1,
        },
    },
]);

db.movies.aggregate([
    {
        $match: {},
    },
    {
        $sort: {
            name: 1,
        },
    },
    {
        $project: {
            name: 1,
        },
    },
]);

// ? $limit
// number of documents to be returned
db.movies.aggregate([
    {
        $match: {},
    },
    {
        $sort: {
            id: 1,
        },
    },
    {
        $limit: 40,
    },
    {
        $project: {
            _id: 0,
            id: 1,
            name: 1,
        },
    },
]);

// *Que: Find 5 movies whose rating is greater than 8 and id is sorted in ascending order
db.movies.aggregate([
    {
        $match: {
            "rating.average": { $gt: 8 },
        },
    },
    {
        $sort: {
            id: 1,
        },
    },
    {
        $limit: 5,
    },
    {
        $project: {
            _id: 0,
            id: 1,
            name: 1,
            "rating.average": 1,
        },
    },
]);

// ? $skip

let page = 2;
let limit = 5;
let skip = (page - 1) * limit;

db.movies.aggregate([
    {
        $match: {},
    },
    {
        $sort: {
            id: 1,
        },
    },
    {
        $skip: skip,
    },
    {
        $limit: limit,
    },
    {
        $project: {
            _id: 0,
            id: 1,
            name: 1,
        },
    },
]);
