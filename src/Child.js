import React, {useContext} from 'react';
import CounterContext from './CounterContext.js';




const Child = (props) => {

    let counterValue = useContext(CounterContext);
    
    return(
        <div>
            <h1> This is first child Component</h1>
            <h2> This is {props.name}</h2>
            <br/>
            <h1> Passing Value through CounterContext</h1>
            <h3> Counter value is: {counterValue[0]}</h3>
            <button className="button"
             onClick={() => {counterValue[1](++counterValue[0])} }>
                 Increment
            </button>
        </div>
    )
}

export default Child;