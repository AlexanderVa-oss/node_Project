import Joi from "joi";
import phoneRegExp from "../../../utils/phoneRegExp.js"
import passwordRegex from "../../../utils/passwordRegex.js"
import emailRegExp from "../../../utils/emailRegExp.js"

const registerSchema = Joi.object({
    name: Joi.object({
        first: Joi.string().min(2).max(20).required(),
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
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .pattern(new RegExp(emailRegExp))
        .min(6)
        .max(255)
        .required()
        .messages({
            "string.email": "Invalid email",
        }),
    password: Joi.string()
        .pattern(new RegExp(passwordRegex))
        .required()
        .messages({
            "string.pattern.base": "Invalid password; Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
        }),
    isBusiness: Joi.boolean().required(),
});

const registerSchemaValidation = (userInput) => {
    return registerSchema.validateAsync(userInput);
};

export default registerSchemaValidation;
