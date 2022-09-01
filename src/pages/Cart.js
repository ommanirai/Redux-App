import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
// import { ToastContainer } from 'react-toastify/dist/components'

const Cart = () => {
    // const cart_items = useSelector(store => store.cart.cart_items)
    const cartStore = useSelector(store => store.cart)
    const cart_items = cartStore.cart_items
    const dispatch = useDispatch()

    const navigate= useNavigate()
    
    const Payment = () =>{
        return navigate('/payment/1000,100,100')
    }





    return (
        <>
            <Navbar />
            <div className='container'>
                {
                    cart_items.length > 0 ?
                        <table className='table table-bordered text-center mt-5 shadow-lg'>
                            <thead>
                                <tr>
                                    <th>S. No.</th>
                                    <th>Product Image</th>
                                    <th>Product Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart_items.map((item, i) => {
                                        return <tr key={item.id}>
                                            <td>{i + 1}</td>
                                            <td>
                                                <img src={item.product_image} alt={item.product_name} height='150px' />
                                            </td>
                                            <td>
                                                <h4>{item.product_name}</h4>
                                                <h5>{item.product_price}</h5>
                                                <p>{item.product_description}</p>
                                            </td>
                                            <td>
                                                <button className='btn btn-danger mt-5' onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}>REMOVE</button>
                                            </td>
                                        </tr>
                                    })

                                }
                            </tbody>
                        </table>
                        :
                        <div className='text-center fs-4'>There are no items in cart.</div>
                }
                <button className='btn btn-warning' onClick={Payment}>Proceed to Payment</button>
            </div> 
        </>
    )
}

export default Cart