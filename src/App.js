import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./css/App.css";

import React, { useEffect, useState } from "react";
import httpClient from "./components/axios";
import { Route, Routes } from "react-router-dom";
import TodayTaskPage from "./components/Pages/TodayTaskPage";
import TodoListPage from "./components/Pages/TodoListPage";
import Todos from "./components/Todos";

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

  const createTask = (data) => {
    let url = `/lists/${data.list_id}/tasks`;

    let newTask = {
      ...data,
      done: false,
    };

    httpClient.post(url, newTask).then((res) => {
      setTasks([...tasks, res.data]);
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
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Sidebar
                createTask={createTask}
                onViewChange={setView}
                lists={lists}
              />
              <Main />
            </div>
          }
        >
          <Route
            path="/lists/:id"
            element={
              <TodoListPage
                task={tasks}
                sendData={sendData}
                deleteTask={deleteTask}
                view={view}
              />
            }
          />
          <Route
            path="/"
            element={
              <Todos
                todo={tasks}
                sendData={sendData}
                deleteTask={deleteTask}
                view={view}
              />
            }
          />
          <Route
            path="/today"
            element={
              <TodayTaskPage
                task={tasks}
                sendData={sendData}
                deleteTask={deleteTask}
                view={view}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
