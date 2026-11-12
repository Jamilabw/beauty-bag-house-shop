import { createContext, useEffect, useReducer, useContext } from "react";
import axios from "axios";
import FeatureProduct from "../components/FeatureProduct";
import reducer from "../reducer/productReducer"

const AppContext = createContext();

// const API = "https://dummyjson.com/products";

const API = axios.create({
    baseURL: "http://localhost:5000"
})

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    FeatureProduct: [],
    isSingleLoading: false,
    singleProduct: {},
}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    // fetching data from api for all products
    const getProducts = async () => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await API.get("/info");
            console.log("Products recieved" , res.data);
            const products = res.data;
            dispatch({ type: "API_DATA", payload: products })
        } catch (error) {
            console.log("Error message:", error.message);
            console.log("Error code:", error.code);
            console.log("Error response:", error.response);
            dispatch({ type: "API_ERROR" });
            dispatch({ type: "API_ERROR" })
        }
    };

    // second api call for single product details
    // const getSingleProduct = async (url) => {
    //     dispatch({ type: "SET_SINGLE_LOADING" })
    //     try {
    //         const res = await axios.get(url);
    //         const productDetails = res.data;
    //         console.log(productDetails);
    //         dispatch({ type: "API_SINGLE_DATA", payload: productDetails })
    //     }
    //     catch (error) {
    //         dispatch({ type: "SINGLE_ERROR" })
    //     }
    // }

    const getSingleProduct = async (id) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
        const res = await API.get(`/info/${id}`);

        dispatch({
            type: "API_SINGLE_DATA",
            payload: res.data
        });

    } catch (error) {
        console.error("Single product error:", error);
        dispatch({ type: "SINGLE_ERROR" });
    }
};

    useEffect(() => {
        getProducts();
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