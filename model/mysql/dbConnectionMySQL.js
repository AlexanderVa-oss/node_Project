import mysql from "mysql2/promise";
import chalk from "chalk";

const connectTomysql2 = async () => {
    try {
        const conf = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'mydb',
        });
        const connection = await conf.getConnection();
        console.log(chalk.magentaBright.bold("Connected to MySQL"));
        return connection;
    } catch (err) {
        console.log(chalk.red.bold("Could not connect to MySQL: ", err));
        process.exit(1); //drop server 
    }
};

export default connectTomysql2
