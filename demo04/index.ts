import os from 'os';

interface Person {
  name: string;
  age: number;
}

const tom: Person = {
  name: 'tom',
  age: 18
}

console.log(tom);

const a = 1;
const b = 2;
// debug here
const c = a + b;

console.log(c);
console.log('get homedir');
console.log(os.homedir());
console.log('get homedir success');