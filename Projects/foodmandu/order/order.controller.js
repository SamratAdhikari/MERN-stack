import express from "express";
import {
    addOrder,
    validateOrderData,
    getOrderList,
    validateOrderId,
    validateOrderExistence,
    getOrder,
    deleteOrder,
    updateOrder,
} from "./order.service.js";

const router = express.Router();

// *POST: add a new order
router.post("/add", validateOrderData, addOrder);

// *GET: display all the orders
router.get("/list", getOrderList);

// *GET: display order detail by id
router.get("/detail/:id", validateOrderId, validateOrderExistence, getOrder);

// *DELETE: delete order by id
router.delete(
    "/delete/:id",
    validateOrderId,
    validateOrderExistence,
    deleteOrder
);

// *PUT: update order data by id
router.put(
    "/update/:id",
    validateOrderId,
    validateOrderExistence,
    validateOrderData,
    updateOrder
);

export default router;
