use("training");

// ! evaluation operator
// $regex, $expr

// ? regex
db.movies.find({ name: { $regex: "top model", $options: "i" } });

db.movies.find({ summary: { $regex: "dark comical", $options: "i" } });
