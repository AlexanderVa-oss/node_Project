import mongoose from "mongoose";
import { conectedToMongo, NotConnectToMongo } from "../../utils/errors.js";

const connectToMongo = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(process.env.MONGODB_CONNECTION_STR + "ProjectName")
            .then(() => {
                conectedToMongo(); // Console error
                resolve();
            })
            .catch((err) => {
                NotConnectToMongo(); // Console error
                reject(err);
                process.exit(1); //drop server 
            });
    })
};

export default connectToMongo