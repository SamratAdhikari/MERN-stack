import mongoose from "mongoose";
import Restaurant from "./restaurant.model.js";
import Yup from "yup";

export const validateMongoIdFromParams = (req, res, next) => {
    // extract restaurant id from req.params
    const id = req.params.id;

    // check for mongo id validity
    const isValidId = mongoose.isValidObjectId(id);

    // if not valid mongo id, throw error
    if (!isValidId) {
        return res.status(400).send({ message: "Invalid mongo id" });
    }

    next();
};

export const deleteRestaurant = async (req, res) => {
    // extract restaurant id from req.params
    const restaurantId = req.params.id;

    // delete restaurant
    const restaurant = await Restaurant.findByIdAndDelete(restaurantId);

    // if restaurant not found, throw error
    if (!restaurant) {
        return res.status(404).send({ message: "Restaurant doesnt exist" });
    }

    // send response
    return res
        .status(200)
        .send({ message: `Restaurant ${restaurant.name} deleted` });
};

export const validateRestaurantData = async (req, res, next) => {
    const restaurantValidationSchema = Yup.object({
        name: Yup.string()
            .required("Name is required")
            .trim()
            .max(55, "Name must be of 55 characters max")
            .lowercase(),
        contact: Yup.string().required().trim().min(10).max(15),
        location: Yup.string().trim().required().max(55),
        ownerName: Yup.string().max(55).default(null).nullable(),
    });

    try {
        const validateData = await restaurantValidationSchema.validate(
            req.body
        );
        req.body = validateData;
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }

    next();
};

export const addRestaurant = async (req, res) => {
    // extract new values from req.body
    const newRestaurant = req.body;

    // insert into database
    await Restaurant.create(newRestaurant);

    return res.status(201).send({
        message: `Restaurant ${newRestaurant.name} is added successfully`,
    });
};

export const getRestaurantList = async (req, res) => {
    const restaurantList = await Restaurant.find();

    return res
        .status(200)
        .send({ message: "The registered restaurants are:", restaurantList });
};
