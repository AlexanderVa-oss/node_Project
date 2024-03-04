import {
    handleGetAllUsers_err,
    handleRegisterUser_err,
    handleError,
    userAlreadyExists,
    ivalidEmailorPassword,
    loginControler_err,
    updateControler_err,
    deleteControler_err,
    pathControler_err
} from "../../utils/errors.js";
import {
    getAllUsers,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
    pathIsBiz,
    getUserById
} from "../../model/dbAdapter.js";
import { generateHash, cmpHash } from "../../utils/bcrypt.js";
import { generateToken } from "../../token/jwt.js";

const handleGetAllUsers = async (req, res) => {
    try {
        let users = await getAllUsers();
        res.json(users);
    } catch (err) {
        handleGetAllUsers_err();
        res.status(500).json("Server error");
    }
}

const registerControler = async (req, res) => {
    try {
        let userFromDB = await getUserByEmail(req.body.email);
        if (userFromDB) throw new Error(userAlreadyExists);
        let passwordHash = await generateHash(req.body.password);
        req.body.password = passwordHash;
        let newUser = await createUser(req.body);
        res.json(newUser);
    } catch (err) {
        handleRegisterUser_err(err);
        handleError(res, 400, err.message);
    }
}

const loginControler = async (req, res) => {
    try {
        let userFromDB = await getUserByEmail(req.body.email);
        if (!userFromDB) throw new Error(ivalidEmailorPassword);
        let passwordMath = await cmpHash(req.body.password, userFromDB.password);
        if (!passwordMath) throw new Error(ivalidEmailorPassword);
        let token = await generateToken({
            _id: userFromDB._id,
            isAdmin: userFromDB.isAdmin,
            isBusiness: userFromDB.isBusiness,
        });
        res.json(token);
    } catch (err) {
        loginControler_err(err);
        handleError(res, 400, err.message);
    }
};

const getUserControler = async (req, res) => {
    try {
        let userFromDB = await getUserById(req.params.id);
        if (!userFromDB) throw new Error("no user found");
        res.json(userFromDB);
    } catch (err) {
        loginControler_err(err);
        handleError(res, 400, err.message);
    }
};

const updateUserControler = async (req, res) => {
    try {
        let userFromDB = await updateUser(req.params.id, req.body);
        userFromDB.password = undefined;
        userFromDB.email = undefined;
        res.json(userFromDB);
    } catch (err) {
        updateControler_err(err);
        handleError(res, 400, err.message);
    }
}

const deleteUserControler = async (req, res) => {
    try {
        let userFromDB = await deleteUser(req.params.id);
        userFromDB.password = undefined;
        userFromDB.email = undefined;
        res.json(userFromDB);
    } catch (err) {
        deleteControler_err(err);
        handleError(res, 400, err.message);
    }
};

const pathIsBizControler = async (req, res) => {
    try {
        let userFromDB = await pathIsBiz(req.params.id, req.body.isBusiness);
        userFromDB.password = undefined;
        userFromDB.email = undefined;
        res.json(userFromDB);
    } catch (err) {
        pathControler_err(err);
        handleError(res, 400, err.message);
    }
}

export {
    loginControler,
    registerControler,
    handleGetAllUsers,
    updateUserControler,
    deleteUserControler,
    pathIsBizControler,
    getUserControler,
};