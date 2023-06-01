import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  ProductListReducer,
  ProductDetailReducer,
} from "./reducers/ProductListReducer";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/CartReducer";

const reducer = combineReducers({
  productList: ProductListReducer,
  productDetails: ProductDetailReducer,
  cart: cartReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromLocalStorage },
};

const preloadedState = {};

const store = configureStore({
  reducer,
  initialState,
  preloadedState,
  middleware: [thunk],
});

export default store;
