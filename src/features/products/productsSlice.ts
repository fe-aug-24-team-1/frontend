import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '@/types/Product';
import { getData } from '@/services/httpClient';

interface InitialState {
  products: Product[];
  loaded: boolean;
  error: boolean;
}

const initialState: InitialState = {
  products: [],
  loaded: false,
  error: false,
};

export const getProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return await getData<Product[]>('/api/products.json');
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.error = false;
      state.loaded = false;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loaded = true;
      state.products = action.payload;
    });

    builder.addCase(getProducts.rejected, (state) => {
      state.error = true;
      state.loaded = true;
    });
  },
});

export default productsSlice.reducer;
