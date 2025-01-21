import mongoose from "mongoose";
import { courseCategories } from "../constants/general.constants.js";

const courseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            enum: courseCategories,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        salary: {
            type: Number,
            required: true,
            min: 0,
        },
        students: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        teacher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
