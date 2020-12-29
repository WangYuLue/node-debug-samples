import express from 'express';

const app = express();
const port = 30003;

interface Person {
  name: string;
  age: number;
}

const tom: Person = {
  name: 'tom',
  age: 20
}

app.get('/', (req, res) => {
  // debug here
  console.log('hello');
  console.log(tom);
  res.setHeader('Content-Type', 'application/json');
  res.send(tom);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})