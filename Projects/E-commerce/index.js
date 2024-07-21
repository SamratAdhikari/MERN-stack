import express from "express";
import connectDB from "./database-connection/db.connect.js";

const app = express();

// make app understand JSON
app.use(express.json());

// TODO: enable CORS

// connect database
await connectDB();

// register routes

// TODO: handle global error

// network port and server
// console.log(process);
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT} ...`);
});
