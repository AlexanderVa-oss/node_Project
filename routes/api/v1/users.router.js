import express from "express";
import {
    registerControler,
    loginControler,
    handleGetAllUsers,
    getUserControler,
    updateUserControler,
    deleteUserControler,
    pathIsBizControler
} from "../../../controlers/users/users.controler.js";
import bodyValidationMiddleware from "../../../middlewares/bodyValidation.mw.js";
import {
    registerValidation,
    loginValidation,
    updateUserValidation,
    updateUserBizzValidation
} from "../../../validation/validationAdapter.js";
import authMidelleware from "../../../middlewares/auth.mw.js";
import { adminOrowner, adminOnly } from "../../../middlewares/userLevel.mw.js";
import objectIdParamsValidationMiddleware from "../../../middlewares/objectIdParamsValidation.mw.js";
import { get } from "mongoose";

const router = express.Router();

// http://localhost:3030/api/users V get all user
router.get("/",
    authMidelleware,
    adminOnly,
    handleGetAllUsers);

// http://localhost:3030/api/users/register V register new user
router.post("/",
    bodyValidationMiddleware(registerValidation),
    registerControler);

// http://localhost:3030/api/users/login V login user
router.post("/login",
    bodyValidationMiddleware(loginValidation),
    loginControler);

// http://localhost:3030/api/users v get user
router.get("/:id",
    authMidelleware,
    adminOrowner,
    getUserControler,
)

// http://localhost:3030/api/users v edit user
router.put("/:id",
    authMidelleware,
    adminOrowner,
    bodyValidationMiddleware(updateUserValidation),
    updateUserControler
);

// http://localhost:3030/api/users v delete user
router.delete("/:id",
    authMidelleware,
    adminOrowner,
    deleteUserControler
);

// http://localhost:3030/api/users v update bizz status
router.patch("/:id",
    authMidelleware,
    objectIdParamsValidationMiddleware,
    adminOrowner,
    bodyValidationMiddleware(updateUserBizzValidation),
    pathIsBizControler
);

export default router;