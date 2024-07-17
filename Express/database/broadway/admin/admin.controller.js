import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
    loginAdminDataValidation,
    registerAdminDataValidation,
} from "./admin.validation.js";
import Admin from "./admin.model.js";
import validateReqBody from "../middlewares/validation.middleware.js";
import { generateHashedPwd } from "../utils/password.js";

const router = express.Router();

// *POST: register admin
router.post(
    "/admin/register",
    validateReqBody(registerAdminDataValidation),
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
        const hashPwd = generateHashedPwd(plainPwd, saltRound);

        newAdmin.password = hashPwd;

        // register admin
        await Admin.create(newAdmin);

        return res.status(201).send({ message: "Registered ...", newAdmin });
    }
);

// *POST: login admin
router.post(
    "/admin/login",
    validateReqBody(loginAdminDataValidation),
    async (req, res) => {
        // extract login credentials from req.body
        const loginCredentials = req.body;

        // find admin using email
        const admin = await Admin.findOne({ email: loginCredentials.email });

        // if not found, throw error
        if (!admin) {
            return res.status(404).send({ message: "Invalid Credentials!" });
        }

        // check for password match
        const plainPwd = loginCredentials.password;
        const hashedPwd = admin.password;
        const isPwdMatch = await bcrypt.compare(plainPwd, hashedPwd);

        // if not match, throw error
        if (!isPwdMatch) {
            return res.status(404).send({ message: "Invalid Credentials!" });
        }

        // generate access token
        const payload = { email: admin.email };
        const privateKey = "ahahahhaah";
        const token = jwt.sign(payload, privateKey);

        // send response
        admin.password = undefined; // hide password
        return res
            .status(200)
            .send({
                message: "Login successful",
                adminDetail: admin,
                accessToken: token,
            });
    }
);

// 


export default router;
