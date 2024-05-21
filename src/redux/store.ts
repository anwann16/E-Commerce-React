import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { ProductStateSliceType } from "./slices/cartSlice";

export type RootTypes = {
  cart: ProductStateSliceType;
};

const setupStore = () =>
  configureStore({
    reducer: {
      cart: cartReducer,
    },
  });

export default setupStore;
