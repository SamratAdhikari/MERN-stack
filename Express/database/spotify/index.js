import express from "express";
import mongoose from "mongoose";

// initialize the app
app = express();

// make the app understand JSON data
app.use(express.json());

// connect database

// network port and server
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`App is listening on port ${8000}`);
});
