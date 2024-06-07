import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    numOfItems: 0,
    total: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const itemsToAdd = {
        ...action.payload,
        totalPrice: action.payload.price * action.payload.count,
      };

      state.items.push(itemsToAdd);
      state.numOfItems = state.items.length;
      state.total += Number(itemsToAdd.totalPrice);
    },
    increaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.count += 1;
        item.totalPrice = Number(item.price * item.count);
        Math.ceil((state.total += item.price));
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.count > 1) {
        item.count -= 1;
        item.totalPrice = Number(item.price * item.count);
        state.total -= item.price;
      }
    },
    deleteItemFromCart(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      state.total -= item.totalPrice;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const {
  addItemToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItemFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
