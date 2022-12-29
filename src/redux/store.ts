import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./slices/countriesSlice";
import detailsReducer from "./slices/detailsSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    details: detailsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
