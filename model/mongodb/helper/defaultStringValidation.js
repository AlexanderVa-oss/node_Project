const defaultStringValidation = {
    type: String,
    minLength: 1,
    maxLength: 256,
    trim: true,
};

const default_REQUIRED_StringValidation = {
    ...defaultStringValidation,
    required: true,
};

export { default_REQUIRED_StringValidation, defaultStringValidation };