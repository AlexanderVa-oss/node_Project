import mongoose from "mongoose";
import Name from "./userHelper/Name.js";
import Image from "./userHelper/Image.js";
import Address from "./userHelper/Adress.js";
import phoneRegex from "../../../utils/phoneRegExp.js";
import emailRegExp from "../../../utils/emailRegExp.js"

const UserSchema = new mongoose.Schema({
    name: Name,
    phone: {
        type: String,
        required: true,
        match: RegExp(phoneRegex),
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: RegExp(emailRegExp),
    },
    password: {
        type: String,
        required: true,
    },
    isBusiness: {
        type: Boolean,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model("user", UserSchema);

export default User;