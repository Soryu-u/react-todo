import { Component } from "react";
import "../css/sidebar.css";
// import InputForm from "./InputForm";

class Sidebar extends Component {
  state = {};

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      title: "",
      description: "",
      due_date: "",
    });
  };

  onChange = (event) => {
    event.preventDefault();
    let value = event.target.value;

    this.setState({
      [event.target.name]: value,
      [event.target.name]: value,
      [event.target.name]: value,
    });
  };

  render() {
    return (
      <div className="sidebar">
        <div className="newTask">
          <form onSubmit={this.onSubmitHandler} className="input" name="task">
            <input
              className="newTask__form "
              type="text"
              name="title"
              placeholder="Enter task name"
              onChange={this.onChange}
              value={this.state.title}
            />
            <input
              className="newTask__form"
              type="text"
              name="description"
              placeholder="Enter task description"
              onChange={this.onChange}
              value={this.state.description}
            />
            <input
              className="newTask__date"
              type="date"
              name="due_date"
              onChange={this.onChange}
              value={this.state.due_date}
            />

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
}

export default Sidebar;
