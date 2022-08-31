import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";
interface Item {
  name: string;
  id: string;
  orderLimitTime: string;
  price: string;
}

const initialState = [] as Item[];

export const basketSlice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    addProduct: {
      reducer(state, action: PayloadAction<Item>) {
        const { name, orderLimitTime, price } = action.payload;
        const existingProduct = state.find(
          (item: any) =>
            item.name === name &&
            item.orderLimitTime === orderLimitTime &&
            item.price === price
        );
        if (!existingProduct) {
          state.push(action.payload);
        }
      },
      prepare(name: string, orderLimitTime: string, price: string) {
        return {
          payload: {
            id: nanoid(),
            name,
            orderLimitTime,
            price,
          },
        };
      },
    },

    removeProduct: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = basketSlice.actions;

export const selectBasket = (state: RootState) => state.basket;

export default basketSlice.reducer;
