import mongoose from "mongoose";
import Image from "./cardHelper/Image.js";
import Address from "./cardHelper/Adress.js";
import phoneRegex from "../../../utils/phoneRegExp.js";
import emailRegExp from "../../../utils/emailRegExp.js"

const CardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 20,
    },
    subtitle: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 256,
    },
    description: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 1024,
    },
    phone: {
        type: String,
        required: true,
        match: RegExp(phoneRegex),
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: RegExp(emailRegExp),
        unique: true,
    },
    web: {
        type: String,
        required: true ,
        minLength: 14,
        maxLength: 256,
    },
    image: Image,
    address: Address,
    bizNumber: {
        type: Number,
        minLength: 7,
        maxLength: 8,
        required: true,
    },
    likes: [
        String
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
    }
});

const Card = mongoose.model("card", CardSchema);

export default Card;