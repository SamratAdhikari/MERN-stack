import express from "express";
import connectDB from "./connect.db.js";
import songRoutes from "./song/song.controller.js";

// initialize the app
const app = express();

// make the app understand JSON data
app.use(express.json());

// connect database
connectDB();

// routes
app.use(songRoutes);

// network port and server
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`App is listening on port ${8000}`);
});
