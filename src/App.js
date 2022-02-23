import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./css/App.css";

import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "http://10.177.1.5:8000/tasks";

function App() {
  const [task, getTask] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      getTask(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main todo={task} />
    </div>
  );
}

export default App;
