module.exports = async (callback) => {
  console.log("-- createProducerTransport ---");
  const { transport, params } = await createTransport();
  addProducerTrasport(socket.id, transport);
  transport.observer.on("close", () => {
    const id = socket.id;
    const videoProducer = getProducer(id, "video");
    if (videoProducer) {
      videoProducer.close();
      removeProducer(id, "video");
    }
    const audioProducer = getProducer(id, "audio");
    if (audioProducer) {
      audioProducer.close();
      removeProducer(id, "audio");
    }
    removeProducerTransport(id);
  });
  sendSocketResponse(params, callback);
};
