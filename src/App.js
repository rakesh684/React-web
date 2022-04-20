import React from 'react';

import './App.css';

function App() {
  const name = 'Rakesh';
  const isLoggedin = false;
  return (
    <div className="App">
      <header className="App-header">
         <p>
          Hello { isLoggedin ? name : 'world'}
        </p>
        
      </header>
    </div>
  );
}

export default App;
