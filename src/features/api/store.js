import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './ApiSlice';
import dataReducer from './dataSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;
