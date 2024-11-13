import { getData } from '@/services/httpClient';
import { Accessory } from '@/types/Accessory';
import { CategoryType } from '@/types/CategoryType';
import { Phone } from '@/types/Phone';
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
    const data: Array<Accessory | Phone | Tablet> = await getData(
      `api/${category}.json`
    );
    const product = data.find((item) => item.id === productId);
    const phoneOptions = data.filter(
      (item) =>
        item.id !== productId && item.namespaceId === product?.namespaceId
    );

    const result = {
      currentProduct: product,
      otherColor: phoneOptions.filter(
        (item) => item.capacity === product?.capacity
      ),
      otherCapacity: phoneOptions.filter(
        (item) => item.color === product?.color
      ),
    };

    return result;
  }
);

interface InitialState {
  currentProduct: Accessory | Phone | Tablet | undefined;
  otherColor: Array<Accessory | Phone | Tablet>;
  otherCapacity: Array<Accessory | Phone | Tablet>;
}

const initialState: InitialState = {
  currentProduct: undefined,
  otherColor: [],
  otherCapacity: [],
};

const currentProductSlice = createSlice({
  name: 'currentProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentProduct.fulfilled, (state, action) => {
      state.currentProduct = action.payload.currentProduct;
      state.otherColor = action.payload.otherColor;
      state.otherCapacity = action.payload.otherCapacity;
    });
  },
});

export default currentProductSlice.reducer;
