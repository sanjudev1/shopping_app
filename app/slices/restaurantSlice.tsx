import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store'; // Import RootState from your store setup

export interface RestaurantState {
  restaurantValue: number | null;
}

const initialState: RestaurantState = {
  restaurantValue: null,
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<number>) => {
      state.restaurantValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

// Selector to get the restaurant value from the state
export const selectRestaurant = (state: RootState) => state.restaurant.restaurantValue;

export default restaurantSlice.reducer;
