import express from "express";
import connectDB from "./connect.db.js";
import customerRoutes from "./customer/customer.controller.js";
import restaurantRoutes from "./restaurant/restaurant.controller.js";
import foodRoutes from "./food/food.controller.js";
import orderRoutes from "./order/order.controller.js";

const app = express();

// make app understand JSON
app.use(express.json());

// database connection
connectDB();

// register routes
app.use(customerRoutes);
app.use("/restaurant", restaurantRoutes);
app.use("/food", foodRoutes);
app.use("/order", orderRoutes);

// network port and server
const PORT = 8001;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
