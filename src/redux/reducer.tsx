import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toppings: ["cheese", "pepperoni"],
  size: "small",
  crust: "thin",
  pineapple: false,
  glutenFree: false,
  vegan: false,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    addTopping: (state, action) => {
      state.toppings.push(action.payload);
    },
    removeTopping: (state, action) => {
      state.toppings = state.toppings.filter((topping) => topping !== action.payload);
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setCrust: (state, action) => {
      state.crust = action.payload;
    },
    setPineapple: (state, action) => {
      state.pineapple = action.payload;
    },
    setGlutenFree: (state, action) => {
      state.glutenFree = action.payload;
    },
    setVegan: (state, action) => {
      state.vegan = action.payload;
    },
  },
});

export const { addTopping, removeTopping, setSize, setCrust, setPineapple, setGlutenFree, setVegan } = pizzaSlice.actions;

export default pizzaSlice.reducer;





