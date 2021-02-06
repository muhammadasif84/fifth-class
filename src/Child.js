import React, {useContext} from 'react';
import CounterContext from './CounterContext.js';



const Child = (props) => {

    let counterValue = useContext(CounterContext);
    
    return(
        <div>
            <h1> This is first child Component</h1>
            <h2> This is {props.name}</h2>
            <h3> Counter value is: {counterValue}</h3>
        </div>
    )
}

export default Child;