import { Component } from "react";

class InputForm extends Component {
  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("onSubmitHandler");
    this.props.onSubmit({});
  };

  render() {
    return (
      <div className="newTask">
        <form onSubmit={this.onSubmitHandler} className="input" name="task">
          <input
            className="newTask__form "
            type="text"
            name="title"
            placeholder="Enter task name"
          ></input>
          <input
            className="newTask__form"
            type="text"
            name="description"
            placeholder="Enter task description"
          ></input>
          <input className="newTask__date" type="date" name="due_date"></input>

          <button type="submit" className="newTask__btn">
            add
          </button>
        </form>
      </div>
    );
  }
}

export default InputForm;
