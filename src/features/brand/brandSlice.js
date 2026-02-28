import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Saffron & Sugar",
  tagline: "Handcrafted sweets since 1994",
  location: "12th Main, Indiranagar, Bangalore",
  phone: "+91 98765 43210",
  email: "hello@saffronsugar.in",
  hours: {
    weekdays: "9:00 AM – 9:00 PM",
    sunday: "10:00 AM – 8:00 PM"
  }
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {}
});

export default brandSlice.reducer;