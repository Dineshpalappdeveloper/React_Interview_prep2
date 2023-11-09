import React, { useState } from 'react'

const Hoc1 = () => {
    return (
        <div>
            <HocRed data={<Counter />} />
            <h1>Outer</h1>
            <HocGreen data={<Counter />} />
        </div>
    )
}


function HocRed(props) {
    return (
        <h1 style={{ backgroundColor: "red", height: "100px" }} > {props.data} </h1>
    )
}
function HocGreen(props) {
    return (
        <h1 style={{ backgroundColor: "green", height: "100px" }} > {props.data} </h1>
    )
}
function Counter() {
    let [count, setCount] = useState(0)
    return (
        <div style={{ height: "300px", width: "300px" }}>
            <h1 style={{ height: "100px", width: "100px" }} >Counter : {count} </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
export default Hoc1