import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <main className="main">
      <h2 className="main__head">Todo list</h2>
      <div scroll="yes" className="todo">
        <Outlet />
      </div>
    </main>
  );
}
