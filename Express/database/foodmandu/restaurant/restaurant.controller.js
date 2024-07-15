import express from "express";

import {
    addRestaurant,
    deleteRestaurant,
    validateMongoIdFromParams,
    validateRestaurantData,
    getRestaurantList,
} from "./restaurant.service.js";

const router = express.Router();

// ? add restuarant
router.post("/add", validateRestaurantData, addRestaurant);

// ? delete a restaurant
router.delete("/delete/:id", validateMongoIdFromParams, deleteRestaurant);

// ? get all restaurants
router.get("/list", getRestaurantList);

export default router;
