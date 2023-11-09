import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { add, sub } from './CounterSlice'
const Counter12 = () => {
    const data = useSelector((state) => state.Counter.count)
    const dispatch = useDispatch()
    console.log(data);
    return (
        <div>
            <h1>Counter {data} </h1>
            <button onClick={() => dispatch(add())}>Increment</button>
            <button onClick={() => dispatch(sub())}>Decrement</button>
        </div>
    )
}

export default Counter12