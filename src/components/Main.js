import Todos from "./Todos";

import React, { useEffect, useState } from "react";
import httpClient from "../axios";


export default function Main() {

  const [task, getTask] = useState([]);

  const sendData = (data) => {
    let url = `/lists/${data.list_id}/tasks/${data.id}`
    httpClient
      .patch(url, { done: data.done })
      .then(()=>{
        getTask(task.map(t => t.id === data.id ? data : t))
      });
  }

  useEffect(() => {
    httpClient.get(`/tasks`).then((res) => {
      getTask(res.data);
    });
  }, []);


  return (
    <main className="main">
      <h2 className="main__head">Todo list</h2>
      <div scroll="yes" className="todo">
        <Todos todo={task} sendData={sendData}/>
      </div>
    </main>
  );
}
