import express from 'express';
import http from 'http';
import client from '../client';

const PORT = 5000;
const app = express();
const httpServer = http.Server(app);

app.use(express.json());
app.use(express.static('dist/client'));
app.get('/favicon.ico', (req, res) => res.sendStatus(404));
app.get('/', (req, res) => {
  res.send(client.app.server());
});

httpServer.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
