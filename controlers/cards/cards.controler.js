import {
    getAllCards,
    getCardById,
    getAllMyCards,
    createCard,
    updateCard,
    likeCard,
    deleteCard
} from "../../model/dbAdapter.js";
import { handleGetAllCards_err, handleError } from "../../utils/errors.js";

const handleGetAllCards = async (req, res) => {
    try {
        let cards = await getAllCards();
        res.json(cards);
    } catch (err) {
        handleGetAllCards_err();
        res.status(500).json("Server error");
    }
};

const getCardByIdController = async (req, res) => {
    try {
        let card = await getCardById(req.params.id);
        res.json(card);
    } catch (err) {
        console.log(err);
        handleError(res, 400, err.message);
    }
};

const getMyCardsController = async (req, res) => {
    const userId = req.user._id
    try {
        let myCards = await getAllMyCards(userId);
        return res.json(myCards);
    } catch (err) {
        console.log(err);
        handleError(res, 400, err.message);
    }
};

const createCardController = async (req, res) => {
    try {
        const userId = req.user._id;
        req.body.user_id = userId;
        let newCard = await createCard(req.body);
        return res.json(newCard);
    } catch (err) {
        console.log(err);
        handleError(res, 400, err.message);
    }
}

const handlePostCard = (req, res) => {
    res.json("Post Alexander!!! " + req.params.newcard);
    console.log("Card id:", (req.params.newcard), 'posted');
};

const handleUpdateCard = async (req, res) => {
    try {
        const cardFromDb = await getCardById(req.params.id);
        let { user_id } = cardFromDb;
        user_id = user_id + "";
        if (!cardFromDb) {
            throw new Error("Card not found");
        }
        if (req.user.isBusiness && req.user._id !== user_id) {
            throw new Error(
                "You are not allowed to update this card, you must be the owner of the card"
            );
        }
        const updatedCard = await updateCard(req.params.id, req.body);
        return res.json(updatedCard);
    } catch (err) {
        console.log(err);
        handleError(res, 400, err.message);
    }
};

const patchLikeController = async (req, res) => {
    try {
        const cardFromDb = await getCardById(req.params.id);
        if (!cardFromDb) {
            throw new Error("Card not found");
        }
        let likes = [...cardFromDb.likes];
        if (likes.includes(req.user._id)) {
            likes = likes.filter((id) => id !== req.user._id);
        } else {
            likes.push(req.user._id);
        }
        const updatedCardFromDb = await likeCard(req.params.id, likes);
        return res.json(updatedCardFromDb);
    } catch (err) {
        console.log(err);
        handleError(res, 400, err.message);
    }
};

const patchBizznumberController = async (req, res) => {
    try {
        const cardFromDb = await getCardById(req.params.id);
        if (!cardFromDb) {
            throw new Error("Card not found");
        }
        // Needs add: check bizNumber, and Unique
        cardFromDb.bizNumber = req.body.bizNumber;
        let updateCardFromDB = await updateCard(req.params.id, cardFromDb);
        return res.json(updateCardFromDB);
    } catch (err) {
        console.log(err);
        handleError(res, 400, err.message);
    }
};

const handleDeleteCard = async (req, res) => {
    try {
        const cardFromDb = await getCardById(req.params.id);
        if (!cardFromDb) {
            throw new Error("Card not found");
        }
        return res.json(await deleteCard(req.params.id));
    } catch (err) {
        console.log(err);
        handleError(res, 400, err.message);
    }
};

export {
    handleGetAllCards,
    handleDeleteCard,
    handleUpdateCard,
    handlePostCard,
    getCardByIdController,
    getMyCardsController,
    createCardController,
    patchLikeController,
    patchBizznumberController,
}