import { productCategories } from "@/constants/general.constants";
import * as Yup from "yup";

export const productDataValidationSchema = Yup.object({
    name: Yup.string().required().trim().max(55, "Name is too long"),
    brand: Yup.string().required("Brand is required").trim().max(55),
    price: Yup.number()
        .required("Price is required")
        .moreThan(0, "Price must be greater than 0"),
    quantity: Yup.number()
        .required("Quantity is required")
        .min(1, "Quantity must be greater than 0"),
    category: Yup.string()
        .trim()
        .required("Category is required")
        .oneOf(productCategories),
    freeShipping: Yup.boolean().default(false),
    description: Yup.string()
        .required()
        .trim()
        .min(100, "Description must be at least 100 characters")
        .max(1000),
});
