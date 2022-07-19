import { useDispatch } from "react-redux";

import { boardDeleted } from "./boardSlice";

import { TrashIcon } from "../../assets/icons/TrashIcon";

interface Props {
  id: string;
}

export function DeleteBoardButton(props: Props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(boardDeleted(props.id));
  };

  return (
    <button
      className="absolute right-3 bottom-3 scale-0 transition-transform group-hover:scale-100"
      onClick={handleClick}
    >
      <TrashIcon className="w-5 fill-transparent text-red-500" />
    </button>
  );
}
