import { Component } from "react";
import "../css/sidebar.css";
import InputForm from "./InputForm";

class Sidebar extends Component {
  addTodo = (todo) => {
    console.log(todo);
  };

  render() {
    return (
      <div className="sidebar">
        <InputForm onSubmit={this.addTodo} />
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
}

export default Sidebar;
