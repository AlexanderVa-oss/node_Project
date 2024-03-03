import Card from "./CardMongoSchema.js";

const createCardService = (cardData) => {
    let card = new Card(cardData);
    return card.save();
};

const getAllCardsService = async () => {
    return await Card.find();
};

const getCardByIdService = async (id) => {
    return await Card.findById(id);
};

const getAllMyCardsService = async (user_id) => {
    return await Card.find({ user_id: user_id });
}

const getCardByBizNumberService = async (bizNumber) => {
    return Card.findOne({ bizNumber: bizNumber });
}

const updateCardService = async (id, cardData) => {
    return await Card.findByIdAndUpdate(id, cardData, { new: true });
};

const likeCardService = async (id, likes) => {
    return await Card.findByIdAndUpdate(id, { likes }, { new: true });
};

const deleteCardService = async (id) => {
    return await Card.findByIdAndDelete(id);
};

export {
    createCardService,
    getAllCardsService,
    getCardByIdService,
    updateCardService,
    getCardByBizNumberService,
    getAllMyCardsService,
    likeCardService,
    deleteCardService,
};