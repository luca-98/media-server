const mediasoup = require("mediasoup");
async function startWorker() {
  let worker = await mediasoup.createWorker();
  console.log("-- mediasoup worker start. --".worker);
}

startWorker();
