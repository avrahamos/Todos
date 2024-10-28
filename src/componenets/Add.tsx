import React, { useState } from "react";
import Todo from "../models/tosoModel";

interface Props {
  setTodos: (todoFunc: (todos: Todo[]) => Todo[]) => void;
}

export const Add = ({ setTodos }: Props) => {
  const [title, setTitle] = useState("");

  const addTodo = () => {
    const todo = new Todo(title);
    setTodos((todos) => [...todos, todo]);
    setTitle("");
  };
  return (
    <div className="add card">
      <input
        type="text"
        placeholder="your title here please"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};
