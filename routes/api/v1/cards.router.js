import express from "express";
import {
    handleGetAllCards,
    handleDeleteCard,
    handleUpdateCard,
    handlePostCard,
    getCardByIdController,
    getMyCardsController,
    createCardController,
    patchLikeController,
    patchBizznumberController,
} from "../../../controlers/cards/cards.controler.js";
import objectIdParamsValidationMiddleware from "../../../middlewares/objectIdParamsValidation.mw.js";
import authMidelleware from "../../../middlewares/auth.mw.js";
import {
    IsBizz,
    adminOrBizMiddleware,
    adminOnly,
    cardOwner
} from "../../../middlewares/userLevel.mw.js";
import bodyValidationMiddleware from "../../../middlewares/bodyValidation.mw.js";
import createCardValidation from "../../../validation/joi/cards/cardValidation.js";

const router = express.Router();

// http://localhost:3030/api/cards
router.get("/",
    handleGetAllCards
);

router.post("/",
    authMidelleware,
    IsBizz,
    bodyValidationMiddleware(createCardValidation),
    createCardController
);

router.get("/mycards",
    authMidelleware,
    getMyCardsController
)

router.get("/:id",
    objectIdParamsValidationMiddleware,
    getCardByIdController
);

router.post("/:newcard",
    handlePostCard
);

router.put("/:id",
    authMidelleware,
    objectIdParamsValidationMiddleware,
    adminOrBizMiddleware,
    bodyValidationMiddleware(createCardValidation),
    handleUpdateCard,
);

router.patch("/:id",
    authMidelleware,
    objectIdParamsValidationMiddleware,
    patchLikeController,
);

router.patch("/bizNumber/:id",
    authMidelleware,
    objectIdParamsValidationMiddleware,
    adminOnly,
    patchBizznumberController
);

router.delete("/:id",
    authMidelleware,
    objectIdParamsValidationMiddleware,
    cardOwner,
    handleDeleteCard
);

export default router;