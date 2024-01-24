import React, { useContext, useState } from "react";
import { addTodo } from "../../service/todo.service";
import { TodoContext } from "../../context/TodoContext";

const Form = () => {
  const [text, setText] = useState("");
  const { setTodo } = useContext(TodoContext);
  const handleForm = (e) => {
    e.preventDefault();
    if (text.trim() == "") {
      alert("Please enter vaild text");
    } else {
      const newData = {
        task: text,
        isDone: false,
        id: Date.now(),
        isEditing: false,
      };
      addTodo("todo", newData);
      setText("");
      setTodo((prev) => [...prev, newData]);
    }
  };
  
  return (
    <form onSubmit={(e) => handleForm(e)} className="flex mb-5">
      <input
        className="flex-grow border border-neutral-700 h-14 px-3 focus-visible:outline-none"
        type="text"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="textInput"
      />
      <button
        id="addBtn"
        className="h-14 w-14 bg-neutral-700 text-white flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 stroke-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </form>
  );
};

export default Form;
