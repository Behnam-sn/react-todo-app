import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { List } from "./list.model";

const initialState: List[] = [
  {
    id: "OoGSorMHZnJ-pKtJgJ7tH",
    title: "Todo",
    boardId: "zU6l_Scj8r65blRf6ZNkq",
  },
  {
    id: "OeJKjeHPyYpxmdX60tkki",
    title: "Pending",
    boardId: "zU6l_Scj8r65blRf6ZNkq",
  },
  {
    id: "XDgQJT6xkECvEWEVRFIP3",
    title: "Done",
    boardId: "zU6l_Scj8r65blRf6ZNkq",
  },
];

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    listAdded: (
      state,
      action: PayloadAction<{ title: string; boardId: string }>
    ) => {
      const { title, boardId } = action.payload;
      state.push({
        id: nanoid(),
        title: title,
        boardId: boardId,
      });
    },
    listUpdated: (
      state,
      action: PayloadAction<{ id: string; title: string }>
    ) => {
      const { id, title } = action.payload;
      const existingList = state.find((list) => list.id === id);
      if (existingList) {
        existingList.title = title;
      }
    },
    listDeleted(state, action: PayloadAction<string>) {
      return state.filter((list) => list.id !== action.payload);
    },
  },
});

export const { listAdded, listUpdated, listDeleted } = listsSlice.actions;

export default listsSlice.reducer;
