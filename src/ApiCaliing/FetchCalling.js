import React, { useEffect, useState } from 'react'

const FetchCalling = () => {
    const [data, setData] = useState("");
    console.log(data)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((result) => setData(result))

    })
    return (
        <div>  {

            data && data.map((item, index) => {
                return (
                    <div key={index}>
                        <ul >

                            <h1>name: {item.name} Email : {item.email} </h1>
                            <li>   FetchCalling</li>
                        </ul>
                    </div>
                )
            })
        }</div>
    )
}

export default FetchCalling