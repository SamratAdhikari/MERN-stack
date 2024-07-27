import jwt from "jsonwebtoken";
import Admin from "../admin/admin.model.js";

export const validateAdminToken = async (req, res, next) => {
    // extract token from req.headers
    const authorization = req.headers.authorization;
    const splittedTokenArray = authorization?.split(" ");
    const token =
        splittedTokenArray?.length == 2 ? splittedTokenArray[1] : null;

    // if not token, throw error
    if (!token) {
        return res.status(401).send({ message: "Unauthorized token" });
    }
    
    // verify token
    let payload;
    try {
        const privateKey = "ahahahhaah";
        payload = jwt.verify(token, privateKey);
    } catch (error) {
        return res.status(401).send({ message: "Unauthorized token" });
    }

    // find admin using payload
    const admin = await Admin.findOne({ email: payload.email });

    // if not admin, throw error
    if (!admin) {
        return res.status(400).send({ message: "Admin not found" });
    }

    // add admin id to req
    req.loggedInUserId = admin._id;

    // next function
    next();
};
