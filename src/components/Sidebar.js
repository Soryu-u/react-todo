import "../css/sidebar.css";

import React, { useState } from "react";
import InputForm from "./InputForm";
import { Dashboard } from "./Dashboard";

function Sidebar(props) {
  let createTask = (data) => {
    props.createTask(data);
  };

  let [view, setView] = useState("all");

  let viewClickHandler = (v) => {
    setView(v.target.id);
    props.onViewChange(v.target.id);
  };

  return (
    <div className="sidebar">
      <div className="newTask">
        <InputForm createTask={createTask} />
      </div>
      <div className="switcher">
        <p>Show:</p>
        <button
          id="open"
          className={`route__btn ${view === "open" ? "active" : ""}`}
          onClick={viewClickHandler}
        >
          open tasks
        </button>
        <button
          id="all"
          className={`route__btn ${view === "all" ? "active" : ""}`}
          onClick={viewClickHandler}
        >
          all tasks
        </button>
      </div>
      <Dashboard lists={props.lists} />
    </div>
  );
}

export default Sidebar;
