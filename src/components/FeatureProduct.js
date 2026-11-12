import { useProductContext } from "../context/ProductContext";
import styled from "styled-components";
import Product from "./Product";

const FeatureProduct = () => {

    const {isLoading, FeatureProduct} = useProductContext();
    console.log("Beauty products: " , FeatureProduct);
    
    if(isLoading){
        return <div className="loading">Loading..........................</div>
    }

    return <Wrapper className="section">
        <div className="container">
            <div className="intro-data">
                Check Now!
            </div>
            <div className="common-heading">
                Our Feature Services    
            </div>
            <div className="grid grid-three-column">
                {
                    FeatureProduct.map((curElem) => {
                        return (
                            <Product key={curElem.id} curElem={curElem} />
                        )
                    })
                }
            </div>
        </div>

    </Wrapper>
}

const Wrapper = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 130rem;
  }

  .intro-data{
    font-size: 2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 5%;
      right: 4%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;

    .card-data {
      padding: 1rem 2rem;
    }

    .card-data-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;


export default FeatureProduct;