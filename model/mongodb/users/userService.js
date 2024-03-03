import User from "./UserMongoSchema.js";

const createUserService = (userData) => {
    let user = new User(userData);
    return user.save();
};

const getAllUsersService = async () => {
    return await User.find({}, { password: 0 },);
};

const getUserByIdService = async (id) => {
    return await User.findById(id, { password: 0 }); // { password: 0 } - to hide password
};

const getUserByEmailService = async (email) => {
    return User.findOne({ email: email });
}

const updateUserService = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true }, { password: 0 });
};

const deleteUserService = async (id) => {
    return await User.findByIdAndDelete(id);
};

const pathIsBizService = async (id, isBusiness) => {
    return await User.updateOne({ _id: id }, { isBusiness: isBusiness });
}

export {
    createUserService,
    getAllUsersService,
    getUserByIdService,
    updateUserService,
    deleteUserService,
    getUserByEmailService,
    pathIsBizService
};