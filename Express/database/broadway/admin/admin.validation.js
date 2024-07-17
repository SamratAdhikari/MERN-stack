import Yup from "yup";

export const registerAdminDataValidation = Yup.object({
    email: Yup.string().email().lowercase().trim().required().max(55),
    password: Yup.string().trim().required().min(4).max(20),
    firstname: Yup.string().required().trim().max(30).lowercase(),
    lastname: Yup.string().required().trim().max(30).lowercase(),
});

export const loginAdminDataValidation = Yup.object({
    email: Yup.string().email().lowercase().trim().required(),
    password: Yup.string().trim().required(),
});
