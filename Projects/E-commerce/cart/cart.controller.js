import express from "express";
import { isBuyer } from "../middleware/authenticate.middleware.js";
import validateReqBody from "../middleware/validate.req.body.js";
import { cartItemValidationSchema } from "./cart.validation.js";
import checkMongoIdValidity from "../utils/mongo.id.validity.js";
import Product from "../product/product.model.js";
import Cart from "./cart.model.js";
import validateMongoIdFromParams from "../middleware/validate.mongo.id.js";

const router = express.Router();

// *POST: add item to cart
router.post(
    "/cart/item/add",
    isBuyer,
    validateReqBody(cartItemValidationSchema),
    (req, res, next) => {
        // validate product id from req.body
        const { productId } = req.body;

        // check mongo id validity for productId
        const isValidProductId = checkMongoIdValidity(productId);

        // if not valid, throw error
        if (!isValidProductId) {
            return res.status(400).send({ message: "Invalid mongo id" });
        }

        // call next func
        next();
    },
    async (req, res) => {
        // extract cart item data from req.body
        const { productId, orderedQuantity } = req.body;

        // find product from productId
        const product = await Product.findOne({ _id: productId });

        // if not product, throw error
        if (!product) {
            return res.status(404).send({ message: "Product doesnt exist" });
        }

        // check if orderedQuantity doesnt exceed product quantity
        if (orderedQuantity > product.quantity) {
            return res.status(403).send({
                message: `Ordered quantity is more than product quantity`,
            });
        }

        // add item to cart
        await Cart.create({
            buyerId: req.loggedInUserId,
            productId: productId,
            orderedQuantity: orderedQuantity,
        });

        // send response
        return res
            .status(200)
            .send({ message: `Item ${product.name} added to the cart!` });
    }
);

// *DELETE: flush cart
router.delete("/cart/item/flush", isBuyer, async (req, res) => {
    // extract buyerId from req.loggedInUserId
    const buyerId = req.loggedInUserId;

    // remove all items from cart for that buyer
    await Cart.deleteMany({ buyerId });

    // send response
    return res.status(200).send({ message: "All items in the cart deleted!" });
});

// *DELETE: remove single item from cart
// id here is cartId
router.delete(
    "/cart/item/delete/:id",
    isBuyer,
    validateMongoIdFromParams,
    async (req, res) => {
        // extract cartId from req.params
        const cartId = req.params.id;

        // extract buyerId from req.loggedInUserId
        const buyerId = req.loggedInUserId;

        // check cart ownership
        const cart = await Cart.findOne({
            _id: cartId,
            buyerId: buyerId,
        });

        // if not cart, throw error
        if (!cart) {
            return res
                .status(404)
                .send({ message: "You are not the owner of this cart" });
        }

        // delete cart
        await Cart.deleteOne({ _id: cartId, buyerId: buyerId });

        // send response
        return res
            .status(200)
            .send({ message: `Cart item removed successfully` });
    }
);

export default router;
