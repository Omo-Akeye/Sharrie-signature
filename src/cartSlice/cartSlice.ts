import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  src: string; // Including src in CartItem
  price: number;
  totalPrice: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;
      } else {
        state.cart.push(action.payload);
      }
    },
    increaseItem(state, action) {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;
      }
    },
    decreaseItem(state, action) {
      const item = state.cart.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;
      } else if (item && item.quantity === 1) {
        state.cart = state.cart.filter(item => item.id !== action.payload);
      }
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, decreaseItem, increaseItem, deleteItem } = cartSlice.actions;

// Selector to compute total price
export const selectTotalPrice = (state: RootState) => 
  state.cart.cart.reduce((total: number, item: CartItem) => total + item.totalPrice, 0);

export default cartSlice.reducer;
