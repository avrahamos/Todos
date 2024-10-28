import React from "react";
import Todo from "../models/tosoModel";
import moment from "moment";

interface Props {
  todo: Todo;
  setTodos: (todoFunc: (todos: Todo[]) => Todo[]) => void;
}
export const Item = ({ todo, setTodos }: Props) => {
  const handleCompletedChage = (check: boolean) => {
    setTodos((todos) => {
      const copy = [...todos];
      const td = copy.find((currTodo) => currTodo.id === todo.id);
      td!.completed = check;
      return copy;
    });
  };

  const handleDelete = () => {
    setTodos((todos) => todos.filter((currTodo) => currTodo.id !== todo.id));
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => handleCompletedChage(e.target.checked)}
      />
      <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.title}
      </p>
      <p>{moment(todo.created_at).fromNow()}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
