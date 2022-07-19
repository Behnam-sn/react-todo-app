import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { boardUpdated } from "../features/board/boardSlice";

import { List } from "../features/list/List";
import { AddListButton } from "../features/list/AddListButton";
import { EditableTextBox } from "../components/EditableTextBox";

import { LeftArrowIcon } from "../assets/icons/LeftArrowIcon";

import type { RootState } from "../app/store";

export function Board() {
  let params = useParams();
  const dispatch = useDispatch();
  const boards = useSelector((state: RootState) => state.boards);
  const lists = useSelector((state: RootState) => state.lists);

  const currentBoard = boards.find((board) => board.id === params.boardId);

  useEffect(() => {
    if (currentBoard) {
      document.body.classList.value = currentBoard.color;
    }
  });

  if (currentBoard) {
    const filteredLists = lists.filter((list) => {
      return list.boardId === currentBoard.id;
    });

    const updateBoard = (title: string) => {
      dispatch(boardUpdated({ id: currentBoard.id, title: title }));
    };

    return (
      <div className="mx-8">
        <div className="mt-4 mb-8 flex items-center">
          <Link to="/" className="mr-4">
            <LeftArrowIcon className="w-10 text-white" />
          </Link>
          <div className="h-12 text-3xl font-medium text-white">
            <EditableTextBox
              text={currentBoard.title}
              updateFunction={updateBoard}
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-row">
            {filteredLists.map((list) => (
              <List
                key={list.id}
                id={list.id}
                title={list.title}
                boardId={list.boardId}
              />
            ))}
            <AddListButton boardId={currentBoard.id} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Board Not Found :(</div>;
  }
}
