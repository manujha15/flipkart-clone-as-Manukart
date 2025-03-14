import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/slices/cartSlice";
import searchReducer from "./redux/slices/searchSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer
  }
});

export default store;
