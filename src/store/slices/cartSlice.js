// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

      // Create a unique ID that includes the size if it exists
      const itemId = newItem.size
        ? `${newItem.baseId || newItem.id}-${newItem.size}`
        : newItem.id;

      // Check if item already exists in cart
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...newItem,
          id: itemId, // Use the unique ID
          quantity: 1,
        });
      }

      // Update total
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    updateItem: (state, action) => {
      const { id, updates } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        state.items[itemIndex] = { ...state.items[itemIndex], ...updates };

        if (state.items[itemIndex].quantity <= 0) {
          state.items.splice(itemIndex, 1);
        }

        state.total = state.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);

      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, updateItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
