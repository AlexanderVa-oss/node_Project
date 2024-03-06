import mongoose from "mongoose";
import { conectedToMongo, NotConnectToMongo } from "../../utils/errors.js";

const connectToMongo = () => {
    if (process.env.ENVIRONMENT === "production") {
        return new Promise((resolve, reject) => {
            mongoose
                .connect(process.env.MONGODB_CONNECTION_STR + "bizdb")
                .then(() => {
                    console.log(chalk.magentaBright.bold("Connected to MongoDB"));
                    resolve();
                })
                .catch((err) => {
                    console.log(
                        chalk.redBright.bold("Error connecting to MongoDB: ", err)
                    );
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
                    console.log(
                        chalk.magentaBright.bold(
                            "Connected to MongoDB-LOCAL" + process.env.REMOTE_URL
                        )
                    );
                    resolve();
                })
                .catch((err) => {
                    console.log(
                        chalk.redBright.bold("Error connecting to MongoDB: ", err)
                    );
                    reject(err);
                    process.exit(1);
                });
        });
    }
};

export default connectToMongo