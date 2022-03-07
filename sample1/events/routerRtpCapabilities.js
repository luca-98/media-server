module.exports = async (callback) => {
  if (mediasoupRouter) {
    callback(null, mediasoupRouter.rtpCapabilities);
  } else {
    callback({ text: "ERROR- mediasoupRouter NOT READY" }.toString(), null);
  }
};
