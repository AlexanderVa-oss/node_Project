import Joi from "joi";

const ObjectIdschema = Joi.object({
    id: Joi.string().hex().length(24).required(),
});

const ObjectIdschemaValidation = (id) => {
    return ObjectIdschema.validateAsync({ id });
};

export default ObjectIdschemaValidation;