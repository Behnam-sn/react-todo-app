import { useDispatch } from "react-redux";

import { itemDeleted } from "./itemSlice";

import { TrashIcon } from "../../assets/icons/TrashIcon";

interface Props {
  id: string;
}

export function DeleteItemButton(props: Props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(itemDeleted(props.id));
  };

  return (
    <button
      className="absolute right-2 top-0 bottom-0 scale-0 transition-transform group-hover:scale-100"
      onClick={handleClick}
    >
      <TrashIcon className="w-5 fill-white text-red-500" />
    </button>
  );
}
