import mongoose from "mongoose";
import {
    default_REQUIRED_StringValidation,
    defaultStringValidation,
} from "../../helper/defaultStringValidation.js";

const Name = new mongoose.Schema({
    first: default_REQUIRED_StringValidation,
    middle: defaultStringValidation,
    last: default_REQUIRED_StringValidation,
});

export default Name;
