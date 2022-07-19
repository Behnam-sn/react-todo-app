import { useDispatch } from "react-redux";

import { itemAdded } from "./itemSlice";

import { PlusIcon } from "../../assets/icons/PlusIcon";

interface Props {
  listId: string;
}

export function AddItemButton(props: Props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(itemAdded({ text: "", listId: props.listId }));
  };

  return (
    <button
      className="mb-16 h-9 w-full rounded-md bg-gray-200 transition-colors hover:bg-gray-300"
      onClick={handleClick}
    >
      <PlusIcon className="mx-auto w-5 text-gray-600" />
    </button>
  );
}
