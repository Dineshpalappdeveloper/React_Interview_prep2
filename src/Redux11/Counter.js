import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { add, sub } from './CounterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const { count } = useSelector((state) => state)
    return (
        <div>
            <h1>{count.count}</h1>
            <button onClick={() => dispatch(add())}>Increment</button>
            <button onClick={() => dispatch(sub())}>Increment</button>
        </div>
    )
}

export default Counter