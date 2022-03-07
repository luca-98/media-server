module.exports = async (callback) => {
  if (mediasoupRouter) {
    sendSocketResponse(mediasoupRouter.rtpCapabilities, callback);
  } else {
    sendSocketReject({ text: "ERROR- mediasoupRouter NOT READY" }, callback);
  }
};
