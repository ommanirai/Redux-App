import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [count, setCount]=useState(0)
    const [data, setData]=useState(10)
    /*
    useEffect shows the side effect  when the state variable changes state.
    
    
    */
    useEffect(() => {
        window.alert("count is undated")
    }, [ count, data ])

    return (
        <>
            Count={count}
            <br />
            {
                count < 10 &&
                <button onClick={() => { return setCount(count + 1) }}>Increase Count By 1</button>
            }
            <br />
            {
                count > 0 &&
                <button onClick={() => { return setCount(count - 1) }}>Decrease Count By 1</button>
            }
            Data={data}
            <br />
            {
                data < 10 &&
                <button onClick={() => { return setData(data + 1) }}>Increase data By 1</button>
            }
            <br />
            {
                data > 0 &&
                <button onClick={() => { return setData(data - 1) }}>Decrease data By 1</button>
            }
        </>
    )
}

export default UseEffect