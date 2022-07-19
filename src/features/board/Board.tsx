import { Link } from "react-router-dom";

import { DeleteBoardButton } from "./DeleteBoardButton";

import type { Board as Props } from "./board.model";

export function Board(props: Props) {
  return (
    <div className="group relative">
      <Link
        to={`/${props.id}`}
        className={`flex h-36 items-center justify-center rounded-lg text-lg ${props.color}`}
        key={props.id}
      >
        {props.title}
      </Link>
      <DeleteBoardButton id={props.id} />
    </div>
  );
}
