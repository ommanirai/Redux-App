import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const UsingContext = () => {
    const msg = useContext(GlobalContext)
    return (
        <>
            <h1>
                {msg}
            </h1>
        </>
    )
}

export default UsingContext