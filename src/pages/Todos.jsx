import React, { useState, useEffect } from "react";
import Axios from "axios";
import Loading from "./Loading";
import Todositem from "../components/Todositem";
import Textarea from "../components/Textarea";

const Todos = () => {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    Axios.get("https://todos-api-node-mongo-express.vercel.app/todos").then(
      (res) => setTodos(res.data)
    );
    // console.log(todos);
  }, []);
  if (!todos) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center px-10">
      <h1 className="my-2 font-bold text-2xl">MyTodo</h1>
      <Textarea todos={todos} setTodos={setTodos} />
      <div className="flex justify-around w-full items-center px-10 flex-wrap">
        {todos &&
          todos.map((todo, index) => (
            <Todositem
              key={todo.id}
              index={index}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
      </div>
    </div>
  );
};

export default Todos;
