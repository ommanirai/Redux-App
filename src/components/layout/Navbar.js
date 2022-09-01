import React from 'react';
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = () => {
    // const no_of_items = useSelector(store => store.cart.cart_items.length)
    const cartStore = useSelector(store => store.cart)
    const itemsInCart = cartStore.cart_items
    const no_of_items = itemsInCart.length

    return (
        <>
            <div className='container-fluid'>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <div className='d-flex justify-content-space-between'>
                            <Link className="navbar-brand" to="#">Navbar</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/cart">Cart
                                        <span
                                        style={{position:'absolute',top:'10px',backgroundColor:'red', left:'190px', paddingLeft:'5px',color:'yellow', display:'block', height:'20px', width:'20px', borderRadius:'50%'}}>
                                            {no_of_items}</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=''>
                            No. of items in Cart: {no_of_items}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar