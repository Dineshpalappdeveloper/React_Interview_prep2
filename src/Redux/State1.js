import React from 'react'

const State1 = () => {
    const [data, setData] = useState("hii")
    function getData(value) {
        setData(value)
    }
    return (
        <div>
            <h1>StateUplift11 :{data}</h1>
            <Chil11 data={getData} />
        </div>
    )
}

export default State1