import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import {
  createStateSyncMiddleware,
  initStateWithPrevTab,
  withReduxStateSync,
} from "redux-state-sync";
import { Product } from "../models/Product";
import { filterBasketByExpireDate } from "./utils";
interface IState {
  basket: Product[];
}
const reduxStateSyncConfig = {
  prepareState: (state: IState) => {
    const basket = filterBasketByExpireDate(state.basket); //I wanna be sure that the user can't cheat the time with reload the browser!
    return { ...state, basket: basket };
  },
};

const rootReducer = combineReducers({
  basket: basketReducer,
});

export const store = configureStore({
  reducer: withReduxStateSync(rootReducer),

  middleware: [createStateSyncMiddleware(reduxStateSyncConfig)],
});
initStateWithPrevTab(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
