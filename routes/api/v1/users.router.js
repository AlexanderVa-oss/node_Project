import express from "express";
import {
    registerControler,
    loginControler,
    handleGetAllUsers,
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
import { adminOrowner } from "../../../middlewares/userLevel.mw.js";
import objectIdParamsValidationMiddleware from "../../../middlewares/objectIdParamsValidation.mw.js";

const router = express.Router();

// http://localhost:3030/api/users
router.get("/", handleGetAllUsers);

// http://localhost:3030/api/users/register
router.post("/register",
    bodyValidationMiddleware(registerValidation),
    registerControler);

// http://localhost:3030/api/users/login
router.post("/login",
    bodyValidationMiddleware(loginValidation),
    loginControler);

// http://localhost:3030/api/users/update
router.put("/update/:id",
    authMidelleware,
    adminOrowner,
    bodyValidationMiddleware(updateUserValidation),
    updateUserControler
);

// http://localhost:3030/api/users/delete
router.delete("/delete/:id",
    authMidelleware,
    adminOrowner,
    deleteUserControler
);

// http://localhost:3030/api/users/path
router.patch("/patch/:id",
    authMidelleware,
    objectIdParamsValidationMiddleware,
    adminOrowner,
    bodyValidationMiddleware(updateUserBizzValidation),
    pathIsBizControler
);

export default router;