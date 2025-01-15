import express from "express";
import { isBuyer } from "../middleware/authenticate.middleware.js";
import validateReqBody from "../middleware/validate.req.body.js";
import { cartItemValidationSchema } from "./cart.validation.js";
import validateMongoIdFromParams from "../middleware/validate.mongo.id.js";
import {
    addItemToCart,
    deleteItemFromCart,
    flushCart,
    validateProductId,
    getCartItems, // Import the new service function
} from "./cart.service.js";

const router = express.Router();

// *POST: add item to cart
router.post(
    "/cart/item/add",
    isBuyer,
    validateReqBody(cartItemValidationSchema),
    validateProductId,
    addItemToCart
);

// *GET: show the cart items
router.get("/cart/", isBuyer, getCartItems);

// *DELETE: flush cart
router.delete("/cart/item/flush", isBuyer, flushCart);

// *DELETE: remove single item from cart
router.delete(
    "/cart/item/delete/:id",
    isBuyer,
    validateMongoIdFromParams,
    deleteItemFromCart
);

export default router;
