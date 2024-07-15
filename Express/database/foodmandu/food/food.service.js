import Food from "./food.model.js";
import Yup from "yup";
import mongoose from "mongoose";

const validateFoodDetail = async (req, res, next) => {
    const data = req.body;

    const addToSchema = Yup.object({
        name: Yup.string().trim().max(50),
        price: Yup.number().min(0, "Custom msg: Dont put -ve price!"),
    });

    try {
        const validateData = await addToSchema.validate(data);
        req.body = validateData;
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }

    next();
};

const addFoodItem = async (req, res) => {
    // extract new data from req.body
    const newFood = req.body;

    // insert into databse
    await Food.create(newFood);

    // send res
    return res.status(200).send({ message: `Food ${newFood.name} added` });
};

const getFoodList = async (req, res) => {
    const foodItems = await Food.find();

    return res
        .status(200)
        .send({ messasge: "Showing all food items", foodItems });
};

const validateFoodId = async (req, res, next) => {
    // extract id from params
    const id = req.params.id;

    // check for mongo id validation
    const isValidId = mongoose.isValidObjectId(id);

    // if not valid, throw error
    if (!isValidId) {
        return res.status(400).send({ message: "Invalid mongo Id" });
    }

    // call next function
    next();
};

const validateFoodItemExistence = async (req, res, next) => {
    // extract food id from req.params
    const foodId = req.params.id;

    // find food using the id
    const foodItem = await Food.findById(foodId);

    // if not found, throw error
    if (!foodItem) {
        return res.status(404).send({ message: "Food item not found" });
    }

    // send the req food item to request so that next func can access it directly
    req.foodItem = foodItem;

    // call next function
    next();
};

const getFood = (req, res) => {
    return res.status(200).send({
        message: "The detail of the food item is:",
        foodIten: req.foodItem,
    });
};

const deleteFood = async (req, res) => {
    // extract food id from req.params
    const id = req.params.id;

    // delete food
    const food = await Food.findByIdAndDelete(id);

    // send response
    return res.status(200).send({ message: `Food ${food.name} deleted` });
};

const updateFoodDetails = async (req, res) => {
    // extract food id from req.params
    const id = req.params.id;

    // update food
    const newFoodDetails = req.body;
    const food = await Food.findByIdAndUpdate(id, newFoodDetails, {
        new: true,
    });

    // send response
    return res.status(200).send({ message: `Food ${food.name} updated` });
};

export {
    getFood,
    addFoodItem,
    validateFoodDetail,
    validateFoodItemExistence,
    validateFoodId,
    getFoodList,
    deleteFood,
    updateFoodDetails,
};
