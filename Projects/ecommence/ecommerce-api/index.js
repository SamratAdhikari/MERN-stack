import express from "express";
import connectDB from "./database-connection/db.connect.js";
import userRoutes from "./user/user.controller.js";
import productRoutes from "./product/product.controller.js";
import cartRoutes from "./cart/cart.controller.js";
import cors from "cors";

const app = express();

// CORS setup
app.use(
    cors({
        origin: "*",
    })
);

// make app understand JSON
app.use(express.json());

// enable CORS

// connect database
await connectDB();

// register routes
app.use(userRoutes);
app.use(productRoutes);
app.use(cartRoutes);

// handle global error

// network port and server
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT} ...`);
});
