import React from 'react'

const Chil11 = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Chil11</h1>
            <button onClick={() => props.data("Dinesh")} >submit</button>
        </div>
    )
}

export default Chil11