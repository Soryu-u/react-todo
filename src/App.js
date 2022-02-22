import { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./css/App.css";

class App extends Component {
  tasks = [
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
  ];

  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Main todo={this.tasks} />
      </div>
    );
  }
}

export default App;
