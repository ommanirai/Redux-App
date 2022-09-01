import React, { useState } from 'react'

const UseNumber = () => {
    let [count, setCount] = useState(0)
    return (
        <>
            Count={count}
            <br />
            {

                <button onClick={() => { return setCount(count + 2) }}>Increase Count By 2</button>
            }<br />

            {
                count > 0 &&
                <button onClick={() => { return setCount(count - 2) }}>Decrease Count By 2</button>
            }



        </>
    )
}

export default UseNumber