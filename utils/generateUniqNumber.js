import { getCardByBizNumber } from "../model/dbAdapter.js";
import { generateUniqNumber_err, newNumberNotFound } from "../utils/errors.js";

function getRandomInclusive(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}

const generateUniqNumber = async () => {
    try {
        let randomNumber;
        let card = {}
        let i = 0;
        const stopNumber = 700;
        while (card && i < stopNumber) {
            randomNumber = getRandomInclusive(1000000, 9999999);
            card = await getCardByBizNumber(randomNumber);
            i++;
        }
        if (i >= stomNumber) {
            throw new Error(newNumberNotFound);
        }
        return randomNumber;
    } catch (err) {
        generateUniqNumber_err(err);
    }
};

export default generateUniqNumber;