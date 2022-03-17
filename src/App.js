import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./css/App.css";

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import TodayTaskPage from "./components/Pages/TodayTaskPage";
import TodoListPage from "./components/Pages/TodoListPage";
import Todos from "./components/Todos";
import {
  getTasks,
  getData,
  deletedTask,
  postTask,
  getLists,
} from "./components/axiosRequests";

function App() {
  const [tasks, setTasks] = useState([]);
  const [lists, setLists] = useState([]);

  let [view, setView] = useState("all");

  useEffect(() => {
    getTasks().then((res) => {
      setTasks(res);
    });
  }, []);

  useEffect(() => {
    getLists().then((res) => {
      setLists(res);
    });
  }, []);

  const createTask = (data) => {
    let newTask = {
      ...data,
      done: false,
    };

    postTask(newTask).then((res) => {
      setTasks([...tasks, res]);
    });
  };

  const sendData = (data) => {
    getData(data).then((res) => {
      setTasks(tasks.map((t) => (t.id === res.id ? res : t)));
    });
  };

  const deleteTask = (data) => {
    deletedTask(data).then(() => {
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
          <Route path="/today" element={<TodayTaskPage view={view} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
