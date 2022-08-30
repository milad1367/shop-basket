import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";
interface Item {
  name: string;
  id: string;
}

const initialState = [] as Item[];

export const basketSlice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    add: {
      reducer(state, action: PayloadAction<Item>) {
        state.push(action.payload);
      },
      prepare(name: string) {
        return {
          payload: {
            id: nanoid(),
            name,
          },
        };
      },
    },

    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = basketSlice.actions;

export const selectBasket = (state: RootState) => state.basket;

export default basketSlice.reducer;
