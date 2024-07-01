use("training");

// ! Array operators
// $all, $elemMatch, $size

// ? $all

// *Que: find movies whose genre includes both "Drama" and "Comedy"
db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Comedy" }] });

// using $all for the same question
db.movies.find(
    { genres: { $all: ["Thriller", "Comedy"] } },
    { name: 1, genres: 1, _id: 0 }
);

// another way if genres is an array
db.movies.find({ genres: ["Drama", "Comedy"] }, { name: 1, genres: 1, _id: 0 });

// ? $size
// *Que: find movies whose genres size is 3
db.movies.find({ genres: { $size: 3 } }, { name: 1, genres: 1, _id: 0 });
