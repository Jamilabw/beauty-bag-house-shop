import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";
import { type } from "@testing-library/user-event/dist/type";


const CartContext = createContext();

const getCartData = () =>{
    let newCartData = localStorage.getItem("cart");
     // you have to pass the key "cart" to get the localstorage data
    if (newCartData == []){
        return []; //initial state of cart
    }else{
        return JSON.parse(newCartData); //to change it back to array from string format
    }
}

 const initialstate = {
        // cart: [],
        cart: getCartData(),
        total_item: "",
        total_price: "",
        shipping_fee: 5,
      } 

export const CartProvider = ({children}) =>{

    const[state, dispatch] = useReducer(reducer, initialstate);

    const addToCart = (id, quantity, price, product)=>{
        dispatch({type: "ADD_TO_CART", payload: {id, quantity, price, product}}  )
    }

    // to delete items from the cart
    const removeItem = (id) =>{
        dispatch({type: "REMOVE_ITEM", payload: id})
    }

    // Increment functioning in the cart page
    const setIncrement = (id) =>{
        dispatch({type: "SET_INCREMENT", payload: id})
    }

     // decrement functioning in the cart page
    const setDecrement = (id) =>{
        dispatch({type: "SET_DECREMENT", payload: id})
    }

    // to store cart data in localstorage
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(state.cart));  // to convert the array to string
        // dispatch({type: "GET_TOTAL_ITEM_IN_CART"}); // total no. of items in the cart
        // dispatch({type: "GET_TOTAL_PRICE"}); // total sum of prices
        dispatch({type: "GET_TOTAL_ITEM_AND_PRICE"})
    }, [state.cart])


    // to clear the cart
    const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
    }

    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setIncrement, setDecrement}}>
        {children}
    </CartContext.Provider>
}


export const useCartContext = () =>{
        return useContext(CartContext);
    }


