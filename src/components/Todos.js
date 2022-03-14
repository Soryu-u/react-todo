import React from "react";
import Todo from "./Todo.js";

export default function Todos(props) {

  let sendData = (index) =>{
    props.sendData(index)
  }


  return (
    <ul className="todo__items" id="todo__items">
      {props.todo.map((t) => (
        <Todo key={t.id} todo={t} sendData={sendData}/>
      ))}
    </ul>
  );
}
