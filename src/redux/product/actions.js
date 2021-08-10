export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const fetchProductsAction = (product) => {
  return {
    type: "FETCH_PRODUCTS",
    payload: product,
  };
};
