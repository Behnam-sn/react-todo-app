import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { itemUpdated } from "./itemSlice";

import { DeleteItemButton } from "./DeleteItemButton";

import type { Item as Props } from "./item.model";

export function Item(props: Props) {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [editMode, setEditMode] = useState(false);
  const [inpText, setInpText] = useState(props.text);

  const handleClick = () => {
    setEditMode(true);
  };

  const handleChange = (event: { target: { value: string } }) => {
    setInpText(event.target.value);
    dispatch(itemUpdated({ id: props.id, text: event.target.value }));
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Escape" || event.key === "Enter") {
      setEditMode(false);
    }
  };

  useEffect(() => {
    const closeEditMode = (event: { target: any }) => {
      if (
        editMode &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setEditMode(false);
      }
    };
    document.addEventListener("mousedown", closeEditMode);

    return () => {
      document.removeEventListener("mousedown", closeEditMode);
    };
  }, [props, editMode]);

  return (
    <div className="mb-2 h-10">
      {editMode ? (
        <input
          className="h-full w-full rounded-md bg-white px-2"
          type="text"
          autoFocus
          ref={inputRef}
          value={inpText}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      ) : (
        <div
          className="group relative flex h-full cursor-pointer items-center rounded-md bg-white px-2"
          onClick={handleClick}
        >
          <div>{props.text}</div>
          <DeleteItemButton id={props.id} />
        </div>
      )}
    </div>
  );
}
