import React from 'react'
import itemReducer from '../reducer/itemReducer'
import { useDispatch } from 'react-redux'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const Card = ({card_item}) => {
//     console.log({card_item})
//   return (
//     <>
//     <h1>User Id: {card_item.id}</h1>
//     <h2>Title: {card_item.title}</h2>
//     <p>Body: {card_item.body}</p>
//     <hr/>
// const Card = (props) => { // props -> unnamed parameter
const Card = ({ item }) => { // item -> named parameter
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch({ type: "ADD_TO_CART", payload: item })
        toast.success(`${item.product_name}item added to cart`)  
    }


    // console.log({ card_item })
    return (
        <>
        {/* <ToastContainer theme='colored' position="top-right"/> */}
        {/* this container effect the home page design so we use it to the home page which does not effect design of home page */}
            {/* <h1>User Id: {props.card_item.id}</h1>
            <h2>Title: {props.card_item.title}</h2>
            <p>Body: {props.card_item.body}</p>
            <hr /> */}

            <div className="col">
                <div className="card">
                    {/* <img src= {props.item.product_image} className="card-img-top" alt="..."/> */}
                    <img src={item.product_image} className="card-img-top" alt="..." height={"250px"} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.product_name}</h5>
                        <h5 className="card-title">{item.product_price}</h5>
                        <p className="card-text text-truncate" style={{ height: '30px' }}>{item.product_description}</p>
                        {/* text-truncate --> display only one line of description */} 
                        <button className='btn btn-warning' onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card