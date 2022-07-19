import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Board } from "../features/board/Board";
import { AddBoardButton } from "../features/board/AddBoardButton";

import type { RootState } from "../app/store";

export function Boards() {
  const boards = useSelector((state: RootState) => state.boards);

  useEffect(() => {
    document.body.classList.value = "bg-white";
  }, []);

  return (
    <div className="mx-8">
      <div className="mt-4 mb-8 h-12 text-4xl font-bold">Boards</div>
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {boards.map((board) => (
          <Board
            key={board.id}
            id={board.id}
            title={board.title}
            color={board.color}
          />
        ))}
        <AddBoardButton />
      </div>
    </div>
  );
}
