import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../features/board/boardSlice";
import itemReducer from "../features/item/itemSlice";
import listRudecer from "../features/list/listSlice";

export const store = configureStore({
  reducer: {
    boards: boardReducer,
    items: itemReducer,
    lists: listRudecer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
