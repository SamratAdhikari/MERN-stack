import mongoose from "mongoose";

// set schema
const cartSchema = new mongoose.Schema({
    buyerId: {
        type: mongoose.isValidObjectId(),
        ref: "User",
        required: true,
    },
    productId: {
        type: mongoose.isValidObjectId(),
        ref: "Product",
        required: true,
    },
    orderedQuantity: {
        type: Number,
        min: 1,
        required: true,
    },
});

// create table
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
