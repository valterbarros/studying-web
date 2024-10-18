const globalVar = Date.now();

onconnect = function (event) {
  console.log('connect');
  const port = event.ports[0];
  port.start();

  port.onmessage = function (e) {
    console.log('mensage from main thread', e);
    
    port.postMessage(globalVar);
  };
};
