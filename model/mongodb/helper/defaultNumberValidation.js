const defaultHouseNumberValidation = {
    type: Number,
    minLength: 1,
    maxLength: 9999,
    trim: true,
    default: 2,
}

const defaultZipCodeNumberValidation = {
    type: Number,
    minLength: 10000,
    maxLength: 9999999,
    trim: true,
    default: 0,
};

export { defaultHouseNumberValidation, defaultZipCodeNumberValidation }