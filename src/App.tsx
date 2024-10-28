import React, { useState } from "react";
import { Add } from "./componenets/Add";
import { List } from "./componenets/List";
import Todo from "./models/tosoModel";

export default function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
  return (
    <div className="app">
      <Add />
      <List />
    </div>
  );
}
