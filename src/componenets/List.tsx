import React from "react";
import Todo from "../models/tosoModel";
import { Item } from "./Item";

interface Props {
  todos: Todo[];
  setTodos: (todoFunc: (todos: Todo[]) => Todo[]) => void;
}
export default function List({ todos, setTodos }: Props) {
  return (
    <div className="list card">
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </div>
  );
}
