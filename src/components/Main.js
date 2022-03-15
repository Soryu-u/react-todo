import Todos from "./Todos";

import { Routes, Route } from "react-router-dom";
import TodayTaskPage from "./Pages/TodayTaskPage";
import TodoListPage from "./Pages/TodoListPage";

export default function Main(props) {
  let sendData = (index) => {
    props.sendData(index);
  };
  let deleteTask = (index) => {
    props.deleteTask(index);
  };

  return (
    <main className="main">
      <h2 className="main__head">Todo list</h2>
      <div scroll="yes" className="todo">
        <Routes>
          <Route
            path="/"
            element={
              <Todos
                todo={props.task}
                sendData={sendData}
                deleteTask={deleteTask}
                view={props.view}
              />
            }
          />
          <Route
            path="/lists/:id"
            element={
              <TodoListPage
                todo={props.task}
                sendData={sendData}
                deleteTask={deleteTask}
                view={props.view}
              />
            }
          />
          <Route
            path="/today"
            element={
              <TodayTaskPage
                todo={props.task}
                sendData={sendData}
                deleteTask={deleteTask}
                view={props.view}
              />
            }
          />
        </Routes>
      </div>
    </main>
  );
}
