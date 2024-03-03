import registerSchemaValidation from "./joi/users/registerValidaton.js";
import loginSchemaValidation from "./joi/users/loginValidation.js";
import updateUserSchemaValidation from "./joi/users/updateUserValidation.js";
import updateUserBizzSchemaValidation from "./joi/users/IsBusiness.js";
import ObjectIdschemaValidation from "./joi/objectIdValidation.js";
import createCardSchemaValidation from "./joi/cards/cardValidation.js";

const VALIDATION = "joi";

const registerValidation = (userInput) => {
    if (VALIDATION === "joi") {
        return registerSchemaValidation(userInput);
    }
    else {
        throw new Error(`Validation ${VALIDATION} not found`)
    }
};

const loginValidation = (userInput) => {
    if (VALIDATION === "joi") {
        return loginSchemaValidation(userInput);
    }
    else {
        throw new Error(`Validation ${VALIDATION} not found`)
    }
};

const updateUserValidation = (userInput) => {
    if (VALIDATION === "joi") {
        return updateUserSchemaValidation(userInput);
    }
    else {
        throw new Error(`Validation ${VALIDATION} not found`)
    }
};

const updateUserBizzValidation = (userInput) => {
    if (VALIDATION === "joi") {
        return updateUserBizzSchemaValidation(userInput);
    }
    else {
        throw new Error(`Validation ${VALIDATION} not found`)
    }
};

const objectIdValidation = (id) => {
    if (VALIDATION === "joi") {
        return ObjectIdschemaValidation(id);
    } else {
        throw new Error(`Validation ${VALIDATION} is not supported`);
    }
};

const createCardValidation = (userInput) => {
    if (VALIDATION === "joi") {
        return createCardSchemaValidation(userInput);
    } else {
        throw new Error(`Validation ${VALIDATION} is not supported`);
    }
};

export { registerValidation, loginValidation, updateUserValidation, updateUserBizzValidation, objectIdValidation, createCardValidation };