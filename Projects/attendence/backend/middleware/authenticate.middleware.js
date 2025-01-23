import jwt from "jsonwebtoken";
import User from "../user/user.model.js";

export const isUser = async (req, res, next) => {
    // extract token from req.headers
    const { authorization } = req.headers;

    console.log("authorization", authorization);

    next();
};
