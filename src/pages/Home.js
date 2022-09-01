import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import Navbar from '../components/layout/Navbar'
import { ToastContainer } from 'react-toastify'

const Home = () => {
    // const itemStore = useSelector(store => store.item)
    // const items= itemStore.items 
    const items = useSelector(store => store.item.items) // to get items from itemStore/itemReducer    
    // console.log(items)
    const [limit, setLimit] = useState(8)
    const [search, setSearch] = useState('') // start ma search empty hunxa 
    const [filteredResult, setFilteredResult] = useState([]) // starting ma we display all the items but now only filteredResult

    useEffect(() => {
        setFilteredResult(items.filter(item => item.product_name.toLowerCase().match(search.toLowerCase())))

    }, [search]) // when search changes this useEffect works


    return (
        <>
            <Navbar />
            <div className='container-fluid'>
                {/* input type search -> displays cross icon in right side, 
                form-control -> displays form full width to container
                */}
                <input type={'search'} className='form-control' onChange={e => setSearch(e.target.value)} />
                {/* search box ma kei changes vayo vane value search ma store hunxa */}
            </div>
            <ToastContainer theme='colored' position='top-right' />
            <div className='container-fluid p-5 text-center'>
                <div className="row row-cols-2 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        // items.slice(0, limit).map(item_obj => <Card item={item_obj} />) // displays all the items
                        filteredResult.slice(0, limit).map(item_obj => <Card item={item_obj} />) // displays filtered items and if search is empty then it also displays all the items
                    }
                    {/* slice displays 0 - limit(7) items */}
                </div>
                {
                    limit < items.length && // if item length is smaller than limit
                    <button className='btn btn-primary m-5' onClick={() => setLimit(limit + 4)}>Show More</button>
                }
                {
                    // limit > 0 &&
                    limit > 8 &&
                    <button className='btn btn-primary m-5' onClick={() => setLimit(limit - 4)}>Show Less</button>
                }
            </div>
        </>
    )
}

export default Home