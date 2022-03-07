"use strict";
global.config = require("./config");
const serverOptions = config.serverOptions;
const sslOptions = config.sslOptions;
const mediasoupOptions = config.mediasoupOptions;

// --- prepare server ---
const https = require("https");
const express = require("express");
const app = express();
const webPort = serverOptions.listenPort;
app.use(express.static("public"));
let webServer = null;

// --- start server ---
webServer = https.createServer(sslOptions, app).listen(webPort, function () {
  console.log(
    "Web server start. https://" +
      serverOptions.hostName +
      ":" +
      webServer.address().port +
      "/"
  );
});
global.io = require("socket.io")(webServer);
require("./service/socket");

console.log("socket.io server start. port=" + webServer.address().port);
