import express from 'express';

import { getHomeDir } from './util.js';

const app = express();
const port = 30003;

app.get('/', (req, res) => {
  // debug here
  const startWord = 'Hello';
  const dir = getHomeDir();
  console.log(dir);
  const endWord = 'World';
  res.send(`${startWord} ${endWord}`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})