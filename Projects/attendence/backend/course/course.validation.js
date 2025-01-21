import Yup from "yup";
import { courseCategories } from "../constants/general.constants";

export const courseValidationSchema = Yup.object({
    name: Yup.string().required("Course name is required").min(3).max(100),
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
    salary: Yup.number()
        .required("Salary is required for teacher")
        .min(0, "Salary cannot be negative"),
});
