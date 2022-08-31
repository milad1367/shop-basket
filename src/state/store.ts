import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
const reduxStateSyncConfig = {};

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
  middleware: [createStateSyncMiddleware(reduxStateSyncConfig)],
});
initMessageListener(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
