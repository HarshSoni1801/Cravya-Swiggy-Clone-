import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlicer";
export const CartStore = configureStore({
   reducer:{
      cartSlice: CartReducer
   }
})