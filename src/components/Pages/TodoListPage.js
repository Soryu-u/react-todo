import React from "react";
import Todo from "../Todo.js";
import { useParams } from "react-router-dom";

export default function TodoListPage(props) {
  let { id } = useParams();
  let list_id = parseInt(id);

  let view = props.view;

  return (
    <ul
      className={`todo__items ${view === "open" ? "hide-done" : ""}`}
      id="todo__items"
    >
      {props.task
        .filter((task) => task.list_id === list_id)
        .map((t, i) => (
          <Todo
            key={i}
            todo={t}
            sendData={props.sendData}
            deleteTask={props.deleteTask}
          />
        ))}
    </ul>
  );
}
