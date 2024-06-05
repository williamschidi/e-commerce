import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './ApiSlice';
import dataReducer from './dataSlice';
import cartReducer from './cartDataSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    data: dataReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;
