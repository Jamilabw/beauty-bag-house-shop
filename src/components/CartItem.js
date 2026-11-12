import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/Cart_Context";

const CartItem = ({ _id, name, image, price, quantity }) => {

    const {removeItem, setDecrement, setIncrement} = useCartContext();

    return <div className="cart-heading grid grid-five-column">
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src={image} alt={name} />
                </figure>
            </div>
            <div>
                <p>{name}</p>
            </div>
        </div>

        <div className="cart-hide">
            <p><FormatPrice price={price} /></p>
        </div>

        <div >
            <CartAmountToggle
                quantity={quantity}
                setInc={ () => setIncrement(_id) }
                setDec={ () => setDecrement(_id) }
            />
        </div>

        <div className="cart-hide">
            <p><FormatPrice price={price * quantity} /></p>
        </div>

        <div>
            <FaTrash className="remove_icon" onClick={() => removeItem(_id)} />
        </div>
        


    </div>
}

export default CartItem;