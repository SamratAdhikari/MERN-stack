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

// *POST: add food item
router.post("/add", validateFoodDetail, addFoodItem);

// *GET: display all food item
router.get("/list", getFoodList);

// *GET: Display food detail by id
router.get("/detail/:id", validateFoodId, validateFoodItemExistence, getFood);

// *DELETE: delete food by id
router.delete(
    "/delete/:id",
    validateFoodId,
    validateFoodItemExistence,
    deleteFood
);

// *PUT: update food by id
router.put(
    "/update/:id",
    validateFoodId,
    validateFoodItemExistence,
    validateFoodDetail,
    updateFoodDetails
);

export default router;
