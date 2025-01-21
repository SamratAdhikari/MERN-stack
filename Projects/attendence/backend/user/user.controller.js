import express from "express";
import validateReqBody from "../middleware/validate.req.body";
import {
    loginUserValidationSchema,
    registerUserValidationSchema,
} from "./user.validation";

const router = express.Router();

// *GET: show all users
router.get("/user/show", showUsers);

// *POST: register user
router.post(
    "/user/register",
    validateReqBody(registerUserValidationSchema),
    registerUser
);

// *POST: login user
router.post(
    "/user/login",
    validateReqBody(loginUserValidationSchema),
    loginUser
);

export default router;
