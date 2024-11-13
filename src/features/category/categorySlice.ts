import { getData } from '@/services/httpClient';
import { Product } from '@/types/Product';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  selectedProduct: Product;
}

const initialState: InitialState = {
  selectedProduct: {} as Product,
};

export const getSelectedProduct = createAsyncThunk(
  'selectedProduct/fetchSelectedProduct',
  async (productId) => {
    return await getData<Product>('api/');
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
