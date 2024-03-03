import emailRegExp from "../../../utils/urlRegExp.js"

const URL = {
    type: String,
    trim: true,
    match: RegExp(emailRegExp),
};

export default URL;