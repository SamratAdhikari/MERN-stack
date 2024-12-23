import Product from "../product/product.model.js";
import Cart from "./cart.model.js";
import checkMongoIdValidity from "../utils/mongo.id.validity.js";

// ! productId validity helper
export const validateProductId = (req, res, next) => {
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
};

// ! add item to cart helper
export const addItemToCart = async (req, res) => {
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
};

// ! flush cart helper
export const flushCart = async (req, res) => {
    // extract buyerId from req.loggedInUserId
    const buyerId = req.loggedInUserId;

    // remove all items from cart for that buyer
    await Cart.deleteMany({ buyerId });

    // send response
    return res.status(200).send({ message: "All items in the cart deleted!" });
};

// ! delete single items helper
export const deleteItemFromCart = async (req, res) => {
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
    return res.status(200).send({ message: `Cart item removed successfully` });
};
