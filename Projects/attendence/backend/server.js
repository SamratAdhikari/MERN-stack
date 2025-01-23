import express from "express";
import userRoutes from "./user/user.controller.js";
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

// register routes
app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log(`App running at port ${PORT}`);
});
