import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./css/App.css";

import React, { useEffect, useState } from "react";
import httpClient from "./axios";

function App() {
  const [task, getTask] = useState([]);

  let [view, setView] = useState("all");

  useEffect(() => {
    httpClient.get(`/tasks`).then((res) => {
      getTask(res.data);
    });
  }, []);

  const createTask = async (createTask) => {
    let url = `/lists/5/tasks`;

    let newTask = {
      ...createTask,
      list_id: 5,
      done: false,
    };

    await httpClient.post(url, newTask).then((res) => {
      getTask([...task, res.data[0]]);
    });
  };

  const sendData = (data) => {
    let url = `/lists/${data.list_id}/tasks/${data.id}`;
    httpClient.patch(url, { done: data.done }).then(() => {
      getTask(task.map((t) => (t.id === data.id ? data : t)));
    });
  };

  const deleteTask = (data) => {
    let url = `/lists/${data.list_id}/tasks/${data.id}`;
    httpClient.delete(url).then(() => {
      getTask(task.filter((t) => t.id !== parseInt(data.id)));
    });
  };

  return (
    <div className="App">
      <Header />
      <Sidebar createTask={createTask} onViewChange={setView} />
      <Main
        task={task}
        sendData={sendData}
        deleteTask={deleteTask}
        view={view}
      />
    </div>
  );
}

export default App;
