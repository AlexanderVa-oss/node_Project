import mongoose from "mongoose";
import { conectedToMongo, NotConnectToMongo, conectedToMongoLocal } from "../../utils/errors.js";

const connectToMongo = () => {
    if (process.env.ENVIRONMENT === "production") {
        return new Promise((resolve, reject) => {
            mongoose
                .connect(process.env.MONGODB_CONNECTION_STR + "bizdb")
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
    if (process.env.ENVIRONMENT === "development") {
        return new Promise((resolve, reject) => {
            mongoose
                .connect(process.env.REMOTE_URL + "bizdb")
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