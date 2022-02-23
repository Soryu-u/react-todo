import { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./css/App.css";

class App extends Component {
  state = {
    tasks: [
      {
        title: "task",
        description: "Description",
        due_date: "2022-02-22",
      },
      {
        title: "task 2",
        description: "Description",
        due_date: "2022-02-22",
      },
    ],
  };

  addTodo = (value) => {
    this.setState({ tasks: [...this.state.tasks, value] });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar onSubmit={this.addTodo} />
        <Main todo={this.state.tasks} />
      </div>
    );
  }
}

export default App;
