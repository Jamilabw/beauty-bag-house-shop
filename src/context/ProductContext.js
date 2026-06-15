import { createContext, useEffect, useReducer, useContext } from "react";
import axios from "axios";
import FeatureProduct from "../components/FeatureProduct";
import reducer from "../reducer/productReducer"

const AppContext = createContext();

const API = "https://dummyjson.com/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    FeatureProduct: [],
    isSinfleLoading: false,
    singleProduct: {},
}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    // fetching data from api for all products
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            console.log(res.data);
            const products = res.data.products;
            dispatch({ type: "API_DATA", payload: products })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    };

    // second api call for single product details
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url);
            const productDetails = res.data;
            console.log(productDetails);
            dispatch({ type: "API_SINGLE_DATA", payload: productDetails })
        }
        catch (error) {
            dispatch({ type: "SINGLE_ERROR" })
        }
    }

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    );
};

const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };