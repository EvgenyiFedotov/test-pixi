import express from 'express';
import http from 'http';
import mainServer from '../client/main/server';

const PORT = 5000;
const app = express();
const httpServer = http.Server(app);

app.use(express.json());
app.use(express.static('dist/client'));
app.get('/favicon.ico', (req, res) => res.sendStatus(404));
app.get('/', (req, res) => {
  res.send(mainServer());
});

httpServer.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
