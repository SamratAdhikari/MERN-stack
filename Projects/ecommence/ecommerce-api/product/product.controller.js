import express from "express";
import {
    isBuyer,
    isSeller,
    isUser,
} from "../middleware/authenticate.middleware.js";
import validateReqBody from "../middleware/validate.req.body.js";
import {
    paginationDataValidationSchema,
    productDataValidationSchema,
} from "./product.validation.js";
import {
    addProduct,
    deleteProduct,
    getBuyerProducts,
    getProductDetail,
    getProductList,
    getSellerProducts,
    updateProduct,
} from "./product.service.js";
import validateMongoIdFromParams from "../middleware/validate.mongo.id.js";

const router = express.Router();

// *GET: list all products
router.get("/product/list", isUser, getProductList);

// *GET: get product detail by id
router.get("/product/detail/:id", isUser, getProductDetail);

// *POST: list products for sellers
router.post(
    "/product/seller/list",
    isSeller,
    validateReqBody(paginationDataValidationSchema),
    getSellerProducts
);

// *POST: lust products for all buyers
router.post(
    "/product/buyer/list",
    isBuyer,
    validateReqBody(paginationDataValidationSchema),
    getBuyerProducts
);

// *POST: add a product
router.post(
    "/product/add",
    isSeller,
    validateReqBody(productDataValidationSchema),
    addProduct
);

// *DELETE: delete product
router.delete(
    "/product/delete/:id",
    isSeller,
    validateMongoIdFromParams,
    deleteProduct
);

// *PUT: update product data
router.put(
    "/product/update/:id",
    isSeller,
    validateMongoIdFromParams,
    validateReqBody(productDataValidationSchema),
    updateProduct
);

export default router;
