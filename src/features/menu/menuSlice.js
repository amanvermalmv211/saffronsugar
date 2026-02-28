import { createSlice } from "@reduxjs/toolkit";
import { menuItems } from "../../data/menuData";

const initialState = {
  items: menuItems,
  categories: ["All", ...new Set(menuItems.map(item => item.category))],
  activeCategory: "All"
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.activeCategory = action.payload;
    }
  }
});

export const { setCategory } = menuSlice.actions;

export default menuSlice.reducer;