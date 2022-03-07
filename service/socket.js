const disconnect = require("../events/disconnect");

io.on("connection", function (socket) {
  console.log("----->connection\n  total clients=" + io.eio.clientsCount);

  socket.on("disconnect", function () {
    disconnect(socket);
  });
});
