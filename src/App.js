import React , {useState} from 'react';
import Parent from './Parent.js';
import './App.css';
import CounterContext from './CounterContext.js';

function App() {

  //let [count , SetCount] = useState(333);
  let countState = useState(0);
  return (
    <CounterContext.Provider value={countState}>;
    <div>
      <Parent  name="Zohaib"/>
      
      
    </div>
    </CounterContext.Provider>
  );
}

export default App;
