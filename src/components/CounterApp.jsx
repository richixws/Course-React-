import {PropTypes, number} from 'prop-types'
import { useState } from 'react';

export const CounterApp=({value, total})=>{

    const [counter,setCounter]=useState(10);

    const handlerAdd=()=>{

        counter+1;
        setCounter(counter+1);
    }
   

    return (
        <>
           <h1>Counter App</h1>
           <h2>{counter}</h2>
           <button onClick={ handlerAdd }>
             +1
           </button>
        </>
    )

}

CounterApp.propTypes={
   value:number.isRequired,
   total:number.isRequired
}