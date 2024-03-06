import Joi from "joi";
import phoneRegExp from "../../../utils/phoneRegExp.js"
import emailRegExp from "../../../utils/emailRegExp.js"

const createCardSchema = Joi.object({
    title: Joi.string().min(2).max(20).required(), 
    subtitle: Joi.string().min(2).max(256).required(), 
    description: Joi.string().min(2).max(1024).required(), 
    phone: Joi.string()
        .pattern(phoneRegExp)
        .required()
        .messages({
            "string.pattern.base": "Invalid phone number",
            "string.empty": "Phone number is required",
            "any.required": "Phone number is required"
        }).required(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .pattern(emailRegExp)
        .min(6)
        .max(255)
        .messages({
            "string.email": "Invalid email",
        }).required(),
    web: Joi.string().min(2).max(256), 
    image: Joi.object({
        url: Joi.string()
            .uri({ scheme: ["http", "https"] })
            .allow(""),
        alt: Joi.string().min(2).max(256).allow(""),
    }),
    address: Joi.object({ 
        state: Joi.string().allow(""),
        country: Joi.string().required(),
        city: Joi.string().required(),
        street: Joi.string().required(),
        houseNumber: Joi.number().min(1).required(),
        zipcode: Joi.number().min(10000).max(9999999).allow(""),
    }).required(),
    bizNumber: Joi.number().min(1).allow(""),
});

const createCardSchemaValidation = (userInput) => {
    return createCardSchema.validateAsync(userInput);
};

export default createCardSchemaValidation;
