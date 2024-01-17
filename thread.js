const { Worker, isMainThread, parentPort } = require("worker_threads");

function hilo() {
  if (isMainThread) {
    // This code runs in the main thread

    // Creating a new worker thread
    const worker = new Worker(__filename);

    // Sending a message to the worker
    worker.postMessage("Hello from the main thread!");

    // Listening for messages from the worker
    worker.on("message", (message) => {
      console.log("Message received from worker:", message);
    });

    // Handling errors from the worker
    worker.on("error", (error) => {
      console.error("Error in worker:", error.message);
    });
  } else {
    // This code runs in the worker thread

    // Listening for messages from the main thread
    parentPort.on("message", (message) => {
      console.log("Message received in worker:", message);

      // Performing some computation
      const result = `${message} - Message processed in the worker`;

      // Sending the result back to the main thread
      parentPort.postMessage(result);
    });
  }
}

module.exports = hilo;
