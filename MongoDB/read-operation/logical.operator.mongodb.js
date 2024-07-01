use("training");

// ! Logical operators
// $and, $or, $not, $nor

// ? $and
// *Que: find movies whose genre is 'Action' and rating is greater than 7
db.movies.find(
    { $and: [{ genres: "Action" }, { "rating.average": { $gt: 7 } }] },
    { _id: 0, name: 1, genres: 1, avgRating: "$rating.average" }
);
// another way
db.movies.find(
    { genres: "Action", "rating.average": { $gt: 7 } },
    { _id: 0, name: 1, genres: 1, avgRating: "$rating.average" }
);

// ? $or
// *Que: find movies whose genres is "Crime" or network country is "United States"
db.movies.find(
    {
        $or: [{ genres: "Crime" }, { "network.country.name": "United States" }],
    },
    { _id: 0, name: 1, genres: 1, "network.country.name": 1 }
);

// ? $nor
// *Que: find movies whose rating is neither greater than 7 nor it genre is "Drama"
db.movies.find(
    {
        $nor: [{ "rating.average": { $gt: 7 } }, { genres: "Drama" }],
    },
    { name: 1, _id: 0, genres: 1, "rating.average": 1 }
);
