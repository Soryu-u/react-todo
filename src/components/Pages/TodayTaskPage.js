import React, { useEffect, useState } from "react";
import TodoToday from "../TodoToday.js";

import { getCollection, getData, deletedTask } from "../axiosRequests";

export default function TodayTaskPage(props) {
  let view = props.view;

  const [tasks, setTasks] = useState([]);

  const sendData = (data) => {
    getData(data).then(() => {
      setTasks(tasks.map((t) => (t.id === data.id ? data : t)));
    });
  };

  const deleteTask = (data) => {
    deletedTask(data).then(() => {
      setTasks(tasks.filter((t) => t.id !== parseInt(data.id)));
    });
  };

  useEffect(() => {
    getCollection().then((res) => {
      setTasks(res);
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
