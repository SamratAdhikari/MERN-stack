const validateReqBody = (validationSchema) => {
    return async (req, res, next) => {
        // extract data from req.body
        const data = req.body;

        // validate data & if validation fails, throw error
        try {
            const validateData = await validationSchema.validate(data);

            req.body = validateData;
        } catch (error) {
            return res.status(400).send({ message: error.message });
        }

        // call next func
        next();
    };
};

export default validateReqBody;
