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
    const AllOptions = data.filter(
      (item) => item.namespaceId === product?.namespaceId
    );

    const result = {
      currentProduct: product,
      allColor: AllOptions.filter(
        (item) => item.capacity === product?.capacity
      ),
      allCapacity: AllOptions.filter((item) => item.color === product?.color),
    };

    return result;
  }
);

interface InitialState {
  currentProduct: Accessory | Phone | Tablet | undefined;
  allColor: Array<Accessory | Phone | Tablet>;
  allCapacity: Array<Accessory | Phone | Tablet>;
  loaded: boolean;
  error: boolean;
}

const initialState: InitialState = {
  currentProduct: undefined,
  allColor: [],
  allCapacity: [],
  loaded: false,
  error: false,
};

const currentProductSlice = createSlice({
  name: 'currentProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentProduct.pending, (state) => {
      state.error = false;
      state.loaded = false;
    });

    builder.addCase(getCurrentProduct.fulfilled, (state, action) => {
      state.loaded = true;
      state.currentProduct = action.payload.currentProduct;
      state.allColor = action.payload.allColor;
      state.allCapacity = action.payload.allCapacity;
    });

    builder.addCase(getCurrentProduct.rejected, (state) => {
      state.error = true;
      state.loaded = true;
    });
  },
});

export default currentProductSlice.reducer;
