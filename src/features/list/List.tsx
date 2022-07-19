import { useSelector, useDispatch } from "react-redux";
import { listUpdated } from "./listSlice";

import { Item } from "../item/Item";
import { AddItemButton } from "../item/AddItemButton";
import { DeleteListButton } from "./DeleteListButton";
import { EditableTextBox } from "../../components/EditableTextBox";

import type { RootState } from "../../app/store";
import type { List as Props } from "./list.model";

export function List(props: Props) {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.items);

  const filteredItems = items.filter((item) => {
    return item.listId === props.id;
  });

  const updateList = (title: string) => {
    dispatch(listUpdated({ id: props.id, title: title }));
  };

  return (
    <div className="mr-4 h-min w-52 rounded-md bg-gray-100 p-2">
      <div className="mb-2 h-10 text-lg">
        <EditableTextBox text={props.title} updateFunction={updateList} />
      </div>
      {filteredItems.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          text={item.text}
          listId={item.listId}
        />
      ))}
      <AddItemButton listId={props.id} />
      <DeleteListButton listId={props.id} />
    </div>
  );
}
