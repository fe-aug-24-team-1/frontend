import { Product } from '@/types/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExtendedProduct extends Product {
  quantity: number;
}

interface InitialState {
  productsOfCart: ExtendedProduct[];
}

const initialState: InitialState = {
  productsOfCart: JSON.parse(localStorage.getItem('cart') || '[]'),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;

      const isProductExist = state.productsOfCart.find(
        (item) => item.id === id
      );

      if (isProductExist) {
        if (isProductExist.quantity) {
          isProductExist.quantity += 1;
        }
      } else {
        state.productsOfCart = [
          ...state.productsOfCart,
          { ...action.payload, quantity: 1 },
        ];
      }

      localStorage.setItem('cart', JSON.stringify(state.productsOfCart));
    },

    removeFormCart: (state, action: PayloadAction<number>) => {
      state.productsOfCart = state.productsOfCart.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem('cart', JSON.stringify(state.productsOfCart));
    },

    clearCart: (state) => {
      state.productsOfCart = [];

      localStorage.setItem('cart', JSON.stringify(state.productsOfCart));
    },

    decrementItemInCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const productInCart = state.productsOfCart.find((item) => item.id === id);

      if (productInCart) {
        if (productInCart.quantity > 1) {
          productInCart.quantity -= 1;
        }
      }

      localStorage.setItem('cart', JSON.stringify(state.productsOfCart));
    },
  },
});

export const { addToCart, removeFormCart, clearCart, decrementItemInCart } =
  cartSlice.actions;
export default cartSlice.reducer;
