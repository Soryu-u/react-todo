import "../css/sidebar.css";

import React from "react";
import InputForm from "./InputForm";

function Sidebar(props) {

  let createTask = (data) => {
    props.createTask(data)
  }

  return (
    <div className="sidebar">
      <div className="newTask">
        <InputForm createTask={createTask}/>
      </div>
      <div className="routing">
        <p>Show:</p>
        <button id="open" className="route__btn">
          open tasks
        </button>
        <button id="all" className="route__btn active">
          all tasks
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
