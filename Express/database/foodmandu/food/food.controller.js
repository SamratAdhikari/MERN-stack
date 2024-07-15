import express from "express";

import {
    getFoodList,
    addFoodItem,
    validateFoodDetail,
    validateFoodItemExistence,
    validateFoodId,
    getFood,
    deleteFood,
    updateFoodDetails,
} from "./food.service.js";

const router = express.Router();

// *add food item
router.post("/add", validateFoodDetail, addFoodItem);

// *get all food item
router.get("/list", getFoodList);

// *get food detail by id
router.get("/detail/:id", validateFoodId, validateFoodItemExistence, getFood);

// *delete food by id
router.delete(
    "/delete/:id",
    validateFoodId,
    validateFoodItemExistence,
    deleteFood
);

// *update food by id
router.put(
    "/update/:id",
    validateFoodId,
    validateFoodItemExistence,
    validateFoodDetail,
    updateFoodDetails
);

export default router;
