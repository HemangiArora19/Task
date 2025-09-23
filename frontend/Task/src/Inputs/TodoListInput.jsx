import React, { useState } from "react";
import { HiMiniPlus, HiOutlineTrash } from "react-icons/hi2";

const TodoListInput = ({ todoList, setTodoList }) => {
  const [option, setOption] = useState("");

  // Function to handle adding an option
  const handleAddOption = () => {
    if (option.trim()) {
      setTodoList([...todoList, option.trim()]);
      setOption("");
    }
  };

  // Function to handle deleting an option
  const handleDeleteOption = (index) => {
    const updatedArr = todoList.filter((_, idx) => idx !== index);
    setTodoList(updatedArr);
  };

  return (
    <div className="p-4">
      {/* Render Todo List */}
      {todoList.map((item, index) => (
        <div
          key={item}
          className="flex items-center justify-between border p-2 rounded mb-2"
        >
          <p className="flex items-center gap-2">
            <span className="font-bold">
              {index < 9 ? `0${index + 1}` : index + 1}.
            </span>
            {item}
          </p>
          <button
            onClick={() => handleDeleteOption(index)}
            className="text-red-500 hover:text-red-700"
          >
            <HiOutlineTrash />
          </button>
        </div>
      ))}

      {/* Input for adding new tasks */}
      <div className="flex items-center gap-2 mt-4">
        <input
          type="text"
          placeholder="Enter Task"
          value={option}
          onChange={({ target }) => setOption(target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddOption()} // Press Enter to add
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleAddOption}
          className="bg-blue-500 text-white px-3 py-2 rounded flex items-center gap-1 hover:bg-blue-600"
        >
          <HiMiniPlus /> Add
        </button>
      </div>
    </div>
  );
};

export default TodoListInput;
