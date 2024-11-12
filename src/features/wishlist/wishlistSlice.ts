import { Product } from '@/types/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  products: Product[];
}

const initialState: InitialState = {
  products: JSON.parse(localStorage.getItem('wishlist') || '[]') as [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);

      localStorage.setItem('wishlist', JSON.stringify(state.products));
    },

    removeFromWishlist: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );

      localStorage.setItem('wishlist', JSON.stringify(state.products));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
