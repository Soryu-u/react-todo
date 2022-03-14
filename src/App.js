import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./css/App.css";


import React, { useEffect, useState } from "react";
import httpClient from "./axios";

function App() {

  const [task, getTask] = useState([]);

  const createTask = async (createTask) => {
    let url = `/lists/5/tasks`

    let newTask = {
      ...createTask,
      list_id: 5,
      done: false,
    }

    console.log(newTask)

    await httpClient
      .post(url, newTask)
      .then((res) => {
        getTask([...task, res.data])
      });
  }

  const sendData = (data) => {
    let url = `/lists/${data.list_id}/tasks/${data.id}`
    httpClient
      .patch(url, { done: data.done })
      .then(()=>{
        getTask(task.map(t => t.id === data.id ? data : t))
      });
  }

  const deleteTask = (data) => {
      let url= `/lists/${data.list_id}/tasks/${data.id}`
      console.log('delete ' + url);
      httpClient
        .delete(url)
        .then(()=>{
          getTask(task.filter(t => t.id !== parseInt(data.id)))
        });
  }

  useEffect(() => {
    httpClient.get(`/tasks`).then((res) => {
      getTask(res.data);
    });
  }, []);


  return (
    <div className="App">
      <Header />
      <Sidebar createTask={createTask}/>
      <Main task={task} sendData={sendData} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
