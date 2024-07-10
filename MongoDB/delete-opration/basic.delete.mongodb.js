use("training");

// *Que: Delete movie whose name is 'Glee'
db.movies.deleteOne({
    name: "Glee",
});

db.movies.find();
