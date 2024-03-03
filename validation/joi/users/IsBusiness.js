import Joi from "joi";

const updateUserBizzSchema = Joi.object({
    isBusiness: Joi.boolean().required(),
});

const updateUserBizzSchemaValidation = (userInput) => {
    return updateUserBizzSchema.validateAsync(userInput);
};

export default updateUserBizzSchemaValidation;
