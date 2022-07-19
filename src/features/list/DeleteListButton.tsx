import { useDispatch } from "react-redux";

import { listDeleted } from "./listSlice";

import { TrashIcon } from "../../assets/icons/TrashIcon";

interface Props {
  listId: string;
}

export function DeleteListButton(props: Props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(listDeleted(props.listId));
  };

  return (
    <div className="flex justify-end">
      <button className="p-1" onClick={handleClick}>
        <TrashIcon className="w-5 fill-white text-red-500" />
      </button>
    </div>
  );
}
