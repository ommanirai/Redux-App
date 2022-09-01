import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    // useSelector -> to access reducer/store provided by provider
    // const counter = useSelector(store => store.count)
    // const count = counter.count

    const count = useSelector(store => store.counter.count)
    // useDispatch -> to update store/reducer
    const dispatch = useDispatch()
    return (
        <>
            <h1>count:{count}</h1>
            <button onClick={() => dispatch({ type: "INCREASE_COUNT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREASE_COUNT" })}>DECREASE_COUNT</button>
            <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>

        </>
    )
}

export default Counter