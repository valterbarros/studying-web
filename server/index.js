import express from 'express';
import cors from 'cors';
import { WebSocketServer } from 'ws';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5500;

app.use(cors())

app.use(express.static('public'));

app.post("/posti", (request,response) => {
  const status = {
    "Status" : "running"
  };

  console.log('requests', request);

  response.send(status);
});

app.get("/digits", (request, response) => {
  response.appendHeader('Content-Type', 'text/event-stream; charset=utf-8');
  response.appendHeader('Cache-Control', 'no-cache');

  response.write('event: bye\ndata: bye-bye\n\n');
  response.write('data: ' + 1 + '\n\n');
  response.write(`id: 1 \n\n`);
});

app.listen(PORT, () => {
  console.log("Server is Listening on PORT:", PORT);
});

// Websocker \/

function onError(ws, err) {
  console.error(`onError: ${err.message}`);
}

function onClose() {
  console.log('close');
}

function onMessage(ws, data) {
  console.log(`onMessage: ${data}`);
  ws.send(Buffer.from('123'));
}

function onConnection(ws, req) {
  ws.on('message', data => onMessage(ws, data));
  ws.on('error', error => onError(ws, error));
  ws.on('close', () => onClose());
  console.log(`onConnection`);
}

const mountWs = () => {
  const wss = new WebSocketServer({
    port: 8080,
  });

  wss.on('connection', onConnection);

  console.log(`App Web Socket Server is running!`);
  return wss;
}

mountWs();
