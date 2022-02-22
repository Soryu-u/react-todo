import React from "react";

import Todos from "./Todos";

export default function Main(props) {
  return (
    <main className="main">
      <h2 className="main__head">Todo list</h2>
      <div scroll="yes" className="todo">
        <Todos todo={props.todo} />
      </div>
    </main>
  );
}
