/**
 * integrating mediasoup server with a node.js application
 */

/* Please follow mediasoup installation requirements */
/* https://mediasoup.org/documentation/v3/mediasoup/installation/ */
import express from "express";
const app = express();

import https from "httpolyglot";
import fs from "fs";
import path from "path";
const __dirname = path.resolve();

import { Server } from "socket.io";
import mediasoup from "mediasoup";

app.get("/", (req, res) => {
  res.send("Hello from mediasoup app!");
});

app.use("/sfu", express.static(path.join(__dirname, "public")));

// SSL cert for HTTPS access
const options = {
  // key: fs.readFileSync("./ssl/key.pem", "utf-8"),
  // cert: fs.readFileSync("./ssl/cert.pem", "utf-8"),
};

const httpsServer = https.createServer(options, app);
httpsServer.listen(3000, () => {
  console.log("listening on port: " + 3000);
});

const io = new Server(httpsServer);

// socket.io namespace (could represent a room?)
const peers = io.of("/mediasoup");
/**
 * Worker
 * |-> Router(s)
 *     |-> Producer Transport(s)
 *         |-> Producer
 *     |-> Consumer Transport(s)
 *         |-> Consumer
 **/
let worker;
let router;
let producerTransport;
let consumerTransport;
let producer;
let consumer;


const createWorker = async () => {
  worker = await mediasoup.createWorker({
    rtcMinPort: 2000,
    rtcMaxPort: 2020,
  });
  console.log(`worker pid ${worker.pid}`);

  // worker.on("died", (error) => {
  //   // This implies something serious happened, so kill the application
  //   console.error("mediasoup worker has died");
  //   setTimeout(() => process.exit(1), 2000); // exit in 2 seconds
  // });

  return worker;
};

// We create a Worker as soon as our application starts
worker = createWorker();
