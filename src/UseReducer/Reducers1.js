import React, { useReducer, useState } from 'react'
import Ckean from '../CleanUpFun/Ckean';


const Reducers1 = () => {

    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case "Increment":
                return state + 1
            case "Decrement":
                return state - 1
            case "Multiplication":
                return state * 10
            default:
                return state
        }
    }

    const [count, setCount] = useReducer(reducer, initialState);
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Counter : {count} </h1>
            <button onClick={() => setCount("Increment")} >Increment</button>
            <button onClick={() => setCount("Decrement")} >Decrement</button>
            <button onClick={() => setCount("Multiplication")} >Multiplication</button>
            <h1>
                <button onClick={() => setShow(!show)}>toggle</button>
                {show ? <Ckean /> : ""}
            </h1>
        </div>
    )
}

export default Reducers1