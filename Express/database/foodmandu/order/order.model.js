import mongoose from "mongoose";

// set
const orderSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    },
    foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
        required: true,
    },
    customerEmail: {
        type: String,
        required: true,
    },
    foodName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
});

// create table
const Order = mongoose.model("Order", orderSchema);

export default Order;
