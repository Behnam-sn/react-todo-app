import { useState, useEffect, useRef } from "react";

type Props = {
  text: string;
  updateFunction: (text: string) => void;
};

export function EditableTextBox(props: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [editMode, setEditMode] = useState(false);
  const [inpText, setInpText] = useState(props.text);

  const handleClick = () => {
    setEditMode(true);
  };

  const handleChange = (event: { target: { value: string } }) => {
    setInpText(event.target.value);
    props.updateFunction(event.target.value);
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

  if (editMode) {
    return (
      <input
        className="h-full w-full rounded-md bg-transparent px-1"
        type="text"
        autoFocus
        ref={inputRef}
        value={inpText}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    );
  } else {
    return (
      <div
        className="flex h-full cursor-pointer items-center rounded-md px-1"
        onClick={handleClick}
      >
        <div>{props.text}</div>
      </div>
    );
  }
}
