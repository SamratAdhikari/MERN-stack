import * as Yup from "yup";

export const registerUserValidationSchema = Yup.object({
    email: Yup.string().email().required().trim().lowercase().max(55),
    confirmPassword: Yup.string()
        .required()
        .trim()
        .oneOf([Yup.ref("password")], "Passwords must match"),
    password: Yup.string().required().trim(),
    firstname: Yup.string().required().trim().max(30),
    lastname: Yup.string().required().trim().max(30),
    gender: Yup.string().trim().required().oneOf(["male", "female", "others"]),
    role: Yup.string().trim().required().oneOf(["buyer", "seller"]),
});
