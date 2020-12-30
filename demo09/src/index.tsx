import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  // debug here
  const a = 1;
  const b = 2;
  const c = a + b;
  console.log(c);

  return (
    <div>hello react launched by webpack</div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
