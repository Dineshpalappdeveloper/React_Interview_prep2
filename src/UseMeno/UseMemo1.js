import React from 'react'
import { useState } from 'react'

const UseMemo1 = () => {
    const [data] = useState(0)
    const [count, setCount] = useState(0)
    console.log(data);
    function handleClick() {
        setCount(count + 1)
        console.log("countUpdate");
    }
    return (
        <div>
            <h1> data : {data} </h1>
            <h1> Conter : {count} </h1>
            <button onClick={() => { handleClick() }} >Update count </button>
        </div>
    )
}

export default UseMemo1