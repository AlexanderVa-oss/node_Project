import Joi from "joi";
import passwordRegex from "../../../utils/passwordRegex.js"
import emailRegExp from "../../../utils/emailRegExp.js"


const loginSchema = Joi.object({
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
});

const loginSchemaValidation = (userInput) => {
    return loginSchema.validateAsync(userInput);
};

export default loginSchemaValidation;