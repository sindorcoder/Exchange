import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/index";
import transactionHistoryReducer from "../slices/CreateTransition";
const store = configureStore({
  reducer: {
    transaction: transactionHistoryReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
