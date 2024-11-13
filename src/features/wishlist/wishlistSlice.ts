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

    toggleWishListProduct: (state, action: PayloadAction<Product>) => {
      if (state.products.some((prod) => prod.id === action.payload.id)) {
        state.products = state.products.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.products.push(action.payload);
      }
      localStorage.setItem('wishlist', JSON.stringify(state.products));
    },
  },
});

export const { addToWishlist, removeFromWishlist, toggleWishListProduct } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
