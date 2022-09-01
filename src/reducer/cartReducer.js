// stores only the items in the cart
// [selected_items]

const initialData = {
    cart_items: []
}
 
const cartReducer = (state = initialData, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            return { cart_items: [...state.cart_items, action.payload] }   

        case "REMOVE_FROM_CART":
            return { cart_items: state.cart_items.filter(item => item.product_name != action.payload.product_name)}
        default:
            return state
    }
}

export default cartReducer