import express from "express";
import {
    loginUserValidationSchema,
    userDataValidationSchema,
} from "./user.validation.js";
import validateReqBody from "../middleware/validate.req.body.js";
import { loginUser, registerUser } from "./user.service.js";

const router = express.Router();

// *POST: register user
router.post(
    "/user/register",
    validateReqBody(userDataValidationSchema),
    registerUser
);

// *POST: login
router.post(
    "/user/login",
    validateReqBody(loginUserValidationSchema),
    loginUser
);

export default router;
