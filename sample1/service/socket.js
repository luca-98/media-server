const disconnect = require("../events/disconnect");
const getRouterRtpCapabilities = require("../events/routerRtpCapabilities");
const createProducerTransport = require("../events/createProducerTransport");

io.on("connection", function (socket) {
  console.log("----->connection\n  total clients=" + io.eio.clientsCount);

  socket.on("disconnect", function () {
    disconnect(socket);
  });

  socket.on("error", function (err) {
    console.error("socket ERROR:", err);
  });

  socket.on("connect_error", (err) => {
    console.error("client connection error", err);
  });

  socket.on("getRouterRtpCapabilities", (data, callback) => {
    getRouterRtpCapabilities(callback);
  });

  socket.on("createProducerTransport", (data, callback) => {
    createProducerTransport(callback);
  });
});
