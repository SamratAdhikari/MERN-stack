import mongoose from "mongoose";

const validateMongoIdFromParams = (req, res, next) => {
    // extract id from req.params
    const id = req.params.id;

    // check for mongo id validity
    const isValid = mongoose.isValidObjectId(id);

    // if not valid, throw error
    if (!isValid) {
        return res.status(400).send({ message: "Invalid mongo id" });
    }

    // call next func
    next();
};

export default validateMongoIdFromParams;
