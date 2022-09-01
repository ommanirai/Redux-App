import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card from './Card'

const DataFetch = () => {
    const [posts, setPosts] = useState([])
    const [limit, setLimit] = useState(10)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            // .then(response => {return setPosts(response.data)})
            .then(response => setPosts(response.data.slice(0, limit)))
            .catch(error => console.log(error))
    }, [limit])
    return (
        <>
            {
                posts.map((item) => {
                    // return <li key={item.id}>{item.title}</li>
                    return <Card card_item={item}/>
                })
            }
            {
                posts.length < 100 &&
                <button onClick={() => setLimit(limit + 10)}>Show More</button>
            }
            {
                posts.length > 0 &&
                <button onClick={() => setLimit(limit - 10)}>Show Less </button>
            }





        </>
    )
}

export default DataFetch