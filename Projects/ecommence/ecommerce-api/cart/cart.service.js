import Product from "../product/product.model.js";
import Cart from "./cart.model.js";
import checkMongoIdValidity from "../utils/mongo.id.validity.js";

// ! productId validity helper
export const validateProductId = (req, res, next) => {
    const { productId } = req.body;
    const isValidProductId = checkMongoIdValidity(productId);

    if (!isValidProductId) {
        return res.status(400).send({ message: "Invalid mongo id" });
    }

    next();
};

// ! add item to cart helper
export const addItemToCart = async (req, res) => {
    const { productId, orderedQuantity } = req.body;
    const product = await Product.findOne({ _id: productId });

    if (!product) {
        return res.status(404).send({ message: "Product doesn't exist" });
    }

    const cart = await Cart.findOne({ productId, buyerId: req.loggedInUserId });

    if (cart) {
        return res
            .status(409)
            .send({ message: "Item is already in the cart." });
    }

    if (orderedQuantity > product.quantity) {
        return res.status(403).send({
            message: "Ordered quantity exceeds available product quantity",
        });
    }

    await Cart.create({
        buyerId: req.loggedInUserId,
        productId: productId,
        orderedQuantity: orderedQuantity,
    });

    return res
        .status(200)
        .send({ message: `Item ${product.name} added to the cart!` });
};

// ! get all cart items helper
export const getCartItems = async (req, res) => {
    const { page, limit } = req.body;

    const skip = (page - 1) * limit;

    const data = await Cart.aggregate([
        {
            $match: {
                buyerId: req.loggedInUserId,
            },
        },
        {
            $lookup: {
                from: "products",
                localField: "productId",
                foreignField: "_id",
                as: "productData",
            },
        },
        {
            $project: {
                productId: 1,
                orderedQuantity: 1,
                productDetails: {
                    name: { $first: ["$productData.name"] },
                    brand: { $first: "$productData.brand" },
                    category: { $first: "$productData.category" },
                    totalQuantity: { $first: "$productData.quantity" },
                    image: { $first: "$productData.image" },
                    freeShipping: { $first: "$productData.freeShipping" },
                    price: { $first: "$productData.price" },
                },
            },
        },
        // { $skip: skip },
        // { $limit: limit },
    ]);

    return res.status(200).send({ message: "success", cartData: data });
};

// ! get item count helper
export const getItemCount = async (req, res) => {
    const cartItemCount = await Cart.find({ buyerId: req.loggedInUserId });
};

// ! flush cart helper
export const flushCart = async (req, res) => {
    const buyerId = req.loggedInUserId;
    await Cart.deleteMany({ buyerId });

    return res.status(200).send({ message: "All items in the cart deleted!" });
};

// ! delete single items helper
export const deleteItemFromCart = async (req, res) => {
    const cartId = req.params.id;
    const buyerId = req.loggedInUserId;
    const cart = await Cart.findOne({ _id: cartId, buyerId: buyerId });

    if (!cart) {
        return res
            .status(404)
            .send({ message: "You are not the owner of this cart item" });
    }

    await Cart.deleteOne({ _id: cartId, buyerId: buyerId });
    return res.status(200).send({ message: "Cart item removed successfully" });
};
