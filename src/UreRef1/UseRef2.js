import React from 'react'
import { useRef } from 'react'

const UseRef2 = () => {
    const nameRef = useRef(null);
    return (
        <div>
            <input type='text' ref={nameRef} />
            <button onClick={() => {
                nameRef.current.value = 2100
            }}>Submit</button>
        </div>
    )
}

export default UseRef2