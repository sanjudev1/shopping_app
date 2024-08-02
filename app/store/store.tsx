import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../slices/cartSlice'; // Adjust the path as needed
import restaurantSlice from '../slices/restaurantSlice'; // Adjust the path as needed

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice, // Corrected the typo from `resturant` to `restaurant`
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
