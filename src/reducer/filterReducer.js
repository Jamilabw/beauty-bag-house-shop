const filterReducer = (state, action) => {

    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":

            let priceArr = action.payload.map((curElem) => curElem.price);
            let maxPrice = Math.max(...priceArr);


            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: {
                    ...state.filters,
                    maxPrice: maxPrice,
                    price: maxPrice
                }
            }

        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            }

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            }

        case "GET_SORTED_VALUE":

            return {
                ...state,
                sorting_value: action.payload,
            }

        case "SORTING_PRUDUCTS":

            let newSortData;
            const { filter_products, sorting_value } = state;
            let tempSortData = [...filter_products];

            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }
                if (sorting_value === "highest") {
                    return b.price - a.price;
                }
                if (sorting_value === "a-to-z") {
                    return a.title.localeCompare(b.title);
                }
                if (sorting_value === "z-to-a") {
                    return b.title.localeCompare(a.title);
                }
            }

            newSortData = tempSortData.sort(sortingProducts);

            return {
                ...state,
                filter_products: newSortData,
            }

        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            }

        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProducts = [...all_products];

            const { text, category, brand, price } = state.filters;

            if (text) {
                tempFilterProducts = tempFilterProducts.filter((curElem) => {
                    return curElem.title.toLowerCase().includes(text.toLowerCase());
                });
            }

            if (category !== "All") {
                tempFilterProducts = tempFilterProducts.filter((curElem) => {
                    return curElem.category === category;
                });
            }
            if (brand !== "All") {
                tempFilterProducts = tempFilterProducts.filter((curElem) => {
                    return curElem.brand === brand;
                });
            }
            if (category === "All") {
                tempFilterProducts.map((curElem) => {
                    return curElem;
                });
            }

            if (price) {
                tempFilterProducts = tempFilterProducts.filter(
                    (curElem) => curElem.price >= price);
            }

            return {
                ...state,
                filter_products: tempFilterProducts,
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "All",
                    brand: "All",
                    maxPrice: state.filters.maxPrice,
                    price: 0,
                    minPrice: state.filters.minPrice,
                }
            }

        default: return state;

    }

}

export default filterReducer;