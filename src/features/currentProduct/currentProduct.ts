import { getData } from '@/services/httpClient';
import { Accessory } from '@/types/Accessory';
import { CategoryType } from '@/types/CategoryType';
import { Phone } from '@/types/Phone';
import { Product } from '@/types/Product';
import { Tablet } from '@/types/Tablet';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCurrentProduct = createAsyncThunk(
  'currentProduct/fetchCurrentProduct',
  async ({
    category,
    productId,
  }: {
    category: CategoryType;
    productId: string;
  }) => {
    const data = await getData(`api/${category}.json`);

    return data.filter((product) => product.id === productId);
  }
);

interface InitialState {
  currentProduct: Array<Accessory | Phone | Tablet>;
}

const initialState: InitialState = {
  currentProduct: [],
};

const currentProductSlice = createSlice({
  name: 'currentProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentProduct.fulfilled, (state, action) => {
      state.currentProduct = action.payload;
    });
  },
});

export default currentProductSlice.reducer;
