import * as Yup from "yup";

export const loginUserValidationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
        .trim(55, "Email must be 55 characters max")
        .lowercase(),

    password: Yup.string()
        .required("Password is required")
        .max(20, "Password must be at max 20 characters"),
});
