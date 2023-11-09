import React, { useContext } from 'react'
import Sender from './Sender'

const Resiver = () => {
    const data = useContext(Sender)
    console.log([data]);
    return (
        <div>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}> Name : {item.name} Age : {item.roll} </div>
                    )
                })
            }
        </div>
    )
}

export default Resiver