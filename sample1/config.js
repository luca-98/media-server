const fs = require("fs");
let serverOptions = {
  hostName: "0.0.0.0",
  listenPort: 3000,
  httpsKeyFile: "./ssl/key.pem",
  httpsCertFile: "./ssl/cert.pem",
};

let sslOptions = {
  key: fs.readFileSync(serverOptions.httpsKeyFile).toString(),
  cert: fs.readFileSync(serverOptions.httpsCertFile).toString(),
};

const mediasoupOptions = {
  // Worker settings
  worker: {
    rtcMinPort: 10000,
    rtcMaxPort: 10100,
    logLevel: "warn",
    logTags: [
      "info",
      "ice",
      "dtls",
      "rtp",
      "srtp",
      "rtcp",
      // 'rtx',
      // 'bwe',
      // 'score',
      // 'simulcast',
      // 'svc'
    ],
  },
  router: {
    mediaCodecs: [
      {
        kind: "audio",
        mimeType: "audio/opus",
        clockRate: 48000,
        channels: 2,
      },
      {
        kind: "video",
        mimeType: "video/VP8",
        clockRate: 90000,
        parameters: {
          "x-google-start-bitrate": 1000,
        },
      },
    ],
  },
  webRtcTransport: {
    listenIps: [{ ip: "0.0.0.0", announcedIp: "192.168.4.43" }],
    enableUdp: true,
    enableTcp: true,
    preferUdp: true,
    maxIncomingBitrate: 1500000,
    initialAvailableOutgoingBitrate: 1000000,
  },
};

module.exports.serverOptions = serverOptions;
module.exports.sslOptions = sslOptions;
module.exports.mediasoupOptions = mediasoupOptions;
