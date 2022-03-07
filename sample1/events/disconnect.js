const mediasoup = require("../service/mediasoup");
module.exports = async (socket) => {
  mediasoup.cleanUpPeer(socket);
};
