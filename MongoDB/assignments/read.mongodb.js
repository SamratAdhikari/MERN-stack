use("training");
db.movies.find();

// ? Find movies whose status is "Ended"
db.movies.find({ status: "Ended" }, { name: 1, status: 1, _id: 0 });

// ? Find movies whose rating is 9
db.movies.find(
    { "rating.average": 9 },
    { name: 1, avgRating: "$rating.average", _id: 0 }
);

// ? Find movies whose rating is greater than 7 and less than 9
db.movies.find(
    {
        "rating.average": { $lt: 9, $gt: 7 },
    },
    { name: 1, avgRating: "$rating.average", _id: 0 }
);

// ? Find movies whose genres is Thriller
db.movies.find({ genres: "Thriller" }, { name: 1, genres: 1, _id: 0 });

// ? Find movies whose status is Running
db.movies.find({ status: "Running" }, { name: 1, status: 1, _id: 0 });

// ? Find movies whose status is Ended and runtime is 60
db.movies.find(
    { status: "Running", runtime: 60 },
    { name: 1, runtime: 1, status: 1, _id: 0 }
);

// ? Find movies whose weight is 75 and network country is Canada

db.movies.find(
    {
        $and: [{ weight: 75 }, { "network.country.name": "Canada" }],
    },
    { name: 1, weight: 1, country: "$network.country.name", _id: 0 }
);

// ? Find movies whose weight is 96 or runtime is 60
db.movies.find(
    {
        $or: [{ weight: 96 }, { runtime: 60 }],
    },
    { _id: 0, name: 1, weight: 1, runtime: 1 }
);

// ? Find movies whose rating average is not 9
db.movies.find(
    { "rating.average": { $ne: 9 } },
    { _id: 0, name: 1, avgRating: "$rating.average" }
);

// ? Find movies whose rating average is either 6 or 6.5
// or 9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8
db.movies.find(
    {
        "rating.average": { $in: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 6.1, 7.8] },
    },
    { _id: 0, name: 1, avgRating: "$rating.average" }
);

// ? Find movies whose status is neither "Ended" nor genres is "Action"
db.movies.find(
    { $nor: [{ status: "Ended" }, { genres: "Action" }] },
    { name: 1, genres: 1, _id: 0, status: 1 }
);

// ? Find movies whose genres includes 'Drama' , "Comedy" and "Action"
db.movies.find(
    { genres: { $all: ["Drama", "Comedy", "Action"] } },
    { name: 1, genres: 1, _id: 0, status: 1 }
);

// ? Find movies whose genre size is 3
db.movies.find({ genres: { $size: 3 } }, { name: 1, genres: 1, _id: 0 });
