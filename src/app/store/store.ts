import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '@/features/products/productsSlice';
import wishlistSlice from '@/features/wishlist/wishlistSlice';
import cartSlice from '@/features/cart/cartSlice';
import currentProduct from '@/features/currentProduct/currentProduct';
import notification from '@/features/notification/notificationSlice';
import aiSlice from '@/features/AISlice/aiSlice.ts';

const store = configureStore({
  reducer: {
    products: productsSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
    currentProduct,
    notification: notification,
    aiHistory: aiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
