import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5500;

app.use(cors())

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log("Server is Listening on PORT:", PORT);
});

app.post("/posti", (request,response) => {
  const status = {
    "Status" : "running"
  };

  console.log(request);

  response.send(status);
});
