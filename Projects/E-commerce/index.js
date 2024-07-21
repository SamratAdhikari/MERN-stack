import express from "express";
import connectDB from "./database-connection/db.connect.js";
import userRoutes from "./user/user.controller.js";

const app = express();

// make app understand JSON
app.use(express.json());

// enable CORS

// connect database
await connectDB();

// register routes
app.use(userRoutes);

// handle global error

// network port and server
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT} ...`);
});
