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
    getCartItems,
    getItemCount, // Import the new service function
} from "./cart.service.js";
import { paginationDataValidationSchema } from "../product/product.validation.js";

const router = express.Router();

// *POST: add item to cart
router.post(
    "/cart/item/add",
    isBuyer,
    validateReqBody(cartItemValidationSchema),
    validateProductId,
    addItemToCart
);

// *POST: show the cart items
// ? list cart item
router.post(
    "/cart/list",
    isBuyer,
    validateReqBody(paginationDataValidationSchema),
    getCartItems
);

// *GET: get number of items in the cart
router.get("/cart/item/count", isBuyer, getItemCount);

// *DELETE: flush cart
router.delete("/cart/flush", isBuyer, flushCart);

// *DELETE: remove single item from cart
router.delete(
    "/cart/item/delete/:id",
    isBuyer,
    validateMongoIdFromParams,
    deleteItemFromCart
);

export default router;
