import { useDispatch } from "react-redux";

import { listAdded } from "./listSlice";

import { PlusIcon } from "../../assets/icons/PlusIcon";

interface Props {
  boardId: string;
}

export function AddListButton(props: Props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(listAdded({ title: "", boardId: props.boardId }));
  };

  return (
    <div>
      <button
        className="mr-8 rounded-md bg-gray-200 p-9 transition-colors hover:bg-gray-300"
        type="button"
        onClick={handleClick}
      >
        <PlusIcon className="w-8 text-gray-600" />
      </button>
    </div>
  );
}
