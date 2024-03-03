import Joi from "joi";
import phoneRegExp from "../../../utils/phoneRegExp.js"

const updateUserSchema = Joi.object({
    name: Joi.object({
        first: Joi.string().min(2).max(20).required(),
        middle: Joi.string().min(2).max(20).allow(""),
        last: Joi.string().min(2).max(20).required(),
    }).required(),

    phone: Joi.string()
        .pattern(new RegExp(phoneRegExp))
        .required()
        .messages({
            "string.pattern.base": "Invalid phone number",
            "string.empty": "Phone number is required",
            "any.required": "Phone number is required"
        }),

    image: Joi.object({
        url: Joi.string().uri({ scheme: ["http", "https"] }).required(),
        alt: Joi.string().min(3).max(20).allow(""),
    }),

    address: Joi.object({
        state: Joi.string().min(3).max(20).allow(""),
        country: Joi.string().required().allow(""),
        city: Joi.string().min(3).max(20).required(),
        street: Joi.string().min(3).max(20).required(),
        housenumber: Joi.number().min(1).max(9999).allow(""),
        zipcode: Joi.number().min(10000).max(9999999).allow(""),
    }).required(),
});

const updateUserSchemaValidation = (userInput) => {
    return updateUserSchema.validateAsync(userInput);
};

export default updateUserSchemaValidation;
