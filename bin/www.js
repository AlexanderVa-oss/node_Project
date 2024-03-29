#!/usr/bin/env node

/**
 * Module dependencies.
 */

// var app = require('../app');
// var http = require('http');
import debug from "debug";
let debugLog = debug("app:server");

import env from "dotenv"
env.config();
import app from "../app.js";
import connectToDb from "../model/dbAdapter.js";
import http from "http";
import Chalk from "chalk";

import { initialUsers } from "../initialData/initialUsersDataService.js"
import { initialCards } from "../initialData/initialCardsDataService.js"

/**
 * Get port from environment and store in Express.
 */

let port = normalizePort(process.env.PORT || "3030");
app.set("port", port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === "string" ? + addr : + addr.port;
  debugLog(Chalk.blue('Listening on http://localhost:') + Chalk.green(bind) + Chalk.blue('/'))
  connectToDb().then(async () => {
    let bizId = await initialUsers();
    if (bizId) await initialCards(bizId);
  });
}
