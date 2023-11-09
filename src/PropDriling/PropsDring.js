import React from 'react'
import B from './B'
import { useState } from 'react'

const PropsDring = () => {
    const [data] = useState(0)

    return (
        <div>     <h1> PropsDring: -{data}</h1>   <B data={data} />
        </div>
    )
}

export default PropsDring