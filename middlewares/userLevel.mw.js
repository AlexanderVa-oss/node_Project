import { handleError, unauthorizedLvl, notLogIn } from "../utils/errors.js";
import { getCardById } from "../model/dbAdapter.js";

const adminOrowner = (req, res, next) => {
    if (!req.user) {
        throw new Error(notLogIn);
    }
    if (req.user.isAdmin || req.user._id === req.params.id) {
        next();
    } else {
        handleError(res, 401, unauthorizedLvl);
    }
}

const IsBizz = async (req, res, next) => {
    if (!req.user) {
        throw new Error("error 0x19856");
    }
    if (!req.user.isBusiness) {
        return handleError(res, 401, "You are not a biz user");
    }
    next();
};

const adminOrBizMiddleware = (req, res, next) => {
    if (!req.user) {
        throw new Error("you must be logged in");
    }
    if (req.user.isAdmin || req.user.isBusiness) {
        next();
    } else {
        handleError(res, 401, "you not allowed to do this action");
    }
};

const adminOnly = (req, res, next) => {
    if (!req.user) {
        throw new Error("you must be logged in");
    }
    if (!req.user.isAdmin) {
        next();
    } else {
        handleError(res, 401, "you not allowed to do this action");
    }
};

const cardOwner = async (req, res, next) => {
    if (!req.user._id) {
        throw new Error("you must be logged in");
    }
    let card = await getCardById(req.params.id);
    if (!card) {
        handleError(res, 404, "card not found");
    }
    if (req.user._id === card.user_id + '') {
        next();
    } else {
        handleError(res, 401, "you not allowed to do this action");
    }
}

export { adminOrowner, IsBizz, adminOrBizMiddleware, adminOnly, cardOwner };