import mongoose from "mongoose";

// quantity detail yesari ni rakhna milxa
const quantityDetail = new mongoose.Schema({
    value: Number,
    unit: String,
});

// set schema
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        min: 0,
    },
    // quantity: quantityDetail,
});

// create table
const Food = mongoose.model("Food", foodSchema);

export default Food;
