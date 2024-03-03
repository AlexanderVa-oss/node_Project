import mongoose from "mongoose";
import {
    default_REQUIRED_StringValidation,
} from "../../helper/defaultStringValidation.js";
import { defaultHouseNumberValidation, defaultZipCodeNumberValidation } from "../../helper/defaultNumberValidation.js"

const Address = new mongoose.Schema({
    state: default_REQUIRED_StringValidation,
    city: default_REQUIRED_StringValidation,
    street: default_REQUIRED_StringValidation,
    housenumber: defaultHouseNumberValidation,
    zipcode: defaultZipCodeNumberValidation,
});

export default Address;
