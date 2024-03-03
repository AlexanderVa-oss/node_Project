import mongoose from "mongoose";
import { defaultStringValidation } from "../../helper/defaultStringValidation.js";
import URL from "../../helper/urlStringValidation.js";

const Image = new mongoose.Schema({
    url: URL,
    alt: defaultStringValidation,
});

export default Image;
