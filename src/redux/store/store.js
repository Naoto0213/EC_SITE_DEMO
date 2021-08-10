import { connectRouter, routerMiddleware } from "connected-react-router";
import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { ProductsReducer } from "../product/reducers";
import { UsersReducer } from "../users/reducers";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      // Reducerの値をここに入力
      router: connectRouter(history),
      users: UsersReducer,
      products: ProductsReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
