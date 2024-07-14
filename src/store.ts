import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../src/cartSlice/cartSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface Product {
  id: string;  // Ensuring `id` is a string
  name: string;
  photos: { url: string }[];
  current_price: { NGN: number }[];
}

export default store;
