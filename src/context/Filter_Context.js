import { createContext, useContext, useEffect, useReducer } from "react";
import {useProductContext} from "./ProductContext";
import reducer from "../reducer/filterReducer";
import React from "react";

const FilterContext = createContext();

const initialstate = {
    filter_products: [],
    all_products: [],
    grid_view: false,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "All",
        brand: "All",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }
}

export const FilterContextProvider = ({children}) =>{

    const {products} = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialstate);


    // to set grid view 
    const setGridView = () =>{
        return dispatch({type: "SET_GRID_VIEW"})
    }

    // to set list view
    const setListView = () =>{
        return dispatch({type: "SET_LIST_VIEW"})
    }

    // to get the sorted value
    const sorting = (event) =>{
        const userValue = event.target.value; // what user has selected (lowest, highest, a-to-z, z-to-a)
        dispatch({type: "GET_SORTED_VALUE", payload: userValue })
    }

    // to sort the products based on user selection
    useEffect(()=>{
        dispatch({type: "FILTER_PRODUCTS"});
        dispatch({type: "SORTING_PRUDUCTS", payload: products});
    },[products, state.sorting_value, state.filters])

    // to load all products initially
    useEffect(()=>{
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products}) 
    }, [products]); 


    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        // if (name === "price") {
        // value = Number(value);
        // }

        return dispatch({type: "UPDATE_FILTERS_VALUE", payload: {name, value}});
    };

    const clearFilters = () =>{
        dispatch({type: "CLEAR_FILTERS"});
    }

    return<>
        <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue, clearFilters}}>
            {children}
        </FilterContext.Provider>
    </>
}

export const useFilterContext = () =>{
    return useContext(FilterContext);
}

