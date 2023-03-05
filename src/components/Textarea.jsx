import React, { useState, useEffect } from "react";
import Axios from "axios";
const Textarea = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [added, setAdded] = useState(false);
  useEffect(() => {
    Axios.get("https://todos-api-node-mongo-express.vercel.app/todos").then(
      (res) => setTodos(res.data)
    );
    setAdded(false);
    // console.log("inside update");
  }, [added]);

  const onAddClick = () => {
    if (title !== "" && desc !== "") {
      Axios.post("https://todos-api-node-mongo-express.vercel.app/todos", {
        title: title,
        description: desc,
        completed: false,
      });
      setAdded(true);
    }
  };

  return (
    <div className="flex justify-center items-center w-full px-20 my-5 flex-col">
      <input
        type="text"
        className="px-3 hover:bg-gray-100 py-5 w-full border-2 border-black"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full px-3 py-5 hover:bg-gray-100 mt-5 h-[100px] border-2 border-black"
        placeholder="Desc"
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <button
        onClick={onAddClick}
        className="w-full my-5 px-3 py-5 border-2 border-black hover:bg-gray-100 active:bg-gray-50"
      >
        Add Task
      </button>
    </div>
  );
};

export default Textarea;
