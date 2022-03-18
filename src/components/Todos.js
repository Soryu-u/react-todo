import React from "react";
import Todo from "./Todo.js";

export default function Todos(props) {
  let view = props.view;

  let sendData = (index) => {
    props.sendData(index);
  };
  let deleteTask = (index) => {
    props.deleteTask(index);
  };

  return (
    <ul
      className={`todo__items ${view === "open" ? "hide-done" : ""}`}
      id="todo__items"
    >
      {props.todo.map((t, i) => (
        <Todo key={i} todo={t} sendData={sendData} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}
