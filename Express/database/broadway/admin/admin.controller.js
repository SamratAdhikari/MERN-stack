import express from "express";
import adminDataValidation from "./admin.validation.js";
import Admin from "./admin.model.js";
import bcrypt from "bcrypt";
import validateReqBody from "./validation.middleware.js";

const router = express.Router();

// *POST: register admin
router.post(
    "/admin/register",
    validateReqBody(adminDataValidation),
    async (req, res) => {
        // extract new admin from req.body
        const newAdmin = req.body;

        // find admin with provided email
        const admin = await Admin.findOne({ email: newAdmin.email });

        // if admin exist, throw error
        if (admin) {
            return res.status(409).send({ message: "Admin already exists" });
        }

        // generate hashed password
        const plainPwd = newAdmin.password;
        const saltRound = 10; // randomness
        const hashPwd = await bcrypt.hash(plainPwd, saltRound);

        newAdmin.password = hashPwd;

        // register admin
        await Admin.create(newAdmin);

        return res.status(201).send({ message: "Registered ...", newAdmin });
    }
);

export default router;
