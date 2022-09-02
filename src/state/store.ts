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

const reduxStateSyncConfig = {
  whitelist: ["basket/addProduct"],
  prepareState: (state: any) => ({ basket: state.basket }),
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
