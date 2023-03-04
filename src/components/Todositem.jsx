import React, { useState } from "react";
import Axios from "axios";
const Todositem = ({ index, todo, todos, setTodos }) => {
    const [isChecked, setIsChecked] = useState(todo.completed)
  const onDeleteClick = () => {
    Axios.delete(
      `https://todos-api-node-mongo-express.vercel.app/todos/${todo._id}`
    );
    setTodos(todos.filter((todoItem) => todoItem._id !== todo._id));
  };
  const onCheck = () => {
    Axios.put(
      `https://todos-api-node-mongo-express.vercel.app/todos/${todo._id}`,
      { completed: !isChecked }
    );
    setIsChecked(!isChecked)
  };
  return (
    <div className="p-3 border-2 border-black flex justify-around flex-col items-center">
      {/* <div className="font-bold">{index + 1}</div> */}
      <div className="font-bold text-xl">
        {index + 1}.{todo.title}
      </div>
      <div className="text-lg">{todo.description}</div>
      <div className="flex">
        <h1 className="mx-3">Completed</h1>
        <input onChange={onCheck} type="checkbox" className="p-8" checked={isChecked}/>
      </div>
      <button
        onClick={onDeleteClick}
        className="my-2 mx-1 border px-2 py-1 hover:bg-gray-100 active:bg-gray-50 border-black"
      >
        Delete
      </button>
    </div>
  );
};

export default Todositem;
