import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Todo from "./components/Todo";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main className="main">
        <h2 className="main__head">Todo list</h2>
        <div scroll="yes" className="todo">
          <ul className="todo__items" id="todo__items">
            <Todo />
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
