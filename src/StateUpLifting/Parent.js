import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [data, setdata] = useState("Dabloo");

    function getData(data) {
        setdata(data)
    }
    return (
        <div>
            <h1>Parent</h1>
            <h2>Your name is :{data} </h2>
            <Child getData={getData} />
        </div>
    )
}

export default Parent