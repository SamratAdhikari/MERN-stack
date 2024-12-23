import Yup from "yup";

export const cartItemValidationSchema = Yup.object({
    productId: Yup.string().required().trim(),
    orderedQuantity: Yup.number().min(1).required(),
});
