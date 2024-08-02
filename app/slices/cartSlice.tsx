import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store'; 

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image:any;
}

export interface CartState {
  cartValue: CartItem[];
}

const initialState: CartState = {
  cartValue: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartValue.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartValue.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const existingItem= state.cartValue.find(item => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cartValue = state.cartValue.filter(item => item.id !== action.payload);
        }
      } else {
        console.log("Can't remove the item that is not added to cart");
      }
    },
    emptyCart: (state) => {
      state.cartValue = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state: RootState) => state.cart.cartValue;
export const selectCartItemById = (id: number) => (state: RootState) =>
  state.cart.cartValue.find(item => item.id === id);
export const selectCartTotal = (state: RootState) => 
  state.cart.cartValue.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
