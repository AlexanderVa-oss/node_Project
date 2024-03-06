// errors.js
import chalk from "chalk";

import debug from "debug";
let debugLog = debug("app:server");

const handleError = (res, status, message) => {
    debugLog(chalk.red(message));
    res.status(status).json({ error: message });
}

// model/dbconnectionMongo.js
// Console error
const conectedToMongo = () => debugLog(chalk.magenta.bold("Connected to MongoDB " + process.env.CLOUD));
const conectedToMongoLocal = () => debugLog(chalk.magenta.bold("Connected to MongoDB localhost " + process.env.CLOUD));
const NotConnectToMongo = (err) => debugLog(chalk.red.bold("Could not connect to MongoDB: ", err));

// model/mongodb/cards/initialCardsDataServise.js
const initialCard_err = (err) => debugLog(chalk.yellowBright.yellowBright("Could not add initial cards: ", err));

// model/mongodb/users/initialUsersDataServise.js
const initialUser_err = (err) => debugLog(chalk.yellowBright("Could not add initial user: ", err));

// utilss/generateUniqNumber.js
const generateUniqNumber_err = (err) => debugLog(chalk.red("Could not generate uniq number: ", err))
const generateUniqBizzNumber_err = (err) => debugLog(chalk.red("Could not generate uniq bizz number: ", err))

// contrrollers/cards/cards.controler.js
const handleGetAllCards_err = (err) => debugLog(chalk.red("Could not get all cards: ", err));
const getCardByIdController_err = (err) => debugLog(chalk.red("Could not get card by id: ", err));
const getMyCardsController_err = (err) => debugLog(chalk.red("Could not get my card: ", err));
const createCardController_err = (err) => debugLog(chalk.red("Could create card: ", err));
const handleUpdateCard_err = (err) => debugLog(chalk.red("Could update card: ", err));
const patchLikeController_err = (err) => debugLog(chalk.red("Could patch like: ", err));
const patchBizznumberController_err = (err) => debugLog(chalk.red("Could patch bisuness number: ", err));
const handleDeleteCard_err = (err) => debugLog(chalk.red("Could patch delete card: ", err));

// contrrollers/users/users.controler.js
const handleGetAllUsers_err = (err) => debugLog(chalk.red("Could not get all users: ", err));
const handleRegisterUser_err = (err) => debugLog(chalk.yellowBright("Could not register user: ", err));
const loginControler_err = (err) => debugLog(chalk.yellowBright("Could not login user: ", err));
const updateControler_err = (err) => debugLog(chalk.yellowBright("Could not update user: ", err));
const deleteControler_err = (err) => debugLog(chalk.yellowBright("Could not delete user: ", err));
const pathControler_err = (err) => debugLog(chalk.yellowBright("Could not update user level: ", err));

// middlewares/auth.middleware.js
const authToken_err = (err) => debugLog(chalk.red("Invalid token: ", err));

const userAlreadyExists = "User Already Exists";
const newNumberNotFound = "Could not generate new uniq number";
const ivalidEmailorPassword = "Invalid email or password";
const noTokenProvided = "No token provided";
const youAreNotAuthorizedToUpdateThisUser = "You are not authorized to update this user";
const unauthorizedLvl = "Unauthorized User level"; // user level
const notLogIn = "Not Logged In"; // user level
const unauthorized = "Unauthorized";

export {
    conectedToMongo,
    conectedToMongoLocal,
    NotConnectToMongo,
    initialCard_err,
    getCardByIdController_err,
    getMyCardsController_err,
    createCardController_err,
    handleUpdateCard_err,
    patchLikeController_err,
    patchBizznumberController_err,
    handleDeleteCard_err,

    initialUser_err,
    generateUniqNumber_err,
    generateUniqBizzNumber_err,
    handleGetAllCards_err,
    handleGetAllUsers_err,
    handleError,
    handleRegisterUser_err,
    loginControler_err,
    authToken_err,
    updateControler_err,
    deleteControler_err,
    pathControler_err,
    newNumberNotFound,
    userAlreadyExists,
    ivalidEmailorPassword,
    noTokenProvided,
    youAreNotAuthorizedToUpdateThisUser,
    unauthorized,
    notLogIn,
    unauthorizedLvl,
};