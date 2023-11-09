import React from 'react'
import C from './C'

const B = ({ data }) => {
    return (
        <div>B
            <C data={data} />
        </div>
    )
}

export default B