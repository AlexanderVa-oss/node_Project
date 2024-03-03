import connectToMongo from "./mongodb/dbconnectionMongo.js";
import connectToMySQL from "./mysql/dbConnectionMySQL.js";
import {
    createUserService,
    getAllUsersService,
    getUserByEmailService,
    updateUserService,
    deleteUserService,
    pathIsBizService,
} from "./mongodb/users/userService.js";
import {
    createCardService,
    getCardByBizNumberService,
    getAllCardsService,
    getCardByIdService,
    getAllMyCardsService,
    updateCardService,
    likeCardService,
    deleteCardService,
} from "./mongodb/cards/cardService.js";
import normalizeUser from "../normalize/user.normalize.js";
import normalizeCards from "../normalize/card.normalize.js";

const DB = "mongo";

const connectToDb = () => {
    if (DB === "mongo") {
        return connectToMongo();
    }
    if (DB === "mysql") {
        return connectToMySQL();
    }
};

// createUser in userService
let
    createUser,
    createCard,
    getCardByBizNumber,
    getAllCards,
    getAllUsers,
    getUserByEmail,
    updateUser,
    deleteUser,
    pathIsBiz,
    getCardById,
    getAllMyCards,
    updateCard,
    likeCard,
    deleteCard
    ;
if (DB === "mongo") {
    // Cards
    createCard = async (card) => {
        card = await normalizeCards(card);
        return createCardService(card);
    };

    getCardByBizNumber = (bizNumber) => {
        return getCardByBizNumberService(bizNumber);
    };

    getAllCards = () => {
        return getAllCardsService();
    }

    getCardById = async (id) => {
        return await getCardByIdService(id);
    }

    getAllMyCards = (user_id) => {
        return getAllMyCardsService(user_id);
    }

    updateCard = (user_id, card, ) => {
        return updateCardService(user_id, card);
    }
    
    likeCard = (user_id, likes) => {
        return likeCardService(user_id, likes);
    }

    deleteCard = (id) => {
        return deleteCardService(id);
    }

    // Users
    createUser = (user) => {
        user = normalizeUser(user);
        return createUserService(user);
    };

    getAllUsers = () => {
        return getAllUsersService();
    }

    getUserByEmail = (email) => {
        return getUserByEmailService(email);
    }

    updateUser = (id, user) => {
        user = normalizeUser(user);
        return updateUserService(id, user);
    }

    deleteUser = (id) => {
        return deleteUserService(id);
    }

    pathIsBiz = (id, isBusiness) => {
        return pathIsBizService(id, isBusiness);
    }
};

export default connectToDb;
export {
    createCard,
    getCardByBizNumber,
    getAllCards,
    getCardById,
    getAllMyCards,
    updateCard,
    likeCard,
    deleteCard,

    createUser,
    getAllUsers,
    getUserByEmail,
    updateUser,
    deleteUser,
    pathIsBiz,
};
