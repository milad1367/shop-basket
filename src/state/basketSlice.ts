import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/Product";
import { RootState } from "./store";

const initialState = [] as Product[];

export const basketSlice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    addProduct: {
      reducer(state, action: PayloadAction<Product>) {
        const { name, orderLimitTime, price } = action.payload;
        const existingProduct = state.find(
          (item: Product) =>
            item.name === name &&
            item.orderLimitTime === orderLimitTime &&
            item.price === price
        );
        if (!existingProduct) {
          state.push(action.payload);
        }
      },
      prepare(
        name: string,
        orderLimitTime: string,
        price: string,
        poster: string
      ) {
        return {
          payload: {
            id: nanoid(),
            name,
            orderLimitTime,
            price,
            poster,
            createdAt: new Date().toString(),
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
