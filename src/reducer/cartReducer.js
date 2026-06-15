const cartReducer = (state, action)=>{

    if(action.type === "ADD_TO_CART"){
        let {id, quantity, price, product} = action.payload;

        let cartProduct;

        // handling the existing item in the cart
        const existingProduct = state.cart.find((curElem)=>curElem.id == id);
        
        if(existingProduct){
            let updatedCart = state.cart.map((curElem)=>{
                if(curElem.id === id){
                    let newQuantity = curElem.quantity + quantity;
                    if(newQuantity > curElem.max){
                        newQuantity = curElem.max;
                    }
                    return{
                        ...curElem,
                        quantity: newQuantity
                    }
                }else{
                    return curElem
                }
            })

            return{
                ...state,
                cart: updatedCart
            }
        } else {

        cartProduct = {
            id: id,
            name: product.title,
            image: product.images[0],
            price,
            quantity,
            max: product.stock
        }

        return{
            ...state,
            cart: [...state.cart, cartProduct]
        }

        }
    }
    if(action.type === "REMOVE_ITEM"){

        let updatedCart = state.cart.filter((curElem) =>{
           return curElem.id !== action.payload
        })

        return{
            ...state,
            cart: updatedCart,
         }
    }
    if(action.type === "CLEAR_CART"){
        return{
            ...state,
            cart: []
        }
    }
    if(action.type === "SET_DECREMENT"){
        let updatedProduct = state.cart.map((curElem) => {
            if(curElem.id === action.payload){
                let newquantity = curElem.quantity > 1 ? curElem.quantity - 1: 1;
                return{
                    ...curElem,
                    quantity: newquantity
                }
            }else{
                return{
                    ...curElem
                }
            }
        }) 
        return{
            ...state,
            cart: updatedProduct
        }
    }

     if(action.type === "SET_INCREMENT"){
        let updatedProduct = state.cart.map((curElem) => {
            if(curElem.id === action.payload){
                let newquantity = curElem.quantity < curElem.max ? curElem.quantity + 1: curElem.max;
                return{
                    ...curElem,
                    quantity: newquantity
                }
            }else{
                return{
                    ...curElem
                }
            }
        }) 
        return{
            ...state,
            cart: updatedProduct
        }
    }

    // if(action.type === "GET_TOTAL_ITEM_IN_CART"){
    //     let total = state.cart.reduce( (sum, curElem) => {
    //          return sum + curElem.quantity;
    //     }, 0)
    //     return{
    //         ...state,
    //         total_item : total
    //     }
    // }

    // if(action.type === "GET_TOTAL_PRICE"){
    //     let totalPrice = state.cart.reduce((sum, curElem) => {
    //         return sum + curElem.price * curElem.quantity; 
    //     }, 0)
    //     console.log("total price", totalPrice)
    //     return{
    //         ...state,
    //         total_price: totalPrice
    //     }

    // }

    // both above functions in one

    if(action.type === "GET_TOTAL_ITEM_AND_PRICE"){
        let {total_item, total_price} = state.cart.reduce((acc, curElem) => {
            return { total_item: acc.total_item + curElem.quantity,
                     total_price: acc.total_price + curElem.price*curElem.quantity
                    }
        }, {
            total_item: 0,
            total_price: 0
        });

        return{
            ...state,
            total_item,
            total_price
        }

    }

    return state;
}

export default cartReducer;