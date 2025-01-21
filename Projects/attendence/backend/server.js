import express from "express";
import connectDB from "./db/connect.db.js";
import cors from "cors";

// initialization
const app = express();
const PORT = process.env.PORT || 8000;

// CORS setup
app.use(
    cors({
        origin: "*",
    })
);

app.use(express.json());

// connect to database
await connectDB();

app.listen(PORT, () => {
    console.log(`App running at port ${PORT}`);
});
