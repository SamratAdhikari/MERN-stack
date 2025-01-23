import Yup from "yup";
import { courseCategories } from "../constants/general.constants";

export const courseValidationSchema = Yup.object({
    name: Yup.string().required("Course name is required").min(3).max(100),
    image: Yup.string()
        .url("Image must be a valid URL")
        .default("https://picsum.photos/id/180/300/200")
        .required("Image is required"),
    description: Yup.string()
        .required("Description is required")
        .min(10)
        .max(500),
    category: Yup.string()
        .oneOf(courseCategories, "Invalid category")
        .required("Course category is required"),
    price: Yup.number()
        .required("Price is required for students")
        .min(0, "Price cannot be negative"),
    duration: Yup.string().required("Duration is required."),
});
