import mongoose from "mongoose";
import Order from "./order.model.js";
import Yup from "yup";
import Customer from "../customer/customer.model.js";
import Food from "../food/food.model.js";

// * check if the order data aligns with the table rule
const validateOrderData = async (req, res, next) => {
    const data = req.body;

    const addToSchema = Yup.object({
        customerEmail: Yup.string().email().trim().required(),
        foodName: Yup.string().trim().required(),
        quantity: Yup.number().required().min(1),
        orderDate: Yup.date()
            .default(() => new Date())
            .required(),
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
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).send({ message: "Invalid order id" });
    }
    next();
};

// * check if the order exists in the database or not
const validateOrderExistence = async (req, res, next) => {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    if (!order) {
        return res.status(404).send({ message: "Order not found" });
    }
    req.orderDetail = order;
    next();
};

// * add new order
const addOrder = async (req, res) => {
    const { customerEmail, foodName, quantity, orderDate } = req.body;
    const customer = await Customer.findOne({ email: customerEmail });
    const food = await Food.findOne({ name: foodName });

    if (!customer || !food) {
        return res
            .status(400)
            .send({ message: "Invalid customer email or food name" });
    }

    const totalPrice = food.price * quantity;

    await Order.create({
        customerId: customer._id,
        foodId: food._id,
        quantity,
        orderDate,
        totalPrice,
    });

    res.status(200).send({ message: "A new order added!" });
};

// * get all order list
const getOrderList = async (req, res) => {
    const orderList = await Order.aggregate([
        {
            $lookup: {
                from: "customers",
                localField: "customerId",
                foreignField: "_id",
                as: "customerDetail",
            },
        },
        {
            $lookup: {
                from: "foods",
                localField: "foodId",
                foreignField: "_id",
                as: "foodDetail",
            },
        },
        {
            $unwind: "$customerDetail",
        },
        {
            $unwind: "$foodDetail",
        },
    ]);
    res.status(200).send({ message: "The order list is:", orderList });
};

// * get order detail by id
const getOrder = async (req, res) => {
    const orderId = req.params.id;

    const orderDetail = await Order.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(orderId) } },
        {
            $lookup: {
                from: "customers",
                localField: "customerId",
                foreignField: "_id",
                as: "customerDetail",
            },
        },
        {
            $lookup: {
                from: "foods",
                localField: "foodId",
                foreignField: "_id",
                as: "foodDetail",
            },
        },
        {
            $unwind: "$customerDetail",
        },
        {
            $unwind: "$foodDetail",
        },
    ]);
    res.status(200).send({
        message: "The detail of the order is:",
        orderDetail: orderDetail,
    });
};

// * delete order by id
const deleteOrder = async (req, res) => {
    const orderId = req.params.id;
    await Order.findByIdAndDelete(orderId);
    res.status(200).send({ message: "Order deleted!" });
};

// * update order data by id
const updateOrder = async (req, res) => {
    const orderId = req.params.id;

    const { customerEmail, foodName, quantity, orderDate } = req.body;

    const customer = await Customer.findOne({ email: customerEmail });
    const food = await Food.findOne({ name: foodName });

    if (!customer || !food) {
        return res
            .status(400)
            .send({ message: "Invalid customer email or food name" });
    }

    const totalPrice = food.price * quantity;

    const updatedOrderData = {
        customerId: customer._id,
        foodId: food._id,
        quantity,
        orderDate,
        totalPrice,
    };

    await Order.findByIdAndUpdate(orderId, updatedOrderData, { new: true });

    const updatedOrderDetail = await Order.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(orderId) } },
        {
            $lookup: {
                from: "customers",
                localField: "customerId",
                foreignField: "_id",
                as: "customerDetail",
            },
        },
        {
            $lookup: {
                from: "foods",
                localField: "foodId",
                foreignField: "_id",
                as: "foodDetail",
            },
        },
        {
            $unwind: "$customerDetail",
        },
        {
            $unwind: "$foodDetail",
        },
    ]);
    res.status(200).send({
        message: "Order updated!",
        orderDetail: updatedOrderDetail,
    });
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
