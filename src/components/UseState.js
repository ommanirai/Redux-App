import React, { useState } from 'react'

const UseState = () => {
    // let/const [state_variable, function] = useState(initial Value)
    // state_variable: variable
    // function: function to update state_variable
    // initialValue: starting value
    let [count, setCount] = useState(0)
    return (
        <>
            Count={count}
            <br />
            {
                count < 10 &&
                <button onClick={() => { return setCount(count + 1) }}>Increase Count By 1</button>           
            }
            <br/>
            {
                count > 0 &&
                <button onClick={() => { return setCount(count - 1) }}>Decrease Count By 1</button>
            }



        </>
    )
}

export default UseState