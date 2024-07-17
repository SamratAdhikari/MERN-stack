import Yup from "yup";

export const addCourseDataValidation = Yup.object({
    name: Yup.string().max(60).trim().required(),
    price: Yup.number().min(0).required(),
    duration: Yup.number().min(1).required(),
});
