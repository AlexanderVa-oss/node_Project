import express from "express";
import {
    handleGetAllCards,
    handleDeleteCard,
    handleUpdateCard,
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

// http://localhost:3030/api/cards V get all cards
router.get("/",
    handleGetAllCards
);

// http://localhost:3030/api/cards V Create new card
router.post("/",
    authMidelleware,
    IsBizz,
    bodyValidationMiddleware(createCardValidation),
    createCardController
);

// http://localhost:3030/api/cards/mycards V get all my cards
router.get("/mycards",
    authMidelleware,
    getMyCardsController
)

// http://localhost:3030/api/cards/:id V get card by id
router.get("/:id",
    objectIdParamsValidationMiddleware,
    getCardByIdController
);

// http://localhost:3030/api/cards/:id V update card by id
router.put("/:id",
    authMidelleware,
    objectIdParamsValidationMiddleware,
    adminOrBizMiddleware,
    bodyValidationMiddleware(createCardValidation),
    handleUpdateCard,
);

// http://localhost:3030/api/cards/:id V like card by id
router.patch("/:id",
    authMidelleware,
    objectIdParamsValidationMiddleware,
    patchLikeController,
);

// http://localhost:3030/api/cards/:id V update bizz number
router.patch("/bisuness/:id",
    authMidelleware,
    adminOnly,
    objectIdParamsValidationMiddleware,
    patchBizznumberController
);

router.delete("/:id",
    authMidelleware,
    objectIdParamsValidationMiddleware,
    cardOwner,
    handleDeleteCard
);

export default router;