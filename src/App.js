import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./css/App.css";

import React, { useEffect, useState } from "react";
import httpClient from "./axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const [lists, setLists] = useState([]);

  let [view, setView] = useState("all");

  useEffect(() => {
    httpClient.get(`/tasks`).then((res) => {
      setTasks(res.data);
    });
  }, []);

  useEffect(() => {
    httpClient.get(`/lists`).then((res) => {
      setLists(res.data);
    });
  }, []);

  const createTask = (createTask) => {
    let url = `/lists/5/tasks`;

    let newTask = {
      ...createTask,
      list_id: 5,
      done: false,
    };

    httpClient.post(url, newTask).then((res) => {
      setTasks([...tasks, res.data[0]]);
    });
  };

  const sendData = (data) => {
    let url = `/lists/${data.list_id}/tasks/${data.id}`;
    httpClient.patch(url, { done: data.done }).then(() => {
      setTasks(tasks.map((t) => (t.id === data.id ? data : t)));
    });
  };

  const deleteTask = (data) => {
    let url = `/lists/${data.list_id}/tasks/${data.id}`;
    httpClient.delete(url).then(() => {
      setTasks(tasks.filter((t) => t.id !== parseInt(data.id)));
    });
  };

  return (
    <div className="App">
      <Header />
      <Sidebar createTask={createTask} onViewChange={setView} lists={lists} />
      <Main
        task={tasks}
        sendData={sendData}
        deleteTask={deleteTask}
        view={view}
      />
    </div>
  );
}

export default App;
