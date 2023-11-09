import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosCalls = () => {
    const [data, setdata] = useState("")
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => setdata(response.data))
    })
    return (
        <div>

            {
                data && data.map((item, index) => {
                    return (
                        <div key={index}>
                            <ul >
                                <h1>name: {item.name} Email : {item.email} </h1>
                                <li></li>
                            </ul>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default AxiosCalls