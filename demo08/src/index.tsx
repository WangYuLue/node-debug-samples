import React from 'react';
import ReactDom from 'react-dom';

function App() {
  // debug here
  const a = 1;
  const b = 2;
  const c = a + b;
  console.log(c);

  return (
    <div>hello react launched by parcel</div>
  )
}


ReactDom.render(<App />, document.getElementById('root'))
