import express from 'express';

const app = express();
const port = 30003;

app.get('/', (req, res) => {
  // debug here
  const startWord = 'Hello';
  const endWord = 'World';
  res.send(`${startWord} ${endWord}`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})