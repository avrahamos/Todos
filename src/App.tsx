import React, { useState } from "react";
import { Add } from "./componenets/Add";
import List from "./componenets/List";
import Todo from "./models/tosoModel";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div className="app">
      <Add setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}
