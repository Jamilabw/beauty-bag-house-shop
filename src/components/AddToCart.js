import styled from "styled-components";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/Cart_Context";

const AddToCart = ({product}) => {
  const {id, stock, price} = product;
  const {addToCart} = useCartContext();

  const colors = ["#D1563D", "#D13D6E", "#CD5C5C"];

  const[color, setColor] = useState(colors[0]);

  const[quantity, setQuantity] = useState(1);

  const setInc = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };

  const setDec = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  return <>
    <Wrapper>
        <div className="colors">
            <p>
                Colors: {colors.map((currColor, index)=>{
                    return <button 
                    key={index} 
                    style={{backgroundColor: currColor}} 
                    className={color === currColor ? "btnStyle active" : "btnStyle"}
                    onClick={() => setColor(currColor)} 
                    >
                        {color === currColor ? <FaCheck className="checkStyle"/> : null}
                    </button>

                })}
            </p>
        </div>

        {/* Add to cart button */}
        <CartAmountToggle 
            quantity = {quantity}
            setInc = {setInc}
            setDec = {setDec}
        />

        <NavLink to={"/cart"}
                 onClick = {() => {addToCart(id, quantity, price, product)}} >
                <Button className="btn">Add to cart</Button>
        </NavLink>
    </Wrapper>
  </>
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;