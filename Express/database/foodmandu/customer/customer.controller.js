import express from "express";
import Customer from "./customer.model.js";
import mongoose from "mongoose";

const router = express.Router();

// ? add customer
// 200 - ok
// 201 - okay plus created
router.post("/customer/add", async (req, res) => {
    // extract new customer from req.body
    const newCustomer = req.body;

    // insert customer data to the database
    await Customer.create(newCustomer);

    return res
        .status(201)
        .send({ message: `New Customer ${newCustomer.email} added ...` });
});

// ? get customer list
router.get("/customer/list", async (req, res) => {
    const customers = await Customer.find();
    return res.status(200).send({
        message: "Successfully retrieved customer list ...",
        customerList: customers,
    });
});

// ? get customer detail by _id
router.get("/customer/detail/:id", async (req, res) => {
    // step1: extract customer id from req.params
    const customerId = req.params.id;

    // step2: check for mongo id validity
    const isValidId = mongoose.isValidObjectId(customerId);

    // step3: if not valid, throw error
    if (!isValidId) {
        return res.status(400).send({ message: "Invalid customer Id ..." });
    }

    // step4: find customer using customerId
    const customerDetail = await Customer.findOne({
        _id: customerId,
    });

    // step5: if not found, throw error
    if (!customerDetail) {
        return res.status(400).send({ message: "Cutomer not found ... " });
    }

    return res
        .status(200)
        .send({
            message: "Customer detail retrieved successfully",
            customerDetail: customerDetail,
        });
});

export default router;
