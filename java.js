const express = require('express');
const app = express();
const webhookUrl = 'https://discordapp.com/api/webhooks/1239972364511477760/ZUUrkAsBGH760e3_JXNhG_Udo9MAGHyZBpi4Idfw8z9Pr7s5oEx-ncerCnhzDvJ0lfry';
const messages = [];

app.use(express.json());

app.post('/discord-webhook', (req, res) => {
  const message = req.body;
  messages.push(message);
  res.send(`Received message: ${message.content}`);
});

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
