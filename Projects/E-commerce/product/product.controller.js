import express from "express";
import { isSeller, isUser } from "../middleware/authenticate.middleware.js";
import validateReqBody from "../middleware/validate.req.body.js";
import { productDataValidationSchema } from "./product.validation.js";
import { addProduct, getProductList } from "./product.service.js";

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

export default router;
