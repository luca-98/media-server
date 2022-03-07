module.exports.cleanUpPeer = (socket) => {
  const id = socket.id;
  removeConsumerSetDeep(id);
  const transport = getConsumerTrasnport(id);
  if (transport) {
    transport.close();
    removeConsumerTransport(id);
  }
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

  const producerTransport = getProducerTrasnport(id);
  if (producerTransport) {
    producerTransport.close();
    removeProducerTransport(id);
  }
};
