use("training");

// ! comparision operator
// $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin
db.movies.find();

// ? $eq : equals to
// *Que: find a movie whose name is 'Glee'
// name === 'Glee'
// second {} denotes that i only want to select that key
// key 1 means selects & key 0 means deselect
db.movies.find({ name: { $eq: "Glee" } }, { name: 1, _id: 0, genres: 1 });

// shortcut
db.movies.find({ name: "Glee" }, { name: 1, _id: 0, genres: 1 });

// ? $gt : greater than
// *Que: find movies whose runtime is greater than 70
db.movies.find({ runtime: { $gt: 70 } }, { name: 1, runtime: 1 });

// *Que: find the movies whose rating is greater than 9
db.movies.find(
    { "rating.average": { $gte: 9 } },
    { name: 1, avgRating: "$rating.average" }
);

// ? $ne : not equals to
// *Que: get all movies expect the one with id: 1
db.movies.find({ id: { $ne: 1 } }, { name: 1, _id: 1 });
// another way
db.movies.find({ id: { $not: { $eq: 1 } } }, { name: 1, _id: 0, id: 1 });
