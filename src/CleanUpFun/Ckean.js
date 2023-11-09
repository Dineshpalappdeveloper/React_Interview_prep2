import React, { useEffect } from 'react'

const Ckean = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log(new Date().getDate());
            console.log("Dinesh");
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div>
            <h1>Cleanup function Compo</h1>
        </div>
    )
}

export default Ckean