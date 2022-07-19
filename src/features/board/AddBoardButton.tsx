import { useDispatch } from "react-redux";
import { boardAdded } from "./boardSlice";
import { PlusIcon } from "../../assets/icons/PlusIcon";

export function AddBoardButton() {
  const dispatch = useDispatch();

  return (
    <button
      className="h-36 rounded-lg outline outline-4 outline-black"
      onClick={() => dispatch(boardAdded({ title: "untitled" }))}
    >
      <PlusIcon className="mx-auto w-14 text-black" />
    </button>
  );
}
