import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../components/types';
import { RootState } from '../store/store';

interface CartProduct extends Product {
  quantity: number;
}

interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.products.find(product => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
      else {
          state.products = state.products.filter(item => item.id !== action.payload);
        
      } 
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
export const selectCartItems = (state: RootState) => state.cart.products;
export const selectCartItemById = (id: number) => (state: RootState) =>
  state.cart.products.find(item => item.id === id);
export const selectCartTotal = (state: RootState) => 
  state.cart.products.reduce((total, item) => total + item.price * item.quantity, 0);
