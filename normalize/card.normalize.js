import generateUniqNumber from "../utils/generateUniqNumber.js";
import { generateUniqBizzNumber_err } from "../utils/errors.js";

const normalizeCards = async (cards) => {
  let image = {
    url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    alt: "Business card image",
  };
  if (cards.image) {
    if (cards.image.url) image.url = cards.image.url;
    if (cards.image.alt) image.alt = cards.image.alt;
  }

  let bizNumber;
  try {
    bizNumber = await generateUniqNumber();
  } catch (err) {
    generateUniqBizzNumber_err()
    bizNumber = "9999999"; 
  }

  return {
    ...cards,
    image,
    address: {
      ...cards.address,
      state: cards.address.state || undefined,
      zipcode: cards.address.zipcode,
    },
    web: cards.web || undefined,
    bizNumber,
  };
};

export default normalizeCards;
