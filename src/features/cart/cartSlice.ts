import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Phone {
  id: string;
  category: string;
  namespaceId: string;
  name: string;
  capacityAvailable: '64GB' | '128GB' | '256GB';
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: 'black' | 'green' | 'yellow' | 'white' | 'purple' | 'red';
  color: 'black';
  images: string[];
  description: [
    {
      title: string;
      text: string[];
    },
    {
      title: string;
      text: string[];
    },
    {
      title: string;
      text: string[];
    },
  ];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: 'GPRS' | 'EDGE' | 'WCDMA' | 'UMTS' | 'HSPA' | 'LTE';

  // refactor type to Product
  quantity: number;
}

interface InitialState {
  productsOfCart: Phone[];
}

const initialState: InitialState = {
  productsOfCart: JSON.parse(localStorage.getItem('cart') || '[]'),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Phone>) => {
      const { id } = action.payload;

      const isProductExist = state.productsOfCart.find(
        (item) => item.id === id
      );

      if (isProductExist) {
        if (isProductExist.quantity) {
          isProductExist.quantity += 1;
        } else {
          state.productsOfCart.push({ ...isProductExist, quantity: 1 });
        }
      } else {
        state.productsOfCart.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(state.productsOfCart));
    },

    removeFormCart: (state, action: PayloadAction<string>) => {
      state.productsOfCart = state.productsOfCart.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.productsOfCart = [];

      localStorage.setItem('cart', JSON.stringify(state.productsOfCart));
    },

    decrementItemInCart: (state, action: PayloadAction<string>) => {
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