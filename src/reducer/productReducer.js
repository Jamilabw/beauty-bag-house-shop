const ProductReducer = (state, action) => {
  // if (action.type === "SET_LOADING") {
  //   return {
  //     ...state,
  //     isLoading: true,
  //   };
  // }

  // if (action.type === "API_ERROR") {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     isError: true,
  //   };
  // }

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "API_DATA":
      const featureData = action.payload.filter((curElem) => {
        return curElem.category === "beauty";
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        FeatureProduct: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };


    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    case "API_SINGLE_DATA":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };


    default:
      return state;
  }
};

export default ProductReducer;