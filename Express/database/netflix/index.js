import express from "express";
import connectDB from "./connect.db.js";
import MovieDB from "./movie.model.js";

const app = express();

// to make app understand json
app.use(express.json());

// connect database
connectDB();

// ? API

// add movie api
app.post("/movie/add", async (req, res) => {
    // console.log(req.body);

    const newMovie = req.body;

    await MovieDB.create(newMovie);

    return res
        .status(200)
        .send({ message: `Movie ${newMovie.name} added ...` });
});

// get movie api
app.get("/movie/display", async (req, res) => {
    const movies = await MovieDB.find();

    return res
        .status(200)
        .send({ message: "Movies obtained!", movieList: movies });
});

// network port and server
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
