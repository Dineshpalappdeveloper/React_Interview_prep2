import React, { useEffect, useState } from 'react'

const Get1 = () => {
    const [data, setData] = useState("")
    console.log(data);
    useEffect(() => {
        fetch('http://localhost:3002/data1')
            .then(res => res.json())
            .then(result => setData(result))
    }, [])

    return (
        <div>
            <h1>Get1</h1>
            <ol>
                {
                    data && data.map((item, index) => {
                        return (
                            <li key={index} >{item.name}</li>

                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Get1