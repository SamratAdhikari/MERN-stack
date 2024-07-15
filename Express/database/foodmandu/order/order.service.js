import mongoose from "mongoose";
import Order from "./order.model.js";
import Yup from "yup";
import Customer from "../customer/customer.model.js";
import Food from "../food/food.model.js";

// * check if the order data aligns with the table rule
const validateOrderData = async (req, res, next) => {
    const data = req.body;

    const addToSchema = Yup.object({
        customerEmail: Yup.string().email().trim(),
        foodName: Yup.string().trim(),
        quantity: Yup.number(),
        orderDate: Yup.date().default(() => new Date()),
    });

    try {
        const validateData = await addToSchema.validate(data);
        req.body = validateData;
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }

    next();
};

// * check if the order id is correct
const validateOrderId = (req, res, next) => {
    // extract id from params
    const id = req.params.id;

    // check for mongo id validation
    const isValidId = mongoose.isValidObjectId(id);

    // if not valid, throw error
    if (!isValidId) {
        return res.status(400).send({ message: "Invalid order id" });
    }

    // call next function
    next();
};

// * check if the order exists in the database or not
const validateOrderExistence = async (req, res, next) => {
    // extract food id from req.params
    const orderId = req.params.id;

    // find food using the id
    const order = await Order.findById(orderId);

    // if not found, throw error
    if (!order) {
        return res.status(404).send({ message: "Order not found" });
    }

    // send the order to request so that next func can access it directly
    req.orderDetail = order;

    // call next function
    next();
};

// * add new order
const addOrder = async (req, res) => {
    // extract data from req.body
    const { customerEmail, foodName, quantity, orderDate } = req.body;

    // get customerID and foodID from customerEmail and foodName
    const customer = await Customer.findOne({ email: customerEmail });
    const food = await Food.findOne({ name: foodName });

    // if not exists
    if (!customer || !food) {
        return res
            .status(400)
            .send({ message: "Invalid customer email or food name" });
    }

    // insert into database
    await Order.create({
        customerId: customer._id,
        foodId: food._id,
        customerEmail,
        foodName,
        quantity,
        orderDate,
    });

    // send res
    return res.status(200).send({ message: `A new order added!` });
};

// * get all order list
const getOrderList = async (req, res) => {
    const orderList = await Order.find();

    return res.status(200).send({ message: "The order list is:", orderList });
};

// * get order detail by id
const getOrder = (req, res) => {
    return res.status(200).send({
        message: "The detail of the order is:",
        foodItem: req.orderDetail,
    });
};

// * delete order by id
const deleteOrder = async (req, res) => {
    // extract id from req.params.id
    const orderId = req.params.id;

    // delete order
    await Order.findByIdAndDelete(orderId);

    // send response
    return res.status(200).send({ message: "Order deleted!" });
};

// * update order data by id
const updateOrder = async (req, res) => {
    // extract order id from req.params
    const orderId = req.params.id;

    // get new data from req.body
    const newOrderData = req.body;

    // update order
    const order = await Order.findByIdAndUpdate(orderId, newOrderData, {
        new: true,
    });

    // send response
    return res
        .status(200)
        .send({ message: "Order updated!", orderDetail: order });
};

export {
    validateOrderData,
    validateOrderId,
    addOrder,
    getOrderList,
    validateOrderExistence,
    getOrder,
    deleteOrder,
    updateOrder,
};
