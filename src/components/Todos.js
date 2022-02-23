import React from "react";
import Todo from "./Todo.js";

export default function Todos(props) {
  return (
    <ul className="todo__items" id="todo__items">
      {props.todo.map((t) => (
        <Todo key={t.id} todo={t} />
      ))}
    </ul>
  );
}
