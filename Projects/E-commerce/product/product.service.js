import Product from "./product.model.js";
import checkMongoIdsEquality from "../utils/mongo.id.equality.js";

// ! list product helper
export const getProductList = async (req, res) => {
    // find all products
    const products = await Product.find();

    // send response
    return res
        .status(200)
        .send({ message: "The Product list is ...", productList: products });
};

// ! add product helper
export const addProduct = async (req, res) => {
    // extract new product from req.body
    const newProduct = req.body;

    newProduct.sellerId = req.loggedInUserId;

    // save product
    await Product.create(newProduct);

    // send response
    return res.status(201).send({
        message: `Product ${newProduct.name} added successfully`,
        productDetail: newProduct,
    });
};

// ! delete product helper
export const deleteProduct = async (req, res) => {
    // extract product id from req.params
    const productId = req.params.id;

    // find product using productId
    const product = await Product.findById(productId);

    // if not found, throw error
    if (!product) {
        return res.status(404).send({ message: `Product not found` });
    }

    // check if the loggedInUserId is owner of the product
    const isProductOwner = checkMongoIdsEquality(
        product.sellerId,
        req.loggedInUserId
    );

    // if not owner, throw error
    if (!isProductOwner) {
        return res
            .status(403)
            .send({ message: "Error: Only owner can delete the product" });
    }

    // delete product
    await Product.findByIdAndDelete(productId);

    // send response
    res.status(200).send({
        message: `Product ${product.name} deleted successfully`,
    });
};

// ! update product helper
export const updateProduct = async (req, res) => {
    // extract product id from req.params
    const productId = req.params.id;

    // find product using productId
    const product = await Product.findById(productId);

    // if not found, throw error
    if (!product) {
        return res.status(404).send({ message: `Product not found` });
    }

    // check if the loggedInUserId is owner of the product
    const isProductOwner = checkMongoIdsEquality(
        product.sellerId,
        req.loggedInUserId
    );

    // if not owner, throw error
    if (!isProductOwner) {
        return res
            .status(403)
            .send({ message: "Error: Only owner can delete the product" });
    }

    // extract new data from the req.body
    const newData = req.body;

    // edit product
    await Product.updateOne(
        { _id: productId },
        {
            $set: { ...newData },
        }
    );

    // send response
    return res.status(200).send({
        message: `Product ${product.name} edited successfully!`,
        newProductDetails: newData,
    });
};
