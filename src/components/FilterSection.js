import React, { useState } from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/Filter_Context";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";
import { HiOutlineFilter } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const FilterSection = () => {
  const { text, price, maxPrice, minPrice } = useFilterContext().filters;
  const { updateFilterValue, all_products, clearFilters } = useFilterContext();
  const [filterMenu, setFilterMenu] = useState(false);

  // to get unique data of a property
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    })
    return newVal = ["All", ...new Set(newVal)]
  }

  const categoryData = getUniqueData(all_products, "category");
  const brandData = getUniqueData(all_products, "brand");

  return <Wrapper>

    <HiOutlineFilter
      className="mobile-nav-icon"
      onClick={() => setFilterMenu(true)}
    />

    <div
      className={
        filterMenu ? "overlay active" : "overlay"
      }
      onClick={() => setFilterMenu(false)}
    ></div>

    <div
      className={
        filterMenu ? "filter-panel active" : "filter-panel"
      }
    >
      <IoMdClose
        className="close-icon"
        onClick={() => setFilterMenu(false)}
      />

      <div className="filter-search">
        <form onSubmit={(e) => { e.preventDefault(); }} >
          <input type="text" name="text" placeholder="Search" value={text} onChange={(e) => {
            updateFilterValue(e);
            setFilterMenu(false);
          }} />
        </form>
      </div>

      <div className="filter-category">
        {/* <h3>Category</h3>
        <div>
          {
            categoryData.map((curElem, index) => {
              return <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={(e) => {
                  updateFilterValue(e);
                  setFilterMenu(false);
                }}
              >
                {curElem}
              </button>
            })
          }
        </div> */}

        <h3>Search by Brand</h3>
        <div>
          <form action="#" onSubmit={(e) => { e.preventDefault(); }} >
            <select name="brand" id="brand" className="filter-company--select" onChange={(e) => {
              updateFilterValue(e);
              setFilterMenu(false);
            }}>
              {
                brandData.map((curElem, index) => {
                  return <option key={index} value={curElem} name="brand">{curElem}</option>
                })
              }
            </select>
          </form>
        </div>
      </div>

      {/* <div className="filter_price">
        <h3>Price</h3>
        <p>{<FormatPrice price={price} />}</p>
        <input type="range" min={minPrice} max={maxPrice} value={price} onChange={(e) => {
          updateFilterValue(e);
          setFilterMenu(false);
        }} name="price" />
      </div> */}

      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>Clear Filters</Button>
      </div>
    </div>
  </Wrapper>
};

const Wrapper = styled.section`
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .mobile-nav-icon, .close-icon, .overlay {
      display:none;
    }


    h3 {
      padding: 2rem 0;
      font-size: bold;
    }

    .filter-search {
      input {
        padding: 0.6rem 1rem;
        width: 80%;
      }
    }

    .filter-category {
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.4rem;

        button {
          border: none;
          background-color: ${({ theme }) => theme.colors.white};
          text-transform: capitalize;
          cursor: pointer;

          &:hover {
            color: ${({ theme }) => theme.colors.btn};
          }
        }

        .active {
          border-bottom: 1px solid #000;
          color: ${({ theme }) => theme.colors.btn};
        }
      }
    }

    .filter-company--select {
      padding: 0.3rem 1.2rem;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .filter-color-style {
      display: flex;
      justify-content: center;
    }

    .color-all--style {
      background-color: transparent;
      text-transform: capitalize;
      border: none;
      cursor: pointer;
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

    .filter_price {
      input {
        margin: 0.5rem 0 1rem 0;
        padding: 0;
        box-shadow: none;
        cursor: pointer;
      }
    }

    .filter-shipping {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .filter-clear .btn {
      background-color: #ec7063;
      color: #000;
      margin: 2rem 0;
    }

    @media (max-width:768px){

    
    padding: 2rem 0;

.mobile-nav-icon{

    display:block;
    font-size:3.2rem;
    cursor:pointer;
}

.overlay{
    display:block;
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.4);
    opacity:0;
    visibility:hidden;
    transition:.3s;
    z-index:998;
}

.overlay.active{
    opacity:1;
    visibility:visible;
}

.filter-panel{
    position:fixed;
    top:0;
    left:-320px;
    width:280px;
    height:100vh;

    background:#fff;
    padding:2rem;

    overflow-y:auto;

    transition:.3s ease;

    z-index:999;

    box-shadow:5px 0 15px rgba(0,0,0,.2);
}

.filter-panel.active{
    left:0;
}

.close-icon{
    display:block;
    font-size:3rem;
    cursor:pointer;
    margin-left:auto;
    margin-bottom:2rem;
}
}
  `;


export default FilterSection;