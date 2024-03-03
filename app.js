
import express from "express";
import path from "node:path";
import cookieParser from "cookie-parser";
import logger from "./logger/loggerAdapter.js";
// import for static files
import apiRouter from "./routes/api.router.js";
import cors from "cors";
import * as url from "url"
import compression from "compression";
import helmet from "helmet";

const _dirname = url.fileURLToPath(new URL(".", import.meta.url))

let app = express();

app.use(cors());

app.use(compression());
app.use(logger());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(_dirname, "public")));

app.use("/api", apiRouter);

// module.exports = app;
export default app;
