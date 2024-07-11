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

    return res.status(200).send({
        message: "Customer detail retrieved successfully",
        customerDetail: customerDetail,
    });
});

// ? delete a customer by Id
router.delete("/customer/delete/:id", async (req, res) => {
    // extract customer id from req.params
    const customerId = req.params.id;

    // check for mongo id validity
    const isValidId = mongoose.isValidObjectId(customerId);
    console.log(isValidId);

    // if not valid mongo id, throw error
    if (!isValidId) {
        return res.status(400).send({ message: "Invalid customer id" });
    }

    // find customer using customer id
    const customer = await Customer.findById(customerId);
    console.log(customer);

    // if not customer, throw error
    if (!customer) {
        return res.status(400).send({ message: "Customer not found" });
    }

    // delete customer
    await Customer.deleteOne({
        _id: customerId,
    });

    // send res
    return res
        .status(200)
        .send(`Customer ${customer.email} deleted successfully.`);
});

// edit customer by id
router.put("/customer/edit/:id", async (req, res) => {
    // extract customer id from req.params
    const customerId = req.params.id;

    // check for mongo id validity
    const isValidId = mongoose.isValidObjectId(customerId);

    // if not valid mongo id, throw error
    if (!isValidId) {
        return res.status(400).send("Invalid customer id");
    }

    // find customer
    const customer = await Customer.findById(customerId);

    // if not customer, throw error
    if (!customer) {
        return res.status(400).send("Customer not found");
    }

    // extract new values from req.body
    const newData = req.body;

    // update customer
    await Customer.updateOne(
        { _id: customerId },
        {
            $set: {
                ...newData,
            },
        }
    );

    // send res

    return res.status(200).send({
        message: `Customer ${customer.email} updated successfully`,
    });
});

export default router;
