import React from 'react';
import Parent from './Parent.js';
import './App.css';
import CounterContext from './CounterContext.js';

function App() {
  return (
    <CounterContext.Provider value={12}>;
    <div>
      <Parent  name="Zohaib"/>
    </div>
    </CounterContext.Provider>
  );
}

export default App;
