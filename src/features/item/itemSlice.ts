import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "./item.model";

const initialState: Item[] = [
  {
    id: "lT9mnDfEBpPOjpqIYAT5y",
    text: "Hello",
    listId: "OoGSorMHZnJ-pKtJgJ7tH",
  },
  {
    id: "3PhSYJ2alI5h2LYPNUi_N",
    text: "Type Something...",
    listId: "OoGSorMHZnJ-pKtJgJ7tH",
  },
];

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    itemAdded: (
      state,
      action: PayloadAction<{ text: string; listId: string }>
    ) => {
      const { text, listId } = action.payload;
      state.push({
        id: nanoid(),
        text: text,
        listId: listId,
      });
    },
    itemUpdated: (
      state,
      action: PayloadAction<{ id: string; text: string }>
    ) => {
      const { id, text } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.text = text;
      }
    },
    itemDeleted(state, action: PayloadAction<string>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { itemAdded, itemUpdated, itemDeleted } = itemsSlice.actions;

export default itemsSlice.reducer;
