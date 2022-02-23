import "../css/sidebar.css";

import React from "react";
// import InputForm from "./InputForm";

function Sidebar() {
  const [task, getTask] = React.useState([]);

  function onSubmitHandler() {
    getTask({
      title: "",
      description: "",
      due_date: "",
    });
  }

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
        <form className="input" name="task">
          <input
            className="newTask__form "
            type="text"
            name="title"
            placeholder="Enter task name"
          />
          <input
            className="newTask__form"
            type="text"
            name="description"
            placeholder="Enter task description"
          />
          <input className="newTask__date" type="date" name="due_date" />

          <button type="submit" className="newTask__btn">
            add
          </button>
        </form>
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
