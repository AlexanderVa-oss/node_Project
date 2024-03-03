// initialCardsDataService.js
import { createCard } from "../model/dbAdapter.js";
import { initialCard_err } from "../utils/errors.js";
import generateUniqNumber from "../utils/generateUniqNumber.js";

const initialCards = async (bizId) => {
    let cards = [
        {
            title: "Card 1",
            subtitle: "Card 1 subtitle",
            description: "Card 1 description",
            phone: "0500000000",
            email: "kenny1@gmail.com",
            web: "http://www.google.com",
            image: {
                url: "http://www.google.com",
                alt: "http://www.google.com",
            },
            address: {
                state: "asd",
                country: "asd",
                city: "asd",
                street: "asd",
                houseNumber: 10,
                zipcode: 12345,
            },
            bizNumber: await generateUniqNumber(),
            user_id: bizId,
        },
        {
            title: "Card 2",
            subtitle: "Card 2 subtitle",
            description: "Card 2 description",
            phone: "0500000000",
            email: "kenny2@gmail.com",
            web: "http://www.google.com",
            image: {
                url: "http://www.google.com",
                alt: "http://www.google.com",
            },
            address: {
                state: "asd",
                country: "asd",
                city: "asd",
                street: "asd",
                houseNumber: 10,
                zipcode: 12345,
            },
            bizNumber: await generateUniqNumber(),
            user_id: bizId,
        },
        {
            title: "Card 3",
            subtitle: "Card 3 subtitle",
            description: "Card 3 description",
            phone: "0500000000",
            email: "kenny3@gmail.com",
            web: "http://www.google.com",
            image: {
                url: "http://www.google.com",
                alt: "http://www.google.com",
            },
            address: {
                state: "asd",
                country: "asd",
                city: "asd",
                street: "asd",
                houseNumber: 10,
                zipcode: 12345,
            },
            bizNumber: await generateUniqNumber(),
            user_id: bizId,
        },
    ];
    try {
        for (let card of cards) {
            await createCard(card);
        }
    } catch (err) {
        initialCard_err(err);
    }
};
export { initialCards };