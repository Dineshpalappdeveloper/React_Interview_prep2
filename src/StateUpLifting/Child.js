import React, { useState } from 'react'

const Child = (props) => {
    const [name, setName] = useState("")
    console.log(name);
    // console.log(props.getData("helo"));
    console.log(props);
    {

    }
    return (
        <div>
            <h1>Child</h1>
            <form>
                <input type='text' placeholder='Enter Your Name' onChange={(e) => {
                    setName(e.target.value)
                }} />
                <button type='button' onClick={() => {
                    props.getData(name)
                }}>Submit</button>
            </form>
        </div>
    )
}

export default Child