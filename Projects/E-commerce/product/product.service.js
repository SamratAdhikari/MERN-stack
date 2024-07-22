import Product from "./product.model.js";

export const getProductList = async (req, res) => {
    // find all products
    const products = await Product.find();

    // send response
    return res
        .status(200)
        .send({ message: "The Product list is ...", productList: products });
};

export const addProduct = async (req, res) => {
    // extract new product from req.body
    const newProduct = req.body;

    newProduct.sellerId = req.loggedInUserId;

    // save product
    await Product.create(newProduct);

    // send response
    return res
        .status(201)
        .send({
            message: `Product ${newProduct.name} added successfully`,
            productDetail: newProduct,
        });
};
