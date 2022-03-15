import React from "react";
import Todo from "../Todo.js";
import { useParams } from "react-router-dom";

export default function TodoListPage(props) {
  let { id } = useParams();
  let list_id = parseInt(id);

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
      {props.todo
        .filter((task) => task.list_id === list_id)
        .map((t, i) => (
          <Todo key={i} todo={t} sendData={sendData} deleteTask={deleteTask} />
        ))}
    </ul>
  );
}