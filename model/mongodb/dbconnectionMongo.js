import mongoose from "mongoose";
import { conectedToMongo, NotConnectToMongo, conectedToMongoLocal } from "../../utils/errors.js";

const connectToMongo = () => {
    if (process.env.NODE_ENV === "production") {
        console.log("prod Mode");
        return new Promise((resolve, reject) => {
            mongoose
                .connect(process.env.MONGODB_CONNECTION_STR + "/tavern")
                .then(() => {
                    conectedToMongo()
                    resolve();
                })
                .catch((err) => {
                    NotConnectToMongo(err);
                    reject(err);
                    process.exit(1);
                });
        });
    }
    if (process.env.NODE_ENV === "development") {
        console.log("dev Mode");
        return new Promise((resolve, reject) => {
            mongoose
                .connect(process.env.REMOTE_URL + "/tavern")
                .then(() => {
                    conectedToMongoLocal()
                    resolve();
                })
                .catch((err) => {
                    NotConnectToMongo(err);
                    reject(err);
                    process.exit(1);
                });
        });
    }
};

export default connectToMongo