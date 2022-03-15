import React from "react";
import Todo from "../Todo.js";

export default function TodayTaskPage(props) {
  let view = props.view;

  let isToday = (props) => {
    let currentDate = new Date().toDateString();
    let date = new Date(props.due_date).toDateString();

    return date === currentDate ? true : false;
  };

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
        .filter((task) => isToday(task))
        .map((t, i) => (
          <Todo key={i} todo={t} sendData={sendData} deleteTask={deleteTask} />
        ))}
    </ul>
  );
}
