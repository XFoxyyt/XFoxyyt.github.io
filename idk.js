const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let playerJoinedMessage = "";

app.post('/updateMessage', (req, res) => {
  const { player, message } = req.body;
  playerJoinedMessage = message;
  console.log(`Received message from ${player}: ${message}`);
  res.sendStatus(200);
});

app.get('/getMessage', (req, res) => {
  res.send(playerJoinedMessage);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
