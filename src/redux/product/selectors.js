import { createSelector } from "reselect";
const productsSelector = (state) => state.users;

export const getProducts = createSelector(
  [productsSelector],
  (state) => state.list
);
