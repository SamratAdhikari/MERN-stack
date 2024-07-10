import express from "express";
import connectDB from "./connect.db.js";
import customerRoutes from "./customer/customer.controller.js";

const app = express();

// make app understand JSON
app.use(express.json());

// database connection
connectDB();

// register routes
app.use(customerRoutes);

// network port and server
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
