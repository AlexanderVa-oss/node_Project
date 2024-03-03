import { handleError } from "../utils/errors.js";

const bodyValidationMiddleware = (validateSchema) => async (req, res, next) => {
    const body = req.body;
    try {
        await validateSchema(body);
        next();
    } catch (err) {
        handleError(res, 400, err.message);
    }
};

export default bodyValidationMiddleware;
