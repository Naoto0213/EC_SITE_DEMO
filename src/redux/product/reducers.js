import initialState from "../store/InitialState";
import * as Actions from "./actions";

export const ProductsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
