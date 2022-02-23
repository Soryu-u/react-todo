import "../css/sidebar.css";

import React from "react";
import InputForm from "./InputForm";

function Sidebar() {
  const [task, getTask] = React.useState([]);

  function onChange(event) {
    let value = event.target.value;

    getTask({
      id: 3,
      [event.target.name]: value,
      [event.target.name]: value,
      [event.target.name]: value,
      done: false,
    });
  }

  return (
    <div className="sidebar">
      <div className="newTask">
        <InputForm />
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
