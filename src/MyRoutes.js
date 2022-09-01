import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Counter from './pages/Counter'
import Games from './pages/Games'
import Home from './pages/Home'
import NewPage from './pages/NewPage'
import Payment from './pages/Payment'

const MyRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/counter' element={<Counter />} />
                    <Route path='/games' element={<Games />} />
                    <Route path='/combined' element={<NewPage />} />
                    <Route path='/cart' element={<Cart/>}/>


                    <Route path='/' element={<Home />} />
                    <Route path='/payment/:amt,:sc,:dc' element={<Payment/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default MyRoutes