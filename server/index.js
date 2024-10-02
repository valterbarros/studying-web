import express from 'express';
import cors from 'cors';
import { WebSocketServer } from 'ws';
import path, {dirname} from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5501;

app.use(cors())

app.use(express.static('public'));

function getHtmlFiles(dir, baseUrl) {
  let htmlFiles = [];
  
  const items = fs.readdirSync(dir, { withFileTypes: true });

  items.forEach(item => {
      const fullPath = path.join(dir, item.name);
      const relativePath = path.join(baseUrl, item.name);

      if (item.isDirectory()) {
          // Recursively get .html files in subdirectories
          htmlFiles = htmlFiles.concat(getHtmlFiles(fullPath, relativePath));
      } else if (item.isFile() && item.name.endsWith('.html')) {
          // Add the file path if it's an .html file
          htmlFiles.push(relativePath);
      }
  });

  return htmlFiles;
}

// Serve the index.html file
app.get('/', (req, res) => {
  const browserDir = path.join(__dirname, '..', 'subjects', 'Browser');
  
  // Get all .html files recursively from the Browser directory
  const htmlFiles = getHtmlFiles(browserDir, '/subjects/Browser');

  // Generate HTML links for each .html file
  let fileLinks = htmlFiles.map(file => 
      `<li><a href="${file}">${path.normalize(file)}</a></li>`
  ).join('');

  // Serve index.html with the list of links
  let htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>HTML Files</title>
      </head>
      <body>
          <h1>List of HTML files in /subjects/Browser</h1>
          <ul>
              ${fileLinks}
          </ul>
      </body>
      </html>
  `;

  res.send(htmlContent);
});

// Serve static files in subjects/Browser
app.use('/subjects/Browser', express.static(path.join(__dirname, '..', 'subjects', 'Browser')));

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
