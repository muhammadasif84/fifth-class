import React , {useReducer} from 'react';
import CounterReducer from './CounterReducer.js';



const Child2 = () => {

    
     let [state, dispatch] = useReducer(CounterReducer , 0);
     console.log(state);
     return (
        <div>
            <h1> Passing Value through Reducer</h1>
        <h3> The Value of Reducer state is: {state}</h3>;
        <button onClick= {() => dispatch ('INCREMENT')}>Reducer Increment</button>

        </div>
    )
}
export default Child2;