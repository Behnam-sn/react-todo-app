import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Board } from "./board.model";

function randomColor(): string {
  const color = ["bg-sky-300", "bg-red-300", "bg-green-300", "bg-yellow-300"];

  return color[Math.floor(Math.random() * color.length)];
}

const initialState: Board[] = [
  {
    id: "zU6l_Scj8r65blRf6ZNkq",
    title: "Todo",
    color: randomColor(),
  },
];

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    boardAdded: (state, action: PayloadAction<{ title: string }>) => {
      const { title } = action.payload;
      state.push({
        id: nanoid(),
        title: title,
        color: randomColor(),
      });
    },
    boardUpdated: (
      state,
      action: PayloadAction<{ id: string; title: string }>
    ) => {
      const { id, title } = action.payload;
      const existingBoard = state.find((board) => board.id === id);
      if (existingBoard) {
        existingBoard.title = title;
      }
    },
    boardDeleted(state, action: PayloadAction<string>) {
      return state.filter((board) => board.id !== action.payload);
    },
  },
});

export const { boardAdded, boardUpdated, boardDeleted } = boardSlice.actions;

export default boardSlice.reducer;
