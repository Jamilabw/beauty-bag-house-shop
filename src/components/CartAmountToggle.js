const CartAmountToggle = ({quantity, setInc, setDec}) => {

    return (
         <div className="cart-button">
            <div className="amount-toggle">
                <button onClick={() => setDec()}>-</button>
                {quantity}
                <button onClick={() => setInc()}>+</button>
            </div>
            
        </div>
    )
       
}

export default CartAmountToggle;