import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    product: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setData, setProduct } = dataSlice.actions;

export default dataSlice.reducer;
