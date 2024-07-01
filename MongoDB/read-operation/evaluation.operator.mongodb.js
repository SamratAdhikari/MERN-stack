use("training");

// ! evaluation operator
// $regex, $expr

// ? regex
db.movies.find({ name: { $regex: "top model", $options: "i" } });

db.movies.find({ summary: { $regex: "dark comical", $options: "i" } });

// ? expr
// comparision between two fields

// * Find employee whose expense is greater than income
// expense > income
db.employee.find({ $expr: { $gt: ["$expense", "$income"] } });
