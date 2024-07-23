import express from "express";
import { isSeller, isUser } from "../middleware/authenticate.middleware.js";
import validateReqBody from "../middleware/validate.req.body.js";
import { productDataValidationSchema } from "./product.validation.js";
import {
    addProduct,
    deleteProduct,
    getProductList,
    updateProduct,
} from "./product.service.js";
import validateMongoIdFromParams from "../middleware/validate.mongo.id.js";

const router = express.Router();

// *GET: list all products
router.get("/product/list", isUser, getProductList);

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
