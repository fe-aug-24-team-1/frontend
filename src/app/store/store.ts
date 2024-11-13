import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '@/features/products/productsSlice';
import wishlistSlice from '@/features/wishlist/wishlistSlice';
import cartSlice from '@/features/cart/cartSlice';
import currentProduct from '@/features/currentProduct/currentProduct';

const store = configureStore({
  reducer: {
    products: productsSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
    currentProduct,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
