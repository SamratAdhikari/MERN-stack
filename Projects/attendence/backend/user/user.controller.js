import express from "express";
import {
    loginUserValidationSchema,
    registerUserValidationSchema,
} from "./user.validation.js";
import validateReqBody from "../middleware/validate.req.body.js";
import { loginUser, registerUser, showUsers } from "./user.service.js";

const router = express.Router();

// *GET: show all users
router.get("/show", showUsers);

// *POST: register user
router.post(
    "/register",
    validateReqBody(registerUserValidationSchema),
    registerUser
);

// *POST: login user
router.post("/login", validateReqBody(loginUserValidationSchema), loginUser);

export default router;
