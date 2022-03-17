import React, { useEffect, useState } from "react";
import TodoToday from "../TodoToday.js";

import httpClient from "../axios";

export default function TodayTaskPage(props) {
  let view = props.view;

  const [tasks, setTasks] = useState([]);

  const sendData = (data) => {
    props.sendData(data);
    setTasks(tasks.map((t) => (t.id === data.id ? data : t)));
  };

  const deleteTask = (data) => {
    props.deleteTask(data);
    setTasks(tasks.filter((t) => t.id !== parseInt(data.id)));
  };

  useEffect(() => {
    httpClient.get(`/collection/today`).then((res) => {
      setTasks(res.data);
    });
  }, []);

  return (
    <ul
      className={`todo__items ${view === "open" ? "hide-done" : ""}`}
      id="todo__items"
    >
      {tasks.map((t, i) => (
        <TodoToday
          key={i}
          todo={t}
          sendData={sendData}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
