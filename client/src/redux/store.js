import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
// We will import authReducer here later for User/Seller/Admin login state

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // auth: authReducer, 
  },
});