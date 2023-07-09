import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params, thunkAPI) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://648dec892de8d0ea11e863b0.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

const pizzaSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
      state.items = []
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = 'error'
      state.items = []
    }
  }
});

export const selectPuzzaData = (state) => state.pizza

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
