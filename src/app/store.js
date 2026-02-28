import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";
import brandReducer from "../features/brand/brandSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    brand: brandReducer
  }
});